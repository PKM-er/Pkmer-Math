---
tags:
  - 数学
---
## 环境配置
代码类型: tikz 
```
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}



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

---
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



## 2D图
- 定义变量$x$的范围: `\draw[domain= 0:1,smooth,variable=\x]`


## 3D图

### 旋转体
- 观察角: 
	% 设置 3D 视角（俯仰角 80°，水平旋转角 120°）
    `\tdplotsetmaincoords{80}{120}`
- 实线绘制边缘
	`\draw[smooth, thick]`, 
	根据水平旋转角 120°, 绘制另一边120°+180°=300° ,两条边
- 虚线绘制主平面投影
	`\draw[dashed]`
- 




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