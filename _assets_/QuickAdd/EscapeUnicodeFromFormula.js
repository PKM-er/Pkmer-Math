/**
 * 通用数学公式文本处理框架
 * ✅ 适用于 QuickAdd Macro
 * ✅ 自动拆分内联数学公式中的非 ASCII 字符
 * ✅ 保持数学公式的结构完整
 * ✅ 替换后保持原有选中区域
 */
async function processSelectedText(transformFunctions) {
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("No file is currently open.");
        return;
    }

    // 允许的文件类型
    const validExtensions = ["md", "canvas"];
    if (!validExtensions.includes(activeFile.extension)) {
        new Notice("The active file is not a Markdown or Canvas file.");
        return;
    }

    // 获取当前活动的编辑器
    const editor = app.workspace.activeEditor?.editor;
    if (!editor) {
        new Notice("No active editor found.");
        return;
    }

    // 确保编辑器处于编辑模式，并获取最新选区
    editor.focus();
    let selection = editor.getSelection();
    if (!selection || selection.trim() === "") {
        new Notice("No text is selected.");
        return;
    }

    // 记录原始选区的起始位置
    const startPos = editor.getCursor("from");

    // 依次执行所有传入的文本转换函数
    let modifiedText = selection;
    for (const transformFunction of transformFunctions) {
        modifiedText = transformFunction(modifiedText);
    }

    // 替换选中的文本
    editor.replaceSelection(modifiedText);

    // 计算新选区：以 startPos 为起点，根据替换后文本内容计算结束位置
    const lines = modifiedText.split("\n");
    let newEndPos;
    if (lines.length === 1) {
        newEndPos = { line: startPos.line, ch: startPos.ch + lines[0].length };
    } else {
        newEndPos = { line: startPos.line + lines.length - 1, ch: lines[lines.length - 1].length };
    }

    // 恢复选区
    editor.setSelection(startPos, newEndPos);
}

/**
 * splitMathContent
 * 将数学公式中顶层（不在括号内）的汉字拆分出来，使其脱离 math 环境，
 * 同时正确处理 \text{} 和空的花括号 {}。
 * 处理结果为：math 部分保持原样，顶层汉字直接输出文本。
 */
function splitMathContent(content) {
    let segments = [];
    let currentSegment = "";
    let currentType = "math";
    let depth = 0;
    let i = 0;
    // 判断是否为汉字（CJK 范围）
    const isChinese = (ch) => /[\u4E00-\u9FFF]/.test(ch);
    const flushSegment = () => {
        if (currentSegment) {
            segments.push({ type: currentType, text: currentSegment });
            currentSegment = "";
        }
    };
    while (i < content.length) {
        const ch = content[i];
        // 处理 \text{...} 命令
        if (content.startsWith("\\text{", i)) {
            flushSegment();
            i += 6; // 跳过 "\text{"
            let textContent = "";
            let braceDepth = 1;
            while (i < content.length && braceDepth > 0) {
                if (content[i] === '{') braceDepth++;
                else if (content[i] === '}') braceDepth--;
                if (braceDepth > 0) textContent += content[i];
                i++;
            }
            segments.push({ type: "math", text: "\\text{" + textContent + "}" });
            currentType = "math";
            continue;
        }
        // 处理空的花括号 {}
        if (content.startsWith("{}", i)) {
            currentSegment += "{}";
            i += 2;
            continue;
        }
        // 更新括号层级
        if ("{([".includes(ch)) {
            currentSegment += ch;
            depth++;
            i++;
            continue;
        }
        if ("})]".includes(ch)) {
            currentSegment += ch;
            if (depth > 0) depth--;
            i++;
            continue;
        }
        // 判断字符类型：顶层汉字归为 text，其它归为 math
        const charType = (depth === 0 && isChinese(ch)) ? "text" : "math";
        if (currentType !== charType) {
            flushSegment();
            currentType = charType;
        }
        currentSegment += ch;
        i++;
    }
    flushSegment();
    // 合并相邻相同类型片段
    const merged = segments.reduce((acc, seg) => {
        if (acc.length && acc[acc.length - 1].type === seg.type) {
            acc[acc.length - 1].text += seg.text;
        } else {
            acc.push(seg);
        }
        return acc;
    }, []);
    // 重组字符串：math 类型保持原样，text 类型直接输出
    return merged.map(seg => seg.text).join("");
}

/**
 * transformMathContent
 * 转换数学公式内容，支持 inline ($...$) 与 block ($$...$$) 两种形式
 * 使用正则表达式匹配公式，并调用 splitMathContent 对公式内部内容进行处理
 */
function transformMathContent(selection) {
    return selection.replace(/(\${1,2})([\s\S]+?)\1/g, (match, delimiter, content) => {
        const processedContent = splitMathContent(content);
        return delimiter + processedContent + delimiter;
    });
}

// QuickAdd Macro 入口：处理选中的数学公式内容（同时支持 inline 和多行公式）
module.exports = async (params) => {
    const processed = await processSelectedText([
        transformMathContent
    ]);
    if (processed) {
        new Notice("Splitting Non-ascii characters from math content completed.");
    }
};
