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
	% 设置 3D 视角（俯仰角 80° 通常是固定的;  水平旋转角 120°, 或90°）
    `\tdplotsetmaincoords{80}{120}`
- 实线绘制边缘
	`\draw[smooth, thick]`, 
	根据水平旋转角 120°, 绘制另一边120°+180°=300° ,两条边
- 虚线绘制主平面投影
	`\draw[dashed]`
- 仅有实体形状才使用加粗`\draw[smooth, thick]`, 如: 圆柱的底部,顶部,边界 用实线绘制, 没有明确指定则不调整颜色
- 相交平面使用 填充透明度0.2: `\fill[black!20,opacity=0.2]`
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
---
# TikZ 绘图失败原因与解决方案总结
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
---
### **标准绘图原则**
✅ **2D：确保 `y` 轴范围受控，避免 TikzJax 计算溢出**  
✅ **3D：固定 `\tdplotsetmaincoords{80}{120}`，只绘制关键轮廓**  
✅ **曲线：使用 `smooth` 和 `samples=100`，提高解析精度**  
✅ **颜色：仅用黑白，避免 `colormap` 和 `fill opacity`**  
✅ **阴影：尽量 `filldraw` 而非 `clip`，减少 TikzJax 解析负担**

---
## 斜线填充
在 **Obsidian 的 TikZ 环境（tikzjax）** 下，斜线填充不能使用 `\foreach` 循环或者 `patterns`，因此可以用 `\clip` 加 `\fill` 来手动绘制斜线填充。下面是修正后的 **tikzjax 兼容代码**：
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
### 代码优化点：
1. **斜线填充**：
    - 不能使用 `\foreach` 在 `\clip` 内部，因此 **使用 `\clip` 限制区域，然后绘制一系列平行线**，保证它们只出现在圆内部。
    - 这里的 `\foreach \y in {-1.5,-1.2,...,1.5}` 产生 **从左到右的斜线**。
2. **旋转箭头**：
    - 直接用 `arc[start angle=0,end angle=45]` 绘制 **顺时针旋转的小箭头**。
### 兼容性：
✔ **完全兼容 Obsidian 的 tikzjax**  
✔ **正确填充斜线，符合手绘图风格**  
✔ **不会超出 Obsidian TikZ 插件支持范围**

---
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
```tikz
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
        \foreach \i in {0.1,0.2,...,0.9} {
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
# **TikZJax 绘图经验总结**
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
