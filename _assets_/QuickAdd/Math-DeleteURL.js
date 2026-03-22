/**
 * 通用文本处理框架
 */
async function processSelectedText(transformFunction) {
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("No file is currently open.");
        return;
    }
    if (activeFile.extension !== "md") {
        new Notice("The active file is not a Markdown file.");
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
 * 脚本 2：删除 Markdown 超链接
 * 将形如 `[Google](www.google.com)` 的链接替换为仅保留链接文本 "Google"
 */
function removeMarkdownLinks(text) {
    return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

// QuickAdd 入口 —— 删除超链接（保留选区）
module.exports = async (params) => {
    await processSelectedText(removeMarkdownLinks);
    new Notice("Links removed successfully.");
};
