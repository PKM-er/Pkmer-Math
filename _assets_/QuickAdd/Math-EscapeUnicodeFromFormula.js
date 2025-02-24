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
}

/**
 * splitAlignedLines
 * ------------------
 * 按字符解析 aligned 环境内部内容，严格按照深度拆分行：
 * 只有在当前大括号和透明环境（非 aligned 环境）均未开启时，
 * 才将遇到的 "\\" 或换行符 "\n" 视为行分隔符。
 */
function splitAlignedLines(content) {
    let lines = [];
    let currentLine = "";
    let i = 0;
    let depth = 0;
    while (i < content.length) {
        // 如果遇到 \begin{，检测环境名
        if (content.startsWith("\\begin{", i)) {
            // 记录起始位置
            let startEnv = i;
            i += 7; // 跳过 "\begin{"
            let envName = "";
            while (i < content.length && content[i] !== "}") {
                envName += content[i];
                i++;
            }
            if (i < content.length) i++; // 跳过 "}"
            // 如果环境名不是 aligned，则视为透明区域，
            // 直接复制整个块（直到对应 \end{envName}）并不改变深度
            if (envName !== "aligned") {
                let block = "\\begin{" + envName + "}";
                while (i < content.length) {
                    if (content.startsWith("\\end{" + envName + "}", i)) {
                        block += "\\end{" + envName + "}";
                        i += ("\\end{" + envName + "}").length;
                        break;
                    } else {
                        block += content[i];
                        i++;
                    }
                }
                currentLine += block;
                continue;
            }
            // 若遇到 aligned 自身，则通常不会嵌套，故不在此处理
        }
        // 处理 \text{…}：复制整个 \text 块但不改变 depth (内部视为透明)
        if (content.startsWith("\\text", i)) {
            let startText = i;
            i += 5;
            while (i < content.length && /\s/.test(content[i])) { i++; }
            if (i < content.length && content[i] === '{') {
                // 复制整个 \text{...}
                let textBlock = "\\text{";
                i++; // 跳过 "{"
                let braceCount = 1;
                while (i < content.length && braceCount > 0) {
                    if (content[i] === '{') { braceCount++; }
                    else if (content[i] === '}') { braceCount--; }
                    textBlock += content[i];
                    i++;
                }
                currentLine += textBlock;
                continue;
            }
        }
        // 遇到 "{" 和 "}" 修改深度
        if (content[i] === '{') {
            depth++;
            currentLine += content[i];
            i++;
            continue;
        }
        if (content[i] === '}') {
            depth--;
            currentLine += content[i];
            i++;
            continue;
        }
        // 只有在 depth==0时识别 "\\" 或 "\n" 作为行分隔符
        if (depth === 0 && content.startsWith("\\\\", i)) {
            lines.push(currentLine.trim());
            currentLine = "";
            i += 2;
            continue;
        }
        if (depth === 0 && content[i] === "\n") {
            lines.push(currentLine.trim());
            currentLine = "";
            i++;
            continue;
        }
        // 其他字符直接复制
        currentLine += content[i];
        i++;
    }
    if (currentLine.trim() !== "") {
        lines.push(currentLine.trim());
    }
    return lines;
}

/**
 * processLine
 * -----------
 * 按字符解析一行公式内容，严格计算结构深度。
 *
 * - 对于大括号 "{" 与 "}" 修改深度。
 * - 遇到 "\text{…}" 时递归调用自身（深度减1），内部输出纯文字（去除命令及大括号）。
 * - 遇到 "\begin{...}" 时，如果环境名不为 "aligned"（如 matrix 使用的 array 等），则原样复制（透明区域）。
 * - 仅在局部深度为 0 时删除对齐符号 "&"。
 * - 当 (depth + baseDepth) ≤ 0 且遇到非 ASCII 字符时，拆分为 text 部分。
 *
 * 参数 baseDepth 用于对外层环境（例如 aligned 拆分后）的初始补正（aligned 内传 -1）。
 */
function processLine(line, baseDepth) {
    let segments = [];
    let currentSegment = "";
    let currentType = "math";
    let depth = 0;
    for (let i = 0; i < line.length; i++) {
        let ch = line[i];
        // 处理透明区域：遇到 "\begin{"，如果环境名不为 "aligned"则复制整个块
        if (line.startsWith("\\begin{", i)) {
            let envStart = i;
            let j = i + 7;
            let envName = "";
            while (j < line.length && line[j] !== '}') {
                envName += line[j];
                j++;
            }
            if (j < line.length) j++; // 跳过 "}"
            if (envName !== "aligned") {
                let block = "\\begin{" + envName + "}";
                let endToken = "\\end{" + envName + "}";
                let count = 1;
                while (j < line.length && count > 0) {
                    if (line.startsWith("\\begin{" + envName + "}", j)) {
                        count++;
                        block += "\\begin{" + envName + "}";
                        j += ("\\begin{" + envName + "}").length;
                    } else if (line.startsWith(endToken, j)) {
                        count--;
                        block += endToken;
                        j += endToken.length;
                    } else {
                        block += line[j];
                        j++;
                    }
                }
                currentSegment += block;
                i = j - 1;
                continue;
            }
            // 如果是 aligned，则交由外层处理，不在此处解析
        }
        // 对 \left 与 \right 直接复制
        if (line.startsWith("\\left", i)) {
            let token = "\\left";
            i += 5;
            if (i < line.length) { token += line[i]; }
            currentSegment += token;
            continue;
        }
        if (line.startsWith("\\right", i)) {
            let token = "\\right";
            i += 6;
            if (i < line.length) { token += line[i]; }
            currentSegment += token;
            continue;
        }
        // 处理 \text{…} 命令
        if (line.startsWith("\\text", i)) {
            if (currentSegment) {
                segments.push({ type: currentType, text: currentSegment });
                currentSegment = "";
            }
            i += 5;
            while (i < line.length && /\s/.test(line[i])) { i++; }
            if (i < line.length && line[i] === '{') {
                i++; // 跳过 "{"
                let inner = "";
                let braceCount = 1;
                while (i < line.length && braceCount > 0) {
                    if (line[i] === '{') { braceCount++; }
                    else if (line[i] === '}') { braceCount--; }
                    if (braceCount > 0) { inner += line[i]; }
                    i++;
                }
                let innerSegs = processLine(inner, baseDepth - 1);
                let txt = innerSegs.map(seg => seg.text).join("");
                segments.push({ type: "text", text: txt });
                currentType = "math";
                i--;
                continue;
            }
        }
        // 更新大括号深度
        if (ch === '{') {
            currentSegment += ch;
            depth++;
            continue;
        }
        if (ch === '}') {
            currentSegment += ch;
            depth--;
            continue;
        }
        // 仅在局部深度为 0 时删除对齐符号 "&"
        if (ch === '&' && depth === 0) {
            continue;
        }
        // 如果 (depth + baseDepth) ≤ 0 且遇到非 ASCII 字符，则拆分为纯文字
        let effectiveDepth = depth + baseDepth;
        if (effectiveDepth <= 0 && /[^\x00-\x7F]/.test(ch)) {
            if (currentSegment) {
                segments.push({ type: currentType, text: currentSegment });
                currentSegment = "";
            }
            segments.push({ type: "text", text: ch });
            continue;
        }
        currentSegment += ch;
    }
    if (currentSegment) segments.push({ type: currentType, text: currentSegment });
    let merged = [];
    segments.forEach(seg => {
        if (merged.length && merged[merged.length - 1].type === seg.type) {
            merged[merged.length - 1].text += seg.text;
        } else {
            merged.push(seg);
        }
    });
    return merged;
}

/**
 * transformAlignedEnvironment
 * -----------------------------
 * 处理 math 环境中 \begin{aligned} ... \end{aligned} 部分：
 * - 删除 \begin{aligned} 与 \end{aligned} 标记；
 * - 使用 splitAlignedLines 按“深度”拆分行（保证只在顶层拆分）；
 * - 对每一行调用 processLine（传入 baseDepth = -1）；
 * - 组装时：数学段（type==="math"）先调用 trim() 后用美元符号包裹（确保无多余空格），文字段直接输出；
 * - 最后各行用换行符连接。
 */
function transformAlignedEnvironment(content) {
    let inner = content.replace(/\\begin\{aligned\}/, "").replace(/\\end\{aligned\}/, "").trim();
    let lines = splitAlignedLines(inner);
    let processedLines = lines.map(line => {
        let segs = processLine(line, -1);
        return segs
            .map(seg => seg.type === "math" ? "$" + seg.text.trim() + "$" : seg.text.trim())
            .join("");
    });
    return processedLines.join("\n");
}

/**
 * transformMathEnvironment
 * --------------------------
 * 检测 math 环境中是否含有 \begin{aligned} 块，
 * 如果有，则调用 transformAlignedEnvironment 进行处理，
 * 返回转换后的结果（不再保留原外层 $ 符号）；否则返回原样。
 */
function transformMathEnvironment(content) {
    if (content.indexOf("\\begin{aligned}") >= 0) {
        return transformAlignedEnvironment(content);
    }
    return content;
}

/**
 * transformMathContent
 * ----------------------
 * 处理选中的 math 环境，支持 inline ($...$) 与 block ($$...$$) 两种形式。
 * 如果 math 内容中含有 \begin{aligned} 块，则调用 transformMathEnvironment 进行转换；
 * 否则保持原样。
 */
function transformMathContent(selection) {
    return selection.replace(/(\${1,2})([\s\S]+?)\1/g, (match, delimiter, content) => {
        if (content.indexOf("\\begin{aligned}") >= 0) {
            return transformMathEnvironment(content);
        }
        return match;
    });
}

// QuickAdd Macro 入口
module.exports = async (params) => {
    const processed = await processSelectedText([
        transformMathContent
    ]);
    if (processed) {
        new Notice("Aligned math content splitting completed.");
    }
};

