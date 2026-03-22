/**
 * 通用数学公式文本处理框架
 * 适用于 QuickAdd Macro
 * 自动拆分内联数学公式中的非 ASCII 字符，
 * 保持数学公式的结构完整，替换后保持原有选中区域。
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
 * parseCommand
 * ------------
 * 从 line 中从位置 i 开始解析一个 LaTeX 命令，
 * 包括命令名、可选参数（[...]）以及必选参数（{...}）。
 * 返回 { cmd: string, newIndex: number, name: string }，
 * 并保留命令后面的空白（如果后面不是直接跟着必选参数）。
 */
function parseCommand(line, i) {
    let start = i; // i 指向 "\"
    i++; // 跳过 "\"
    let name = "";
    while (i < line.length && /[a-zA-Z*]/.test(line[i])) {
        name += line[i];
        i++;
    }
    let cmd = "\\" + name;
    // 记录后面的空白
    let ws = "";
    while (i < line.length && /\s/.test(line[i])) {
        ws += line[i];
        i++;
    }
    // 如果遇到可选参数，则解析并附加（不保留前面的空白）
    if (i < line.length && line[i] === '[') {
        let opt = "";
        let bracketCount = 1;
        opt += "[";
        i++;
        while (i < line.length && bracketCount > 0) {
            if (line[i] === '[') { bracketCount++; }
            else if (line[i] === ']') { bracketCount--; }
            opt += line[i];
            i++;
        }
        cmd += opt;
        ws = "";
    }
    // 如果后面紧跟着必选参数 {，则不附加空白；否则附加空白
    if (i < line.length && line[i] === '{') {
        // 不附加 ws
    } else {
        cmd += ws;
    }
    // 继续解析所有必选参数 {…}
    while (i < line.length && line[i] === '{') {
        let arg = "";
        let braceCount = 1;
        arg += "{";
        i++; // 跳过 "{"
        while (i < line.length && braceCount > 0) {
            if (line[i] === '{') { braceCount++; }
            else if (line[i] === '}') { braceCount--; }
            arg += line[i];
            i++;
        }
        cmd += arg;
        while (i < line.length && /\s/.test(line[i])) {
            cmd += line[i];
            i++;
        }
    }
    return { cmd, newIndex: i, name };
}

/**
 * splitAlignedLines
 * ------------------
 * 按字符解析目标对齐环境内部内容，严格按照深度拆分行：
 * 只有在当前大括号和透明区域（非目标对齐环境）均未开启时，
 * 才将遇到的 "\\" 或换行符 "\n" 视为行分隔符。
 */
function splitAlignedLines(content) {
    let lines = [];
    let currentLine = "";
    let i = 0;
    let depth = 0;
    while (i < content.length) {
        // 检测 \begin{…}：如果环境名不属于目标对齐环境，则视为透明区域，原样复制
        if (content.startsWith("\\begin{", i)) {
            let startEnv = i;
            i += 7;
            let envName = "";
            while (i < content.length && content[i] !== '}') {
                envName += content[i];
                i++;
            }
            if (i < content.length) i++; // 跳过 "}"
            if (!/^(aligned|align\*?|flalign|split)$/.test(envName)) {
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
            // 若遇目标对齐环境自身，则直接复制标记（通常不会嵌套）
            currentLine += "\\begin{" + envName + "}";
            continue;
        }
        // 对 \text{…} 复制整个块（内部视为透明，不改变 depth）
        if (content.startsWith("\\text", i)) {
            let { cmd, newIndex } = parseCommand(content, i);
            currentLine += cmd;
            i = newIndex;
            continue;
        }
        // 更新大括号深度
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
        // 只有在 depth==0 时识别 "\\" 或 "\n" 为行分隔符
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
 * 按字符解析一行公式内容，严格计算结构深度：
 *
 * - 对于大括号 "{" 与 "}" 修改深度；
 * - 遇到 "\text{…}" 时：如果命令后面带有 {，则递归调用自身（深度减1），
 *   将内部内容处理后输出为纯文字；如果不带 {，则视为整体，直接捕获后面的文本（直到遇到 "+"、反斜杠或行尾），
 *   输出为纯文字。
 * - 对于其它命令，调用 parseCommand 后直接原样复制（保留命令及后面的空白，不改变深度）。
 * - 仅在局部深度为 0 时删除对齐符号 "&"；
 * - 当 (depth + baseDepth) ≤ 0 且遇到非 ASCII 字符时，将其拆分为纯文字。
 *
 * 参数 baseDepth 用于对外层环境（例如目标对齐环境拆分后）的初始补正（传 -1）。
 */
function processLine(line, baseDepth) {
    let segments = [];
    let currentSegment = "";
    let currentType = "math";
    let depth = 0;
    for (let i = 0; i < line.length; i++) {
        let ch = line[i];
        if (ch === '\\') {
            // 判断是否为 \text 命令
            if (line.startsWith("\\text", i)) {
                // 判断是否后跟 "{"，即是否有参数
                let j = i + 5;
                while (j < line.length && /\s/.test(line[j])) { j++; }
                if (j < line.length && line[j] === '{') {
                    // 正常处理
                    if (currentSegment) {
                        segments.push({ type: currentType, text: currentSegment });
                        currentSegment = "";
                    }
                    let { cmd, newIndex, name } = parseCommand(line, i);
                    // 此时 name 为 "text"，内部参数由花括号包裹
                    let inner = cmd.slice(cmd.indexOf('{') + 1, cmd.lastIndexOf('}'));
                    let innerSegs = processLine(inner, baseDepth - 1);
                    let txt = innerSegs.map(seg => seg.text).join("");
                    segments.push({ type: "text", text: txt });
                    currentType = "math";
                    i = newIndex - 1;
                    continue;
                } else {
                    // 如果 \text 后面没有 "{", 则按整体捕获后续文本，直到遇到 "+"、"\" 或行尾
                    if (currentSegment) {
                        segments.push({ type: currentType, text: currentSegment });
                        currentSegment = "";
                    }
                    i += 5; // 跳过 "\text"
                    // 跳过空白
                    while (i < line.length && /\s/.test(line[i])) { i++; }
                    let arg = "";
                    while (i < line.length && line[i] !== '+' && line[i] !== '\\') {
                        arg += line[i];
                        i++;
                    }
                    segments.push({ type: "text", text: arg.trim() });
                    i--; // 调整索引
                    continue;
                }
            } else {
                // 其它命令，直接调用 parseCommand并原样复制
                let { cmd, newIndex } = parseCommand(line, i);
                currentSegment += cmd;
                i = newIndex - 1;
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
        // 当 (depth + baseDepth) ≤ 0 且遇到非 ASCII 字符时，拆分为纯文字
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
    if (currentSegment) {
        segments.push({ type: currentType, text: currentSegment });
    }
    // 合并相邻同类型段
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
 * 处理 math 环境中目标对齐环境（如 aligned, align, align*, flalign, split）：
 * - 使用正则同时删除 \begin{…} 与 \end{…} 标记，
 * - 使用 splitAlignedLines 按当前层级拆分行（保证只在顶层拆分），
 * - 对每一行调用 processLine（传入 baseDepth = -1），
 * - 组装时：数学段（type==="math"）调用 trim() 后用美元符号包裹（确保无多余空格），文字段直接输出，
 * - 最后各行用换行符连接。
 */
function transformAlignedEnvironment(content) {
    // 删除目标环境的起始与结束标记（支持 aligned, align, align*, flalign, split）
    let inner = content
        .replace(/\\begin\{(?:aligned|align\*?|flalign|split)\}/g, "")
        .replace(/\\end\{(?:aligned|align\*?|flalign|split)\}/g, "")
        .trim();
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
 * 检测 math 环境中是否含有目标对齐环境（aligned, align, align*, flalign, split），
 * 如果有，则调用 transformAlignedEnvironment 进行处理，
 * 返回转换后的结果（不再保留原外层 $ 符号）；否则返回原样。
 */
function transformMathEnvironment(content) {
    const envRegex = /\\begin\{(aligned|align\*?|flalign|split)\}/;
    if (envRegex.test(content)) {
        return transformAlignedEnvironment(content);
    }
    return content;
}

/**
 * transformMathContent
 * ----------------------
 * 处理选中的 math 环境，支持 inline ($...$) 与 block ($$...$$) 两种形式。
 * 如果 math 内容中含有目标对齐环境，则调用 transformMathEnvironment 进行转换；
 * 否则保持原样。
 */
function transformMathContent(selection) {
    return selection.replace(/(\${1,2})([\s\S]+?)\1/g, (match, delimiter, content) => {
        if (
            content.indexOf("\\begin{aligned}") >= 0 ||
            content.indexOf("\\begin{align") >= 0 ||
            content.indexOf("\\begin{flalign") >= 0 ||
            content.indexOf("\\begin{split}") >= 0
        ) {
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
