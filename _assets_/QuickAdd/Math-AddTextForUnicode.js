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
        return false;
    }
    const validExtensions = ["md", "canvas"];
    if (!validExtensions.includes(activeFile.extension)) {
        new Notice("The active file is not a Markdown or Canvas file.");
        return false;
    }
    const editor = app.workspace.activeEditor?.editor;
    if (!editor) {
        new Notice("No active editor found.");
        return false;
    }
    editor.focus();
    let selection = editor.getSelection();
    if (!selection || selection.trim() === "") {
        new Notice("No text is selected.");
        return false;
    }
    const startPos = editor.getCursor("from");
    let modifiedText = selection;
    for (const transformFunction of transformFunctions) {
        modifiedText = transformFunction(modifiedText);
    }
    editor.replaceSelection(modifiedText);
    const lines = modifiedText.split("\n");
    let newEndPos;
    if (lines.length === 1) {
        newEndPos = { line: startPos.line, ch: startPos.ch + lines[0].length };
    } else {
        newEndPos = { line: startPos.line + lines.length - 1, ch: lines[lines.length - 1].length };
    }
    editor.setSelection(startPos, newEndPos);
    return true;
}

/**
 * transformLatex
 * 对数学公式中的非 ASCII 字符进行处理：
 * 给未被 \text 包裹的非 ASCII 字符添加 \text 包裹，
 * 支持处理内联公式 $...$ 和显示公式 $$...$$。
 *
 * 注意：对于公式内部已存在的 \text{...} 部分不会重复包装。
 */
function transformLatex(selection) {
    return selection.replace(/(\${1,2})([\s\S]+?)\1/g, (match, delimiter, content) => {
        // 先将已有的 \text{...} 内容替换为占位符，防止重复包装
        let placeholders = [];
        let tempContent = content.replace(/\\text\s*\{[^}]*\}/g, (m) => {
            placeholders.push(m);
            return `%%PLACEHOLDER${placeholders.length - 1}%%`;
        });
        // 给未被包装的非 ASCII 字符添加 \text 包裹
        tempContent = tempContent.replace(/([^\x00-\x7F]+)/g, (m) => `\\text{${m}}`);
        // 恢复原有的 \text{...} 内容
        tempContent = tempContent.replace(/%%PLACEHOLDER(\d+)%%/g, (m, idx) => placeholders[Number(idx)]);
        return delimiter + tempContent + delimiter;
    });
}

/**
 * cleanEmptyLines
 * Markdown 空行优化：删除多余空行，规范化分页符前的空行
 */
function cleanEmptyLines(selection) {
    return selection
        .replace(/\n+[\t ]*(\n)+(?!\n*(\||-{3,}))/g, '\n')
        .replace(/^[\t ]+\n/gm, '\n')
        .replace(/\n*(\n-{3,})/g, '\n$1');
}

// QuickAdd Macro 入口：依次执行空行优化与数学公式转换
module.exports = async (params) => {
    const processed = await processSelectedText([
        cleanEmptyLines,   // Markdown 空行优化
        transformLatex     // 数学公式中非 ASCII 字符包装处理
    ]);
    if (processed) {
        new Notice("Text transformation completed.");
    }
};
