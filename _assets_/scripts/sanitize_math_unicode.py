from __future__ import annotations

import re
import sys
from pathlib import Path


MATH_PATTERN = re.compile(r"(?<!\\)\$\$(.+?)(?<!\\)\$\$|(?<!\\)\$(.+?)(?<!\\)\$", re.S)
TEXT_PATTERN = re.compile(r"\\text\s*\{([^{}]*)\}")


UNICODE_REPLACEMENTS = {
    "≤": r"\le",
    "≥": r"\ge",
    "≠": r"\ne",
    "∈": r"\in",
    "∉": r"\notin",
    "→": r"\to",
    "⇒": r"\Rightarrow",
    "Σ": r"\Sigma",
    "Π": r"\Pi",
    "π": r"\pi",
    "ε": r"\varepsilon",
    "λ": r"\lambda",
    "μ": r"\mu",
    "σ": r"\sigma",
    "ρ": r"\rho",
    "θ": r"\theta",
    "α": r"\alpha",
    "β": r"\beta",
    "Φ": r"\Phi",
    "φ": r"\phi",
    "×": r"\cdot",
    "−": "-",
    "—": "-",
    "–": "-",
    "，": ",",
    "。": ".",
    "；": ";",
    "：": ":",
    "（": "(",
    "）": ")",
    "【": "[",
    "】": "]",
    "“": '"',
    "”": '"',
    "‘": "'",
    "’": "'",
    "　": " ",
    "＝": "=",
    "～": r"\sim ",
}


TEXT_EXACT_REPLACEMENTS = {
    "其他": "otherwise",
    "比特": "bits",
    "是": "is",
    "时": "case",
    "原式": "original",
    "展开": "expand",
    "整理": "simplify",
    "代入": "substitute",
    "对称": "symmetric",
    "配方": "complete square",
    "投影": "projection",
    "积分": "integrate",
    "移项": "rearrange",
    "分离变量": "separate variables",
    "标准化": "standardize",
    "去绝对值": "remove abs",
    "去括号": "expand",
    "完全平方": "perfect square",
    "恒等变形": "algebra",
    "幂级数展开": "power series",
    "交叉相乘": "cross-multiply",
    "提取系数": "factor constants",
    "提取公因式": "factor common term",
    "线性相关": "linearly dependent",
    "椭圆": "ellipse",
    "曲面": "surface",
    "球面": "sphere",
    "放缩": "bound",
    "牛莱": "Newton-Leibniz",
    "分部积分": "by parts",
    "行变化": "row ops",
}


TEXT_PARTIAL_REPLACEMENTS = [
    ("其他", "otherwise"),
    ("概率为零", "prob=0"),
    ("绝对值不可能小于一个负数", "impossible"),
    ("第二类曲面积分", "type-II surface integral"),
    ("函数积分和求导后,奇偶性会发生改变", "integrals/derivatives may change parity"),
    ("函数积分和求导后，奇偶性会发生改变", "integrals/derivatives may change parity"),
    ("的一个原函数", "an antiderivative"),
    ("的期望", "mean"),
    ("和方差", "variance"),
    ("正态分布的线性组合也服从正态", "linear combo is normal"),
    ("用标准化求正态分布的概率", "standardize"),
    ("任意两个向量均线性无关", "every pair is independent"),
    ("线性相关", "linearly dependent"),
    ("的上侧", "upper side"),
    ("画图", "sketch"),
    ("平方为正数", "square is nonnegative"),
    ("椭圆标准形式", "ellipse form"),
    ("不等式三端同时标准化", "standardize all sides"),
    ("将", "set "),
    ("换成", "as "),
    ("提出", "factor "),
    ("拆出", "split "),
    ("去掉绝对值", "remove abs"),
    ("对称性", "symmetry"),
    ("代入上下限", "substitute bounds"),
    ("统一", "rewrite"),
    ("提取", "factor"),
    ("因式分解", "factorize"),
    ("按第一行展开", "expand first row"),
    ("合并整理", "combine"),
    ("投影垂直于", "project to "),
    ("对", "in "),
    ("积分", "integrate"),
]


RAW_MATH_REPLACEMENTS = [
    (r"\\text\s*\{\s*其他\s*\}", r"\\text{otherwise}"),
    (r"\\text\s*\{\s*是\s*\}", r"\\text{is}"),
    (r"\\text\s*\{\s*时\s*\}", r"\\text{case}"),
    (r"其他", "otherwise"),
]


CJK_RE = re.compile(r"[\u4e00-\u9fff\u3040-\u30ff]")


def sanitize_text_content(content: str) -> str:
    stripped = content.strip()
    if stripped in TEXT_EXACT_REPLACEMENTS:
        return TEXT_EXACT_REPLACEMENTS[stripped]
    result = content
    for old, new in TEXT_PARTIAL_REPLACEMENTS:
        result = result.replace(old, new)
    result = result.replace("，", ",").replace("。", ".").replace("：", ":")
    result = result.replace("（", "(").replace("）", ")")
    result = re.sub(r"\s+", " ", result).strip()
    if CJK_RE.search(result):
        return "note"
    return result or "note"


def sanitize_math_segment(segment: str) -> str:
    result = segment
    for old, new in UNICODE_REPLACEMENTS.items():
        result = result.replace(old, new)
    for pattern, replacement in RAW_MATH_REPLACEMENTS:
        result = re.sub(pattern, replacement, result)

    def text_repl(match: re.Match[str]) -> str:
        return rf"\text{{{sanitize_text_content(match.group(1))}}}"

    result = TEXT_PATTERN.sub(text_repl, result)
    result = re.sub(r"(?<!\\)\\xrightarrow\[\]\{\}", r"\\to", result)
    result = re.sub(r"(?<!\\)\\xlongequal\[\]\{\}", "=", result)
    result = re.sub(r"(?<!\\)\\xRightarrow\{\}", r"\\Rightarrow", result)
    return result


def sanitize_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")

    def repl(match: re.Match[str]) -> str:
        full = match.group(0)
        seg = match.group(1) if match.group(1) is not None else match.group(2)
        new_seg = sanitize_math_segment(seg)
        if full.startswith("$$"):
            return f"$${new_seg}$$"
        return f"${new_seg}$"

    updated = MATH_PATTERN.sub(repl, original)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: sanitize_math_unicode.py <path> [<path> ...]")
        return 1
    changed = 0
    for raw in sys.argv[1:]:
        base = Path(raw)
        paths = [base] if base.is_file() else sorted(base.rglob("*.md"))
        for path in paths:
            if sanitize_file(path):
                changed += 1
                print(path)
    print(f"changed={changed}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())