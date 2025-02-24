/**
 * 通用文本处理框架: 
 * 可扩展多个文本转换函数，替换选中文本后保持原有选区
 * 获取选区时先 focus()，替换后恢复选区
 * 正确的处理结果提示
 * 适用于 QuickAdd Macro
 */

async function processSelectedText(transformFunctions) {
    const activeFile = app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("No file is currently open.");
        return false;
    }
    
    // 允许的文件类型
    const validExtensions = ["md", "canvas"];
    if (!validExtensions.includes(activeFile.extension)) {
        new Notice("The active file is not a Markdown or Canvas file.");
        return false;
    }
    
    // 获取当前活动的编辑器
    const editor = app.workspace.activeEditor?.editor;
    if (!editor) {
        new Notice("No active editor found.");
        return false;
    }
    
    // Focus 编辑器并获取当前选区
    editor.focus();
    let selection = editor.getSelection();
    if (!selection || selection.trim() === "") {
        new Notice("No text is selected.");
        return false;
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
    
    // 根据替换后的文本计算新选区位置
    const lines = modifiedText.split("\n");
    let newEndPos;
    if (lines.length === 1) {
        newEndPos = { line: startPos.line, ch: startPos.ch + lines[0].length };
    } else {
        newEndPos = { line: startPos.line + lines.length - 1, ch: lines[lines.length - 1].length };
    }
    
    // 恢复选区
    editor.setSelection(startPos, newEndPos);
    return true;
}

/**
 * ✅ **删除连续多余空行\n和制表符\t**  
 * ✅ **不会误删表格 `|` 之前的空行**  
 * ✅ **确保在分页符 `---` 之前至少有一个空行**
 */
function cleanEmptyLines(selection) {
    return selection
        .replace(/\n+[\t ]*(\n)+(?!\n*(\||-{3,}))/g, '\n')
        .replace(/^[\t ]+\n/gm, '\n')
        .replace(/\n*(\n-{3,})/g, '\n$1');
}


// QuickAdd Macro 入口：执行文本转换任务
// 如果仅需要删除多余空行，请仅调用 cleanEmptyLines，注释掉 transformLatex
module.exports = async (params) => {
    const processed = await processSelectedText([
        cleanEmptyLines
    ]);
    if (processed) {
        new Notice("Text transformation completed.");
    }
};
