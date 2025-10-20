---
tags:
  - 例题
  - 過去問
datetime: 2024-11-28 17:33:20
dlink:
  - "[[R02infait.pdf]]"
author:
  - Cyletix
---
# 数学
6选3
## 1. 線形代数 Linear algebra
已知数列 $a_0, a_1, a_2, \dots$，定义为：
$$
a_0 = 3, \quad a_1 = 1, \quad a_2 = 3,
$$
以及递推关系：
$$
a_n = a_{n-1} + a_{n-2} + 2a_{n-3}, \quad n = 3, 4, 5, \dots
$$
1. 求 $a_3, a_4, a_5$。
2. 找到矩阵 $T$，使得对所有 $n = 0, 1, 2, \dots$ 成立：
   $$
   \begin{pmatrix}
   a_{n+1} \\
   a_{n+2} \\
   a_{n+3}
   \end{pmatrix}
   =
   T
   \begin{pmatrix}
   a_n \\
   a_{n+1} \\
   a_{n+2}
   \end{pmatrix}.
   $$
3. 求矩阵 $T$ 的所有特征值及对应的特征向量。
4. 将向量$\begin{pmatrix}3 \\1 \\3\end{pmatrix}$表示为第三问中特征向量的线性组合。   
5. 求通项 $a_n$。
---
## 2. 微分方程式 Differential equation
考虑函数的微分方程：
$$
(x^4 - 1)\frac{dy}{dx} = y^2 + 2x^3y - 3x^2.
$$
1. 已知该微分方程具有形如 $y_p(x) = ax^3$ 的特解，求 $y_p(x)$，其中 $a$ 为常数。
2. 令 $y = y_p + \frac{1}{u}$，其中 $u$ 为 $x$ 的函数，求微分方程的通解。

![[R02-数学-向量分析#3. ベクトル解析 Vector analysis]]

## 4. 複素関数論 Complex function
考虑 $z$ 平面上的三角形区域 $S$，其边界由 $x = 1$, $y = 1$, $y = 1 - x$ 给出。对于以下变换，绘制 $S$ 在 $w$ 平面上的影像区域 $S'$，并给出区域边界的方程：
1. $w = z + (1 - \sqrt{3}i)$；
2. $w = 2e^{\frac{\pi i}{6}}z + (1 - \sqrt{3}i)$；
3. $w = z^2$。
### 图像
1. $w = z + (1 - \sqrt{3}i)$
```tikz
\begin{document}
\begin{tikzpicture}[scale=2.0]
  % 画 (u,v) 坐标轴 (可根据需要增减范围)
  \draw[->] (-0.2,0) -- (3.0,0) node[right] {$u$};
  \draw[->] (0,-2.5) -- (0,1.0) node[above] {$v$};

  % 三个顶点坐标（用 \sqrt{3} 约等 1.732 也可）
  \coordinate (A) at (1, {1 - sqrt(3)});
  \coordinate (B) at (2, {1 - sqrt(3)});
  \coordinate (C) at (2, {-sqrt(3)});

  % 填充并画三角形
  \filldraw[blue!20, opacity=0.5] (A) -- (B) -- (C) -- cycle;
  \draw[thick, blue] (A) -- (B) -- (C) -- cycle;

  % 标注顶点
  \node[left]  at (A) {$A_w=(1,\;1-\sqrt{3})$};
  \node[above] at (B) {$B_w=(2,\;1-\sqrt{3})$};
  \node[right] at (C) {$C_w=(2,\;-\sqrt{3})$};

  % 标注区域
  \node at (1.7, {1.0 - sqrt(3)}) {$S'$};
  \node at (1.8, -2.0) {$w = z + (1 - \sqrt{3}i)$};
\end{tikzpicture}
\end{document}
```
2. $w = 2e^{\frac{\pi i}{6}}z + (1 - \sqrt{3}i)$
```tikz
\usepackage{tikz}
\begin{document}

\begin{tikzpicture}[scale=2.0]
  % 在 (u,v)-平面 画变换后三角形 S'
  % 将坐标整体向右平移 3.5 单位，以便与 (x,y)-平面分开显示
  \begin{scope}[xshift=3.5cm]
    % (u,v)-坐标轴
    \draw[->] (-0.5, 0) -- (3.0, 0) node[right] {$u$};
    \draw[->] (0, -1.0) -- (0, 2.0) node[above] {$v$};

    % 定义 \sqrt{3} 的数值近似，方便代码书写
    \pgfmathsetmacro{\sqrtt}{1.732} % 约等于 sqrt(3)


    % 填充并画三角形 S'
    \filldraw[red!20, opacity=0.5]
      (0,0) -- (\sqrtt,1) -- ({\sqrtt+1},{1-\sqrtt}) -- cycle;
    \draw[thick, red]
      (0,0) -- (\sqrtt,1) -- ({\sqrtt+1},{1-\sqrtt}) -- cycle;

    % 标注三角形 S' 顶点
    \node[left]  at (0,0) {$(0,0)=A_w$};
    \node[above] at (\sqrtt,1) {$(\sqrt{3},\,1)=B_w$};
    \node[right] at ({\sqrtt+1},{1-\sqrtt}) 
      {$\bigl(\sqrt{3}+1,\;1-\sqrt{3}\bigr)=C_w$};

    % 标注该区域
    \node at (1.3,0.3) {$S'$};

  \end{scope}

\end{tikzpicture}

\end{document}
```
3. $w = z^2$
```tikz
\begin{document}
\begin{tikzpicture}[scale=2.0]
  % (u,v) 坐标轴
  \draw[->] (-1.5,0) -- (2.0,0) node[right] {$u$};
  \draw[->] (0,-0.5) -- (0,2.5) node[above] {$v$};

  % 填充抛物线围成的区域
  \filldraw[green!20, opacity=0.5]
    plot[domain=0:1, samples=50] ({1 - \x*\x},{2*\x}) -- % 第一条抛物线 (x=1 映射)
    plot[domain=1:0, samples=50] ({\x*\x - 1},{2*\x}) -- % 第二条抛物线 (y=1 映射)
    plot[domain=0:1, samples=50] ({2*\x - 1},{2*\x*(1-\x)}) -- % 边3 (x+y=1)
    cycle; % 闭合路径

  % 绘制三条抛物线边界
  \draw[thick,green] 
    plot[domain=0:1, samples=50] ({1 - \x*\x},{2*\x});
  \draw[thick,green]
    plot[domain=0:1, samples=50] ({\x*\x - 1},{2*\x});
  \draw[thick,green]
    plot[domain=0:1, samples=50] ({2*\x -1},{2*\x*(1-\x)});

  % 标注三条曲线相交的顶点:
  \fill (-1,0) circle(0.015);  % (u,v)=(-1,0)
  \node[below left] at (-1,0) {$(-1,0)$};

  \fill (0,2) circle(0.015);   % (u,v)=(0,2)
  \node[above] at (0,2) {$(0,2)$};

  \fill (1,0) circle(0.015);   % (1,0)
  \node[below right] at (1,0) {$(1,0)$};

  % 最后加注区域说明
  \node at (0,1) {$S'$ $w=z^2$};

\end{tikzpicture}
\end{document}
```

## 5. 確率・統計 Probability and statistics
设连续随机变量 $X$ 在区间 $[0, 1)$ 上服从均匀分布，定义 $Y = -\log \frac{(1-X)^2}{4}$，其中 $\log$ 为自然对数。回答以下问题：
1. 对任意实数 $t$，求 $P(Y \leq t)$。
2. 求 $Y$ 的期望和方差。
## 6. 記号論理学 Symbolic logic
1. 将以下命题逻辑公式分别记为 $\phi_1, \phi_2, \phi_3$：
   1. $(p \to q) \land (p \land q \to r)$；
   2. $\neg(\neg(r \to s) \lor (\neg p \land r \land s))$；
   3. $p \leftrightarrow r$。
   使用归结法证明 $\phi_3$ 是 $\phi_1 \land \phi_2$ 的逻辑后继。
2. 将以下谓词逻辑公式分别记为 $\psi_1, \psi_2, \psi_3$：
   1. $\forall x \forall y ((\neg P(x, y) \to P(y, x)) \land (Q(x, y) \to \neg Q(y, x)))$；
   2. $\forall x \forall y (P(x, y) \to Q(x, y))$；
   3. $\forall x (\exists y Q(x, y) \land \forall y (Q(x, y) \to \neg P(y, x)))$。
   判断以下公式是否可满足，并给出理由：
   1. $\psi_1 \land \psi_2$；
   2. $\psi_1 \land \psi_3$。
---
# 选修
6选2
## B-信息论
[[R02-B-問1]]
[[R02-B-問2]]
## C-自动机
[[R02-C-問1]]
[[R02-C-問2]]

---
---
