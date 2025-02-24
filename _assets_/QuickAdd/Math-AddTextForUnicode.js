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
 * 文本处理函数示例
 * ✅ 这些函数是完全通用的，可以替换为任何任务
 */

//任务 1: 处理数学公式中的非 ASCII 字符
function formatText(selection) {
    return selection.replace(/(\${1,2})([\s\S]+?)\1/g, (match, delimiter, content) => {
        return delimiter + addTextForUnicode(content) + delimiter;
    });
}

//任务 2: 占位，原样返回（不处理公式外文字）
function fixPunctuation(selection) {
    return selection;
}

// 辅助函数：给非 ASCII 字符加上 \text{}, 避免重复处理已存在的 \text{…}
function addTextForUnicode(content) {
    let placeholders = [];
    content = content.replace(/\\text\s*\{[^}]+\}/g, (match) => {
        placeholders.push(match);
        return `%%PLACEHOLDER${placeholders.length - 1}%%`;
    });
    content = content.replace(/([^\x00-\x7F]+)/g, (m) => `\\text{${m}}`);
    content = content.replace(/%%PLACEHOLDER(\d+)%%/g, (match, idx) => placeholders[Number(idx)]);
    return content;
}

// 让 QuickAdd 执行 Macro
module.exports = async (params) => {
    const processed = await processSelectedText([
        formatText,      // 处理数学公式中的非 ASCII 字符
        fixPunctuation,  // 占位，不处理公式外文字
    ]);

    if (processed) {
        new Notice("Success");
    }
};
