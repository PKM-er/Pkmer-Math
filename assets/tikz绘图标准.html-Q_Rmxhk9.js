import{_ as l,c as p,b as e,d as i,a as n,e as t,r as d,o as r}from"./app-C2lKiqns.js";const h={};function o(c,s){const a=d("Tikz");return r(),p("div",null,[s[0]||(s[0]=e(`<h1 id="简介" tabindex="-1">简介</h1><h2 id="环境配置" tabindex="-1">环境配置</h2><p>代码类型: tikz</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\usepackage{tikz}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可用package" tabindex="-1">可用package</h2><p>The following packages are available in <code>\\usepackage{}</code>:</p><ul><li>chemfig</li><li>tikz-cd</li><li>circuitikz</li><li>pgfplots</li><li>array</li><li>amsmath</li><li>amstext</li><li>amsfonts</li><li>amssymb</li><li>tikz-3dplot</li></ul><h3 id="部分package示例" tabindex="-1">部分package示例</h3><ul><li>3D线图: <code>\\usepackage{tikz-3dplot}</code></li><li>网格图: <code>\\usepackage{pgfplots}</code></li><li>电路: <code>\\usepackage{circuitikz}</code></li><li>交换图: <code>\\usepackage{tikz-cd}</code></li><li>有机化学: <code>\\usepackage{chemfig}</code></li></ul><h3 id="禁止使用" tabindex="-1">禁止使用</h3><ul><li><code>\\documentclass{article}</code></li></ul><p>会导致报错</p><hr><h1 id="配置项" tabindex="-1">配置项</h1><h2 id="颜色" tabindex="-1">颜色</h2><p>TikZ 内置了一些常见的颜色方案，方便绘图时使用。这些颜色可以直接引用，也可以通过 <code>xcolor</code> 包扩展。以下是主要内置颜色方案：</p><h3 id="常用颜色" tabindex="-1">常用颜色</h3><ul><li><strong>基础颜色</strong>：<br> - <code>black</code><ul><li><code>white</code></li><li><code>red</code></li><li><code>green</code></li><li><code>blue</code></li><li><code>cyan</code></li><li><code>magenta</code></li><li><code>yellow</code></li></ul></li><li><strong>灰度颜色</strong>（通过数值指定，<code>0</code> 表示黑，<code>1</code> 表示白）： <ul><li><code>gray</code>（例如 <code>gray!50</code> 表示 50% 灰色）</li></ul></li></ul><h3 id="混合颜色" tabindex="-1">混合颜色</h3><ul><li>TikZ 支持颜色混合，语法为 <code>color1!percentage!color2</code>。 例如： <ul><li><code>red!50!blue</code>：红色和蓝色各占 50%。</li><li><code>green!30!white</code>：绿色占 30%，白色占 70%。</li></ul></li></ul><h3 id="其他内置颜色" tabindex="-1">其他内置颜色</h3><p>通过加载 <code>xcolor</code> 扩展包，可以使用更多颜色：</p><ul><li><strong>自然颜色</strong>： <ul><li><code>brown</code></li><li><code>lime</code></li><li><code>orange</code></li><li><code>pink</code></li><li><code>violet</code></li><li><code>purple</code></li><li><code>teal</code></li><li><code>olive</code></li></ul></li><li><strong>Web 颜色</strong>（需要 <code>dvipsnames</code> 选项支持）： <ul><li><code>Aquamarine</code></li><li><code>NavyBlue</code></li><li><code>SkyBlue</code></li><li><code>Emerald</code></li><li><code>Periwinkle</code></li><li><code>Sepia</code></li></ul></li></ul><h3 id="自定义颜色" tabindex="-1">自定义颜色</h3><p>你也可以通过以下方式定义自定义颜色：</p><ol><li>RGB 模式：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{rgb}{0.2, 0.4, 0.6}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>HTML 颜色代码：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{HTML}{1A2B3C}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>CMYK 模式：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{cmyk}{0.1, 0.2, 0.3, 0.4}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h3 id="应用方式" tabindex="-1">应用方式</h3><p>在 TikZ 中，可以通过以下方式应用颜色：</p><ol><li>改变线条颜色：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[red] (0,0) -- (1,1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>改变填充颜色：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[blue] (0,0) rectangle (1,1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>组合颜色属性：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[fill=yellow,draw=red] (0,0) circle (1cm);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>通过这些内置和扩展颜色，几乎可以满足大多数绘图需求</p><h2 id="方向参数" tabindex="-1">方向参数</h2><ul><li>above</li><li>below</li><li>left</li><li>right</li></ul><h2 id="定义变量" tabindex="-1">定义变量</h2><p>定义: <code>\\def\\angleA{30}</code><br> 使用: <code>\\draw[thick] (0,0) -- ({1*cos(\\angleA)},{1*sin(\\angleA)});</code></p><hr><h2 id="_2d图" tabindex="-1">2D图</h2><ul><li>定义变量<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>的范围: <code>\\draw[domain= 0:1,smooth,variable=\\x]</code></li></ul><h2 id="_3d图" tabindex="-1">3D图</h2><h3 id="旋转体" tabindex="-1">旋转体</h3><ul><li>观察角:<br> % 设置 3D 视角（俯仰角 80° 通常是固定的; 水平旋转角 120°, 或90°）<br><code>\\tdplotsetmaincoords{80}{120}</code></li><li>实线绘制边缘<br><code>\\draw[smooth, thick]</code>,<br> 根据水平旋转角 120°, 绘制另一边120°+180°=300° ,两条边.</li><li>根据俯仰角, 可能会调整, 如: <ul><li>110度, 按感觉改的, 120°-10°=110°</li><li>另一条边也是因为倾斜视图的原因, 120°+180°+10°=310°</li></ul></li><li>虚线绘制主平面投影<br><code>\\draw[dashed]</code></li><li>仅有实体形状才使用加粗<code>\\draw[smooth, thick]</code>, 如: 圆柱的底部,顶部,边界 用实线绘制, 没有明确指定则不调整颜色</li><li>相交平面使用 填充透明度0.2: <code>\\fill[black!20,opacity=0.2]</code></li></ul><hr><h1 id="填充方法" tabindex="-1"><strong>填充方法</strong></h1><p>在 TikzJax 环境中，不同的填充有不同的最佳实践：</p><h4 id="a-纯色填充-solid-color-fills" tabindex="-1"><strong>A. 纯色填充 (Solid Color Fills)</strong></h4><p>原则：优先使用 \\fill 或 \\filldraw。<br> 说明：对于简单的封闭图形（如 circle, rectangle 或 ... -- cycle 路径），直接使用 \\fill 命令填充颜色。这比 clip 方式更直接，解析负担更小。<br> 示例：<br> 代码段</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>% 正确做法</span></span>
<span class="line"><span>\\fill[blue!50] (0,0) rectangle (2,2);</span></span>
<span class="line"><span>\\draw[thick, red] (0,0) -- (1,1) -- (0,1) -- cycle;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="b-斜线-图案填充-hatching-pattern-fills" tabindex="-1"><strong>B. 斜线/图案填充 (Hatching/Pattern Fills)</strong></h4><p>原则：必须使用 \\clip 配合 \\foreach。<br> 说明：这是在 TikzJax 中实现图案填充的唯一标准方法。先用 \\clip 和一个精确的封闭路径来定义剪裁区域，然后在这个区域内部用 \\foreach 绘制一系列足够大的平行线。<br> 示例：<br> 代码段</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>% 这是实现斜线填充的【标准范式】</span></span>
<span class="line"><span>\\begin{scope}</span></span>
<span class="line"><span>  \\clip (0,0) circle (1); % 1. 用精确路径剪裁</span></span>
<span class="line"><span>  \\foreach \\i in {-1.5,-1.2,...,1.5} { % 2. 在内部绘制足够大的线条</span></span>
<span class="line"><span>    \\draw[red!70] (-1.5,\\i) -- (1.5,\\i);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>\\end{scope}</span></span>
<span class="line"><span>\\draw (0,0) circle (1); % 3. 最后绘制边界</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="斜线填充" tabindex="-1">斜线填充</h2><p>这类多边形斜线填充的核心实现方法是：<strong>使用 <code>\\clip</code> 限定填充区域，再用 <code>\\foreach</code> 搭配 <code>\\draw</code> 逐条绘制平行斜线</strong>。</p>`,51)),i(a,{data:`\\begin{document}
\\begin{tikzpicture}
    % 绘制坐标轴
    \\draw[->] (-1.5,0) -- (1.5,0) node[right] {$x$};
    \\draw[->] (0,-1.5) -- (0,1.5) node[above] {$y$};
    % 绘制圆 (x^2 + y^2 = 1)
    \\draw[thick,red] (0,0) circle(1);
    % 在圆内部填充斜线
    \\begin{scope}
        \\clip (0,0) circle(1); % 只填充圆内区域
        \\foreach \\y in {-1.5,-1.2,...,1.5} {
            \\draw[red!70] (-1.5,\\y) -- (1.5,\\y+1);
        }
    \\end{scope}
    % 添加旋转箭头
    \\draw[->,red,thick] (1,0) arc[start angle=0,end angle=45,radius=1];
\\end{tikzpicture}
\\end{document}
`}),s[1]||(s[1]=n("h3",{id:"三角形",tabindex:"-1"},"三角形",-1)),i(a,{data:`\\begin{document}
\\begin{tikzpicture}
    % 坐标轴
    \\draw[->,thick] (-0.2,0) -- (1.5,0) node[right] {$x$};
    \\draw[->,thick] (0,-0.2) -- (0,1.5) node[above] {$y$};
    % 三角形边界
    \\draw[thick,red] (1,0) -- (0,1) -- (0,0) -- cycle;
    % 斜线填充
    \\begin{scope}
        \\clip (1,0) -- (0,1) -- (0,0) -- cycle;
        \\foreach \\i in {0.1,0.3,...,0.9} {
            \\draw[red!50] (0,\\i) -- (\\i,0);
        }
    \\end{scope}
    % 标注方程
    \\node[right] at (0.5,0.6) {\\large $x+y=1$};
    % 标注点
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (1,0) {$1$};
    \\node[left] at (0,1) {$1$};
\\end{tikzpicture}
\\end{document}
`}),s[2]||(s[2]=n("h3",{id:"不规则多边形填充",tabindex:"-1"},"不规则多边形填充",-1)),s[3]||(s[3]=n("p",null,[t("利用指定轮廓线进行 "),n("code",null,"clip"),t(", 从而避免了不规范的遮挡操作")],-1)),i(a,{data:`\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}[scale=1]
% 参数定义
\\def\\R{1.3}   % 外圆半径
\\def\\r{0.7}   % 内圆半径
\\def\\aOne{210} % 起始角度
\\def\\aTwo{90}  % 结束角度
\\def\\dx{2.2}  % 横线绘制范围 (确保足够宽)

% ===== 使用精确轮廓剪裁并填充 =====
\\begin{scope}
  % 1. 使用精确的环形扇区路径作为剪裁区域
  % 这个路径与你最后绘制边界的路径完全相同
  \\clip ({\\R*cos(\\aOne)},{\\R*sin(\\aOne)})
        arc[start angle=\\aOne,end angle=\\aTwo,radius=\\R] --
        ({\\r*cos(\\aTwo)},{\\r*sin(\\aTwo)})
        arc[start angle=\\aTwo,end angle=\\aOne,radius=\\r] -- cycle;

  % 2. 在剪裁区域内用 \\foreach 绘制横线
  % 这是在 TikzJax 环境下实现填充的标准方法
  \\foreach \\y in {-1.3,-1.1,...,1.3} {
    \\draw[red, thin] (-\\dx,\\y) -- (\\dx,\\y);
  }
\\end{scope}

% 3. 绘制边界线 (此路径与剪裁路径完全相同)
\\draw[thick]
  ({\\R*cos(\\aOne)},{\\R*sin(\\aOne)})
  arc[start angle=\\aOne,end angle=\\aTwo,radius=\\R] --
  ({\\r*cos(\\aTwo)},{\\r*sin(\\aTwo)})
  arc[start angle=\\aTwo,end angle=\\aOne,radius=\\r] -- cycle;
\\end{tikzpicture}
\\end{document}
`}),s[4]||(s[4]=e(`<h3 id="代码优化点" tabindex="-1">代码优化点：</h3><ol><li><strong>斜线填充</strong>： <ul><li>不能使用 <code>\\foreach</code> 在 <code>\\clip</code> 内部，因此 <strong>使用 <code>\\clip</code> 限制区域，然后绘制一系列平行线</strong>，保证它们只出现在圆内部。</li><li>这里的 <code>\\foreach \\y in {-1.5,-1.2,...,1.5}</code> 产生 <strong>从左到右的斜线</strong>。</li></ul></li><li><strong>旋转箭头</strong>： <ul><li>直接用 <code>arc[start angle=0,end angle=45]</code> 绘制 <strong>顺时针旋转的小箭头</strong>。</li></ul></li></ol><hr><h2 id="颜色填充" tabindex="-1">颜色填充</h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>% 填充阴影区域</span></span>
<span class="line"><span>\\begin{scope} \\clip (0,-1.5) rectangle (1,0); \\fill[black!20,opacity=0.7] plot[domain=0.01:1,smooth]({\\x}, {ln(\\x)}) -- (1,0) -- (0,0) -- cycle; \\end{scope}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),i(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
\\tdplotsetmaincoords{60}{50}
\\begin{tikzpicture}[tdplot_main_coords,declare function={h=4;r=3;}]
	\\draw[fill=blue!40,fill opacity=0.5] plot[variable=\\x,domain=\\tdplotmainphi:180,smooth] ({r*cos(\\x)},{r*sin(\\x)},0)
 -- plot[variable=\\x,domain=180:\\tdplotmainphi,smooth] ({r*cos(\\x)},{r*sin(\\x)},h);
	\\draw[fill=blue!40,fill opacity=0.5] plot[variable=\\x,domain=0:\\tdplotmainphi,smooth] ({r*cos(\\x)},{r*sin(\\x)},0)
 -- plot[variable=\\x,domain=\\tdplotmainphi:0,smooth] ({r*cos(\\x)},{r*sin(\\x)},h)
 -- cycle;
\\end{tikzpicture}
\\end{document}
`}),s[5]||(s[5]=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>% 内层</span></span>
<span class="line"><span>\\draw[fill=red!80,fill opacity=0.5] </span></span>
<span class="line"><span>	plot[variable=\\t,domain=\\thetaEdgeB:\\thetaEdgeA,smooth] ({2*cos(\\t)},{2*sin(\\t)},{2}) </span></span>
<span class="line"><span> -- plot[variable=\\t,domain=\\thetaEdgeA:\\thetaEdgeB,smooth] ({cos(\\t)},{sin(\\t)},{1}) </span></span>
<span class="line"><span> -- cycle;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="标准绘图原则" tabindex="-1"><strong>标准绘图原则</strong></h2><p>✅ <strong>2D：确保 <code>y</code> 轴范围受控，避免 TikzJax 计算溢出</strong><br> ✅ <strong>3D：固定 <code>\\tdplotsetmaincoords{80}{120}</code>，只绘制关键轮廓</strong><br> ✅ <strong>曲线：使用 <code>smooth</code> 和 <code>samples=100</code>，提高解析精度</strong><br> ✅ <strong>颜色：仅用黑白，避免 <code>colormap</code> 和 <code>fill opacity</code></strong><br> ✅ <strong>阴影：尽量 <code>filldraw</code> 而非 <code>clip</code>，减少 TikzJax 解析负担</strong></p><hr><h2 id="polygon" tabindex="-1">Polygon</h2><p>You can use the geometric shapes given by the shapes.geometric library</p><div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\usetikzlibrary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{shapes.geometric}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">tikzpicture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}[mystyle/.style={draw,shape=circle,fill=blue}]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\def\\ngon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{5}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[regular polygon,regular polygon sides=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ngon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,minimum size=3cm] (p) {};</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\foreach\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {1,...,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ngon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}{</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\node</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[mystyle] (p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) at (p.corner </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){};}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\foreach\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {1,...,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\numexpr\\ngon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\relax</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}{</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  \\foreach\\y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,...,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ngon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}{</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -- (p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">tikzpicture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>One short tikz code without use of a library.</p><div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">\\documentclass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">border=7mm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]{</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">standalone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">\\usepackage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">tikz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\foreach</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {3,...,7}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  \\tikz\\foreach</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {1,...,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*360/</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">\\n:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">1) coordinate (n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) circle(2 pt)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      \\ifnum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;1 foreach </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,...,1}{(n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) edge (n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">\\fi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>For fun, a short code with <code>pst-poly</code> gets the desired result:</p><div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">\\documentclass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">svgnames</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]{</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">standalone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">\\usepackage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">pst-poly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">\\usepackage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">auto-pst-pdf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\psset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{unit=3.5cm, dimen=middle, linejoin=1, dotsize=12pt}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">pspicture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}(-1,-1)(1,1)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\providecommand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\PstPolygonNode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}{</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\psdots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[dotsize=12pt, linecolor=SteelBlue](1;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\INode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\rput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(0,0){</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\PstPentagon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[PolyName=A, linecolor=LightSteelBlue, linewidth=1.2pt] }</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\rput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(0,0){</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\PstPentagon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[PolyName=A, PolyOffset=2] }</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">pspicture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Upgrade:</strong> An improved version, which itself calculate all necessary data from given number of nodes and angle of the first node position:</p><div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">\\documentclass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">border=3mm,tikz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]{</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">standalone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">tikzpicture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> every node/.style={draw,shape=circle,fill=blue,text=white}]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%%%% variable data data</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\def\\numpoly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{8}</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%number of nodes</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\def\\startangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{30}</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%direction of the first node</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\def\\pradious</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{33mm}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%------- calculations of the positions angles</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\pgfmathparse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{int(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\startangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">+360/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\numpoly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)}</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\let\\nextangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\pgfmathresult</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\pgfmathparse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{int(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\startangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-360/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\numpoly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">+360)}</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\let\\endtangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\pgfmathresult</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%--- nodes</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\foreach</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [count=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ii</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> from 1] in {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\startangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\nextangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,...,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\endtangle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">\\i:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\pradious</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) node (p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ii</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ii</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">%--- interconnections</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\foreach</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {1,...,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\numpoly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        \\foreach</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> in {</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,...,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\numpoly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) -- (p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    \\end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">tikzpicture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="案例" tabindex="-1">案例</h1><h2 id="_2d" tabindex="-1">2D</h2>`,19)),i(a,{data:`\\begin{document}
\\begin{tikzpicture}
% 绘制坐标轴
\\draw[->] (-0.2,0) -- (1.5,0) node[right] {$x$};
\\draw[->] (0,-1) -- (0,1) node[above] {$y$};
% 定义曲线 y = ln(x)，限制范围
\\draw[domain=0.2:1.5,smooth,variable=\\x] 
plot ({\\x}, {ln(\\x)}) node[right] {$y = \\ln(x)$};
% 填充阴影区域
\\begin{scope} \\clip (0,-1.5) rectangle (1,0); \\fill[black!20,opacity=0.7] plot[domain=0.01:1,smooth]({\\x}, {ln(\\x)}) -- (1,0) -- (0,0) -- cycle; \\end{scope}
% 标记点
\\node[below] at (1,0) {1};
\\node[below left] at (0,0) {0};
\\node[below left] at (0.05, -1) {$(0, \\ln(x))$};
\\end{tikzpicture}
\\end{document}
`}),i(a,{data:`\\begin{document}
\\begin{tikzpicture}
% 绘制坐标轴
\\draw[->] (-1.5,0) -- (1.5,0) node[right] {$x$};
\\draw[->] (0,-0.5) -- (0,1.5) node[above] {$y$};
% 三角形顶点
\\coordinate (A) at (-1,0);
\\coordinate (B) at (1,0);
\\coordinate (C) at (0,1);
% 绘制三角形边
\\draw[thick,red!50] (A) -- (C) node[midway,left] {$L_1$};
\\draw[thick,red!50] (C) -- (B) node[midway,right] {$L_2$};
\\draw[thick,blue!50] (B) -- (A) node[midway,below] {$L_3$};
% 标注顶点
\\node[below left] at (A) {$(-1,0)$};
\\node[below right] at (B) {$(1,0)$};
\\node[above] at (C) {$(0,1)$};
\\node[below left] at (0,0) {$0$};
% 添加方向箭头
\\draw[->,red!50,line width=1pt] (-0.5,0.5) -- (-0.45,0.55);
\\draw[->,red!50,line width=1pt] (0.5,0.5) -- (0.55,0.45);
\\draw[->,blue!50,line width=1pt] (0,-0.05) -- (-0.05,-0.05);
\\end{tikzpicture}
\\end{document}
`}),s[6]||(s[6]=n("h2",{id:"_3d",tabindex:"-1"},"3D",-1)),s[7]||(s[7]=n("p",null,[n("strong",null,[t("必须需要导入 "),n("code",null,"\\usepackage{tikz-3dplot}"),t(" 包!")])],-1)),i(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (0,0,0) -- (1.5,0,0) node[below right] {$x$};
        \\draw[->] (0,0,0) -- (0,1.5,0) node[below left] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 主平面上的虚线轮廓
        \\draw[dashed] plot[domain=0:1,samples=50] ({\\x},0,{\\x*\\x});
        \\draw[dashed] plot[domain=0:1,samples=50] ({-\\x},0,{\\x*\\x});
        \\draw[dashed] plot[domain=0:1,samples=50] (0,{\\x},{\\x*\\x});
        \\draw[dashed] plot[domain=0:1,samples=50] (0,{-\\x},{\\x*\\x});
        % 真实边缘轮廓
        \\foreach \\angle in {120, 300} {
            \\draw[smooth, thick] plot[domain=0:1,samples=50] 
                ({\\x*cos(\\angle)},{\\x*sin(\\angle)},{\\x*\\x});
        }
        % 顶部圆形
        \\draw[smooth] (1,0,1) arc[start angle=0,end angle=360,x radius=1,y radius=1];
        % 标注点
        \\node[below left] at (0,0,0) {$O$};
        \\node[right] at (0,0,1) {$z=1$};
        % 在右侧标注曲面方程
        \\node[anchor=west] at (0,1,0.5) {\\large $z = x^2 + y^2$};
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),s[8]||(s[8]=n("p",null,"真实边缘轮廓的角度为 \\tdplotsetmaincoords{80}{120} 后者120和其补角: 120+180, 这两个线是真实视角边缘轮廓线",-1)),i(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
   % 设置 3D 视角
   \\tdplotsetmaincoords{70}{120}
   \\begin{scope}[tdplot_main_coords]
       % 坐标轴
       \\draw[->,thick] (0,0,0) -- (1.5,0,0) node[below left] {$x$};
       \\draw[->,thick] (0,0,0) -- (0,1.5,0) node[below right] {$y$};
       \\draw[->,thick] (0,0,0) -- (0,0,1.5) node[above] {$z$};
       % 空间三角形 (红色)
       \\draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,1) -- cycle;
       % 底面三角形 (阴影填充)
       \\begin{scope}
           \\clip (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
           \\foreach \\i in {0.1,0.2,...,0.9} {
               \\draw[red!50] (1-\\i,\\i,0) -- (1-\\i+0.1,\\i,0);
           }
       \\end{scope}
       \\draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
       % 标注点
       \\node[below left] at (0,0,0) {$0$};
       \\node[left] at (0,0,1) {$1$};
       \\node[right] at (1,0,0) {$1$};
       \\node[above] at (0,1,0) {$1$};
       % 文字标注
       \\node at (0.2,0.5,0.7) {\\large $\\Sigma$};
       \\node at (0.3,0.2,0) {\\large $D$};
   \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),s[9]||(s[9]=e('<h3 id="_3d直角坐标平面案例" tabindex="-1">3D直角坐标平面案例</h3><ul><li><strong>表 (a) 方程组有解的情形</strong></li></ul><table><thead><tr><th>图形</th><th>几何意义</th><th>代数表达</th></tr></thead><tbody><tr><td>1</td><td>三张平面相交于一点</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span></td></tr><tr><td>2</td><td>三张平面相交于一条直线</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>，且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\\beta_1, \\beta_2, \\beta_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中任意两个向量线性无关</td></tr><tr><td>3</td><td>两张平面重合，第三张平面与之相交</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>，且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\\beta_1, \\beta_2, \\beta_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中有两个向量线性相关</td></tr><tr><td>4</td><td>三张平面重合</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr></tbody></table>',3)),i(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}

\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};  % 只画 z > 0

        % 填充三个相互垂直的平面（只显示 z ≥ 0 部分）
        \\fill[gray!20,opacity=0.5] (-1.2,-1.2,0) -- (-1.2,1.2,0) -- (1.2,1.2,0) -- (1.2,-1.2,0) -- cycle; % XY 平面
        \\fill[gray!30,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle; % XZ 平面，限制 z ≥ 0
        \\fill[gray!40,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle; % YZ 平面，限制 z ≥ 0

        % 标记相交点
        \\node[below left,red] at (0,0,0) {$O$};
        \\fill[red] (0,0,0) circle (1.5pt);
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),i(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}

\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 绘制三个平面
        % 平面 1：XZ 平面（y=0）
        \\fill[gray!20,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;

        % 平面 2：YZ 平面（x=0）
        \\fill[gray!30,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle;

        % 平面 3：倾斜平面 x + y = 0
        \\fill[gray!40,opacity=0.5] (-1.2,1.2,0) -- (1.2,-1.2,0) -- (1.2,-1.2,1.2) -- (-1.2,1.2,1.2) -- cycle;

        % 标记交线（严格与 z 轴重合）
        \\draw[thick,red] (0,0,0) -- (0,0,1.2);

        % 标记相交点
        \\node[below left] at (0,0,0) {$O$};

    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),i(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}

\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 绘制两个重合的 XZ 平面（y=0）
        \\fill[red!20,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,0.1,0) -- (-1.2,0.1,1.2) -- (1.2,0.1,1.2) -- (1.2,0.1,0) -- cycle;

        % 第三张平面：YZ 平面 (x=0)
        \\fill[gray!40,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle;

        % 标记交线（X 轴方向）
        \\draw[thick,red] (-1.2,0,0) -- (1.2,0,0);

        % 在交点 (0,0,0) 画一个红点
        \\fill[red] (0,0,0) circle (1.5pt);

        % 标记相交点
        \\node[below left] at (0,0,0) {$O$};
        \\draw[thick,red] (0,0,0) -- (0,0,1.2);

    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),i(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}

\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 画三张完全重合的平面（这里只画一个 XZ 平面）
        \\fill[red] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,0.1,0) -- (-1.2,0.1,1.2) -- (1.2,0.1,1.2) -- (1.2,0.1,0) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,-0.1,0) -- (-1.2,-0.1,1.2) -- (1.2,-0.1,1.2) -- (1.2,-0.1,0) -- cycle;

        % 标记相交点
        \\node[below left] at (0,0,0) {$O$};

    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),i(a,{data:`
`}),s[10]||(s[10]=e('<ul><li><strong>表 (b) 方程组无解的情形</strong></li></ul><table><thead><tr><th>图形</th><th>几何意义</th><th>代数表达</th></tr></thead><tbody><tr><td>5</td><td>三张平面两两相交，且交线相互平行</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo separator="true">,</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">r(A) = 2, r(\\bar{A}) = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span>，且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">a_1, a_2, a_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中任意两个向量都线性无关</td></tr><tr><td>6</td><td>两张平面平行，第三张平面与它们相交</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo separator="true">,</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">r(A) = 2, r(\\bar{A}) = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span>，且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">a_1, a_2, a_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中有两个向量线性相关</td></tr></tbody></table>',2)),i(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}

\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \\tdplotsetmaincoords{20}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 三个平面（都严格平行于 Z 轴）
        \\fill[gray!30,opacity=0.5] (0,-0.5,0) -- (0,1.2,0) -- (0,1.2,1) -- (0,-0.5,1) -- cycle; % x = 0 (YZ 平面)
        \\fill[gray!40,opacity=0.5] (-0.5,0,0) -- (1.2,0,0) -- (1.2,0,1) -- (-0.5,0,1) -- cycle;  % y = 0 (XZ 平面)
        \\fill[gray!50,opacity=0.5] (-0.2,1.2,0) -- (1.2,-0.2,0) -- (1.2,-0.2,1) -- (-0.2,1.2,1) -- cycle;  % x + y = 1

        % 三条交线 (都严格沿 z 轴)
        \\draw[thick,red] (0,0,0) -- (0,0,1);  % 交线 1 (原点)
        \\draw[thick,red] (1,0,0) -- (1,0,1);  % 交线 2
        \\draw[thick,red] (0,1,0) -- (0,1,1);  % 交线 3

    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),i(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}

\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 绘制两个平行的 XZ 平面
        \\fill[gray!20,opacity=0.5] (-1.2,-1.2,0) -- (1.2,-1.2,0) -- (1.2,-1.2,1.2) -- (-1.2,-1.2,1.2) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,1.2,0) -- (1.2,1.2,0) -- (1.2,1.2,1.2) -- (-1.2,1.2,1.2) -- cycle;

        % 第三张平面（YZ 平面）
        \\fill[gray!40,opacity=0.5] (0,-1.5,0) -- (0,-1.5,1.2) -- (0,1.5,1.2) -- (0,1.5,0) -- cycle;

        % 交线：两条平行的红色直线
        \\draw[thick,red] (0,-1.2,0) -- (0,-1.2,1.2);
        \\draw[thick,red] (0,1.2,0) -- (0,1.2,1.2);

    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),s[11]||(s[11]=n("h3",{id:"标准旋转体填充",tabindex:"-1"},"标准旋转体填充",-1)),s[12]||(s[12]=n("p",null,"以后旋转体都严格按照这个模式进行",-1)),i(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}

% 设定旋转体视角角度
\\def\\phi{80} %俯仰角
\\def\\theta{120}   % 旋转角度
\\def\\thetaEdgeA{\\theta-10}  % 视角边界角1（120° - 10°）
\\def\\thetaEdgeB{\\theta+180+10}  % 视角边界角2（120° + 180° + 10°）

\\tdplotsetmaincoords{\\phi}{\\theta}
\\begin{tikzpicture}
    \\begin{scope}[tdplot_main_coords]

        % 坐标轴
        \\draw[->] (0,0,0) -- (4,0,0) node[below right] {$x$};
        \\draw[->] (0,0,0) -- (0,4,0) node[below left] {$y$};
        \\draw[->] (0,0,0) -- (0,0,3) node[above] {$z$};

        % 深灰色圆环（XY 平面上的投影）
        \\fill[black!60,opacity=0.5] (0,0,0) circle (2);
        \\fill[white!100] (0,0,0) circle (1); % 中心填充黑色形成圆环
        \\draw[thick, black] (0,0,0) circle (2);
		\\draw[thick, black] (0,0,0) circle (1);

        % **蓝色填充区域（正确匹配视角边界 110° 和 310°）** 使用两段 fill
		% 内层
		\\draw[fill=white!70,fill opacity=0.5] 
			plot[variable=\\t,domain=\\thetaEdgeB:\\thetaEdgeA,smooth] ({2*cos(\\t)},{2*sin(\\t)},{2}) 
		 -- plot[variable=\\t,domain=\\thetaEdgeA:\\thetaEdgeB,smooth] ({cos(\\t)},{sin(\\t)},{1}) 
		 -- cycle;
		% 外层
        \\draw[fill=blue!90,fill opacity=0.9] 
            plot[variable=\\t,domain=\\thetaEdgeB:\\thetaEdgeA+360,smooth] ({2*cos(\\t)},{2*sin(\\t)},{2}) 
         -- plot[variable=\\t,domain=\\thetaEdgeA+360:\\thetaEdgeB,smooth] ({cos(\\t)},{sin(\\t)},{1}) 
         -- cycle;

        % **虚线轮廓（XOZ, YOZ 平行边界）**
        \\draw[dashed] (0,0,0) -- (2,0,2);
        \\draw[dashed] (0,0,0) -- (0,2,2);
		\\draw[dashed] (0,0,0) -- (-2,0,2);
        \\draw[dashed] (0,0,0) -- (0,-2,2);

        % **真实视角边缘轮廓线（\\thetaEdgeA 和 \\thetaEdgeB 实线）**
        \\foreach \\angle in {\\thetaEdgeA, \\thetaEdgeB} {
            \\draw[thick] (0,0,0) -- ({2*cos(\\angle)},{2*sin(\\angle)},2);
        }

        % 顶部圆形（r=2 边界）
        \\draw[smooth] (2,0,2) arc[start angle=0,end angle=360,x radius=2,y radius=2];
        \\draw[smooth] (1,0,1) arc[start angle=0,end angle=360,x radius=1,y radius=1];

		% **法向量（起点在 r=1.5, z=1.5, 朝向 XOZ 平面外）**
        \\draw[->,thick] (1.5,0,1.5) -- (2,0,1) node[left] {$\\mathbf{n}$};

        % 标注点
        \\node[below left] at (0,0,0) {$O$};
        \\node[right] at (0,1,0) {$1$};
        \\node[right] at (0,2,0) {$2$};
        \\node[right] at (0,0,1) {$1$};
        \\node[right] at (0,0,2) {$2$};
        
        % 标注方程
	    \\node[right] at (0,1.5,1) {\\large $z=\\sqrt{x^2+y^2}$};

    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),s[13]||(s[13]=n("h2",{id:"树状图",tabindex:"-1"},"树状图",-1)),s[14]||(s[14]=n("h3",{id:"纵向",tabindex:"-1"},"纵向",-1)),i(a,{data:`\\begin{document}
\\begin{tikzpicture}
    % 根节点
    \\node {$z$}
        child {node {$x$} 
            child {node {$y$} 
                child {node {$x$}}
            }
        }
        child {node {$y$}
            child {node {$g(x)$} 
                child {node {$y$}} 
                child {node {$g(x)$} 
                    child {node {$x$}}
                }
            }
        };
\\end{tikzpicture}
\\end{document}
`}),s[15]||(s[15]=n("h3",{id:"横向",tabindex:"-1"},"横向",-1)),i(a,{data:`\\begin{document}
\\begin{tikzpicture}[
    grow=right, % 让树从左向右生长
    level distance=10mm, % 每个层级的间距
    sibling distance=10mm, % 兄弟节点的间距
    edge from parent/.style={draw,thick} % 连接线样式
]
    % 根节点
    \\node {$z$}
        child {node {$x$} 
            child {node {$y$} 
                child {node {$x$}}
            }
        }
        child {node {$y$}
            child {node {$g(x)$} 
                child {node {$y$}} 
                child {node {$g(x)$} 
                    child {node {$x$}}
                }
            }
        };
\\end{tikzpicture}
\\end{document}
`}),s[16]||(s[16]=e('<p>在 <code>tikz</code> 画横向树时，默认情况下 <strong>兄弟节点（sibling nodes）会均匀分布</strong>，但如果一个分支有更多层次的节点，而另一个分支较浅，TikZ 可能会 <strong>将较浅的分支的节点与较深分支的部分节点重叠</strong>。</p><h3 id="解决方案" tabindex="-1"><strong>解决方案</strong></h3><ol><li><strong>使用 <code>level distance</code> 让层级间距适应不同深度</strong><ul><li><code>level distance</code> 设定层间距离，但 TikZ 不能自动为深度不同的子树调整距离。</li><li>可以 <strong>单独设置特定层级的 <code>sibling distance</code> 以避免重叠</strong>。</li></ul></li><li><strong>增加 <code>sibling distance</code> 以避免重叠</strong><ul><li><code>sibling distance</code> 控制同一级别节点的水平间隔。</li><li>TikZ 默认让兄弟节点 <strong>均匀分布</strong>，但我们可以 <strong>手动增加间隔</strong>。</li></ul></li><li>**手动调整特定子树的 `level distance <ul><li>可以 <strong>为不同的层级设置不同的 <code>level distance</code></strong> 让它们分布得更合理。</li></ul></li></ol>',3)),i(a,{data:`\\begin{document}
\\begin{tikzpicture}[
grow=right, % 让树从左向右生长
sibling distance=15mm, % 兄弟节点的默认间距
edge from parent/.style={draw,thick}, % 连接线样式
level distance=12mm, % 默认层级间距
level 2/.style={sibling distance=5mm}, % 让第二层的节点稍微分开，避免重叠
level 3/.style={sibling distance=14mm} % 让第三层稍微紧凑
]
% 根节点
\\node {$z$}
child {node {$xy$} 
child {node {$x$}}
child {node {$y$}} 
}
child {node {$yg(x)$} 
child {node {$g(x)$} 
child {node {$x$}}}
child {node {$y$}} 
};
\\end{tikzpicture}
\\end{document}
`}),i(a,{data:`\\begin{document}
\\begin{tikzpicture}
    % 坐标轴
    \\draw[->,thick] (-0.5,0) -- (3,0) node[right] {};
    \\draw[->,thick] (0,-0.5) -- (0,3) node[above] {};
    % 直线 (主干)
    \\draw[thick] (-0.5,-0.5) -- (2.5,2.5);
    % 斜向分叉线
    \\foreach \\i in {0.5,1,1.5,2} {
        \\draw[thick] (\\i,\\i) -- (\\i+0.5,\\i+1);
    }
\\end{tikzpicture}
\\end{document}
`}),s[17]||(s[17]=n("hr",null,null,-1)),s[18]||(s[18]=n("h2",{id:"其他案例",tabindex:"-1"},"其他案例",-1)),s[19]||(s[19]=n("p",null,[t("一个失败的案例, 原因是忘记导入 "),n("code",null,"\\usepackage{tikz-3dplot}"),t(" 包了, 加上就好")],-1)),i(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角
    \\tdplotsetmaincoords{70}{120}
    \\begin{scope}[tdplot_main_coords]
        % 坐标轴
        \\draw[->,thick] (0,0,0) -- (1.5,0,0) node[below left] {$x$};
        \\draw[->,thick] (0,0,0) -- (0,1.5,0) node[below right] {$y$};
        \\draw[->,thick] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 空间三角形 (红色)
        \\draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,1) -- cycle;
        % 底面三角形 (阴影填充)
        \\begin{scope}
            \\clip (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
            \\foreach \\i in {0.1,0.2,...,0.9} {
                \\draw[red!50] (1-\\i,\\i,0) -- (1-\\i+0.1,\\i,0);
            }
        \\end{scope}
        \\draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
        % 标注点
        \\node[below left] at (0,0,0) {$0$};
        \\node[left] at (0,0,1) {$1$};
        \\node[right] at (1,0,0) {$1$};
        \\node[above] at (0,1,0) {$1$};
        % 文字标注
        \\node at (0.2,0.5,0.7) {\\large $\\Sigma$};
        \\node at (0.3,0.2,0) {\\large $D$};
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),s[20]||(s[20]=n("h2",{id:"automaton",tabindex:"-1"},"Automaton",-1)),s[21]||(s[21]=n("h3",{id:"tikz绘制自动机的状态转移图示例",tabindex:"-1"},"tikz绘制自动机的状态转移图示例:",-1)),i(a,{data:`\\usepackage{tikz}

\\begin{document}
\\begin{tikzpicture}

  % 定义状态
  \\node (p0) at (0, 0) [circle, draw, double] {$p_0$}; % 接受状态
  \\node (p1) at (3, 0) [circle, draw] {$p_1$};
  \\node (p2) at (3, -3) [circle, draw] {$p_2$};
  \\node (p3) at (0, -3) [circle, draw] {$p_3$};

  % 转移路径
  \\draw[->] (p0) to[loop above] node {0} ();
  \\draw[->] (p0) to[bend left] node[midway, above] {1} (p1);
  \\draw[->] (p0) to[bend left=15] node[midway, right] {2} (p2);
  \\draw[->] (p0) to[bend right] node[midway, left] {3} (p3);

  \\draw[->] (p1) to[loop above] node {0} ();
  \\draw[->] (p1) to[bend left] node[midway, right] {1} (p2);
  \\draw[->] (p1) to[bend left=15] node[midway, right] {2} (p3);
  \\draw[->] (p1) to[bend right] node[midway, above] {3} (p0);

  \\draw[->] (p2) to[loop below] node {0} ();
  \\draw[->] (p2) to[bend left] node[midway, below] {1} (p3);
  \\draw[->] (p2) to[bend left=15] node[midway, left] {2} (p0);
  \\draw[->] (p2) to[bend right] node[midway, right] {3} (p1);

  \\draw[->] (p3) to[loop below] node {0} ();
  \\draw[->] (p3) to[bend left] node[midway, left] {1} (p0);
  \\draw[->] (p3) to[bend left=15] node[midway, left] {2} (p1);
  \\draw[->] (p3) to[bend right] node[midway, below] {3} (p2);

\\end{tikzpicture}
\\end{document}
`}),s[22]||(s[22]=n("h3",{id:"多边形",tabindex:"-1"},"多边形",-1)),i(a,{data:`\\usepackage{tikz}

\\begin{document}
\\begin{tikzpicture}[mystyle/.style={draw, shape=circle, text=white, minimum size=6mm}
]

% Define the center of the pentagon
\\coordinate (center) at (0, 0);

% Define nodes at equal angles around the center
\\foreach \\i in {1, 2, 3, 4, 5} {
    \\node[mystyle] (q\\i) at ({72*\\i-72}:2cm) {$q_{\\i}$}; % 72° spacing for pentagon
}

% Draw transitions between nodes
\\foreach \\i [evaluate={\\j=int(mod(\\i,5)+1)}] in {1, 2, 3, 4, 5} {
    \\draw[->] (q\\i) -- (q\\j); % Connect nodes in a closed loop
}

\\end{tikzpicture}
\\end{document}

`}),s[23]||(s[23]=n("h3",{id:"example",tabindex:"-1"},"example",-1)),i(a,{data:`\\usepackage{tikz}

\\begin{document}
\\begin{tikzpicture}[->, shorten >=1pt, auto, node distance=1.5cm, thick]

  % Define the states
  \\node (q2) at (180:1.5cm) [circle, draw, double] {$q_2$}; % q2 at 180° (leftmost point)

  % Define the pentagon nodes using polar coordinates around q2
  \\foreach \\i in {1, 2, 3, 4} {
    \\node (q\\the\\numexpr\\i+2\\relax) at ({180 - 72*\\i}:1.5cm) [circle, draw] {$q_{\\the\\numexpr\\i+2\\relax}$};
  }
  \\node (q1) [circle, draw, left of=q2] {$q_1$};
  \\node (q0) [circle, draw, left of=q1] {$q_0$};

  % Draw the transitions
  \\path (q0) edge node {0} (q1)
        (q1) edge node {0} (q2)
        (q2) edge node {0} (q3)
        (q3) edge node {0} (q4)
        (q4) edge node {0} (q5)
        (q5) edge node {0} (q6)
        (q6) edge node {0} (q2);

  % Start state arrow
  \\draw[->] (-5.5, -1) -- (q0);

\\end{tikzpicture}
\\end{document}
`}),s[24]||(s[24]=e(`<hr><h2 id="绘图失败原因汇总" tabindex="-1">绘图失败原因汇总</h2><h4 id="_1-计算溢出" tabindex="-1"><strong>1. 计算溢出</strong></h4><ul><li><strong>问题</strong>：高次幂、多项式计算导致 TikzJax 计算失败。</li><li><strong>解决方案</strong>： <ul><li>限制 <code>y</code> 轴范围：<code>max(y_{\\min}, min(y_{\\max}, f(x)))</code></li><li>降低幂次：尝试分解或近似表示。</li></ul></li></ul><h4 id="_2-超出坐标轴范围" tabindex="-1"><strong>2. 超出坐标轴范围</strong></h4><ul><li><strong>问题</strong>：曲线部分超出可视范围，导致图像部分缺失或溢出。</li><li><strong>解决方案</strong>： <ul><li><strong>手动设置 <code>x</code> 和 <code>y</code> 轴范围</strong>，例如 <code>domain=0.5:4.5, ymin=-2, ymax=2</code>。</li></ul></li></ul><h4 id="_3-tikzjax-不支持-pgfplots" tabindex="-1"><strong>3. TikzJax 不支持 <code>pgfplots</code></strong></h4><ul><li><strong>问题</strong>：在 Obsidian 中，<code>pgfplots</code> 不能直接使用。</li><li><strong>解决方案</strong>： <ul><li>只用 <code>\\draw plot</code>，不要 <code>\\addplot</code> 和 <code>\\begin{axis}</code>。</li><li>预计算点值并手动绘制。</li></ul></li></ul><h4 id="_4-计算精度问题" tabindex="-1"><strong>4. 计算精度问题</strong></h4><ul><li><strong>问题</strong>：某些 <code>plot</code> 计算 TikzJax 解析失败。</li><li><strong>解决方案</strong>： <ul><li>增加 <code>samples</code>，如 <code>samples=100</code>。</li><li>复杂计算分步执行，或使用 <code>foreach</code> 逐点绘制。</li></ul></li></ul><h4 id="_5-3d-视角错误" tabindex="-1"><strong>5. 3D 视角错误</strong></h4><ul><li><strong>问题</strong>：3D 视角不符合需求，导致 <code>x, y, z</code> 轴方向不正确。</li><li><strong>解决方案</strong>： <ul><li>设定 <code>\\tdplotsetmaincoords{80}{120}</code> 统一标准视角。</li><li>只绘制主要轮廓，去除 <code>surf</code> 填充。</li></ul></li></ul><h4 id="_6-颜色与-tikzjax-兼容问题" tabindex="-1"><strong>6. 颜色与 TikzJax 兼容问题</strong></h4><ul><li><strong>问题</strong>：某些 <code>colormap</code>、<code>opacity</code> 设置可能导致 TikzJax 解析失败。</li><li><strong>解决方案</strong>： <ul><li>避免 <code>colormap</code>，只用 <code>black!50</code>、<code>gray</code>。</li><li>使用 <code>pattern</code> 代替 <code>fill opacity</code>。</li></ul></li></ul><h4 id="_7-复杂阴影填充失败" tabindex="-1"><strong>7. 复杂阴影填充失败</strong></h4><ul><li><strong>问题</strong>：<code>clip</code> 可能导致 TikzJax 解析异常。</li><li><strong>解决方案</strong>： <ul><li>先用 <code>\\clip</code> 限制区域，再 <code>\\fill</code> 。</li><li>避免 <code>clip</code>，改用 <code>filldraw</code> 手动绘制封闭区域。</li></ul></li></ul><h4 id="_8-关键点与标注" tabindex="-1"><strong>8. 关键点与标注</strong></h4><ul><li><strong>问题</strong>：关键点未标记，导致数学分析不直观。</li><li><strong>解决方案</strong>： <ul><li>使用 <code>\\node[below]</code> 明确标注关键点（如 <code>x=1,2,3,4</code>）。</li><li>方程统一放置在右上角：<code>\\node[anchor=west]</code>。</li></ul></li></ul><h4 id="_9-忘记导入3d包" tabindex="-1">9. 忘记导入3d包</h4><ul><li><strong>问题</strong>：忘记导入3d包，导致无法加载3d图形。</li><li><strong>解决方案</strong>：使用 <code>\\usepackage{tikz-3dplot}</code> 导入tikz-3dplot包</li></ul><h4 id="_10-坐标轴" tabindex="-1">10. 坐标轴</h4><ul><li>坐标轴绘制, 不要使用白色: <code>\\draw[-&gt;,white]</code> 在黑暗模式下会看不清</li></ul><h1 id="绘图经验总结" tabindex="-1"><strong>绘图经验总结</strong></h1><h2 id="_1-轴刻度" tabindex="-1"><strong>1. 轴刻度</strong></h2><ul><li><strong>X 轴、Y 轴刻度需完整标注</strong>，避免遗漏关键点：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\foreach \\x in {1,2,3} {</span></span>
<span class="line"><span>  \\draw (\\x,0.1) -- (\\x,-0.1) node[below] {$\\x$};</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\foreach \\y in {1,2,3} {</span></span>
<span class="line"><span>  \\draw (0.1,\\y) -- (-0.1,\\y) node[left] {$\\y$};</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-分段函数绘制" tabindex="-1"><strong>2. 分段函数绘制</strong></h2><ul><li><strong>端点处理</strong>： <ul><li><strong>闭区间（取值）</strong>： <code>\\filldraw (x,y) circle (2pt);</code></li><li><strong>开区间（不取值）</strong>： <code>\\draw[fill=white] (x,y) circle (2pt);</code></li></ul></li><li><strong>避免错误连接</strong>，分段独立绘制：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\draw[thick] (a,b) -- (c,d); % 正常直线</span></span>
<span class="line"><span>\\draw[thick,-&gt;] (a,b) -- (c,d); % 延伸部分</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-标注" tabindex="-1"><strong>3. 标注</strong></h2><ul><li><strong>紧靠对应函数段落，避免放远处</strong>：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\node[above] at (0.5,2) {$Y=2\\ (X\\leq1)$};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="_4-绘图范围控制" tabindex="-1"><strong>4. 绘图范围控制</strong></h2><ul><li><strong>局部调整，避免全局修改</strong>，保证 X&lt;0 和 X&gt;3 不受影响。</li><li><strong>箭头 (<code>-&gt;</code>) 只用于表示无限延伸</strong>。</li></ul><h2 id="_5-代码结构" tabindex="-1"><strong>5. 代码结构</strong></h2><ul><li><strong>顺序：坐标轴 → 刻度 → 线条 → 端点 → 标注</strong>。</li><li><strong>使用 <code>scale=1</code> 确保显示正常</strong>：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\begin{tikzpicture}[scale=1]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul>`,33))])}const k=l(h,[["render",o]]),g=JSON.parse('{"path":"/Other/%E8%AF%B4%E6%98%8E/tikz%E7%BB%98%E5%9B%BE%E6%A0%87%E5%87%86.html","title":"简介","lang":"zh-CN","frontmatter":{"tags":["数学"],"description":"简介 环境配置 代码类型: tikz 可用package The following packages are available in \\\\usepackage{}: chemfig tikz-cd circuitikz pgfplots array amsmath amstext amsfonts amssymb tikz-3dplot 部分pack...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-10-17T05:21:00.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://PKM-er.github.io/Pkmer-Math/Other/%E8%AF%B4%E6%98%8E/tikz%E7%BB%98%E5%9B%BE%E6%A0%87%E5%87%86.html"}],["meta",{"property":"og:site_name","content":"Pkmer-Math"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"简介 环境配置 代码类型: tikz 可用package The following packages are available in \\\\usepackage{}: chemfig tikz-cd circuitikz pgfplots array amsmath amstext amsfonts amssymb tikz-3dplot 部分pack..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-10-17T05:21:00.000Z"}],["meta",{"property":"article:tag","content":"数学"}],["meta",{"property":"article:modified_time","content":"2025-10-17T05:21:00.000Z"}]],"tag":["数学"]},"git":{"createdTime":1760678460000,"updatedTime":1760678460000,"contributors":[{"name":"Cyletix","username":"Cyletix","email":"1016120209@qq.com","commits":1,"url":"https://github.com/Cyletix"}]},"readingTime":{"minutes":21.72,"words":6515},"filePathRelative":"Other/说明/tikz绘图标准.md","excerpt":"\\n<h2>环境配置</h2>\\n<p>代码类型: tikz</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-\\"><span class=\\"line\\"><span>\\\\usepackage{tikz}</span></span>\\n<span class=\\"line\\"><span>\\\\begin{document}</span></span>\\n<span class=\\"line\\"><span>\\\\begin{tikzpicture}</span></span>\\n<span class=\\"line\\"><span>...</span></span>\\n<span class=\\"line\\"><span>\\\\end{tikzpicture}</span></span>\\n<span class=\\"line\\"><span>\\\\end{document}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"内容规范","link":"Other/说明/内容规范.html"},{"title":"插件配置说明","link":"Other/说明/插件配置说明.html"}],"localMap":{"nodes":[{"id":"Other/说明/tikz绘图标准.md","value":{"title":"tikz绘图标准","path":"Other/说明/tikz绘图标准.md","outlink":[],"backlink":["Other/说明/内容规范.md","Other/说明/插件配置说明.md"]}},{"id":"Other/说明/内容规范.md","value":{"title":"内容规范","path":"Other/说明/内容规范.md","outlink":[],"backlink":[]}},{"id":"Other/说明/插件配置说明.md","value":{"title":"插件配置说明","path":"Other/说明/插件配置说明.md","outlink":[],"backlink":[]}}],"links":[{"source":"Other/说明/内容规范.md","target":"Other/说明/tikz绘图标准.md"},{"source":"Other/说明/插件配置说明.md","target":"Other/说明/tikz绘图标准.md"}]}}}');export{k as comp,g as data};
