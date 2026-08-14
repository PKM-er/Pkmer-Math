---
tags:
  - 数学
dlink:
  - "[[---对偶空间---]]"
  - "[[对偶空间（泛函分析）]]"
  - "[[连续线性泛函]]"
aliases:
  - Hahn-Banach Theorem
  - 哈恩-巴拿赫定理
author:
  - DeepSeekV4Flash
---
对偶空间 $X^*$ 为什么"足够丰富"？答案由 Hahn–Banach 定理给出：它能把子空间上给定的（受控）线性泛函整体延拓到全空间且不增范数，从而保证非零向量的对偶像非零、凸集可被超平面分离。这是"用标量函数探测空间"能成功的根本原因。前置依赖：[[赋范空间的定义]]、[[连续线性泛函]]、[[算子范数]]。

> [!NOTE] Hahn–Banach 定理（解析形式）
> 设 $X$ 为实线性空间，$p:X\to\mathbb{R}$ 为**次线性泛函**（$p(x+y)\le p(x)+p(y)$，$p(\alpha x)=\alpha p(x)$，$\alpha\ge0$）。若 $Y\subset X$ 为线性子空间，$f:Y\to\mathbb{R}$ 线性且 $f(y)\le p(y)$（$y\in Y$），则存在线性延拓 $F:X\to\mathbb{R}$ 使 $F|_Y=f$ 且 $F(x)\le p(x)$ 对一切 $x\in X$ 成立。

## 赋范空间版本
取 $p(x)=\|f\|\,\|x\|$ 得：若 $X$ 为赋范空间、$f\in Y^*$，则存在 $F\in X^*$ 满足
$$F|_Y=f,\qquad \|F\|=\|f\|$$
（范数保持延拓）。复空间情形通过实部 $F(x)=\mathrm{Re}\,F(x)-i\,\mathrm{Re}\,F(ix)$ 化归。

## 推论
- **分离性**：对任意 $x_0\ne0$，存在 $\varphi\in X^*$ 使 $\varphi(x_0)=\|x_0\|$ 且 $\|\varphi\|=1$——$X^*$ 分离 $X$ 的点
- 对 $x\notin\overline{Y}$（$Y$ 闭子空间），存在 $\varphi\in X^*$ 使 $\varphi|_Y=0$、$\varphi(x)\ne0$
- $X^*$ 的对偶范数决定 $X$ 的范数：$\|x\|=\sup_{\|\varphi\|\le1}|\varphi(x)|$
- 每个闭凸集是包含它的闭半空间之交（几何形式见[[Hahn-Banach分离定理]]）

## 证明思想
用 Zorn 引理取极大延拓 $(Z,F)$；若 $Z\ne X$，取 $z\notin Z$ 用次可加性构造 $F$ 在 $Z+\mathbb{R}z$ 上的延拓（选择适当的 $c$ 使 $F(z)=c$ 满足两侧夹逼 $F(y)-p(y-z)\le c\le p(y+z)-F(y)$），与极大性矛盾。

## 后续
Hahn–Banach 是三大原理之首（另有开映射、闭图像定理），支撑[[典范嵌入]]的等距性、[[自反空间]]与[[弱拓扑]]理论；分离形式在凸分析、优化（Lagrange 对偶）与偏微分方程弱解理论中无处不在。
