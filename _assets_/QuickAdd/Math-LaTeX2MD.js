/**
 * 通用文本处理框架
 * ✅ 适用于 QuickAdd Macro
 * ✅ 可扩展多个文本转换函数
 * ✅ 替换后保持原有选中区域
 */
async function processSelectedText(transformFunction) {
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("No file is currently open.");
        return;
    }
    const validExtensions = ["md", "canvas"];
    if (!validExtensions.includes(activeFile.extension)) {
        new Notice("The active file is not a Markdown or Canvas file.");
        return;
    }
    const editor = app.workspace.activeEditor?.editor;
    if (!editor) {
        new Notice("No active editor found.");
        return;
    }
    editor.focus();
    let selection = editor.getSelection();
    if (!selection || selection.trim() === "") {
        new Notice("No text is selected.");
        return;
    }
    // 记录原始选区起始位置
    const startPos = editor.getCursor("from");
    const modifiedText = transformFunction(selection);
    editor.replaceSelection(modifiedText);
    const lines = modifiedText.split("\n");
    let newEndPos;
    if (lines.length === 1) {
        newEndPos = { line: startPos.line, ch: startPos.ch + lines[0].length };
    } else {
        newEndPos = { line: startPos.line + lines.length - 1, ch: lines[lines.length - 1].length };
    }
    editor.setSelection(startPos, newEndPos);
}

/* 
 * 脚本 1：LaTeX2MD —— 将单行公式中的 \( 和 \) 替换为 $，
 * 并将多行公式中的 \[ 和 \] 替换为 $$ 。
 * 注意：本任务不处理 \left ... \right 结构，也不影响 $$ 块外的文字。
 */
function convertMathDelimiters(text) {
    // 替换单行公式：\( 和 \) 替换为 $
    let modified = text.replace(/((\\\(\s*)|(\s*\\\)))/g, '$');
    // 替换多行公式：\[ 和 \] 替换为 $$
    modified = modified.replace(/\\\[(.*?)\\\]/gs, (match, content) => `$$${content}$$`);
    return modified;
}

// QuickAdd 入口 —— LaTeX2MD（保留选区）
module.exports = async (params) => {
    await processSelectedText(convertMathDelimiters);
    new Notice("Math symbols in the selected text have been updated.");
};
