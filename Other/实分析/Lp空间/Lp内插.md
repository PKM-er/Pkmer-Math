---
tags:
  - 数学
dlink:
  - "[[---Lp空间---]]"
  - "[[Hölder不等式]]"
  - "[[调和分析]]"
aliases:
  - 范数内插
  - Lp interpolation
author:
  - DeepSeekV4Flash
---

实际问题中常只知道函数在两个"端点阶"可积，却需要估计中间阶 $L^p$ 的范数。内插原理给出：$\|f\|_p$ 关于 $1/p$ 是**对数凸**的，两个端点范数即可控制中间一切范数。它是 [[Hölder不等式]] 的直接推论，也是[[调和分析]]中算子有界性论证（如 Hausdorff–Young 不等式）的引擎。需先掌握[[Lp空间的定义]]与[[Hölder不等式]]。

## 定理（范数内插 / 对数凸性）

设 $1\le p_0<p_1\le\infty$，$0<\theta<1$，$\dfrac{1}{p}=\dfrac{\theta}{p_0}+\dfrac{1-\theta}{p_1}$。若 $f\in L^{p_0}\cap L^{p_1}$，则 $f\in L^p$ 且

$$\|f\|_p\le\|f\|_{p_0}^{\theta}\,\|f\|_{p_1}^{1-\theta}$$

## 证明

写出 $|f|^p=|f|^{\theta p}|f|^{(1-\theta)p}$。由 $\dfrac{\theta p}{p_0}+\dfrac{(1-\theta)p}{p_1}=1$，对 $|f|^{\theta p}\in L^{p_0/(\theta p)}$ 与 $|f|^{(1-\theta)p}\in L^{p_1/((1-\theta)p)}$ 用 [[Hölder不等式]]（两指数互为共轭）：

$$\|f\|_p^p\le\left(\int |f|^{p_0}\,d\mu\right)^{\theta p/p_0}\left(\int |f|^{p_1}\,d\mu\right)^{(1-\theta)p/p_1}$$

两边开 $p$ 次方即得。端点 $p_1=\infty$ 的情形由 $|f|^{(1-\theta)p}\le\|f\|_\infty^{(1-\theta)p}$ 直接处理。

## 推论

- $L^{p_0}\cap L^{p_1}\subset L^p$ 连续嵌入，对一切 $p_0\le p\le p_1$。
- $\log\|f\|_p$ 是 $1/p$ 的凸函数（对数凸性）。
- 特例 $p_0=1,\ p_1=\infty$ 给出 $L^1\cap L^\infty\subset L^p$ 且 $\|f\|_p\le\|f\|_1^{1/p}\|f\|_\infty^{1-1/p}$——有界函数逐点衰减估计的常用形式。

## Riesz–Thorin 内插定理

若线性算子 $T$ 同时满足 $T:L^{p_0}\to L^{q_0}$ 与 $T:L^{p_1}\to L^{q_1}$ 有界（算子范数分别为 $M_0,M_1$），则对端点对连线上的 $\left(\dfrac1p,\dfrac1q\right)$ 有

$$\|T\|_{L^p\to L^q}\le M_0^{\theta}M_1^{1-\theta}$$

其中 $\dfrac1p=\dfrac{\theta}{p_0}+\dfrac{1-\theta}{p_1}$，$\dfrac1q=\dfrac{\theta}{q_0}+\dfrac{1-\theta}{q_1}$。证明依赖三线定理，这里只陈述结论。

## 应用

- **Hausdorff–Young 不等式**：傅里叶变换在 $L^1\to L^\infty$ 与 $L^2\to L^2$ 之间插值，得 $L^p\to L^{p'}$（$1\le p\le2$），见[[调和分析]]。
- Hardy–Littlewood 极大算子与奇异积分（Hilbert 变换）的 $L^p$ 有界性常由端点情形内插得到。
- 偏微分方程估计中，用 $L^p$ 内插在"正则性"与"可积性"两个端点之间平衡。

## 后续

内插是调和分析与椭圆方程估计的常规武器；与[[Lp嵌入关系]]结合，可精确刻画不同阶可积函数空间之间的连续包含与范数控制。