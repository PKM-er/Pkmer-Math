import{_ as l,c as d,b as i,d as e,a as s,e as t,r as o,o as p}from"./app-BW7e1I7Z.js";const c={};function r(m,n){const a=o("Tikz");return p(),d("div",null,[n[0]||(n[0]=i(`<h1 id="简介" tabindex="-1">简介</h1><h2 id="环境配置" tabindex="-1">环境配置</h2><p>代码类型: tikz</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\usepackage{tikz}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span>\\begin{tikzpicture}</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>\\end{tikzpicture}</span></span>
<span class="line"><span>\\end{document}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可用宏包" tabindex="-1">可用宏包</h2><p>%%AvailablePackages%%<br> The following packages are available in <code>\\usepackage{}</code>:</p><ul><li>chemfig</li><li>tikz-cd</li><li>circuitikz</li><li>pgfplots</li><li>array</li><li>amsmath</li><li>amstext</li><li>amsfonts</li><li>amssymb</li><li>tikz-3dplot</li></ul><h3 id="宏包用途示例" tabindex="-1">宏包用途示例</h3><ul><li>3D线图: <code>\\usepackage{tikz-3dplot}</code></li><li>网格图: <code>\\usepackage{pgfplots}</code></li><li>电路: <code>\\usepackage{circuitikz}</code></li><li>交换图: <code>\\usepackage{tikz-cd}</code></li><li>有机化学: <code>\\usepackage{chemfig}</code><br> 说明: 当前本库插件版本为 Obsidian TikZJax 0.5.2, 以上 package 均可以写入 <code>\\usepackage{}</code>. 本轮列出的 <code>opacity</code>, <code>fill opacity</code>, <code>\\clip</code>, <code>\\foreach</code>, <code>\\fill</code> 和 <code>\\filldraw</code> 对照案例也已由用户确认能够成功绘图. package 可用说明插件能够加载它; 若某幅复杂图仍然失败, 应检查该图使用的具体命令, 计算范围和组合方式.</li></ul><h3 id="禁止使用" tabindex="-1">禁止使用</h3><ul><li><code>\\documentclass{article}</code><br> 会导致报错</li><li>tikz 代码内的可见文本 (如 <code>\\node</code>, <code>\\draw</code> 标注) 禁止出现中文汉字<br> TikzJax 渲染时缺少中文字体, 中文会显示为乱码. 图内文字一律使用英文, 数学公式或符号 (如 <code>union</code>, <code>$H(X)$</code>) .</li><li>tikz 代码内禁止出现&quot;并集/交集&quot; 等用途的图形绘制<br> 韦恩图中的并集 (联合熵) 等&quot;整体区域&quot; 不作为图形元素绘制, 仅通过文字标注或外围文档说明.</li><li>填充色禁止过于鲜艳 (如 <code>red!50</code> 以上的高浓度纯色) 且禁止使用 <code>fill opacity</code><br> 鲜艳填充会与白色文字重叠导致看不清. 区域填充统一使用低浓度淡色 (<code>red!10</code>, <code>green!10</code>, <code>blue!18</code> 等) , 文字始终使用默认黑色. 这里禁止 <code>fill opacity</code> 是本库新图的视觉规范, 不是渲染能力判断; 现有透明填充示例能够渲染, 不因此机械删除.</li><li>区域区分禁止仅依赖填充色深浅<br> 在 darkmode 下, 低浓度淡色填充与深色背景融为一体, 文字 (自动变灰) 与底色过于接近, 导致区域与标签均不可辨. <strong>必须叠加斜线/网格填充</strong> (<code>\\clip</code> + <code>\\foreach \\draw</code>, 见&quot;斜线/图案填充&quot; 节) : 用线条方向区分区域, 如 H(X|Y) NW-SE, H(Y|X) NE-SW, I(X;Y) 竖直. 线条颜色可用 <code>red!80</code> 等中高浓度, 因为线条本身就是信息载体, 不依赖底色亮度.</li></ul><hr><h1 id="配置项" tabindex="-1">配置项</h1><h2 id="颜色" tabindex="-1">颜色</h2><p>TikZ 内置了一些常见的颜色方案, 方便绘图时使用. 这些颜色可以直接引用, 也可以通过 <code>xcolor</code> 包扩展. 以下是主要内置颜色方案:</p><h3 id="常用颜色" tabindex="-1">常用颜色</h3><ul><li><strong>基础颜色</strong>:<br> - <code>black</code><ul><li><code>white</code></li><li><code>red</code></li><li><code>green</code></li><li><code>blue</code></li><li><code>cyan</code></li><li><code>magenta</code></li><li><code>yellow</code></li></ul></li><li><strong>灰度颜色</strong> (通过数值指定, <code>0</code> 表示黑, <code>1</code> 表示白) : <ul><li><code>gray</code> (例如 <code>gray!50</code> 表示 50% 灰色)</li></ul></li></ul><h3 id="混合颜色" tabindex="-1">混合颜色</h3><ul><li>TikZ 支持颜色混合, 语法为 <code>color1!percentage!color2</code>. 例如: <ul><li><code>red!50!blue</code>: 红色和蓝色各占 50%.</li><li><code>green!30!white</code>: 绿色占 30%, 白色占 70%.</li></ul></li></ul><h3 id="其他内置颜色" tabindex="-1">其他内置颜色</h3><p>通过加载 <code>xcolor</code> 扩展包, 可以使用更多颜色:</p><ul><li><strong>自然颜色</strong>: <ul><li><code>brown</code></li><li><code>lime</code></li><li><code>orange</code></li><li><code>pink</code></li><li><code>violet</code></li><li><code>purple</code></li><li><code>teal</code></li><li><code>olive</code></li></ul></li><li><strong>Web 颜色</strong> (需要 <code>dvipsnames</code> 选项支持) : <ul><li><code>Aquamarine</code></li><li><code>NavyBlue</code></li><li><code>SkyBlue</code></li><li><code>Emerald</code></li><li><code>Periwinkle</code></li><li><code>Sepia</code></li></ul></li></ul><h3 id="自定义颜色" tabindex="-1">自定义颜色</h3><p>你也可以通过以下方式定义自定义颜色:</p><ol><li>RGB 模式:<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{rgb}{0.2, 0.4, 0.6}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>HTML 颜色代码:<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{HTML}{1A2B3C}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>CMYK 模式:<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\definecolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{mycolor}{cmyk}{0.1, 0.2, 0.3, 0.4}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h3 id="应用方式" tabindex="-1">应用方式</h3><p>在 TikZ 中, 可以通过以下方式应用颜色:</p><ol><li>改变线条颜色:<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[red] (0,0) -- (1,1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>改变填充颜色:<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\fill</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[blue] (0,0) rectangle (1,1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>组合颜色属性:<div class="language-latex line-numbers-mode" data-highlighter="shiki" data-ext="latex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-latex"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\draw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[fill=yellow,draw=red] (0,0) circle (1cm);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>通过这些内置和扩展颜色, 几乎可以满足大多数绘图需求</p><h2 id="方向参数" tabindex="-1">方向参数</h2><ul><li>above</li><li>below</li><li>left</li><li>right</li></ul><h2 id="定义变量" tabindex="-1">定义变量</h2><p>定义: <code>\\def\\angleA{30}</code><br> 使用: <code>\\draw[thick] (0,0) -- ({1*cos(\\angleA)},{1*sin(\\angleA)});</code></p><h2 id="角度单位" tabindex="-1">角度单位</h2><ul><li><code>sin</code> / <code>cos</code> / <code>tan</code> 的参数默认按「度」解释；需要弧度时在表达式后加 <code>r</code> 后缀，如 <code>sin(\\x r)</code>、<code>sin(0.5*pi r)</code>。</li><li>反三角 <code>asin</code> / <code>acos</code> / <code>atan</code> / <code>atan2</code> 的返回值单位是「度」；需要弧度时乘 <code>pi/180</code> 或用 <code>rad()</code> 转换，如 <code>atan(\\x)*pi/180</code>。</li><li><code>rad(x)</code> 把度转成弧度，<code>deg(x)</code> 把弧度转成度。</li></ul><hr><h2 id="平面图" tabindex="-1">平面图</h2><p>%%2D%%</p><ul><li>定义变量<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>的范围: <code>\\draw[domain= 0:1,smooth,variable=\\x]</code></li></ul><h2 id="立体图" tabindex="-1">立体图</h2><p>%%3D%%</p><h3 id="旋转体" tabindex="-1">旋转体</h3><ul><li>观察角:<br> % 设置 3D 视角 (俯仰角 80° 通常是固定的; 水平旋转角 120°, 或90°)<br><code>\\tdplotsetmaincoords{80}{120}</code></li><li>实线绘制边缘<br><code>\\draw[smooth, thick]</code>,<br> 根据水平旋转角 120°, 绘制另一边120°+180°=300° ,两条边.</li><li>根据俯仰角, 可能会调整, 如: <ul><li>110度, 按感觉改的, 120°-10°=110°</li><li>另一条边也是因为倾斜视图的原因, 120°+180°+10°=310°</li></ul></li><li>虚线绘制主平面投影<br><code>\\draw[dashed]</code></li><li>仅有实体形状才使用加粗<code>\\draw[smooth, thick]</code>, 如: 圆柱的底部,顶部,边界 用实线绘制, 没有明确指定则不调整颜色</li><li>相交平面可以用透明填充表现覆盖关系, 也可以用轮廓, 虚实线或斜线区分; 综合案例见后文&quot;相交平面&quot; .</li></ul><hr><h1 id="填充方法" tabindex="-1">填充方法</h1><p>斜线填充和纯色填充都已确认能够成功绘图. 这里需要判断的是哪一种更适合表达当前内容, 而不是哪一种&quot;能不能渲染&quot; .</p><table><thead><tr><th>方法</th><th>优点</th><th>适合情况</th><th>注意事项</th></tr></thead><tbody><tr><td>斜线/图案填充</td><td>不依赖背景亮度; 多个区域可用不同方向区分</td><td>韦恩图, 信息图, 需要兼顾 darkmode 的区域区分</td><td>需要 <code>\\clip</code> 限定边界; 线条过密会遮挡文字并增加代码量</td></tr><tr><td>纯色填充</td><td>画面简洁; <code>\\fill</code> / <code>\\filldraw</code> 代码短</td><td>单一区域, 文字较少, 浅色填充已经足够清楚</td><td>新图使用低浓度淡色; 不要只靠颜色深浅表达多个区域</td></tr></tbody></table><h2 id="a-斜线填充" tabindex="-1">A. 斜线填充</h2><p>%%HatchingFills%%<br> 当区域必须在浅色和深色主题下都能区分, 或者多个区域需要表达不同语义时, 优先使用斜线或网格. 基本写法是先用 <code>\\clip</code> 限定封闭区域, 再用 <code>\\foreach</code> 和 <code>\\draw</code> 画平行线, 最后补画边界.</p><h3 id="圆形区域" tabindex="-1">圆形区域</h3><p>下面用圆形展示最简单的剪裁和斜线填充:</p>`,51)),e(a,{data:`\\usepackage{tikz}
\\begin{document}
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
`}),n[1]||(n[1]=i('<h3 id="代码说明" tabindex="-1">代码说明</h3><ol><li><strong>斜线填充</strong>: <ul><li>在 <code>\\begin{scope} ... \\end{scope}</code> 内先用 <code>\\clip</code> 限定区域, 再用 <code>\\foreach</code> 绘制平行线, 线条就不会越过目标边界.</li><li>循环范围要覆盖整个剪裁区域, 但不要为了&quot;保险&quot; 画过多线条; 线条过密会遮挡标签, 也会让代码难以调整.</li><li>上面圆形例子中的线段从左端较低的位置连到右端较高的位置, 因此视觉上是向右上方倾斜.</li></ul></li><li><strong>旋转箭头</strong>: <ul><li>在普通平面坐标中, <code>arc[start angle=0,end angle=45]</code> 绘制的是 <strong>逆时针方向的小箭头</strong>.</li></ul></li></ol><hr><h2 id="b-纯色填充" tabindex="-1">B. 纯色填充</h2><p>%%SolidColorFills%%<br> 简单的封闭区域使用 <code>\\fill</code> 或 <code>\\filldraw</code>. 纯色填充的优势是代码短, 画面干净; 缺点是在 darkmode 下, 低浓度填充可能和背景融在一起, 多个区域也很难只靠色深稳定区分.</p><h3 id="简单纯色区域" tabindex="-1">简单纯色区域</h3><p>下面的 <code>\\filldraw</code> 案例已确认能够成功渲染:</p>',7)),e(a,{data:`\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}
  \\filldraw[fill=green!20,draw=green!60!black,thick] (0,0) rectangle (2,1);
\\end{tikzpicture}
\\end{document}
`}),n[2]||(n[2]=i(`<p>对于 circle, rectangle 或 <code>... -- cycle</code> 这类简单封闭路径, 直接使用 <code>\\fill</code> / <code>\\filldraw</code> 比先剪裁再填充更容易阅读和修改. 这是代码组织上的选择, 不表示 <code>\\clip</code> 无法渲染, 也不表示 <code>\\filldraw</code> 一定更快.</p><h3 id="已有透明填充示例" tabindex="-1">已有透明填充示例</h3><p>以下 <code>opacity</code> / <code>fill opacity</code> 代码也已确认能够渲染, 保留用于理解和维护现有图形. 但是, 新建需要在 darkmode 下阅读的区域图时, 仍按本库视觉规范使用低浓度纯色并配合边界或斜线, 不复制透明填充作为默认模板.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>% 填充阴影区域</span></span>
<span class="line"><span>\\begin{scope} \\clip (0,-1.5) rectangle (1,0); \\fill[black!20,opacity=0.7] plot[domain=0.01:1,smooth]({\\x}, {ln(\\x)}) -- (1,0) -- (0,0) -- cycle; \\end{scope}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="标准绘图原则" tabindex="-1">标准绘图原则</h2><p>✅ <strong>2D: 确保 <code>y</code> 轴范围受控, 避免 TikzJax 计算溢出</strong><br> ✅ <strong>3D: 固定 <code>\\tdplotsetmaincoords{80}{120}</code>, 只绘制关键轮廓</strong><br> ✅ <strong>曲线: 使用 <code>smooth</code> 和 <code>samples=100</code>, 提高解析精度</strong><br> ✅ <strong>颜色: 新图使用低浓度淡色, 保证文字和边界清楚; 多个区域不能只靠颜色深浅区分</strong><br> ✅ <strong>阴影: 单一, 简单的纯色区域优先用 <code>filldraw</code>; 需要兼顾 darkmode 或区分多个区域时, 用局部 <code>clip</code> + <code>foreach</code> 绘制方向不同的斜线</strong></p><hr><h2 id="多边形" tabindex="-1">多边形</h2><p>%%Polygon%%<br> 多边形最简单的写法是依次连接各顶点, 最后用 <code>cycle</code> 闭合路径:</p>`,10)),e(a,{data:`\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}
  \\draw[thick]
    (90:1.3) -- (18:1.3) -- (-54:1.3) --
    (-126:1.3) -- (162:1.3) -- cycle;
\\end{tikzpicture}
\\end{document}
`}),n[3]||(n[3]=i('<hr><h1 id="示例" tabindex="-1">示例</h1><p>本部分集中放置综合案例. 前面的章节只保留用于说明单一写法的最小例子; 这里的案例可以同时使用坐标轴, 循环, 节点, 填充, 标注或立体视角.</p><h2 id="宏包应用" tabindex="-1">宏包应用</h2><p>前面的宏包清单中, <code>tikz-3dplot</code> 已有多组立体图案例. 下面补充 <code>pgfplots</code>, <code>circuitikz</code>, <code>tikz-cd</code> 和 <code>chemfig</code> 的实际用法.</p><h3 id="网格函数图" tabindex="-1">网格函数图</h3><p>%%pgfplots%%</p>',7)),e(a,{data:`\\usepackage{pgfplots}
\\begin{document}
\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=middle,
    grid=both,
    xmin=-2, xmax=2,
    ymin=0, ymax=4,
    xlabel={$x$}, ylabel={$y$}
  ]
    \\addplot[blue,thick,domain=-2:2,samples=40] {x^2};
  \\end{axis}
\\end{tikzpicture}
\\end{document}
`}),n[4]||(n[4]=i('<h3 id="电路图" tabindex="-1">电路图</h3><p>%%circuitikz%%</p><ul><li>开头声明: <code>\\usepackage{circuitikz}</code></li><li>默认使用european标准: <code>\\ctikzset{resistor = european}</code></li></ul><h4 id="常用元件" tabindex="-1">常用元件</h4><ul><li>电阻使用 <code>R</code>, 电感使用 <code>L</code>, 电容使用 <code>C</code>。</li><li>电压源使用 <code>V</code>, 电流源使用 <code>I</code>。</li><li><code>l=</code> 用于添加元件标签, <code>l_=</code> 用于把标签放到元件另一侧。</li><li><code>european</code> 使用欧洲标准电阻符号, <code>cute inductors</code> 使用弧线式电感符号。</li><li><code>--</code> 直接连接两点, 表示普通导线; <code>to[元件]</code> 在两点之间放置元件。</li><li><code>*-*</code> 在元件两端标出连接点, <code>-*</code> 只在终点标出连接点。</li><li><code>\\node[circ] at (x,y) {};</code> 用于单独标出分支节点。</li></ul><p>下面分别画出五种常用元件, 便于直接对照元件名称和代码。</p>',6)),e(a,{data:`\\usepackage{circuitikz}
\\begin{document}
\\begin{circuitikz}[european, cute inductors]
  \\draw (0,4) to[R, l=$R$] (3,4);
  \\draw (0,3) to[L, l=$L$] (3,3);
  \\draw (0,2) to[C, l=$C$] (3,2);
  \\draw (0,1) to[V, l=$V$] (3,1);
  \\draw (0,0) to[I, l=$I$] (3,0);
\\end{circuitikz}
\\end{document}
`}),n[5]||(n[5]=s("h4",{id:"串联电路与并联支路",tabindex:"-1"},"串联电路与并联支路",-1)),n[6]||(n[6]=s("p",null,"下面把五种元件放入同一个电路。电阻和电感串联, 电容与电流源分别接在上下导线之间。",-1)),e(a,{data:`\\usepackage{circuitikz}
\\begin{document}
\\begin{circuitikz}[european, cute inductors]
  \\draw (0,0) to[V, l=$u_s(t)$] (0,3)
        to[R, l=$R$] (2,3)
        to[L, l=$L$] (4,3)
        -- (6,3)
        to[C, l=$C$] (6,0)
        -- (0,0);
  \\draw (4,0) to[I, l_=$i_s(t)$] (4,3);
  \\node[circ] at (4,3) {};
  \\node[circ] at (4,0) {};
\\end{circuitikz}
\\end{document}
`}),n[7]||(n[7]=s("h4",{id:"星形与三角形网络",tabindex:"-1"},"星形与三角形网络",-1)),n[8]||(n[8]=s("p",null,"这个案例对照星形电阻网络和三角形电阻网络, 同时展示端点标注, 元件标签位置和等价关系箭头。",-1)),e(a,{data:`\\usepackage{circuitikz}
\\begin{document}
\\ctikzset{resistor = european}
\\begin{circuitikz}
  % ===== Y / Wye network (left): terminals 1,2,3 + common node n =====
  \\draw (0,2) to[R, l=$R_1$] (0,0);
  \\draw (-1.732,-1) to[R, l=$R_2$] (0,0);
  \\draw (1.732,-1) to[R, l=$R_3$] (0,0);
  \\fill (0,2) circle (2pt);
  \\fill (-1.732,-1) circle (2pt);
  \\fill (1.732,-1) circle (2pt);
  \\fill (0,0) circle (2pt);
  \\node[above] at (0,2) {$1$};
  \\node[left] at (-1.732,-1) {$2$};
  \\node[right] at (1.732,-1) {$3$};
  \\node[below] at (0,0) {$n$};
  % ===== Delta network (right): same terminal positions, shifted =====
  \\draw (6,2) to[R, l=$R_{12}$] (4.268,-1);
  \\draw (4.268,-1) to[R, l_=$R_{23}$] (7.732,-1);
  \\draw (7.732,-1) to[R, l=$R_{31}$] (6,2);
  \\fill (6,2) circle (2pt);
  \\fill (4.268,-1) circle (2pt);
  \\fill (7.732,-1) circle (2pt);
  \\node[above] at (6,2) {$1$};
  \\node[left] at (4.268,-1) {$2$};
  \\node[right] at (7.732,-1) {$3$};
  % ===== equivalence arrow: Y <-> Delta (horizontal) =====
  \\draw[<->,thick] (2.5,0.5) -- (3.9,0.5);
  \\node[below,font=\\footnotesize] at (2.75,0.5) {$Y$};
  \\node[below,font=\\footnotesize] at (3.65,0.5) {$\\Delta$};
\\end{circuitikz}
\\end{document}
`}),n[9]||(n[9]=s("h4",{id:"含开关的电阻电容电路",tabindex:"-1"},"含开关的电阻电容电路",-1)),n[10]||(n[10]=s("p",null,"这个案例展示电压源, 多个电阻, 电容, 开关, 电流方向和电荷标注在同一电路中的安排方式。",-1)),e(a,{data:`\\usepackage{circuitikz}
\\begin{document}

\\begin{circuitikz}[european, cute inductors, scale=1.05]
\\coordinate (A) at (0,3);
\\coordinate (B) at (2,3);
\\coordinate (C) at (4.2,3);
\\coordinate (D) at (6.0,3);
\\coordinate (G) at (0,0);
\\coordinate (H) at (4.2,0);
\\coordinate (K) at (6.0,0);

\\draw (G) to[V, l_=$E$] (A);

\\draw (G) -- (K);

\\draw (A) to[R=$R_1$, *-*] (B)
      to[R=$R_2$, -*] (C);

\\draw[->] (4.55,3.25) -- (5.25,3.25)
      node[midway, above] {$i(t)$};

\\draw (C) to[R=$R_3$] (H);
\\draw (H) -- (K);

\\draw (C) -- (D);
\\draw (D) to[R=$R_4$] (6,1.35);
\\draw (6,1.35) to[C=$C$] (6,0);

\\node[circle, fill, inner sep=1.2pt] at (6,1.35) {};
\\node[right] at (6.12,1.35) {$q(t)$};

\\draw (A) -- (0,4.05);
\\draw (B) -- (2,4.05);

\\draw (0.55,4.05) circle (0.07);
\\draw (1.35,4.05) circle (0.07);

\\draw (0,4.05) -- (0.55,4.05);
\\draw (1.35,4.05) -- (2,4.05);

\\draw (0.55,4.05) -- (0.85,4.42);

\\node[above] at (0.55,4.35) {$S$};
\\node[above right] at (1.35,4.18) {$t=0$};

\\node at (3,-0.55) {Fig. 3};

\\end{circuitikz}

\\end{document}
`}),n[11]||(n[11]=s("h3",{id:"交换图",tabindex:"-1"},"交换图",-1)),n[12]||(n[12]=s("p",null,"%%tikz-cd%%",-1)),e(a,{data:`\\usepackage{tikz-cd}
\\begin{document}
\\begin{tikzcd}
  A \\arrow[r,"f"] \\arrow[d,"g"'] & B \\arrow[d,"h"] \\\\
  C \\arrow[r,"k"'] & D
\\end{tikzcd}
\\end{document}
`}),n[13]||(n[13]=s("h3",{id:"有机结构式",tabindex:"-1"},"有机结构式",-1)),n[14]||(n[14]=s("p",null,"%%chemfig%%",-1)),e(a,{data:`\\usepackage{chemfig}
\\begin{document}
  \\chemfig{CH_3-CH_2-OH}
\\end{document}
`}),n[15]||(n[15]=s("h2",{id:"区域填充",tabindex:"-1"},"区域填充",-1)),n[16]||(n[16]=s("h3",{id:"三角形区域",tabindex:"-1"},"三角形区域",-1)),n[17]||(n[17]=s("p",null,"这个案例综合使用坐标轴, 边界, 斜线填充和方程标注.",-1)),e(a,{data:`\\usepackage{tikz}
\\begin{document}
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
`}),n[18]||(n[18]=s("h3",{id:"环形扇区",tabindex:"-1"},"环形扇区",-1)),n[19]||(n[19]=s("p",null,"这个案例综合使用变量, 圆弧路径, 剪裁, 循环填充和边界重绘.",-1)),e(a,{data:`\\usepackage{tikz}
\\begin{document}
\\begin{tikzpicture}[scale=1]
\\def\\R{1.3}
\\def\\r{0.7}
\\def\\aOne{210}
\\def\\aTwo{90}
\\def\\dx{2.2}
\\begin{scope}
  \\clip ({\\R*cos(\\aOne)},{\\R*sin(\\aOne)})
        arc[start angle=\\aOne,end angle=\\aTwo,radius=\\R] --
        ({\\r*cos(\\aTwo)},{\\r*sin(\\aTwo)})
        arc[start angle=\\aTwo,end angle=\\aOne,radius=\\r] -- cycle;
  \\foreach \\y in {-1.3,-1.1,...,1.3} {
    \\draw[red,thin] (-\\dx,\\y) -- (\\dx,\\y);
  }
\\end{scope}
\\draw[thick]
  ({\\R*cos(\\aOne)},{\\R*sin(\\aOne)})
  arc[start angle=\\aOne,end angle=\\aTwo,radius=\\R] --
  ({\\r*cos(\\aTwo)},{\\r*sin(\\aTwo)})
  arc[start angle=\\aTwo,end angle=\\aOne,radius=\\r] -- cycle;
\\end{tikzpicture}
\\end{document}
`}),n[20]||(n[20]=s("h2",{id:"平面图-1",tabindex:"-1"},"平面图",-1)),n[21]||(n[21]=s("p",null,"%%2D%%",-1)),e(a,{data:`\\begin{document}
\\begin{tikzpicture}
% 绘制坐标轴
\\draw[->] (-0.2,0) -- (1.5,0) node[right] {$x$};
\\draw[->] (0,-1) -- (0,1) node[above] {$y$};
% 定义曲线 y = ln(x), 限制范围
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
`}),e(a,{data:`\\begin{document}
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
`}),n[22]||(n[22]=s("h2",{id:"立体图-1",tabindex:"-1"},"立体图",-1)),n[23]||(n[23]=s("p",null,[t("%%3D%%"),s("br"),t(" **必须导入 "),s("code",null,"\\usepackage{tikz-3dplot}"),t(" 包. **")],-1)),n[24]||(n[24]=s("h3",{id:"相交平面",tabindex:"-1"},"相交平面",-1)),n[25]||(n[25]=s("p",null,[t("下面两种画法都已确认能够渲染. 透明填充能直接表现覆盖关系; 轮廓和交线在深色主题或需要打印时更容易保持边界清楚."),s("br"),t(" 透明填充版:")],-1)),e(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
\\tdplotsetmaincoords{70}{115}
\\begin{tikzpicture}[tdplot_main_coords,scale=1.1]
  \\fill[blue!35,opacity=0.35]
    (-1.5,-1,0) -- (1.5,-1,0) -- (1.5,1,0) -- (-1.5,1,0) -- cycle;
  \\fill[red!35,opacity=0.35]
    (-1.5,0,-1) -- (1.5,0,-1) -- (1.5,0,1) -- (-1.5,0,1) -- cycle;
  \\draw[blue!70,thick]
    (-1.5,-1,0) -- (1.5,-1,0) -- (1.5,1,0) -- (-1.5,1,0) -- cycle;
  \\draw[red!70,thick]
    (-1.5,0,-1) -- (1.5,0,-1) -- (1.5,0,1) -- (-1.5,0,1) -- cycle;
  \\draw[very thick] (-1.5,0,0) -- (1.5,0,0);
\\end{tikzpicture}
\\end{document}
`}),n[26]||(n[26]=s("p",null,"轮廓版:",-1)),e(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
\\tdplotsetmaincoords{70}{115}
\\begin{tikzpicture}[tdplot_main_coords,scale=1.1]
  \\draw[blue!70,thick]
    (-1.5,-1,0) -- (1.5,-1,0) -- (1.5,1,0) -- (-1.5,1,0) -- cycle;
  \\draw[red!70,thick]
    (-1.5,0,-1) -- (1.5,0,-1) -- (1.5,0,1) -- (-1.5,0,1) -- cycle;
  \\draw[very thick] (-1.5,0,0) -- (1.5,0,0);
  \\draw[dashed] (0,-1,0) -- (0,1,0);
  \\draw[dashed] (0,0,-1) -- (0,0,1);
\\end{tikzpicture}
\\end{document}
`}),n[27]||(n[27]=s("h3",{id:"透明圆柱面",tabindex:"-1"},"透明圆柱面",-1)),n[28]||(n[28]=s("p",null,[t("这个案例综合使用 "),s("code",null,"tikz-3dplot"),t(", 变量函数, 曲线路径和透明填充.")],-1)),e(a,{data:`\\usepackage{tikz-3dplot}
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
`}),n[29]||(n[29]=s("h3",{id:"旋转曲面",tabindex:"-1"},"旋转曲面",-1)),e(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角 (俯仰角 80°, 水平旋转角 120°) 
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
`}),n[30]||(n[30]=s("p",null,[t("真实边缘轮廓的角度为 "),s("code",null,"\\tdplotsetmaincoords{80}{120}"),t(" 后者120和其补角: 120+180, 这两个线是真实视角边缘轮廓线")],-1)),e(a,{data:`\\usepackage{tikz-3dplot}
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
`}),n[31]||(n[31]=i('<h3 id="直角坐标平面" tabindex="-1">直角坐标平面</h3><p>%%3D%%</p><ul><li><strong>表 (a) 方程组有解的情形</strong></li></ul><table><thead><tr><th>图形</th><th>几何意义</th><th>代数表达</th></tr></thead><tbody><tr><td>1</td><td>三张平面相交于一点</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span></td></tr><tr><td>2</td><td>三张平面相交于一条直线</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>, 且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\\beta_1, \\beta_2, \\beta_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0528em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0528em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0528em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中任意两个向量线性无关</td></tr><tr><td>3</td><td>两张平面重合, 第三张平面与之相交</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>, 且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>β</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>β</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\\beta_1, \\beta_2, \\beta_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0528em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0528em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0528em;">β</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0528em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中有两个向量线性相关</td></tr><tr><td>4</td><td>三张平面重合</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">r(A) = r(\\bar{A}) = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td></tr></tbody></table>',4)),e(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角 (俯仰角 80°, 水平旋转角 120°) 
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};  % 只画 z > 0
        % 填充三个相互垂直的平面 (只显示 z ≥ 0 部分) 
        \\fill[gray!20,opacity=0.5] (-1.2,-1.2,0) -- (-1.2,1.2,0) -- (1.2,1.2,0) -- (1.2,-1.2,0) -- cycle; % XY 平面
        \\fill[gray!30,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle; % XZ 平面, 限制 z ≥ 0
        \\fill[gray!40,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle; % YZ 平面, 限制 z ≥ 0
        % 标记相交点
        \\node[below left,red] at (0,0,0) {$O$};
        \\fill[red] (0,0,0) circle (1.5pt);
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),e(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角 (俯仰角 80°, 水平旋转角 120°) 
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 绘制三个平面
        % 平面 1: XZ 平面 (y=0) 
        \\fill[gray!20,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;
        % 平面 2: YZ 平面 (x=0) 
        \\fill[gray!30,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle;
        % 平面 3: 倾斜平面 x + y = 0
        \\fill[gray!40,opacity=0.5] (-1.2,1.2,0) -- (1.2,-1.2,0) -- (1.2,-1.2,1.2) -- (-1.2,1.2,1.2) -- cycle;
        % 标记交线 (严格与 z 轴重合) 
        \\draw[thick,red] (0,0,0) -- (0,0,1.2);
        % 标记相交点
        \\node[below left] at (0,0,0) {$O$};
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),e(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角 (俯仰角 80°, 水平旋转角 120°) 
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 绘制两个重合的 XZ 平面 (y=0) 
        \\fill[red!20,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,0.1,0) -- (-1.2,0.1,1.2) -- (1.2,0.1,1.2) -- (1.2,0.1,0) -- cycle;
        % 第三张平面: YZ 平面 (x=0)
        \\fill[gray!40,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle;
        % 标记交线 (X 轴方向) 
        \\draw[thick,red] (-1.2,0,0) -- (1.2,0,0);
        % 在交点 (0,0,0) 画一个红点
        \\fill[red] (0,0,0) circle (1.5pt);
        % 标记相交点
        \\node[below left] at (0,0,0) {$O$};
        \\draw[thick,red] (0,0,0) -- (0,0,1.2);
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),e(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角 (俯仰角 80°, 水平旋转角 120°) 
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 画三张完全重合的平面 (这里只画一个 XZ 平面) 
        \\fill[red] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,0.1,0) -- (-1.2,0.1,1.2) -- (1.2,0.1,1.2) -- (1.2,0.1,0) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,-0.1,0) -- (-1.2,-0.1,1.2) -- (1.2,-0.1,1.2) -- (1.2,-0.1,0) -- cycle;
        % 标记相交点
        \\node[below left] at (0,0,0) {$O$};
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),e(a,{data:""}),n[32]||(n[32]=i('<ul><li><strong>表 (b) 方程组无解的情形</strong></li></ul><table><thead><tr><th>图形</th><th>几何意义</th><th>代数表达</th></tr></thead><tbody><tr><td>5</td><td>三张平面两两相交, 且交线相互平行</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo separator="true">,</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">r(A) = 2, r(\\bar{A}) = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span>, 且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">a_1, a_2, a_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中任意两个向量都线性无关</td></tr><tr><td>6</td><td>两张平面平行, 第三张平面与它们相交</td><td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo separator="true">,</mo><mi>r</mi><mo stretchy="false">(</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">r(A) = 2, r(\\bar{A}) = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0701em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mopen">(</span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span>, 且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">a_1, a_2, a_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 中有两个向量线性相关</td></tr></tbody></table>',2)),e(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角 (俯仰角 80°, 水平旋转角 120°) 
    \\tdplotsetmaincoords{20}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 三个平面 (都严格平行于 Z 轴) 
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
`}),e(a,{data:`\\usepackage{tikz}
\\usepackage{tikz-3dplot}
\\begin{document}
\\begin{tikzpicture}
    % 设置 3D 视角 (俯仰角 80°, 水平旋转角 120°) 
    \\tdplotsetmaincoords{80}{120}
    \\begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \\draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \\draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \\draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 绘制两个平行的 XZ 平面
        \\fill[gray!20,opacity=0.5] (-1.2,-1.2,0) -- (1.2,-1.2,0) -- (1.2,-1.2,1.2) -- (-1.2,-1.2,1.2) -- cycle;
        \\fill[gray!30,opacity=0.5] (-1.2,1.2,0) -- (1.2,1.2,0) -- (1.2,1.2,1.2) -- (-1.2,1.2,1.2) -- cycle;
        % 第三张平面 (YZ 平面) 
        \\fill[gray!40,opacity=0.5] (0,-1.5,0) -- (0,-1.5,1.2) -- (0,1.5,1.2) -- (0,1.5,0) -- cycle;
        % 交线: 两条平行的红色直线
        \\draw[thick,red] (0,-1.2,0) -- (0,-1.2,1.2);
        \\draw[thick,red] (0,1.2,0) -- (0,1.2,1.2);
    \\end{scope}
\\end{tikzpicture}
\\end{document}
`}),n[33]||(n[33]=s("h3",{id:"标准旋转体填充",tabindex:"-1"},"标准旋转体填充",-1)),n[34]||(n[34]=s("p",null,"以后旋转体都严格按照这个模式进行",-1)),e(a,{data:`\\usepackage{tikz-3dplot}
\\begin{document}
% 设定旋转体视角角度
\\def\\phi{80} %俯仰角
\\def\\theta{120}   % 旋转角度
\\def\\thetaEdgeA{\\theta-10}  % 视角边界角1 (120° - 10°) 
\\def\\thetaEdgeB{\\theta+180+10}  % 视角边界角2 (120° + 180° + 10°) 
\\tdplotsetmaincoords{\\phi}{\\theta}
\\begin{tikzpicture}
    \\begin{scope}[tdplot_main_coords]
        % 坐标轴
        \\draw[->] (0,0,0) -- (4,0,0) node[below right] {$x$};
        \\draw[->] (0,0,0) -- (0,4,0) node[below left] {$y$};
        \\draw[->] (0,0,0) -- (0,0,3) node[above] {$z$};
        % 深灰色圆环 (XY 平面上的投影) 
        \\fill[black!60,opacity=0.5] (0,0,0) circle (2);
        \\fill[white!100] (0,0,0) circle (1); % 中心填充黑色形成圆环
        \\draw[thick, black] (0,0,0) circle (2);
		\\draw[thick, black] (0,0,0) circle (1);
        % **蓝色填充区域 (正确匹配视角边界 110° 和 310°) ** 使用两段 fill
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
        % **虚线轮廓 (XOZ, YOZ 平行边界) **
        \\draw[dashed] (0,0,0) -- (2,0,2);
        \\draw[dashed] (0,0,0) -- (0,2,2);
		\\draw[dashed] (0,0,0) -- (-2,0,2);
        \\draw[dashed] (0,0,0) -- (0,-2,2);
        % **真实视角边缘轮廓线 (\\thetaEdgeA 和 \\thetaEdgeB 实线) **
        \\foreach \\angle in {\\thetaEdgeA, \\thetaEdgeB} {
            \\draw[thick] (0,0,0) -- ({2*cos(\\angle)},{2*sin(\\angle)},2);
        }
        % 顶部圆形 (r=2 边界) 
        \\draw[smooth] (2,0,2) arc[start angle=0,end angle=360,x radius=2,y radius=2];
        \\draw[smooth] (1,0,1) arc[start angle=0,end angle=360,x radius=1,y radius=1];
		% **法向量 (起点在 r=1.5, z=1.5, 朝向 XOZ 平面外) **
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
`}),n[35]||(n[35]=s("h2",{id:"树状图",tabindex:"-1"},"树状图",-1)),n[36]||(n[36]=s("h3",{id:"纵向",tabindex:"-1"},"纵向",-1)),e(a,{data:`\\begin{document}
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
`}),n[37]||(n[37]=s("h3",{id:"横向",tabindex:"-1"},"横向",-1)),e(a,{data:`\\begin{document}
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
`}),n[38]||(n[38]=i('<p>在 <code>tikz</code> 画横向树时, 默认情况下 <strong>兄弟节点 (sibling nodes) 会均匀分布</strong>, 但如果一个分支有更多层次的节点, 而另一个分支较浅, TikZ 可能会 <strong>将较浅的分支的节点与较深分支的部分节点重叠</strong>.</p><h3 id="解决方案" tabindex="-1">解决方案</h3><ol><li><strong>使用 <code>level distance</code> 让层级间距适应不同深度</strong><ul><li><code>level distance</code> 设定层间距离, 但 TikZ 不能自动为深度不同的子树调整距离.</li><li>可以 <strong>单独设置特定层级的 <code>sibling distance</code> 以避免重叠</strong>.</li></ul></li><li><strong>增加 <code>sibling distance</code> 以避免重叠</strong><ul><li><code>sibling distance</code> 控制同一级别节点的水平间隔.</li><li>TikZ 默认让兄弟节点 <strong>均匀分布</strong>, 但我们可以 <strong>手动增加间隔</strong>.</li></ul></li><li>**手动调整特定子树的 `level distance <ul><li>可以 <strong>为不同的层级设置不同的 <code>level distance</code></strong> 让它们分布得更合理.</li></ul></li></ol>',3)),e(a,{data:`\\begin{document}
\\begin{tikzpicture}[
grow=right, % 让树从左向右生长
sibling distance=15mm, % 兄弟节点的默认间距
edge from parent/.style={draw,thick}, % 连接线样式
level distance=12mm, % 默认层级间距
level 2/.style={sibling distance=5mm}, % 让第二层的节点稍微分开, 避免重叠
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
`}),e(a,{data:`\\begin{document}
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
`}),n[39]||(n[39]=s("hr",null,null,-1)),n[40]||(n[40]=s("h2",{id:"其他案例",tabindex:"-1"},"其他案例",-1)),n[41]||(n[41]=s("p",null,[t("一个失败的案例, 原因是忘记导入 "),s("code",null,"\\usepackage{tikz-3dplot}"),t(" 包了, 加上就好")],-1)),e(a,{data:`\\usepackage{tikz-3dplot}
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
`}),n[42]||(n[42]=s("h2",{id:"自动机",tabindex:"-1"},"自动机",-1)),n[43]||(n[43]=s("p",null,"%%Automaton%%",-1)),n[44]||(n[44]=s("h3",{id:"自动机状态转移图",tabindex:"-1"},"自动机状态转移图",-1)),n[45]||(n[45]=s("p",null,"%%TikZAutomaton%%",-1)),e(a,{data:`\\usepackage{tikz}
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
`}),n[46]||(n[46]=s("h3",{id:"五边形状态图",tabindex:"-1"},"五边形状态图",-1)),n[47]||(n[47]=s("p",null,[t("%%PentagonStateDiagram%%"),s("br"),t(" 这个案例不是重复讲解多边形边界, 而是综合使用极坐标, 循环, 节点和箭头, 把五个状态排列成五边形.")],-1)),e(a,{data:`\\usepackage{tikz}
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
`}),n[48]||(n[48]=s("h3",{id:"带前导状态的环形状态图",tabindex:"-1"},"带前导状态的环形状态图",-1)),n[49]||(n[49]=s("p",null,"%%RingStateDiagram%%",-1)),e(a,{data:`\\usepackage{tikz}
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
`}),n[50]||(n[50]=i(`<hr><h1 id="失败原因汇总" tabindex="-1">失败原因汇总</h1><p>本节按症状记录排查方向. 前面的斜线, 纯色, 透明填充和相交平面案例都已确认能够渲染, 因此不能再把 <code>opacity</code>, <code>clip</code> 或 <code>filldraw</code> 本身当作失败原因; 遇到失败时应检查具体参数, 计算范围, 路径复杂度和命令组合.</p><h3 id="多边形旧例失败原因" tabindex="-1">多边形旧例失败原因</h3><ul><li>代码块写成 <code>latex</code>, Obsidian 只显示源码, 不会交给 TikZJax 渲染.</li><li>部分代码缺少 <code>\\usepackage{tikz}</code>, <code>\\begin{document}</code> 或 <code>tikzpicture</code> 外壳.</li><li>其余代码依赖 <code>standalone</code>, PSTricks, <code>auto-pst-pdf</code>, 或者包含本库禁止的 <code>\\documentclass</code>, 不属于当前 TikZJax 环境.<br> 这些问题与多边形本身无关, 因此删除失效旧例, 保留一个最小多边形例子, 并把可渲染的五边形状态图放在综合示例中.</li></ul><h4 id="_1-计算溢出" tabindex="-1">1. 计算溢出</h4><ul><li><strong>问题</strong>: 高次幂, 多项式计算导致 TikzJax 计算失败.</li><li><strong>解决方案</strong>: <ul><li>限制 <code>y</code> 轴范围: <code>max(y_{\\min}, min(y_{\\max}, f(x)))</code></li><li>降低幂次: 尝试分解或近似表示.</li></ul></li></ul><h4 id="_2-超出坐标轴范围" tabindex="-1">2. 超出坐标轴范围</h4><ul><li><strong>问题</strong>: 曲线部分超出可视范围, 导致图像部分缺失或溢出.</li><li><strong>解决方案</strong>: <ul><li><strong>手动设置 <code>x</code> 和 <code>y</code> 轴范围</strong>, 例如 <code>domain=0.5:4.5, ymin=-2, ymax=2</code>.</li></ul></li></ul><h4 id="_3-网格图失败" tabindex="-1">3. 网格图失败</h4><p>%%pgfplots%%</p><ul><li><strong>问题</strong>: <code>pgfplots</code> package 可以加载, 但某幅图仍可能因坐标范围, 表达式或 <code>axis</code> 内的具体设置失败.</li><li><strong>解决方案</strong>: <ul><li>先缩小坐标范围, 简化表达式并检查 <code>axis</code> 设置.</li><li>仍然失败时, 再改用核心 TikZ 的 <code>\\draw plot</code>, 或预计算点值后手动绘制.</li></ul></li></ul><h4 id="_4-计算精度问题" tabindex="-1">4. 计算精度问题</h4><ul><li><strong>问题</strong>: 某些 <code>plot</code> 计算 TikzJax 解析失败.</li><li><strong>解决方案</strong>: <ul><li>增加 <code>samples</code>, 如 <code>samples=100</code>.</li><li>复杂计算分步执行, 或使用 <code>foreach</code> 逐点绘制.</li></ul></li></ul><h4 id="_5-立体图视角错误" tabindex="-1">5. 立体图视角错误</h4><p>%%3D%%</p><ul><li><strong>问题</strong>: 3D 视角不符合需求, 导致 <code>x, y, z</code> 轴方向不正确.</li><li><strong>解决方案</strong>: <ul><li>设定 <code>\\tdplotsetmaincoords{80}{120}</code> 统一标准视角.</li><li>只绘制主要轮廓, 去除 <code>surf</code> 填充.</li></ul></li></ul><h4 id="_6-颜色兼容问题" tabindex="-1">6. 颜色兼容问题</h4><p>%%TikZJax%%</p><ul><li><strong>问题</strong>: 某些 <code>colormap</code>, <code>opacity</code> 设置可能导致 TikzJax 解析失败.</li><li><strong>解决方案</strong>: <ul><li>出现失败时, 先逐项去掉 <code>colormap</code> 或透明度设置, 判断具体是哪一项引起.</li><li>本轮透明填充案例已确认能够渲染, 所以不能看到 <code>opacity</code> 就直接判错; 如果只是 darkmode 下显示不清, 再改用轮廓, 线型, 标注或斜线.</li></ul></li></ul><h4 id="_7-复杂阴影填充失败" tabindex="-1">7. 复杂阴影填充失败</h4><ul><li><strong>问题</strong>: 过大的剪裁范围, 过密的循环或复杂路径可能导致 TikZJax 解析失败.</li><li><strong>解决方案</strong>: <ul><li>简单纯色封闭区域直接用 <code>\\fill</code> / <code>\\filldraw</code>.</li><li>需要手动画图案时, 可以在局部 <code>scope</code> 中用 <code>\\clip</code>, 再执行规模适中的 <code>\\foreach \\draw</code>; 失败时先减小范围和循环次数.</li></ul></li></ul><h4 id="_8-关键点与标注" tabindex="-1">8. 关键点与标注</h4><ul><li><strong>问题</strong>: 关键点未标记, 导致数学分析不直观.</li><li><strong>解决方案</strong>: <ul><li>使用 <code>\\node[below]</code> 明确标注关键点 (如 <code>x=1,2,3,4</code>) .</li><li>方程统一放置在右上角: <code>\\node[anchor=west]</code>.</li></ul></li></ul><h4 id="_9-忘记导入立体绘图宏包" tabindex="-1">9. 忘记导入立体绘图宏包</h4><p>%%3D%%</p><ul><li><strong>问题</strong>: 忘记导入3d包, 导致无法加载3d图形.</li><li><strong>解决方案</strong>: 使用 <code>\\usepackage{tikz-3dplot}</code> 导入tikz-3dplot包</li></ul><h4 id="_10-坐标轴" tabindex="-1">10. 坐标轴</h4><ul><li>坐标轴绘制, 不要使用白色: <code>\\draw[-&gt;,white]</code> 在黑暗模式下会看不清</li></ul><hr><h1 id="绘图经验总结" tabindex="-1">绘图经验总结</h1><p>%%从失败原因汇总中提炼出来的可靠经验%%</p><h2 id="_1-轴刻度" tabindex="-1">1. 轴刻度</h2><ul><li><strong>X 轴, Y 轴刻度需完整标注</strong>, 避免遗漏关键点:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\foreach \\x in {1,2,3} {</span></span>
<span class="line"><span>  \\draw (\\x,0.1) -- (\\x,-0.1) node[below] {$\\x$};</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\foreach \\y in {1,2,3} {</span></span>
<span class="line"><span>  \\draw (0.1,\\y) -- (-0.1,\\y) node[left] {$\\y$};</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-分段函数绘制" tabindex="-1">2. 分段函数绘制</h2><ul><li><strong>端点处理</strong>: <ul><li>**闭区间 (取值) **: <code>\\filldraw (x,y) circle (2pt);</code></li><li>**开区间 (不取值) **: <code>\\draw[fill=white] (x,y) circle (2pt);</code></li></ul></li><li><strong>避免错误连接</strong>, 分段独立绘制:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\draw[thick] (a,b) -- (c,d); % 正常直线</span></span>
<span class="line"><span>\\draw[thick,-&gt;] (a,b) -- (c,d); % 延伸部分</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-标注" tabindex="-1">3. 标注</h2><ul><li><strong>紧靠对应函数段落, 避免放远处</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\node[above] at (0.5,2) {$Y=2\\ (X\\leq1)$};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="_4-绘图范围控制" tabindex="-1">4. 绘图范围控制</h2><ul><li><strong>局部调整, 避免全局修改</strong>, 保证 X&lt;0 和 X&gt;3 不受影响.</li><li><strong>箭头 (<code>-&gt;</code>) 只用于表示无限延伸</strong>.</li></ul><h2 id="_5-代码结构" tabindex="-1">5. 代码结构</h2><ul><li><strong>顺序: 坐标轴 → 刻度 → 线条 → 端点 → 标注</strong>.</li><li><strong>使用 <code>scale=1</code> 确保显示正常</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>\\begin{tikzpicture}[scale=1]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul>`,42))])}const g=l(c,[["render",r]]),u=JSON.parse('{"path":"/Other/%E8%AF%B4%E6%98%8E/tikz%E7%BB%98%E5%9B%BE%E6%A0%87%E5%87%86.html","title":"简介","lang":"zh-CN","frontmatter":{"tags":["数学","规则"],"description":"简介 环境配置 代码类型: tikz 可用宏包 %%AvailablePackages%% The following packages are available in \\\\usepackage{}: chemfig tikz-cd circuitikz pgfplots array amsmath amstext amsfonts amssymb t...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://PKM-er.github.io/Pkmer-Math/Other/%E8%AF%B4%E6%98%8E/tikz%E7%BB%98%E5%9B%BE%E6%A0%87%E5%87%86.html"}],["meta",{"property":"og:site_name","content":"Pkmer-Math"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"简介 环境配置 代码类型: tikz 可用宏包 %%AvailablePackages%% The following packages are available in \\\\usepackage{}: chemfig tikz-cd circuitikz pgfplots array amsmath amstext amsfonts amssymb t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"规则"}],["meta",{"property":"article:tag","content":"数学"}]],"tag":["数学","规则"]},"git":{},"readingTime":{"minutes":29.5,"words":8849},"filePathRelative":"Other/说明/tikz绘图标准.md","excerpt":"\\n<h2>环境配置</h2>\\n<p>代码类型: tikz</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-\\"><span class=\\"line\\"><span>\\\\usepackage{tikz}</span></span>\\n<span class=\\"line\\"><span>\\\\begin{document}</span></span>\\n<span class=\\"line\\"><span>\\\\begin{tikzpicture}</span></span>\\n<span class=\\"line\\"><span>...</span></span>\\n<span class=\\"line\\"><span>\\\\end{tikzpicture}</span></span>\\n<span class=\\"line\\"><span>\\\\end{document}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"内容规范","link":"Other/说明/内容规范.html"},{"title":"插件配置说明","link":"Other/说明/插件配置说明.html"}],"localMap":{"nodes":[{"id":"Other/说明/tikz绘图标准.md","value":{"title":"tikz绘图标准","path":"Other/说明/tikz绘图标准.md","outlink":[],"backlink":["Other/说明/内容规范.md","Other/说明/插件配置说明.md"]}},{"id":"Other/说明/内容规范.md","value":{"title":"内容规范","path":"Other/说明/内容规范.md","outlink":[],"backlink":[]}},{"id":"Other/说明/插件配置说明.md","value":{"title":"插件配置说明","path":"Other/说明/插件配置说明.md","outlink":[],"backlink":[]}}],"links":[{"source":"Other/说明/内容规范.md","target":"Other/说明/tikz绘图标准.md"},{"source":"Other/说明/插件配置说明.md","target":"Other/说明/tikz绘图标准.md"}]}}}');export{g as comp,u as data};
