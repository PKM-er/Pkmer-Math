#!/usr/bin/env python3
# -*- coding: utf-8 -*-

r"""
检测并修复 Markdown 数学公式中的异常 Unicode 字符。

目标：
1. 扫描 `$...$`、`$$...$$`、`\(...\)`、`\[...\]` 中的异常字符。
2. 安全替换常见 OCR / 输入法问题：
   - 非 ASCII 数字 -> ASCII 数字
   - 全角 / 阿拉伯标点 -> ASCII 或 TeX 命令
   - 中文文本 -> `\text{中文}`
3. 对无法安全自动修复的字符保留并报告。

默认行为：仅检测，不改文件。
使用 `--write` 才会写回文件。

默认只处理高风险脏字符，不处理纯风格差异。
例如 `N(0, 1)` 与 `N(0,1)`、`(1, 2)` 与 `(1,2)` 默认都不会报。
如果确实想统一这类写法，可以加 `--aggressive`。
"""

from __future__ import annotations

import argparse
import re
import sys
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Iterable, List, Sequence, Tuple


MATH_PATTERN = re.compile(
    r"(\$\$[\s\S]+?\$\$|\$(?:\\.|[^$\\\n])+\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\])",
    re.MULTILINE,
)

TEXT_MACRO_PATTERN = re.compile(r"\\(?:text|mbox|mathrm|operatorname)\s*\{[^{}]*\}")
CJK_PATTERN = re.compile(r"[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]+")

SAFE_CHAR_MAP = {
    "（": "(",
    "）": ")",
    "［": "[",
    "］": "]",
    "｛": "{",
    "｝": "}",
    "，": ",",
    "、": ",",
    "：": ":",
    "；": ";",
    "。": ".",
    "．": ".",
    "！": "!",
    "？": "?",
    "＋": "+",
    "－": "-",
    "—": "-",
    "–": "-",
    "−": "-",
    "＝": "=",
    "＜": "<",
    "＞": ">",
    "｜": "|",
    "¦": "|",
    "／": "/",
    "％": r"\%",
    "×": r"\times",
    "÷": r"\div",
    "·": r"\cdot",
    "•": r"\cdot",
    "∙": r"\cdot",
    "⋅": r"\cdot",
    "∶": ":",
    "′": "'",
    "″": "''",
    "“": '"',
    "”": '"',
    "‘": "'",
    "’": "'",
    "٫": ".",
    "٬": ",",
    "﹣": "-",
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
}

AGGRESSIVE_SPACE_PATTERNS: list[tuple[re.Pattern[str], str | Callable[[re.Match[str]], str]]] = [
    (re.compile(r"(?<=\d)\s*[.,]\s*(?=\d)"), lambda m: m.group(0).strip()),
    (re.compile(r"(?<=\d)\s+(?=\d)"), ""),
]


@dataclass
class Issue:
    file_path: Path
    line_number: int
    kind: str
    original: str
    suggested: str
    snippet: str


@dataclass
class ProcessResult:
    changed: bool
    content: str
    issues: List[Issue]


def iter_markdown_files(paths: Sequence[Path]) -> Iterable[Path]:
    for path in paths:
        if not path.exists():
            print(f"警告: 路径不存在，跳过: {path}", file=sys.stderr)
            continue
        if path.is_file() and path.suffix.lower() == ".md":
            yield path
            continue
        if path.is_dir():
            for md_file in path.rglob("*.md"):
                yield md_file


def compute_line_number(text: str, index: int) -> int:
    return text.count("\n", 0, index) + 1


def snippet_from_math(math_text: str) -> str:
    compact = re.sub(r"\s+", " ", math_text.strip())
    return compact[:120] + ("..." if len(compact) > 120 else "")


def normalize_unicode_digit(char: str) -> str | None:
    if char in SAFE_CHAR_MAP:
        return SAFE_CHAR_MAP[char]

    try:
        return str(unicodedata.decimal(char))
    except (TypeError, ValueError):
        pass

    try:
        numeric_value = unicodedata.numeric(char)
        if float(numeric_value).is_integer() and 0 <= int(numeric_value) <= 9:
            return str(int(numeric_value))
    except (TypeError, ValueError):
        pass

    return None


def protect_text_macros(content: str) -> Tuple[str, List[str]]:
    placeholders: List[str] = []

    def replace(match: re.Match[str]) -> str:
        placeholders.append(match.group(0))
        return f"@@TEXT_PLACEHOLDER_{len(placeholders) - 1}@@"

    return TEXT_MACRO_PATTERN.sub(replace, content), placeholders


def restore_text_macros(content: str, placeholders: Sequence[str]) -> str:
    for index, item in enumerate(placeholders):
        content = content.replace(f"@@TEXT_PLACEHOLDER_{index}@@", item)
    return content


def wrap_cjk_runs(content: str) -> str:
    return CJK_PATTERN.sub(lambda match: rf"\text{{{match.group(0)}}}", content)


def contains_cjk(text: str) -> bool:
    return bool(CJK_PATTERN.search(text))


def contains_non_ascii_digit(text: str) -> bool:
    for char in text:
        if ord(char) < 128:
            continue
        replacement = normalize_unicode_digit(char)
        if replacement is not None and replacement != char:
            return True
    return False


def contains_mapped_punctuation(text: str) -> bool:
    return any(char in SAFE_CHAR_MAP for char in text)


def strip_math_delimiter(math_text: str) -> str:
    if math_text.startswith("$$") and math_text.endswith("$$"):
        return math_text[2:-2]
    if math_text.startswith("$") and math_text.endswith("$"):
        return math_text[1:-1]
    if math_text.startswith(r"\(") and math_text.endswith(r"\)"):
        return math_text[2:-2]
    if math_text.startswith(r"\[") and math_text.endswith(r"\]"):
        return math_text[2:-2]
    return math_text


def rebuild_math(delimited_math: str, new_body: str) -> str:
    if delimited_math.startswith("$$") and delimited_math.endswith("$$"):
        return f"$${new_body}$$"
    if delimited_math.startswith("$") and delimited_math.endswith("$"):
        return f"${new_body}$"
    if delimited_math.startswith(r"\(") and delimited_math.endswith(r"\)"):
        return rf"\({new_body}\)"
    if delimited_math.startswith(r"\[") and delimited_math.endswith(r"\]"):
        return rf"\[{new_body}\]"
    return new_body


def normalize_math_body(content: str, aggressive: bool = False) -> str:
    protected, placeholders = protect_text_macros(content)

    normalized_chars: List[str] = []
    for char in protected:
        replacement = normalize_unicode_digit(char)
        normalized_chars.append(replacement if replacement is not None else char)
    normalized = "".join(normalized_chars)

    normalized = "".join(SAFE_CHAR_MAP.get(char, char) for char in normalized)
    normalized = wrap_cjk_runs(normalized)
    normalized = re.sub(r"\\times\s*\\times", r"\\times", normalized)

    if aggressive:
        for pattern, replacement in AGGRESSIVE_SPACE_PATTERNS:
            normalized = pattern.sub(replacement, normalized)

    return restore_text_macros(normalized, placeholders)


def analyze_difference(file_path: Path, original_math: str, new_math: str, start_index: int, full_text: str) -> List[Issue]:
    if original_math == new_math:
        return []

    original_body = strip_math_delimiter(original_math)
    line_number = compute_line_number(full_text, start_index)
    snippet = snippet_from_math(original_math)
    issues: List[Issue] = []

    if contains_cjk(original_body):
        issues.append(Issue(file_path, line_number, "中文文本", original_math, new_math, snippet))

    if contains_non_ascii_digit(original_body):
        issues.append(Issue(file_path, line_number, "Unicode 数字", original_math, new_math, snippet))

    if contains_mapped_punctuation(original_body):
        issues.append(Issue(file_path, line_number, "全角/特殊符号", original_math, new_math, snippet))

    return issues


def process_content(file_path: Path, content: str, aggressive: bool = False) -> ProcessResult:
    issues: List[Issue] = []
    changed = False
    parts: List[str] = []
    last_end = 0

    for match in MATH_PATTERN.finditer(content):
        parts.append(content[last_end:match.start()])
        original_math = match.group(0)
        normalized_body = normalize_math_body(strip_math_delimiter(original_math), aggressive=aggressive)
        normalized_math = rebuild_math(original_math, normalized_body)

        issues.extend(analyze_difference(file_path, original_math, normalized_math, match.start(), content))
        if normalized_math != original_math:
            changed = True

        parts.append(normalized_math)
        last_end = match.end()

    parts.append(content[last_end:])
    return ProcessResult(changed=changed, content="".join(parts), issues=issues)


def print_issue(issue: Issue) -> None:
    print(f"[{issue.kind}] {issue.file_path}:{issue.line_number}")
    print(f"  片段: {issue.snippet}")
    if issue.original != issue.suggested:
        preview = issue.suggested[:160]
        suffix = "..." if len(issue.suggested) > 160 else ""
        print(f"  建议: {preview}{suffix}")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="检测并修复 Markdown 数学公式中的异常 Unicode 字符")
    parser.add_argument(
        "paths",
        nargs="*",
        help="要扫描的文件或目录；默认扫描 概率论/ 线性代数/ 微积分/",
    )
    parser.add_argument("--write", action="store_true", help="写回文件")
    parser.add_argument("--quiet", action="store_true", help="仅输出汇总")
    parser.add_argument(
        "--aggressive",
        action="store_true",
        help="启用激进归一化：额外压缩数字附近空格与部分标点空格，可能产生更多纯风格改动",
    )
    return parser.parse_args()


def main() -> int:
    repo_root = Path(__file__).resolve().parents[2]
    args = parse_args()

    if args.paths:
        targets = [Path(path) if Path(path).is_absolute() else repo_root / path for path in args.paths]
    else:
        targets = [repo_root / name for name in ("概率论", "线性代数", "微积分")]

    markdown_files = sorted(set(iter_markdown_files(targets)))
    if not markdown_files:
        print("未找到任何 Markdown 文件")
        return 1

    total_issues = 0
    changed_files = 0

    for file_path in markdown_files:
        content = file_path.read_text(encoding="utf-8")
        result = process_content(file_path, content, aggressive=args.aggressive)
        if not result.issues:
            continue

        total_issues += len(result.issues)
        if not args.quiet:
            for issue in result.issues:
                print_issue(issue)

        if args.write and result.changed:
            file_path.write_text(result.content, encoding="utf-8")
            changed_files += 1
            if not args.quiet:
                print(f"  已写回: {file_path}")
                print()

    print("\n扫描完成")
    print(f"- 扫描文件数: {len(markdown_files)}")
    print(f"- 发现问题数: {total_issues}")
    print(f"- 写回文件数: {changed_files if args.write else 0}")
    print(f"- 模式: {'写入' if args.write else '只读检测'}")
    print(f"- 归一化级别: {'激进' if args.aggressive else '保守'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
