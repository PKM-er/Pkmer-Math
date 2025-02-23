/**
 * 通用文本处理框架
 * ✅ **确保在处理前检查选中文本**
 * ✅ **只执行一次 No text is selected 提示**
 */
async function processSelectedText(transformFunction) {
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

    // **在处理前就检查选区**
    const selection = editor.getSelection();
    if (!selection || selection.trim() === "") {
        new Notice("No text is selected.");
        return;
    }

    // **应用传入的文本转换逻辑**
    const modifiedText = transformFunction(selection);

    // **替换选中的文本**
    editor.replaceSelection(modifiedText);
}

/**
 * 删除多余空行，并确保分页符 `---` 之前有空行
 */
function cleanEmptyLines(selection) {
    return selection
        .replace(/\n+[\t ]*(\n)+(?!\n*(\||-{3,}))/g, '\n')
        .replace(/^[\t ]+\n/gm, '\n')
        .replace(/\n*(\n-{3,})/g, '\n$1');
}

/**
 * 处理 LaTeX 公式，确保 Unicode 文字不会重复包裹 \text{}
 */
function transformLatex(selection) {
    return selection.replace(/\$(.+?)\$/gs, (match, content) => {
        let placeholders = [];
        let tempContent = content.replace(/\\text\s*\{[^}]*\}/g, (m) => {
            placeholders.push(m);
            return `%%PLACEHOLDER${placeholders.length - 1}%%`;
        });
        tempContent = tempContent.replace(/([^\x00-\x7F]+)/g, (m) => `\\text{${m}}`);
        tempContent = tempContent.replace(/%%PLACEHOLDER(\d+)%%/g, (m, idx) => placeholders[Number(idx)]);
        return `$${tempContent}$`;
    });
}

// 让 QuickAdd 只执行脚本，不弹出无意义的确认
module.exports = async (params) => {
    const app = params.app;
    const editor = app.workspace.activeEditor?.editor;

    // **在 Macro 运行前，确保有选中的文本**
    const selection = editor?.getSelection();
    if (!selection || selection.trim() === "") {
        new Notice("No text is selected.");
        return;
    }

    // 运行文本清理
    await processSelectedText(cleanEmptyLines);

    // 运行 LaTeX 处理
    await processSelectedText(transformLatex);

    // **只有当所有任务都完成后才提示**
    new Notice("Text transformation completed.");
};
