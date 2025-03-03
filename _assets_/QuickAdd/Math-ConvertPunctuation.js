/**
 * 通用文本处理框架
 * ✅ 适用于 QuickAdd Macro
 * ✅ 可扩展多个文本转换函数
 * ✅ 替换文本后保持原有选中区域
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

    // 记录原始选区起始位置
    const startPos = editor.getCursor("from");

    // 依次执行所有传入的文本转换函数
    let modifiedText = selection;
    for (const transformFunction of transformFunctions) {
        modifiedText = transformFunction(modifiedText);
    }

    // 替换选中的文本
    editor.replaceSelection(modifiedText);

    // 计算新选区：根据替换后文本计算新结束位置
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
 * 将中文全角标点符号转换为半角符号加空格
 */
function convertPunctuation(content) {
    return content
        .replace(/，/g, ", ")
        .replace(/。/g, ". ")
        .replace(/：/g, ": ")
        .replace(/；/g, "; ")
        .replace(/（/g, " (")
        .replace(/）/g, ") ")
        .replace(/、/g, ", ")
        .replace(/“/g, '"')
        .replace(/”/g, '" ');
}

// QuickAdd Macro 入口：转换全角标点符号（保留光标位置）
module.exports = async (params) => {
    await processSelectedText([convertPunctuation]);
    new Notice("Punctuation conversion accomplished successfully");
};
