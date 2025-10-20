---
tags:
  - 数学
  - 规则
---
# 简介
## 环境配置
代码类型: tikz 
```
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}
...
\end{tikzpicture}
\end{document}
```
## 可用package
The following packages are available in `\usepackage{}`:
- chemfig
- tikz-cd
- circuitikz
- pgfplots
- array
- amsmath
- amstext
- amsfonts
- amssymb
- tikz-3dplot
### 部分package示例
- 3D线图: `\usepackage{tikz-3dplot}`
- 网格图: `\usepackage{pgfplots}`
- 电路: `\usepackage{circuitikz}`
- 交换图: `\usepackage{tikz-cd}`
- 有机化学: `\usepackage{chemfig}`

### 禁止使用
- `\documentclass{article}`

会导致报错

---
# 配置项
## 颜色
TikZ 内置了一些常见的颜色方案，方便绘图时使用。这些颜色可以直接引用，也可以通过 `xcolor` 包扩展。以下是主要内置颜色方案：
### 常用颜色
- **基础颜色**：
       - `black`
    - `white`
    - `red`
    - `green`
    - `blue`
    - `cyan`
    - `magenta`
    - `yellow`
- **灰度颜色**（通过数值指定，`0` 表示黑，`1` 表示白）：
    - `gray`（例如 `gray!50` 表示 50% 灰色）
### 混合颜色
- TikZ 支持颜色混合，语法为 `color1!percentage!color2`。 例如：
    - `red!50!blue`：红色和蓝色各占 50%。
    - `green!30!white`：绿色占 30%，白色占 70%。
### 其他内置颜色
通过加载 `xcolor` 扩展包，可以使用更多颜色：
- **自然颜色**：
    - `brown`
    - `lime`
    - `orange`
    - `pink`
    - `violet`
    - `purple`
    - `teal`
    - `olive`
- **Web 颜色**（需要 `dvipsnames` 选项支持）：
    - `Aquamarine`
    - `NavyBlue`
    - `SkyBlue`
    - `Emerald`
    - `Periwinkle`
    - `Sepia`
### 自定义颜色
你也可以通过以下方式定义自定义颜色：
1. RGB 模式：
    ```latex
    \definecolor{mycolor}{rgb}{0.2, 0.4, 0.6}
    ```
2. HTML 颜色代码：
    ```latex
    \definecolor{mycolor}{HTML}{1A2B3C}
    ```
3. CMYK 模式：
    ```latex
    \definecolor{mycolor}{cmyk}{0.1, 0.2, 0.3, 0.4}
    ```
### 应用方式
在 TikZ 中，可以通过以下方式应用颜色：
1. 改变线条颜色：
    ```latex
    \draw[red] (0,0) -- (1,1);
    ```
2. 改变填充颜色：
    ```latex
    \fill[blue] (0,0) rectangle (1,1);
    ```
3. 组合颜色属性：
    ```latex
    \draw[fill=yellow,draw=red] (0,0) circle (1cm);
    ```
通过这些内置和扩展颜色，几乎可以满足大多数绘图需求

## 方向参数
- above
- below
- left
- right


## 定义变量
定义: `\def\angleA{30}`
使用: `\draw[thick] (0,0) -- ({1*cos(\angleA)},{1*sin(\angleA)});`



---
## 2D图
- 定义变量$x$的范围: `\draw[domain= 0:1,smooth,variable=\x]`
## 3D图
### 旋转体
- 观察角: 
	% 设置 3D 视角（俯仰角 80° 通常是固定的;  水平旋转角 120°, 或90°）
    `\tdplotsetmaincoords{80}{120}`
- 实线绘制边缘
	`\draw[smooth, thick]`, 
	根据水平旋转角 120°, 绘制另一边120°+180°=300° ,两条边.
- 根据俯仰角, 可能会调整, 如: 
	- 110度, 按感觉改的, 120°-10°=110°
	- 另一条边也是因为倾斜视图的原因, 120°+180°+10°=310°
- 虚线绘制主平面投影
	`\draw[dashed]`
- 仅有实体形状才使用加粗`\draw[smooth, thick]`, 如: 圆柱的底部,顶部,边界 用实线绘制, 没有明确指定则不调整颜色
- 相交平面使用 填充透明度0.2: `\fill[black!20,opacity=0.2]`


---
# **填充方法**

在 TikzJax 环境中，不同的填充有不同的最佳实践：
#### **A. 纯色填充 (Solid Color Fills)**
原则：优先使用 \fill 或 \filldraw。
说明：对于简单的封闭图形（如 circle, rectangle 或 ... -- cycle 路径），直接使用 \fill 命令填充颜色。这比 clip 方式更直接，解析负担更小。
示例：
代码段
```
% 正确做法
\fill[blue!50] (0,0) rectangle (2,2);
\draw[thick, red] (0,0) -- (1,1) -- (0,1) -- cycle;
```
#### **B. 斜线/图案填充 (Hatching/Pattern Fills)**
原则：必须使用 \clip 配合 \foreach。
说明：这是在 TikzJax 中实现图案填充的唯一标准方法。先用 \clip 和一个精确的封闭路径来定义剪裁区域，然后在这个区域内部用 \foreach 绘制一系列足够大的平行线。
示例：
代码段
```
% 这是实现斜线填充的【标准范式】
\begin{scope}
  \clip (0,0) circle (1); % 1. 用精确路径剪裁
  \foreach \i in {-1.5,-1.2,...,1.5} { % 2. 在内部绘制足够大的线条
    \draw[red!70] (-1.5,\i) -- (1.5,\i);
  }
\end{scope}
\draw (0,0) circle (1); % 3. 最后绘制边界
```


## 斜线填充
这类多边形斜线填充的核心实现方法是：**使用 `\clip` 限定填充区域，再用 `\foreach` 搭配 `\draw` 逐条绘制平行斜线**。
```tikz
\begin{document}
\begin{tikzpicture}
    % 绘制坐标轴
    \draw[->] (-1.5,0) -- (1.5,0) node[right] {$x$};
    \draw[->] (0,-1.5) -- (0,1.5) node[above] {$y$};
    % 绘制圆 (x^2 + y^2 = 1)
    \draw[thick,red] (0,0) circle(1);
    % 在圆内部填充斜线
    \begin{scope}
        \clip (0,0) circle(1); % 只填充圆内区域
        \foreach \y in {-1.5,-1.2,...,1.5} {
            \draw[red!70] (-1.5,\y) -- (1.5,\y+1);
        }
    \end{scope}
    % 添加旋转箭头
    \draw[->,red,thick] (1,0) arc[start angle=0,end angle=45,radius=1];
\end{tikzpicture}
\end{document}
```
### 三角形
```tikz
\begin{document}
\begin{tikzpicture}
    % 坐标轴
    \draw[->,thick] (-0.2,0) -- (1.5,0) node[right] {$x$};
    \draw[->,thick] (0,-0.2) -- (0,1.5) node[above] {$y$};
    % 三角形边界
    \draw[thick,red] (1,0) -- (0,1) -- (0,0) -- cycle;
    % 斜线填充
    \begin{scope}
        \clip (1,0) -- (0,1) -- (0,0) -- cycle;
        \foreach \i in {0.1,0.3,...,0.9} {
            \draw[red!50] (0,\i) -- (\i,0);
        }
    \end{scope}
    % 标注方程
    \node[right] at (0.5,0.6) {\large $x+y=1$};
    % 标注点
    \node[below left] at (0,0) {$0$};
    \node[below] at (1,0) {$1$};
    \node[left] at (0,1) {$1$};
\end{tikzpicture}
\end{document}
``` 
### 不规则多边形填充
利用指定轮廓线进行 `clip`, 从而避免了不规范的遮挡操作
```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=1]
% 参数定义
\def\R{1.3}   % 外圆半径
\def\r{0.7}   % 内圆半径
\def\aOne{210} % 起始角度
\def\aTwo{90}  % 结束角度
\def\dx{2.2}  % 横线绘制范围 (确保足够宽)

% ===== 使用精确轮廓剪裁并填充 =====
\begin{scope}
  % 1. 使用精确的环形扇区路径作为剪裁区域
  % 这个路径与你最后绘制边界的路径完全相同
  \clip ({\R*cos(\aOne)},{\R*sin(\aOne)})
        arc[start angle=\aOne,end angle=\aTwo,radius=\R] --
        ({\r*cos(\aTwo)},{\r*sin(\aTwo)})
        arc[start angle=\aTwo,end angle=\aOne,radius=\r] -- cycle;

  % 2. 在剪裁区域内用 \foreach 绘制横线
  % 这是在 TikzJax 环境下实现填充的标准方法
  \foreach \y in {-1.3,-1.1,...,1.3} {
    \draw[red, thin] (-\dx,\y) -- (\dx,\y);
  }
\end{scope}

% 3. 绘制边界线 (此路径与剪裁路径完全相同)
\draw[thick]
  ({\R*cos(\aOne)},{\R*sin(\aOne)})
  arc[start angle=\aOne,end angle=\aTwo,radius=\R] --
  ({\r*cos(\aTwo)},{\r*sin(\aTwo)})
  arc[start angle=\aTwo,end angle=\aOne,radius=\r] -- cycle;
\end{tikzpicture}
\end{document}
```


### 代码优化点：
1. **斜线填充**：
    - 不能使用 `\foreach` 在 `\clip` 内部，因此 **使用 `\clip` 限制区域，然后绘制一系列平行线**，保证它们只出现在圆内部。
    - 这里的 `\foreach \y in {-1.5,-1.2,...,1.5}` 产生 **从左到右的斜线**。
2. **旋转箭头**：
    - 直接用 `arc[start angle=0,end angle=45]` 绘制 **顺时针旋转的小箭头**。


---
## 颜色填充

```
% 填充阴影区域
\begin{scope} \clip (0,-1.5) rectangle (1,0); \fill[black!20,opacity=0.7] plot[domain=0.01:1,smooth]({\x}, {ln(\x)}) -- (1,0) -- (0,0) -- cycle; \end{scope}
```

```tikz
\usepackage{tikz-3dplot}
\begin{document}
\tdplotsetmaincoords{60}{50}
\begin{tikzpicture}[tdplot_main_coords,declare function={h=4;r=3;}]
	\draw[fill=blue!40,fill opacity=0.5] plot[variable=\x,domain=\tdplotmainphi:180,smooth] ({r*cos(\x)},{r*sin(\x)},0)
 -- plot[variable=\x,domain=180:\tdplotmainphi,smooth] ({r*cos(\x)},{r*sin(\x)},h);
	\draw[fill=blue!40,fill opacity=0.5] plot[variable=\x,domain=0:\tdplotmainphi,smooth] ({r*cos(\x)},{r*sin(\x)},0)
 -- plot[variable=\x,domain=\tdplotmainphi:0,smooth] ({r*cos(\x)},{r*sin(\x)},h)
 -- cycle;
\end{tikzpicture}
\end{document}
```




```
% 内层
\draw[fill=red!80,fill opacity=0.5] 
	plot[variable=\t,domain=\thetaEdgeB:\thetaEdgeA,smooth] ({2*cos(\t)},{2*sin(\t)},{2}) 
 -- plot[variable=\t,domain=\thetaEdgeA:\thetaEdgeB,smooth] ({cos(\t)},{sin(\t)},{1}) 
 -- cycle;
```



---
## **标准绘图原则**
✅ **2D：确保 `y` 轴范围受控，避免 TikzJax 计算溢出**  
✅ **3D：固定 `\tdplotsetmaincoords{80}{120}`，只绘制关键轮廓**  
✅ **曲线：使用 `smooth` 和 `samples=100`，提高解析精度**  
✅ **颜色：仅用黑白，避免 `colormap` 和 `fill opacity`**  
✅ **阴影：尽量 `filldraw` 而非 `clip`，减少 TikzJax 解析负担**



---
## Polygon

You can use the geometric shapes given by the shapes.geometric library

```latex
\usetikzlibrary{shapes.geometric}

\begin{tikzpicture}[mystyle/.style={draw,shape=circle,fill=blue}]
\def\ngon{5}
\node[regular polygon,regular polygon sides=\ngon,minimum size=3cm] (p) {};
\foreach\x in {1,...,\ngon}{\node[mystyle] (p\x) at (p.corner \x){};}
\foreach\x in {1,...,\numexpr\ngon-1\relax}{
  \foreach\y in {\x,...,\ngon}{
    \draw (p\x) -- (p\y);
  }
}
\end{tikzpicture}
```

---
One short tikz code without use of a library.

```latex
\documentclass[border=7mm]{standalone}
\usepackage{tikz}
\begin{document}
\foreach \n in {3,...,7}
  \tikz\foreach \i in {1,...,\n}
    \fill (\i*360/\n:1) coordinate (n\i) circle(2 pt)
      \ifnum \i>1 foreach \j in {\i,...,1}{(n\i) edge (n\j)} \fi;
\end{document}
```

---
For fun, a short code with `pst-poly` gets the desired result:

```latex
\documentclass[svgnames]{standalone}

\usepackage{pst-poly}
\usepackage{auto-pst-pdf}
\begin{document}

\psset{unit=3.5cm, dimen=middle, linejoin=1, dotsize=12pt}
\begin{pspicture}(-1,-1)(1,1)
    \providecommand{\PstPolygonNode}{\psdots[dotsize=12pt, linecolor=SteelBlue](1;\INode)
    }
    \rput(0,0){\PstPentagon[PolyName=A, linecolor=LightSteelBlue, linewidth=1.2pt] }
    \rput(0,0){\PstPentagon[PolyName=A, PolyOffset=2] }
\end{pspicture}

\end{document}
```

**Upgrade:** An improved version, which itself calculate all necessary data from given number of nodes and angle of the first node position:
```latex
\documentclass[border=3mm,tikz]{standalone}

\begin{document}
\begin{tikzpicture}[
 every node/.style={draw,shape=circle,fill=blue,text=white}]
%%%% variable data data
\def\numpoly{8}%number of nodes
\def\startangle{30}%direction of the first node
\def\pradious{33mm}
%------- calculations of the positions angles
\pgfmathparse{int(\startangle+360/\numpoly)}%
    \let\nextangle=\pgfmathresult
\pgfmathparse{int(\startangle-360/\numpoly+360)}%
    \let\endtangle=\pgfmathresult
%--- nodes
    \foreach \i [count=\ii from 1] in {\startangle,\nextangle,...,\endtangle}
\path (\i:\pradious) node (p\ii) {\ii};
%--- interconnections
    \foreach \x in {1,...,\numpoly}
        \foreach \y in {\x,...,\numpoly}
\draw (p\y) -- (p\x);
    \end{tikzpicture}
\end{document}
```

---
# 案例
## 2D
```tikz
\begin{document}
\begin{tikzpicture}
% 绘制坐标轴
\draw[->] (-0.2,0) -- (1.5,0) node[right] {$x$};
\draw[->] (0,-1) -- (0,1) node[above] {$y$};
% 定义曲线 y = ln(x)，限制范围
\draw[domain=0.2:1.5,smooth,variable=\x] 
plot ({\x}, {ln(\x)}) node[right] {$y = \ln(x)$};
% 填充阴影区域
\begin{scope} \clip (0,-1.5) rectangle (1,0); \fill[black!20,opacity=0.7] plot[domain=0.01:1,smooth]({\x}, {ln(\x)}) -- (1,0) -- (0,0) -- cycle; \end{scope}
% 标记点
\node[below] at (1,0) {1};
\node[below left] at (0,0) {0};
\node[below left] at (0.05, -1) {$(0, \ln(x))$};
\end{tikzpicture}
\end{document}
```
```tikz
\begin{document}
\begin{tikzpicture}
% 绘制坐标轴
\draw[->] (-1.5,0) -- (1.5,0) node[right] {$x$};
\draw[->] (0,-0.5) -- (0,1.5) node[above] {$y$};
% 三角形顶点
\coordinate (A) at (-1,0);
\coordinate (B) at (1,0);
\coordinate (C) at (0,1);
% 绘制三角形边
\draw[thick,red!50] (A) -- (C) node[midway,left] {$L_1$};
\draw[thick,red!50] (C) -- (B) node[midway,right] {$L_2$};
\draw[thick,blue!50] (B) -- (A) node[midway,below] {$L_3$};
% 标注顶点
\node[below left] at (A) {$(-1,0)$};
\node[below right] at (B) {$(1,0)$};
\node[above] at (C) {$(0,1)$};
\node[below left] at (0,0) {$0$};
% 添加方向箭头
\draw[->,red!50,line width=1pt] (-0.5,0.5) -- (-0.45,0.55);
\draw[->,red!50,line width=1pt] (0.5,0.5) -- (0.55,0.45);
\draw[->,blue!50,line width=1pt] (0,-0.05) -- (-0.05,-0.05);
\end{tikzpicture}
\end{document}
```
## 3D
**必须需要导入 `\usepackage{tikz-3dplot}` 包!**
```tikz
\usepackage{tikz-3dplot}
\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \tdplotsetmaincoords{80}{120}
    \begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \draw[->] (0,0,0) -- (1.5,0,0) node[below right] {$x$};
        \draw[->] (0,0,0) -- (0,1.5,0) node[below left] {$y$};
        \draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 主平面上的虚线轮廓
        \draw[dashed] plot[domain=0:1,samples=50] ({\x},0,{\x*\x});
        \draw[dashed] plot[domain=0:1,samples=50] ({-\x},0,{\x*\x});
        \draw[dashed] plot[domain=0:1,samples=50] (0,{\x},{\x*\x});
        \draw[dashed] plot[domain=0:1,samples=50] (0,{-\x},{\x*\x});
        % 真实边缘轮廓
        \foreach \angle in {120, 300} {
            \draw[smooth, thick] plot[domain=0:1,samples=50] 
                ({\x*cos(\angle)},{\x*sin(\angle)},{\x*\x});
        }
        % 顶部圆形
        \draw[smooth] (1,0,1) arc[start angle=0,end angle=360,x radius=1,y radius=1];
        % 标注点
        \node[below left] at (0,0,0) {$O$};
        \node[right] at (0,0,1) {$z=1$};
        % 在右侧标注曲面方程
        \node[anchor=west] at (0,1,0.5) {\large $z = x^2 + y^2$};
    \end{scope}
\end{tikzpicture}
\end{document}
```
 真实边缘轮廓的角度为 \tdplotsetmaincoords{80}{120} 后者120和其补角: 120+180, 这两个线是真实视角边缘轮廓线
 
 ```tikz
\usepackage{tikz-3dplot}
\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角
    \tdplotsetmaincoords{70}{120}
    \begin{scope}[tdplot_main_coords]
        % 坐标轴
        \draw[->,thick] (0,0,0) -- (1.5,0,0) node[below left] {$x$};
        \draw[->,thick] (0,0,0) -- (0,1.5,0) node[below right] {$y$};
        \draw[->,thick] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 空间三角形 (红色)
        \draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,1) -- cycle;
        % 底面三角形 (阴影填充)
        \begin{scope}
            \clip (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
            \foreach \i in {0.1,0.2,...,0.9} {
                \draw[red!50] (1-\i,\i,0) -- (1-\i+0.1,\i,0);
            }
        \end{scope}
        \draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
        % 标注点
        \node[below left] at (0,0,0) {$0$};
        \node[left] at (0,0,1) {$1$};
        \node[right] at (1,0,0) {$1$};
        \node[above] at (0,1,0) {$1$};
        % 文字标注
        \node at (0.2,0.5,0.7) {\large $\Sigma$};
        \node at (0.3,0.2,0) {\large $D$};
    \end{scope}
\end{tikzpicture}
\end{document}
```

### 3D直角坐标平面案例


- **表 (a) 方程组有解的情形**

| 图形  | 几何意义             | 代数表达                                                              |
| --- | ---------------- | ----------------------------------------------------------------- |
| 1   | 三张平面相交于一点        | $r(A) = r(\bar{A}) = 3$                                           |
| 2   | 三张平面相交于一条直线      | $r(A) = r(\bar{A}) = 2$，且 $\beta_1, \beta_2, \beta_3$ 中任意两个向量线性无关 |
| 3   | 两张平面重合，第三张平面与之相交 | $r(A) = r(\bar{A}) = 2$，且 $\beta_1, \beta_2, \beta_3$ 中有两个向量线性相关  |
| 4   | 三张平面重合           | $r(A) = r(\bar{A}) = 1$                                           |
```tikz
\usepackage{tikz}
\usepackage{tikz-3dplot}

\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \tdplotsetmaincoords{80}{120}
    \begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};  % 只画 z > 0

        % 填充三个相互垂直的平面（只显示 z ≥ 0 部分）
        \fill[gray!20,opacity=0.5] (-1.2,-1.2,0) -- (-1.2,1.2,0) -- (1.2,1.2,0) -- (1.2,-1.2,0) -- cycle; % XY 平面
        \fill[gray!30,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle; % XZ 平面，限制 z ≥ 0
        \fill[gray!40,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle; % YZ 平面，限制 z ≥ 0

        % 标记相交点
        \node[below left,red] at (0,0,0) {$O$};
        \fill[red] (0,0,0) circle (1.5pt);
    \end{scope}
\end{tikzpicture}
\end{document}
```
```tikz
\usepackage{tikz}
\usepackage{tikz-3dplot}

\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \tdplotsetmaincoords{80}{120}
    \begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 绘制三个平面
        % 平面 1：XZ 平面（y=0）
        \fill[gray!20,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;

        % 平面 2：YZ 平面（x=0）
        \fill[gray!30,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle;

        % 平面 3：倾斜平面 x + y = 0
        \fill[gray!40,opacity=0.5] (-1.2,1.2,0) -- (1.2,-1.2,0) -- (1.2,-1.2,1.2) -- (-1.2,1.2,1.2) -- cycle;

        % 标记交线（严格与 z 轴重合）
        \draw[thick,red] (0,0,0) -- (0,0,1.2);

        % 标记相交点
        \node[below left] at (0,0,0) {$O$};

    \end{scope}
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usepackage{tikz-3dplot}

\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \tdplotsetmaincoords{80}{120}
    \begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 绘制两个重合的 XZ 平面（y=0）
        \fill[red!20,opacity=0.5] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;
        \fill[gray!30,opacity=0.5] (-1.2,0.1,0) -- (-1.2,0.1,1.2) -- (1.2,0.1,1.2) -- (1.2,0.1,0) -- cycle;

        % 第三张平面：YZ 平面 (x=0)
        \fill[gray!40,opacity=0.5] (0,-1.2,0) -- (0,-1.2,1.2) -- (0,1.2,1.2) -- (0,1.2,0) -- cycle;

        % 标记交线（X 轴方向）
        \draw[thick,red] (-1.2,0,0) -- (1.2,0,0);

        % 在交点 (0,0,0) 画一个红点
        \fill[red] (0,0,0) circle (1.5pt);

        % 标记相交点
        \node[below left] at (0,0,0) {$O$};
        \draw[thick,red] (0,0,0) -- (0,0,1.2);

    \end{scope}
\end{tikzpicture}
\end{document}
```
```tikz
\usepackage{tikz}
\usepackage{tikz-3dplot}

\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \tdplotsetmaincoords{80}{120}
    \begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 画三张完全重合的平面（这里只画一个 XZ 平面）
        \fill[red] (-1.2,0,0) -- (-1.2,0,1.2) -- (1.2,0,1.2) -- (1.2,0,0) -- cycle;
        \fill[gray!30,opacity=0.5] (-1.2,0.1,0) -- (-1.2,0.1,1.2) -- (1.2,0.1,1.2) -- (1.2,0.1,0) -- cycle;
        \fill[gray!30,opacity=0.5] (-1.2,-0.1,0) -- (-1.2,-0.1,1.2) -- (1.2,-0.1,1.2) -- (1.2,-0.1,0) -- cycle;

        % 标记相交点
        \node[below left] at (0,0,0) {$O$};

    \end{scope}
\end{tikzpicture}
\end{document}
```
```tikz

```
- **表 (b) 方程组无解的情形**

| 图形  | 几何意义              | 代数表达                                                      |
| --- | ----------------- | --------------------------------------------------------- |
| 5   | 三张平面两两相交，且交线相互平行  | $r(A) = 2, r(\bar{A}) = 3$，且 $a_1, a_2, a_3$ 中任意两个向量都线性无关 |
| 6   | 两张平面平行，第三张平面与它们相交 | $r(A) = 2, r(\bar{A}) = 3$，且 $a_1, a_2, a_3$ 中有两个向量线性相关   |
```tikz
\usepackage{tikz}
\usepackage{tikz-3dplot}

\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \tdplotsetmaincoords{20}{120}
    \begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 三个平面（都严格平行于 Z 轴）
        \fill[gray!30,opacity=0.5] (0,-0.5,0) -- (0,1.2,0) -- (0,1.2,1) -- (0,-0.5,1) -- cycle; % x = 0 (YZ 平面)
        \fill[gray!40,opacity=0.5] (-0.5,0,0) -- (1.2,0,0) -- (1.2,0,1) -- (-0.5,0,1) -- cycle;  % y = 0 (XZ 平面)
        \fill[gray!50,opacity=0.5] (-0.2,1.2,0) -- (1.2,-0.2,0) -- (1.2,-0.2,1) -- (-0.2,1.2,1) -- cycle;  % x + y = 1

        % 三条交线 (都严格沿 z 轴)
        \draw[thick,red] (0,0,0) -- (0,0,1);  % 交线 1 (原点)
        \draw[thick,red] (1,0,0) -- (1,0,1);  % 交线 2
        \draw[thick,red] (0,1,0) -- (0,1,1);  % 交线 3

    \end{scope}
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usepackage{tikz-3dplot}

\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    \tdplotsetmaincoords{80}{120}
    \begin{scope}[tdplot_main_coords]
        % 绘制坐标轴
        \draw[->] (-1.5,0,0) -- (1.5,0,0) node[right] {$x$};
        \draw[->] (0,-1.5,0) -- (0,1.5,0) node[right] {$y$};
        \draw[->] (0,0,0) -- (0,0,1.5) node[above] {$z$};

        % 绘制两个平行的 XZ 平面
        \fill[gray!20,opacity=0.5] (-1.2,-1.2,0) -- (1.2,-1.2,0) -- (1.2,-1.2,1.2) -- (-1.2,-1.2,1.2) -- cycle;
        \fill[gray!30,opacity=0.5] (-1.2,1.2,0) -- (1.2,1.2,0) -- (1.2,1.2,1.2) -- (-1.2,1.2,1.2) -- cycle;

        % 第三张平面（YZ 平面）
        \fill[gray!40,opacity=0.5] (0,-1.5,0) -- (0,-1.5,1.2) -- (0,1.5,1.2) -- (0,1.5,0) -- cycle;

        % 交线：两条平行的红色直线
        \draw[thick,red] (0,-1.2,0) -- (0,-1.2,1.2);
        \draw[thick,red] (0,1.2,0) -- (0,1.2,1.2);

    \end{scope}
\end{tikzpicture}
\end{document}
```


### 标准旋转体填充
以后旋转体都严格按照这个模式进行
```tikz
\usepackage{tikz-3dplot}
\begin{document}

% 设定旋转体视角角度
\def\phi{80} %俯仰角
\def\theta{120}   % 旋转角度
\def\thetaEdgeA{\theta-10}  % 视角边界角1（120° - 10°）
\def\thetaEdgeB{\theta+180+10}  % 视角边界角2（120° + 180° + 10°）

\tdplotsetmaincoords{\phi}{\theta}
\begin{tikzpicture}
    \begin{scope}[tdplot_main_coords]

        % 坐标轴
        \draw[->] (0,0,0) -- (4,0,0) node[below right] {$x$};
        \draw[->] (0,0,0) -- (0,4,0) node[below left] {$y$};
        \draw[->] (0,0,0) -- (0,0,3) node[above] {$z$};

        % 深灰色圆环（XY 平面上的投影）
        \fill[black!60,opacity=0.5] (0,0,0) circle (2);
        \fill[white!100] (0,0,0) circle (1); % 中心填充黑色形成圆环
        \draw[thick, black] (0,0,0) circle (2);
		\draw[thick, black] (0,0,0) circle (1);

        % **蓝色填充区域（正确匹配视角边界 110° 和 310°）** 使用两段 fill
		% 内层
		\draw[fill=white!70,fill opacity=0.5] 
			plot[variable=\t,domain=\thetaEdgeB:\thetaEdgeA,smooth] ({2*cos(\t)},{2*sin(\t)},{2}) 
		 -- plot[variable=\t,domain=\thetaEdgeA:\thetaEdgeB,smooth] ({cos(\t)},{sin(\t)},{1}) 
		 -- cycle;
		% 外层
        \draw[fill=blue!90,fill opacity=0.9] 
            plot[variable=\t,domain=\thetaEdgeB:\thetaEdgeA+360,smooth] ({2*cos(\t)},{2*sin(\t)},{2}) 
         -- plot[variable=\t,domain=\thetaEdgeA+360:\thetaEdgeB,smooth] ({cos(\t)},{sin(\t)},{1}) 
         -- cycle;

        % **虚线轮廓（XOZ, YOZ 平行边界）**
        \draw[dashed] (0,0,0) -- (2,0,2);
        \draw[dashed] (0,0,0) -- (0,2,2);
		\draw[dashed] (0,0,0) -- (-2,0,2);
        \draw[dashed] (0,0,0) -- (0,-2,2);

        % **真实视角边缘轮廓线（\thetaEdgeA 和 \thetaEdgeB 实线）**
        \foreach \angle in {\thetaEdgeA, \thetaEdgeB} {
            \draw[thick] (0,0,0) -- ({2*cos(\angle)},{2*sin(\angle)},2);
        }

        % 顶部圆形（r=2 边界）
        \draw[smooth] (2,0,2) arc[start angle=0,end angle=360,x radius=2,y radius=2];
        \draw[smooth] (1,0,1) arc[start angle=0,end angle=360,x radius=1,y radius=1];

		% **法向量（起点在 r=1.5, z=1.5, 朝向 XOZ 平面外）**
        \draw[->,thick] (1.5,0,1.5) -- (2,0,1) node[left] {$\mathbf{n}$};

        % 标注点
        \node[below left] at (0,0,0) {$O$};
        \node[right] at (0,1,0) {$1$};
        \node[right] at (0,2,0) {$2$};
        \node[right] at (0,0,1) {$1$};
        \node[right] at (0,0,2) {$2$};
        
        % 标注方程
	    \node[right] at (0,1.5,1) {\large $z=\sqrt{x^2+y^2}$};

    \end{scope}
\end{tikzpicture}
\end{document}
```



## 树状图
### 纵向
```tikz
\begin{document}
\begin{tikzpicture}
    % 根节点
    \node {$z$}
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
\end{tikzpicture}
\end{document}
```
### 横向
```tikz
\begin{document}
\begin{tikzpicture}[
    grow=right, % 让树从左向右生长
    level distance=10mm, % 每个层级的间距
    sibling distance=10mm, % 兄弟节点的间距
    edge from parent/.style={draw,thick} % 连接线样式
]
    % 根节点
    \node {$z$}
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
\end{tikzpicture}
\end{document}
```
在 `tikz` 画横向树时，默认情况下 **兄弟节点（sibling nodes）会均匀分布**，但如果一个分支有更多层次的节点，而另一个分支较浅，TikZ 可能会 **将较浅的分支的节点与较深分支的部分节点重叠**。
### **解决方案**
1. **使用 `level distance` 让层级间距适应不同深度**
    - `level distance` 设定层间距离，但 TikZ 不能自动为深度不同的子树调整距离。
    - 可以 **单独设置特定层级的 `sibling distance` 以避免重叠**。
2. **增加 `sibling distance` 以避免重叠**
    - `sibling distance` 控制同一级别节点的水平间隔。
    - TikZ 默认让兄弟节点 **均匀分布**，但我们可以 **手动增加间隔**。
3. **手动调整特定子树的 `level distance
    - 可以 **为不同的层级设置不同的 `level distance`** 让它们分布得更合理。
```tikz
\begin{document}
\begin{tikzpicture}[
grow=right, % 让树从左向右生长
sibling distance=15mm, % 兄弟节点的默认间距
edge from parent/.style={draw,thick}, % 连接线样式
level distance=12mm, % 默认层级间距
level 2/.style={sibling distance=5mm}, % 让第二层的节点稍微分开，避免重叠
level 3/.style={sibling distance=14mm} % 让第三层稍微紧凑
]
% 根节点
\node {$z$}
child {node {$xy$} 
child {node {$x$}}
child {node {$y$}} 
}
child {node {$yg(x)$} 
child {node {$g(x)$} 
child {node {$x$}}}
child {node {$y$}} 
};
\end{tikzpicture}
\end{document}
```
```tikz
\begin{document}
\begin{tikzpicture}
    % 坐标轴
    \draw[->,thick] (-0.5,0) -- (3,0) node[right] {};
    \draw[->,thick] (0,-0.5) -- (0,3) node[above] {};
    % 直线 (主干)
    \draw[thick] (-0.5,-0.5) -- (2.5,2.5);
    % 斜向分叉线
    \foreach \i in {0.5,1,1.5,2} {
        \draw[thick] (\i,\i) -- (\i+0.5,\i+1);
    }
\end{tikzpicture}
\end{document}
```


---
## 其他案例

一个失败的案例, 原因是忘记导入 `\usepackage{tikz-3dplot}` 包了, 加上就好
```tikz
\usepackage{tikz-3dplot}
\begin{document}
\begin{tikzpicture}
    % 设置 3D 视角
    \tdplotsetmaincoords{70}{120}
    \begin{scope}[tdplot_main_coords]
        % 坐标轴
        \draw[->,thick] (0,0,0) -- (1.5,0,0) node[below left] {$x$};
        \draw[->,thick] (0,0,0) -- (0,1.5,0) node[below right] {$y$};
        \draw[->,thick] (0,0,0) -- (0,0,1.5) node[above] {$z$};
        % 空间三角形 (红色)
        \draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,1) -- cycle;
        % 底面三角形 (阴影填充)
        \begin{scope}
            \clip (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
            \foreach \i in {0.1,0.2,...,0.9} {
                \draw[red!50] (1-\i,\i,0) -- (1-\i+0.1,\i,0);
            }
        \end{scope}
        \draw[thick,red] (1,0,0) -- (0,1,0) -- (0,0,0) -- cycle;
        % 标注点
        \node[below left] at (0,0,0) {$0$};
        \node[left] at (0,0,1) {$1$};
        \node[right] at (1,0,0) {$1$};
        \node[above] at (0,1,0) {$1$};
        % 文字标注
        \node at (0.2,0.5,0.7) {\large $\Sigma$};
        \node at (0.3,0.2,0) {\large $D$};
    \end{scope}
\end{tikzpicture}
\end{document}
```


## Automaton

### tikz绘制自动机的状态转移图示例: 

```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}

  % 定义状态
  \node (p0) at (0, 0) [circle, draw, double] {$p_0$}; % 接受状态
  \node (p1) at (3, 0) [circle, draw] {$p_1$};
  \node (p2) at (3, -3) [circle, draw] {$p_2$};
  \node (p3) at (0, -3) [circle, draw] {$p_3$};

  % 转移路径
  \draw[->] (p0) to[loop above] node {0} ();
  \draw[->] (p0) to[bend left] node[midway, above] {1} (p1);
  \draw[->] (p0) to[bend left=15] node[midway, right] {2} (p2);
  \draw[->] (p0) to[bend right] node[midway, left] {3} (p3);

  \draw[->] (p1) to[loop above] node {0} ();
  \draw[->] (p1) to[bend left] node[midway, right] {1} (p2);
  \draw[->] (p1) to[bend left=15] node[midway, right] {2} (p3);
  \draw[->] (p1) to[bend right] node[midway, above] {3} (p0);

  \draw[->] (p2) to[loop below] node {0} ();
  \draw[->] (p2) to[bend left] node[midway, below] {1} (p3);
  \draw[->] (p2) to[bend left=15] node[midway, left] {2} (p0);
  \draw[->] (p2) to[bend right] node[midway, right] {3} (p1);

  \draw[->] (p3) to[loop below] node {0} ();
  \draw[->] (p3) to[bend left] node[midway, left] {1} (p0);
  \draw[->] (p3) to[bend left=15] node[midway, left] {2} (p1);
  \draw[->] (p3) to[bend right] node[midway, below] {3} (p2);

\end{tikzpicture}
\end{document}
```
### 多边形
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[mystyle/.style={draw, shape=circle, text=white, minimum size=6mm}
]

% Define the center of the pentagon
\coordinate (center) at (0, 0);

% Define nodes at equal angles around the center
\foreach \i in {1, 2, 3, 4, 5} {
    \node[mystyle] (q\i) at ({72*\i-72}:2cm) {$q_{\i}$}; % 72° spacing for pentagon
}

% Draw transitions between nodes
\foreach \i [evaluate={\j=int(mod(\i,5)+1)}] in {1, 2, 3, 4, 5} {
    \draw[->] (q\i) -- (q\j); % Connect nodes in a closed loop
}

\end{tikzpicture}
\end{document}

```

### example
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[->, shorten >=1pt, auto, node distance=1.5cm, thick]

  % Define the states
  \node (q2) at (180:1.5cm) [circle, draw, double] {$q_2$}; % q2 at 180° (leftmost point)

  % Define the pentagon nodes using polar coordinates around q2
  \foreach \i in {1, 2, 3, 4} {
    \node (q\the\numexpr\i+2\relax) at ({180 - 72*\i}:1.5cm) [circle, draw] {$q_{\the\numexpr\i+2\relax}$};
  }
  \node (q1) [circle, draw, left of=q2] {$q_1$};
  \node (q0) [circle, draw, left of=q1] {$q_0$};

  % Draw the transitions
  \path (q0) edge node {0} (q1)
        (q1) edge node {0} (q2)
        (q2) edge node {0} (q3)
        (q3) edge node {0} (q4)
        (q4) edge node {0} (q5)
        (q5) edge node {0} (q6)
        (q6) edge node {0} (q2);

  % Start state arrow
  \draw[->] (-5.5, -1) -- (q0);

\end{tikzpicture}
\end{document}
```


---
## 绘图失败原因汇总
#### **1. 计算溢出**
- **问题**：高次幂、多项式计算导致 TikzJax 计算失败。
- **解决方案**：
    - 限制 `y` 轴范围：`max(y_{\min}, min(y_{\max}, f(x)))`
    - 降低幂次：尝试分解或近似表示。
#### **2. 超出坐标轴范围**
- **问题**：曲线部分超出可视范围，导致图像部分缺失或溢出。
- **解决方案**：
    - **手动设置 `x` 和 `y` 轴范围**，例如 `domain=0.5:4.5, ymin=-2, ymax=2`。
#### **3. TikzJax 不支持 `pgfplots`**
- **问题**：在 Obsidian 中，`pgfplots` 不能直接使用。
- **解决方案**：
    - 只用 `\draw plot`，不要 `\addplot` 和 `\begin{axis}`。
    - 预计算点值并手动绘制。
#### **4. 计算精度问题**
- **问题**：某些 `plot` 计算 TikzJax 解析失败。
- **解决方案**：
    - 增加 `samples`，如 `samples=100`。
    - 复杂计算分步执行，或使用 `foreach` 逐点绘制。
#### **5. 3D 视角错误**
- **问题**：3D 视角不符合需求，导致 `x, y, z` 轴方向不正确。
- **解决方案**：
    - 设定 `\tdplotsetmaincoords{80}{120}` 统一标准视角。
    - 只绘制主要轮廓，去除 `surf` 填充。
#### **6. 颜色与 TikzJax 兼容问题**
- **问题**：某些 `colormap`、`opacity` 设置可能导致 TikzJax 解析失败。
- **解决方案**：
    - 避免 `colormap`，只用 `black!50`、`gray`。
    - 使用 `pattern` 代替 `fill opacity`。
#### **7. 复杂阴影填充失败**
- **问题**：`clip` 可能导致 TikzJax 解析异常。
- **解决方案**：
    - 先用 `\clip` 限制区域，再 `\fill` 。
    - 避免 `clip`，改用 `filldraw` 手动绘制封闭区域。
#### **8. 关键点与标注**
- **问题**：关键点未标记，导致数学分析不直观。
- **解决方案**：
    - 使用 `\node[below]` 明确标注关键点（如 `x=1,2,3,4`）。
    - 方程统一放置在右上角：`\node[anchor=west]`。
#### 9. 忘记导入3d包
- **问题**：忘记导入3d包，导致无法加载3d图形。
- **解决方案**：使用  `\usepackage{tikz-3dplot}` 导入tikz-3dplot包
#### 10. 坐标轴
- 坐标轴绘制, 不要使用白色: `\draw[->,white]` 在黑暗模式下会看不清




# **绘图经验总结**
## **1. 轴刻度**
- **X 轴、Y 轴刻度需完整标注**，避免遗漏关键点：
    ```
    \foreach \x in {1,2,3} {
      \draw (\x,0.1) -- (\x,-0.1) node[below] {$\x$};
    }
    ```
    ```
    \foreach \y in {1,2,3} {
      \draw (0.1,\y) -- (-0.1,\y) node[left] {$\y$};
    }
    ```
## **2. 分段函数绘制**
- **端点处理**：
    - **闭区间（取值）**： `\filldraw (x,y) circle (2pt);`
    - **开区间（不取值）**： `\draw[fill=white] (x,y) circle (2pt);`
- **避免错误连接**，分段独立绘制：
    ```
    \draw[thick] (a,b) -- (c,d); % 正常直线
    \draw[thick,->] (a,b) -- (c,d); % 延伸部分
    ```
## **3. 标注**
- **紧靠对应函数段落，避免放远处**：
    ```
    \node[above] at (0.5,2) {$Y=2\ (X\leq1)$};
    ```
## **4. 绘图范围控制**
- **局部调整，避免全局修改**，保证 X<0 和 X>3 不受影响。
- **箭头 (`->`) 只用于表示无限延伸**。
## **5. 代码结构**
- **顺序：坐标轴 → 刻度 → 线条 → 端点 → 标注**。
- **使用 `scale=1` 确保显示正常**：
    ```
    \begin{tikzpicture}[scale=1]
    ```

