import{_ as n,c as a,b as i,o as e}from"./app-hwWD7-tn.js";const l={};function d(p,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h2><p>代码类型: tikz</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\usepackage{tikz}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可用package" tabindex="-1"><a class="header-anchor" href="#可用package"><span>可用package</span></a></h2><p>The following packages are available in <code>\\usepackage{}</code>:</p><ul><li>chemfig</li><li>tikz-cd</li><li>circuitikz</li><li>pgfplots</li><li>array</li><li>amsmath</li><li>amstext</li><li>amsfonts</li><li>amssymb</li><li>tikz-3dplot</li></ul><h3 id="部分package示例" tabindex="-1"><a class="header-anchor" href="#部分package示例"><span>部分package示例</span></a></h3><ul><li>3D线图: <code>\\usepackage{tikz-3dplot}</code></li><li>网格图: <code>\\usepackage{pgfplots}</code></li><li>电路: <code>\\usepackage{circuitikz}</code></li><li>交换图: <code>\\usepackage{tikz-cd}</code></li><li>有机化学: <code>\\usepackage{chemfig}</code></li></ul><hr><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h2><p>TikZ 内置了一些常见的颜色方案，方便绘图时使用。这些颜色可以直接引用，也可以通过 <code>xcolor</code> 包扩展。以下是主要内置颜色方案：</p><h3 id="常用颜色" tabindex="-1"><a class="header-anchor" href="#常用颜色"><span>常用颜色</span></a></h3><ul><li><strong>基础颜色</strong>： - <code>black</code><ul><li><code>white</code></li><li><code>red</code></li><li><code>green</code></li><li><code>blue</code></li><li><code>cyan</code></li><li><code>magenta</code></li><li><code>yellow</code></li></ul></li><li><strong>灰度颜色</strong>（通过数值指定，<code>0</code> 表示黑，<code>1</code> 表示白）： <ul><li><code>gray</code>（例如 <code>gray!50</code> 表示 50% 灰色）</li></ul></li></ul><h3 id="混合颜色" tabindex="-1"><a class="header-anchor" href="#混合颜色"><span>混合颜色</span></a></h3><ul><li>TikZ 支持颜色混合，语法为 <code>color1!percentage!color2</code>。 例如： <ul><li><code>red!50!blue</code>：红色和蓝色各占 50%。</li><li><code>green!30!white</code>：绿色占 30%，白色占 70%。</li></ul></li></ul><h3 id="其他内置颜色" tabindex="-1"><a class="header-anchor" href="#其他内置颜色"><span>其他内置颜色</span></a></h3><p>通过加载 <code>xcolor</code> 扩展包，可以使用更多颜色：</p><ul><li><strong>自然颜色</strong>： <ul><li><code>brown</code></li><li><code>lime</code></li><li><code>orange</code></li><li><code>pink</code></li><li><code>violet</code></li><li><code>purple</code></li><li><code>teal</code></li><li><code>olive</code></li></ul></li><li><strong>Web 颜色</strong>（需要 <code>dvipsnames</code> 选项支持）： <ul><li><code>Aquamarine</code></li><li><code>NavyBlue</code></li><li><code>SkyBlue</code></li><li><code>Emerald</code></li><li><code>Periwinkle</code></li><li><code>Sepia</code></li></ul></li></ul><h3 id="自定义颜色" tabindex="-1"><a class="header-anchor" href="#自定义颜色"><span>自定义颜色</span></a></h3><p>你也可以通过以下方式定义自定义颜色：</p><ol><li>RGB 模式：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" data-title="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{rgb}{0.2, 0.4, 0.6}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>HTML 颜色代码：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" data-title="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{HTML}{1A2B3C}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>CMYK 模式：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" data-title="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{cmyk}{0.1, 0.2, 0.3, 0.4}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h3 id="应用方式" tabindex="-1"><a class="header-anchor" href="#应用方式"><span>应用方式</span></a></h3><p>在 TikZ 中，可以通过以下方式应用颜色：</p><ol><li>改变线条颜色：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" data-title="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[red] (0,0) -- (1,1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>改变填充颜色：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" data-title="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[blue] (0,0) rectangle (1,1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>组合颜色属性：<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" data-title="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[fill=yellow,draw=red] (0,0) circle (1cm);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>通过这些内置和扩展颜色，几乎可以满足大多数绘图需求</p><h2 id="_2d图" tabindex="-1"><a class="header-anchor" href="#_2d图"><span>2D图</span></a></h2><ul><li>定义变量<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>的范围: <code>\\draw[domain= 0:1,smooth,variable=\\x]</code></li></ul><h2 id="_3d图" tabindex="-1"><a class="header-anchor" href="#_3d图"><span>3D图</span></a></h2><h3 id="旋转体" tabindex="-1"><a class="header-anchor" href="#旋转体"><span>旋转体</span></a></h3><ul><li><p>观察角: % 设置 3D 视角（俯仰角 80° 通常是固定的; 水平旋转角 120°, 或90°） <code>\\tdplotsetmaincoords{80}{120}</code></p></li><li><p>实线绘制边缘 <code>\\draw[smooth, thick]</code>, 根据水平旋转角 120°, 绘制另一边120°+180°=300° ,两条边</p></li><li><p>虚线绘制主平面投影 <code>\\draw[dashed]</code></p></li><li><p>仅有实体形状才使用加粗<code>\\draw[smooth, thick]</code>, 如: 圆柱的底部,顶部,边界 用实线绘制, 没有明确指定则不调整颜色</p></li><li><p>相交平面使用 填充透明度0.2: <code>\\fill[black!20,opacity=0.2]</code></p></li></ul><hr><h1 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h1><h2 id="_2d" tabindex="-1"><a class="header-anchor" href="#_2d"><span>2D</span></a></h2><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>% 绘制坐标轴</span></span>
<span class="line"><span>\\draw[-&gt;] (-0.2,0) -- (1.5,0) node[right] {$x$};</span></span>
<span class="line"><span>\\draw[-&gt;] (0,-1) -- (0,1) node[above] {$y$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 定义曲线 y = ln(x)，限制范围</span></span>
<span class="line"><span>\\draw[domain=0.2:1.5,smooth,variable=\\x] </span></span>
<span class="line"><span>plot ({\\x}, {ln(\\x)}) node[right] {$y = \\ln(x)$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 填充阴影区域</span></span>
<span class="line"><span>\\begin{scope} \\clip (0,-1.5) rectangle (1,0); \\fill[black!20,opacity=0.7] plot[domain=0.01:1,smooth]({\\x}, {ln(\\x)}) -- (1,0) -- (0,0) -- cycle; \\end{scope}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 标记点</span></span>
<span class="line"><span>\\node[below] at (1,0) {1};</span></span>
<span class="line"><span>\\node[below left] at (0,0) {0};</span></span>
<span class="line"><span>\\node[below left] at (0.05, -1) {$(0, \\ln(x))$};</span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>% 绘制坐标轴</span></span>
<span class="line"><span>\\draw[-&gt;] (-1.5,0) -- (1.5,0) node[right] {$x$};</span></span>
<span class="line"><span>\\draw[-&gt;] (0,-0.5) -- (0,1.5) node[above] {$y$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 三角形顶点</span></span>
<span class="line"><span>\\coordinate (A) at (-1,0);</span></span>
<span class="line"><span>\\coordinate (B) at (1,0);</span></span>
<span class="line"><span>\\coordinate (C) at (0,1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 绘制三角形边</span></span>
<span class="line"><span>\\draw[thick,red!50] (A) -- (C) node[midway,left] {$L_1$};</span></span>
<span class="line"><span>\\draw[thick,red!50] (C) -- (B) node[midway,right] {$L_2$};</span></span>
<span class="line"><span>\\draw[thick,blue!50] (B) -- (A) node[midway,below] {$L_3$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 标注顶点</span></span>
<span class="line"><span>\\node[below left] at (A) {$(-1,0)$};</span></span>
<span class="line"><span>\\node[below right] at (B) {$(1,0)$};</span></span>
<span class="line"><span>\\node[above] at (C) {$(0,1)$};</span></span>
<span class="line"><span>\\node[below left] at (0,0) {$0$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 添加方向箭头</span></span>
<span class="line"><span>\\draw[-&gt;,red!50,line width=1pt] (-0.5,0.5) -- (-0.45,0.55);</span></span>
<span class="line"><span>\\draw[-&gt;,red!50,line width=1pt] (0.5,0.5) -- (0.55,0.45);</span></span>
<span class="line"><span>\\draw[-&gt;,blue!50,line width=1pt] (0,-0.05) -- (-0.05,-0.05);</span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3d" tabindex="-1"><a class="header-anchor" href="#_3d"><span>3D</span></a></h2><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\usepackage{tikz-3dplot}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）</span></span>
<span class="line"><span>    \\tdplotsetmaincoords{80}{120}</span></span>
<span class="line"><span>    \\begin{scope}[tdplot_main_coords]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 绘制坐标轴</span></span>
<span class="line"><span>        \\draw[-&gt;] (0,0,0) -- (1.5,0,0) node[below right] {$x$};</span></span>
<span class="line"><span>        \\draw[-&gt;] (0,0,0) -- (0,1.5,0) node[below left] {$y$};</span></span>
<span class="line"><span>        \\draw[-&gt;] (0,0,0) -- (0,0,1.5) node[above] {$z$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 主平面上的虚线轮廓</span></span>
<span class="line"><span>        \\draw[dashed] plot[domain=0:1,samples=50] ({\\x},0,{\\x*\\x});</span></span>
<span class="line"><span>        \\draw[dashed] plot[domain=0:1,samples=50] ({-\\x},0,{\\x*\\x});</span></span>
<span class="line"><span>        \\draw[dashed] plot[domain=0:1,samples=50] (0,{\\x},{\\x*\\x});</span></span>
<span class="line"><span>        \\draw[dashed] plot[domain=0:1,samples=50] (0,{-\\x},{\\x*\\x});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 真实边缘轮廓</span></span>
<span class="line"><span>        \\foreach \\angle in {120, 300} {</span></span>
<span class="line"><span>            \\draw[smooth, thick] plot[domain=0:1,samples=50] </span></span>
<span class="line"><span>                ({\\x*cos(\\angle)},{\\x*sin(\\angle)},{\\x*\\x});</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 顶部圆形</span></span>
<span class="line"><span>        \\draw[smooth] (1,0,1) arc[start angle=0,end angle=360,x radius=1,y radius=1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 标注点</span></span>
<span class="line"><span>        \\node[below left] at (0,0,0) {$O$};</span></span>
<span class="line"><span>        \\node[right] at (0,0,1) {$z=1$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 在右侧标注曲面方程</span></span>
<span class="line"><span>        \\node[anchor=west] at (0,1,0.5) {\\large $z = x^2 + y^2$};</span></span>
<span class="line"><span>    \\end{scope}</span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="tikz-绘图失败原因与解决方案总结" tabindex="-1"><a class="header-anchor" href="#tikz-绘图失败原因与解决方案总结"><span>TikZ 绘图失败原因与解决方案总结</span></a></h1><h4 id="_1-计算溢出" tabindex="-1"><a class="header-anchor" href="#_1-计算溢出"><span><strong>1. 计算溢出</strong></span></a></h4><ul><li><strong>问题</strong>：高次幂、多项式计算导致 TikzJax 计算失败。</li><li><strong>解决方案</strong>： <ul><li>限制 <code>y</code> 轴范围：<code>max(y_{\\min}, min(y_{\\max}, f(x)))</code></li><li>降低幂次：尝试分解或近似表示。</li></ul></li></ul><h4 id="_2-超出坐标轴范围" tabindex="-1"><a class="header-anchor" href="#_2-超出坐标轴范围"><span><strong>2. 超出坐标轴范围</strong></span></a></h4><ul><li><strong>问题</strong>：曲线部分超出可视范围，导致图像部分缺失或溢出。</li><li><strong>解决方案</strong>： <ul><li><strong>手动设置 <code>x</code> 和 <code>y</code> 轴范围</strong>，例如 <code>domain=0.5:4.5, ymin=-2, ymax=2</code>。</li></ul></li></ul><h4 id="_3-tikzjax-不支持-pgfplots" tabindex="-1"><a class="header-anchor" href="#_3-tikzjax-不支持-pgfplots"><span><strong>3. TikzJax 不支持 <code>pgfplots</code></strong></span></a></h4><ul><li><strong>问题</strong>：在 Obsidian 中，<code>pgfplots</code> 不能直接使用。</li><li><strong>解决方案</strong>： <ul><li>只用 <code>\\draw plot</code>，不要 <code>\\addplot</code> 和 <code>\\begin{axis}</code>。</li><li>预计算点值并手动绘制。</li></ul></li></ul><h4 id="_4-计算精度问题" tabindex="-1"><a class="header-anchor" href="#_4-计算精度问题"><span><strong>4. 计算精度问题</strong></span></a></h4><ul><li><strong>问题</strong>：某些 <code>plot</code> 计算 TikzJax 解析失败。</li><li><strong>解决方案</strong>： <ul><li>增加 <code>samples</code>，如 <code>samples=100</code>。</li><li>复杂计算分步执行，或使用 <code>foreach</code> 逐点绘制。</li></ul></li></ul><h4 id="_5-3d-视角错误" tabindex="-1"><a class="header-anchor" href="#_5-3d-视角错误"><span><strong>5. 3D 视角错误</strong></span></a></h4><ul><li><strong>问题</strong>：3D 视角不符合需求，导致 <code>x, y, z</code> 轴方向不正确。</li><li><strong>解决方案</strong>： <ul><li>设定 <code>\\tdplotsetmaincoords{80}{120}</code> 统一标准视角。</li><li>只绘制主要轮廓，去除 <code>surf</code> 填充。</li></ul></li></ul><h4 id="_6-颜色与-tikzjax-兼容问题" tabindex="-1"><a class="header-anchor" href="#_6-颜色与-tikzjax-兼容问题"><span><strong>6. 颜色与 TikzJax 兼容问题</strong></span></a></h4><ul><li><strong>问题</strong>：某些 <code>colormap</code>、<code>opacity</code> 设置可能导致 TikzJax 解析失败。</li><li><strong>解决方案</strong>： <ul><li>避免 <code>colormap</code>，只用 <code>black!50</code>、<code>gray</code>。</li><li>使用 <code>pattern</code> 代替 <code>fill opacity</code>。</li></ul></li></ul><h4 id="_7-复杂阴影填充失败" tabindex="-1"><a class="header-anchor" href="#_7-复杂阴影填充失败"><span><strong>7. 复杂阴影填充失败</strong></span></a></h4><ul><li><strong>问题</strong>：<code>clip</code> 可能导致 TikzJax 解析异常。</li><li><strong>解决方案</strong>： <ul><li>先用 <code>\\clip</code> 限制区域，再 <code>\\fill</code> 。</li><li>避免 <code>clip</code>，改用 <code>filldraw</code> 手动绘制封闭区域。</li></ul></li></ul><h4 id="_8-关键点与标注" tabindex="-1"><a class="header-anchor" href="#_8-关键点与标注"><span><strong>8. 关键点与标注</strong></span></a></h4><ul><li><strong>问题</strong>：关键点未标记，导致数学分析不直观。</li><li><strong>解决方案</strong>： <ul><li>使用 <code>\\node[below]</code> 明确标注关键点（如 <code>x=1,2,3,4</code>）。</li><li>方程统一放置在右上角：<code>\\node[anchor=west]</code>。</li></ul></li></ul><hr><h3 id="标准绘图原则" tabindex="-1"><a class="header-anchor" href="#标准绘图原则"><span><strong>标准绘图原则</strong></span></a></h3><p>✅ <strong>2D：确保 <code>y</code> 轴范围受控，避免 TikzJax 计算溢出</strong><br> ✅ <strong>3D：固定 <code>\\tdplotsetmaincoords{80}{120}</code>，只绘制关键轮廓</strong><br> ✅ <strong>曲线：使用 <code>smooth</code> 和 <code>samples=100</code>，提高解析精度</strong><br> ✅ <strong>颜色：仅用黑白，避免 <code>colormap</code> 和 <code>fill opacity</code></strong><br> ✅ <strong>阴影：尽量 <code>filldraw</code> 而非 <code>clip</code>，减少 TikzJax 解析负担</strong></p><hr><h2 id="斜线填充" tabindex="-1"><a class="header-anchor" href="#斜线填充"><span>斜线填充</span></a></h2><p>在 <strong>Obsidian 的 TikZ 环境（tikzjax）</strong> 下，斜线填充不能使用 <code>\\foreach</code> 循环或者 <code>patterns</code>，因此可以用 <code>\\clip</code> 加 <code>\\fill</code> 来手动绘制斜线填充。下面是修正后的 <strong>tikzjax 兼容代码</strong>：</p><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>    % 绘制坐标轴</span></span>
<span class="line"><span>    \\draw[-&gt;] (-1.5,0) -- (1.5,0) node[right] {$x$};</span></span>
<span class="line"><span>    \\draw[-&gt;] (0,-1.5) -- (0,1.5) node[above] {$y$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 绘制圆 (x^2 + y^2 = 1)</span></span>
<span class="line"><span>    \\draw[thick,red] (0,0) circle(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 在圆内部填充斜线</span></span>
<span class="line"><span>    \\begin{scope}</span></span>
<span class="line"><span>        \\clip (0,0) circle(1); % 只填充圆内区域</span></span>
<span class="line"><span>        \\foreach \\y in {-1.5,-1.2,...,1.5} {</span></span>
<span class="line"><span>            \\draw[red!70] (-1.5,\\y) -- (1.5,\\y+1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    \\end{scope}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 添加旋转箭头</span></span>
<span class="line"><span>    \\draw[-&gt;,red,thick] (1,0) arc[start angle=0,end angle=45,radius=1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码优化点" tabindex="-1"><a class="header-anchor" href="#代码优化点"><span>代码优化点：</span></a></h3><ol><li><strong>斜线填充</strong>： <ul><li>不能使用 <code>\\foreach</code> 在 <code>\\clip</code> 内部，因此 <strong>使用 <code>\\clip</code> 限制区域，然后绘制一系列平行线</strong>，保证它们只出现在圆内部。</li><li>这里的 <code>\\foreach \\y in {-1.5,-1.2,...,1.5}</code> 产生 <strong>从左到右的斜线</strong>。</li></ul></li><li><strong>旋转箭头</strong>： <ul><li>直接用 <code>arc[start angle=0,end angle=45]</code> 绘制 <strong>顺时针旋转的小箭头</strong>。</li></ul></li></ol><h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性：</span></a></h3><p>✔ <strong>完全兼容 Obsidian 的 tikzjax</strong><br> ✔ <strong>正确填充斜线，符合手绘图风格</strong><br> ✔ <strong>不会超出 Obsidian TikZ 插件支持范围</strong></p><hr><h2 id="树状图" tabindex="-1"><a class="header-anchor" href="#树状图"><span>树状图</span></a></h2><h3 id="纵向" tabindex="-1"><a class="header-anchor" href="#纵向"><span>纵向</span></a></h3><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>    % 根节点</span></span>
<span class="line"><span>    \\node {$z$}</span></span>
<span class="line"><span>        child {node {$x$} </span></span>
<span class="line"><span>            child {node {$y$} </span></span>
<span class="line"><span>                child {node {$x$}}</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        child {node {$y$}</span></span>
<span class="line"><span>            child {node {$g(x)$} </span></span>
<span class="line"><span>                child {node {$y$}} </span></span>
<span class="line"><span>                child {node {$g(x)$} </span></span>
<span class="line"><span>                    child {node {$x$}}</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="横向" tabindex="-1"><a class="header-anchor" href="#横向"><span>横向</span></a></h3><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}[</span></span>
<span class="line"><span>    grow=right, % 让树从左向右生长</span></span>
<span class="line"><span>    level distance=10mm, % 每个层级的间距</span></span>
<span class="line"><span>    sibling distance=10mm, % 兄弟节点的间距</span></span>
<span class="line"><span>    edge from parent/.style={draw,thick} % 连接线样式</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 根节点</span></span>
<span class="line"><span>    \\node {$z$}</span></span>
<span class="line"><span>        child {node {$x$} </span></span>
<span class="line"><span>            child {node {$y$} </span></span>
<span class="line"><span>                child {node {$x$}}</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        child {node {$y$}</span></span>
<span class="line"><span>            child {node {$g(x)$} </span></span>
<span class="line"><span>                child {node {$y$}} </span></span>
<span class="line"><span>                child {node {$g(x)$} </span></span>
<span class="line"><span>                    child {node {$x$}}</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>tikz</code> 画横向树时，默认情况下 <strong>兄弟节点（sibling nodes）会均匀分布</strong>，但如果一个分支有更多层次的节点，而另一个分支较浅，TikZ 可能会 <strong>将较浅的分支的节点与较深分支的部分节点重叠</strong>。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span><strong>解决方案</strong></span></a></h3><ol><li><strong>使用 <code>level distance</code> 让层级间距适应不同深度</strong><ul><li><code>level distance</code> 设定层间距离，但 TikZ 不能自动为深度不同的子树调整距离。</li><li>可以 <strong>单独设置特定层级的 <code>sibling distance</code> 以避免重叠</strong>。</li></ul></li><li><strong>增加 <code>sibling distance</code> 以避免重叠</strong><ul><li><code>sibling distance</code> 控制同一级别节点的水平间隔。</li><li>TikZ 默认让兄弟节点 <strong>均匀分布</strong>，但我们可以 <strong>手动增加间隔</strong>。</li></ul></li><li>**手动调整特定子树的 \`level distance <ul><li>可以 <strong>为不同的层级设置不同的 <code>level distance</code></strong> 让它们分布得更合理。</li></ul></li></ol><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}[</span></span>
<span class="line"><span>grow=right, % 让树从左向右生长</span></span>
<span class="line"><span>sibling distance=15mm, % 兄弟节点的默认间距</span></span>
<span class="line"><span>edge from parent/.style={draw,thick}, % 连接线样式</span></span>
<span class="line"><span>level distance=12mm, % 默认层级间距</span></span>
<span class="line"><span>level 2/.style={sibling distance=5mm}, % 让第二层的节点稍微分开，避免重叠</span></span>
<span class="line"><span>level 3/.style={sibling distance=14mm} % 让第三层稍微紧凑</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>% 根节点</span></span>
<span class="line"><span>\\node {$z$}</span></span>
<span class="line"><span>child {node {$xy$} </span></span>
<span class="line"><span>child {node {$x$}}</span></span>
<span class="line"><span>child {node {$y$}} </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>child {node {$yg(x)$} </span></span>
<span class="line"><span>child {node {$g(x)$} </span></span>
<span class="line"><span>child {node {$x$}}}</span></span>
<span class="line"><span>child {node {$y$}} </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>    % 坐标轴</span></span>
<span class="line"><span>    \\draw[-&gt;,thick] (-0.5,0) -- (3,0) node[right] {};</span></span>
<span class="line"><span>    \\draw[-&gt;,thick] (0,-0.5) -- (0,3) node[above] {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 直线 (主干)</span></span>
<span class="line"><span>    \\draw[thick] (-0.5,-0.5) -- (2.5,2.5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 斜向分叉线</span></span>
<span class="line"><span>    \\foreach \\i in {0.5,1,1.5,2} {</span></span>
<span class="line"><span>        \\draw[thick] (\\i,\\i) -- (\\i+0.5,\\i+1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>    % 设置 3D 视角</span></span>
<span class="line"><span>    \\tdplotsetmaincoords{70}{120}</span></span>
<span class="line"><span>    \\begin{scope}[tdplot_main_coords]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 坐标轴</span></span>
<span class="line"><span>        \\draw[-&gt;,thick] (0,0,0) -- (1.5,0,0) node[below left] {$x$};</span></span>
<span class="line"><span>        \\draw[-&gt;,thick] (0,0,0) -- (0,1.5,0) node[below right] {$y$};</span></span>
<span class="line"><span>        \\draw[-&gt;,thick] (0,0,0) -- (0,0,1.5) node[above] {$z$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 空间三角形 (红色)</span></span>
<span class="line"><span>        \\draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,1) -- cycle;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 底面三角形 (阴影填充)</span></span>
<span class="line"><span>        \\begin{scope}</span></span>
<span class="line"><span>            \\clip (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;</span></span>
<span class="line"><span>            \\foreach \\i in {0.1,0.2,...,0.9} {</span></span>
<span class="line"><span>                \\draw[red!50] (1-\\i,\\i,0) -- (1-\\i+0.1,\\i,0);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        \\end{scope}</span></span>
<span class="line"><span>        \\draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 标注点</span></span>
<span class="line"><span>        \\node[below left] at (0,0,0) {$0$};</span></span>
<span class="line"><span>        \\node[left] at (0,0,1) {$1$};</span></span>
<span class="line"><span>        \\node[right] at (1,0,0) {$1$};</span></span>
<span class="line"><span>        \\node[above] at (0,1,0) {$1$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        % 文字标注</span></span>
<span class="line"><span>        \\node at (0.2,0.5,0.7) {\\large $\\Sigma$};</span></span>
<span class="line"><span>        \\node at (0.3,0.2,0) {\\large $D$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    \\end{scope}</span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tikz line-numbers-mode" data-highlighter="shiki" data-ext="tikz" data-title="tikz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>    % 坐标轴</span></span>
<span class="line"><span>    \\draw[-&gt;,thick] (-0.2,0) -- (1.5,0) node[right] {$x$};</span></span>
<span class="line"><span>    \\draw[-&gt;,thick] (0,-0.2) -- (0,1.5) node[above] {$y$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 三角形边界</span></span>
<span class="line"><span>    \\draw[thick,red] (1,0) -- (0,1) -- (0,0) -- cycle;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 斜线填充</span></span>
<span class="line"><span>    \\begin{scope}</span></span>
<span class="line"><span>        \\clip (1,0) -- (0,1) -- (0,0) -- cycle;</span></span>
<span class="line"><span>        \\foreach \\i in {0.1,0.2,...,0.9} {</span></span>
<span class="line"><span>            \\draw[red!50] (0,\\i) -- (\\i,0);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    \\end{scope}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 标注方程</span></span>
<span class="line"><span>    \\node[right] at (0.5,0.6) {\\large $x+y=1$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    % 标注点</span></span>
<span class="line"><span>    \\node[below left] at (0,0) {$0$};</span></span>
<span class="line"><span>    \\node[below] at (1,0) {$1$};</span></span>
<span class="line"><span>    \\node[left] at (0,1) {$1$};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,79)]))}const r=n(l,[["render",d],["__file","tikz绘图标准.html.vue"]]),t=JSON.parse('{"path":"/Other/%E8%AF%B4%E6%98%8E/tikz%E7%BB%98%E5%9B%BE%E6%A0%87%E5%87%86.html","title":"案例","lang":"zh-CN","frontmatter":{"tags":["数学"],"description":"环境配置 代码类型: tikz 可用package The following packages are available in \\\\usepackage{}: chemfig tikz-cd circuitikz pgfplots array amsmath amstext amsfonts amssymb tikz-3dplot 部分package...","head":[["meta",{"property":"og:url","content":"https://PKM-er.github.io/Pkmer-Math/Other/%E8%AF%B4%E6%98%8E/tikz%E7%BB%98%E5%9B%BE%E6%A0%87%E5%87%86.html"}],["meta",{"property":"og:site_name","content":"Pkmer-Math"}],["meta",{"property":"og:title","content":"案例"}],["meta",{"property":"og:description","content":"环境配置 代码类型: tikz 可用package The following packages are available in \\\\usepackage{}: chemfig tikz-cd circuitikz pgfplots array amsmath amstext amsfonts amssymb tikz-3dplot 部分package..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-20T16:40:57.000Z"}],["meta",{"property":"article:tag","content":"数学"}],["meta",{"property":"article:modified_time","content":"2025-02-20T16:40:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"案例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-20T16:40:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"PKM-er\\",\\"url\\":\\"https://github.com/PKM-er/Pkmer-Math/\\"}]}"]]},"headers":[{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":2,"title":"可用package","slug":"可用package","link":"#可用package","children":[{"level":3,"title":"部分package示例","slug":"部分package示例","link":"#部分package示例","children":[]}]},{"level":2,"title":"颜色","slug":"颜色","link":"#颜色","children":[{"level":3,"title":"常用颜色","slug":"常用颜色","link":"#常用颜色","children":[]},{"level":3,"title":"混合颜色","slug":"混合颜色","link":"#混合颜色","children":[]},{"level":3,"title":"其他内置颜色","slug":"其他内置颜色","link":"#其他内置颜色","children":[]},{"level":3,"title":"自定义颜色","slug":"自定义颜色","link":"#自定义颜色","children":[]},{"level":3,"title":"应用方式","slug":"应用方式","link":"#应用方式","children":[]}]},{"level":2,"title":"2D图","slug":"_2d图","link":"#_2d图","children":[]},{"level":2,"title":"3D图","slug":"_3d图","link":"#_3d图","children":[{"level":3,"title":"旋转体","slug":"旋转体","link":"#旋转体","children":[]}]},{"level":1,"title":"案例","slug":"案例","link":"#案例","children":[{"level":2,"title":"2D","slug":"_2d","link":"#_2d","children":[]},{"level":2,"title":"3D","slug":"_3d","link":"#_3d","children":[]}]},{"level":1,"title":"TikZ 绘图失败原因与解决方案总结","slug":"tikz-绘图失败原因与解决方案总结","link":"#tikz-绘图失败原因与解决方案总结","children":[{"level":4,"title":"1. 计算溢出","slug":"_1-计算溢出","link":"#_1-计算溢出","children":[]},{"level":4,"title":"2. 超出坐标轴范围","slug":"_2-超出坐标轴范围","link":"#_2-超出坐标轴范围","children":[]},{"level":4,"title":"3. TikzJax 不支持 pgfplots","slug":"_3-tikzjax-不支持-pgfplots","link":"#_3-tikzjax-不支持-pgfplots","children":[]},{"level":4,"title":"4. 计算精度问题","slug":"_4-计算精度问题","link":"#_4-计算精度问题","children":[]},{"level":4,"title":"5. 3D 视角错误","slug":"_5-3d-视角错误","link":"#_5-3d-视角错误","children":[]},{"level":4,"title":"6. 颜色与 TikzJax 兼容问题","slug":"_6-颜色与-tikzjax-兼容问题","link":"#_6-颜色与-tikzjax-兼容问题","children":[]},{"level":4,"title":"7. 复杂阴影填充失败","slug":"_7-复杂阴影填充失败","link":"#_7-复杂阴影填充失败","children":[]},{"level":4,"title":"8. 关键点与标注","slug":"_8-关键点与标注","link":"#_8-关键点与标注","children":[]},{"level":3,"title":"标准绘图原则","slug":"标准绘图原则","link":"#标准绘图原则","children":[]},{"level":2,"title":"斜线填充","slug":"斜线填充","link":"#斜线填充","children":[{"level":3,"title":"代码优化点：","slug":"代码优化点","link":"#代码优化点","children":[]},{"level":3,"title":"兼容性：","slug":"兼容性","link":"#兼容性","children":[]}]},{"level":2,"title":"树状图","slug":"树状图","link":"#树状图","children":[{"level":3,"title":"纵向","slug":"纵向","link":"#纵向","children":[]},{"level":3,"title":"横向","slug":"横向","link":"#横向","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]}]}],"git":{"createdTime":1740069657000,"updatedTime":1740069657000,"contributors":[{"name":"Cyletix","username":"Cyletix","email":"1016120209@qq.com","commits":1,"url":"https://github.com/Cyletix"}]},"readingTime":{"minutes":8.79,"words":2638},"filePathRelative":"Other/说明/tikz绘图标准.md","localizedDate":"2025年2月20日","excerpt":"<h2>环境配置</h2>\\n<p>代码类型: tikz</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>\\\\usepackage{tikz}</span></span>\\n<span class=\\"line\\"><span>\\\\begin{document}</span></span>\\n<span class=\\"line\\"><span>\\\\begin{tikzpicture}</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>...</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>\\\\end{tikzpicture}</span></span>\\n<span class=\\"line\\"><span>\\\\end{document}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"Other/说明/tikz绘图标准.md","value":{"title":"tikz绘图标准","path":"Other/说明/tikz绘图标准.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{r as comp,t as data};
