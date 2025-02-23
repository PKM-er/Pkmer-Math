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
 * 处理 LaTeX 数学公式
 * ✅ 拆分顶层非 ASCII 字符
 * ✅ 保持 \text{} 结构完整
 * ✅ 保持 \left ... \right、\begin{}、\end{} 结构完整
 */
function processInlineMath(formula) {
    let output = "";
    let mathBuffer = "";
    let depth = 0;
    let i = 0;

    while (i < formula.length) {
        const char = formula[i];
        const isAscii = char.charCodeAt(0) < 128;

        // 处理顶层 \text{...}
        if (formula.startsWith("\\text{", i) && depth === 0) {
            if (mathBuffer.trim() !== "") {
                output += "$" + mathBuffer.trim() + "$ ";
                mathBuffer = "";
            }
            i += 6; // 跳过 "\text{"
            let inner = "";
            let braceDepth = 1;
            while (i < formula.length && braceDepth > 0) {
                if (formula[i] === '{') braceDepth++;
                else if (formula[i] === '}') braceDepth--;
                if (braceDepth > 0) inner += formula[i];
                i++;
            }
            output += inner;
            continue;
        }

        // 处理 \left ... \right 结构
        if (formula.startsWith("\\left", i)) {
            let match = formula.slice(i).match(/^\\left\s*(\\?.)/);
            if (match) {
                depth++;
                mathBuffer += match[0];
                i += match[0].length;
                continue;
            }
        }
        if (formula.startsWith("\\right", i)) {
            let match = formula.slice(i).match(/^\\right\s*(\\?.)/);
            if (match) {
                depth--;
                mathBuffer += match[0];
                i += match[0].length;
                continue;
            }
        }

        // 处理 \begin{...} 和 \end{...}
        if (formula.startsWith("\\begin{", i)) {
            let bracePos = formula.indexOf("}", i + 7);
            if (bracePos !== -1) {
                mathBuffer += formula.substring(i, bracePos + 1);
                depth++;
                i = bracePos;
            }
        } else if (formula.startsWith("\\end{", i)) {
            let bracePos = formula.indexOf("}", i + 5);
            if (bracePos !== -1) {
                mathBuffer += formula.substring(i, bracePos + 1);
                depth--;
                i = bracePos;
            }
        }
        // 处理普通 LaTeX 命令，如 \frac
        else if (char === '\\') {
            mathBuffer += char;
            i++;
            while (i < formula.length && /[a-zA-Z]/.test(formula[i])) {
                mathBuffer += formula[i];
                i++;
            }
            i--;
        }
        // 处理分组符号 { [ ( 及对应闭合符号
        else if ("{([".includes(char)) {
            depth++;
            mathBuffer += char;
        } else if (")}]".includes(char)) {
            depth--;
            mathBuffer += char;
        }
        // 顶层（depth === 0）遇到非 ASCII 字符时拆分
        else if (depth === 0 && !isAscii) {
            if (mathBuffer.trim() !== "") {
                output += "$" + mathBuffer.trim() + "$ ";
                mathBuffer = "";
            }
            output += char;
        } else {
            mathBuffer += char;
        }
        i++;
    }

    if (mathBuffer.trim() !== "") {
        output += "$" + mathBuffer.trim() + "$";
    }
    return output;
}

// 让 QuickAdd 执行 Macro
module.exports = async (params) => {
    await processSelectedText([
        (selection) =>
            selection.replace(/\$([^$]+)\$/gs, (_, content) => processInlineMath(content))
    ]);

    new Notice("Text transformation completed.");
};
