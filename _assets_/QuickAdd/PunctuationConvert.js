/**
 * QuickAdd 脚本：转换中文全角标点符号为半角符号加空格，并保持光标位置
 */
const activeFile = app.workspace.getActiveFile();
if (!activeFile) {
    new Notice("No file is currently open.");
    return;
}

// 检查文件扩展名是否为 md
if (activeFile.extension !== "md") {
    new Notice("The active file is not a Markdown file.");
    return;
}

const editor = app.workspace.activeEditor?.editor;
let curPos = null;
if (editor) {
    editor.focus();
    curPos = editor.getCursor();
}

// 获取文件内容
const fileContent = await app.vault.read(activeFile);

// 替换全角标点符号（逗号、句号、分号、括号、冒号）为半角符号加一个空格
const modifiedContent = fileContent
    .replace(/，/g, ", ")
    .replace(/。/g, ". ")
    .replace(/：/g, ": ")
    .replace(/；/g, "; ")
    .replace(/（/g, " (")
    .replace(/）/g, ") ")
    .replace(/、/g, ", ")
    .replace(/“/g, ' "')
    .replace(/”/g, '" ');

// 将更新后的内容写回文件
await app.vault.modify(activeFile, modifiedContent);

if (editor && curPos) {
    // 恢复光标位置
    editor.setCursor(curPos);
}

new Notice("All specified full-width Chinese punctuation marks have been replaced with half-width versions followed by a space.");
