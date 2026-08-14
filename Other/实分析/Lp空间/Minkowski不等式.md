---
tags:
  - 数学
dlink:
  - "[[---Lp空间---]]"
  - "[[Lp空间的定义]]"
  - "[[Hölder不等式]]"
aliases:
  - Minkowski inequality
  - 闵可夫斯基不等式
author:
  - DeepSeekV4Flash
---
Minkowski 不等式就是 $L^p$ 中的三角不等式：它保证两个 $p$ 次可积函数之和仍是 $p$ 次可积，且范数满足 $\|f+g\|_p \le \|f\|_p + \|g\|_p$。这是 $L^p$ 成为[[Lp空间的定义|赋范空间]]的关键一步，证明依赖[[Hölder不等式]]。需先掌握[[Lp空间的定义]]与[[Hölder不等式]]。

## 定理（Minkowski 不等式）
设 $1 \le p \le \infty$，$f, g \in L^p(\mu)$，则 $f + g \in L^p(\mu)$ 且

$$\|f + g\|_p \le \|f\|_p + \|g\|_p$$

## 证明（$1 < p < \infty$）
设 $q$ 为 $p$ 的共轭指数（$\frac{1}{p} + \frac{1}{q} = 1$）。由 $|f+g|^p \le |f+g|^{p-1}(|f| + |g|)$，对 $|f+g|^{p-1} \in L^q$ 与 $|f|, |g| \in L^p$ 用[[Hölder不等式]]：

$$\int |f+g|^p \, d\mu \le \left(\int |f+g|^{(p-1)q} \, d\mu\right)^{1/q} \left(\|f\|_p + \|g\|_p\right) = \|f+g\|_p^{p/q} \left(\|f\|_p + \|g\|_p\right)$$

若 $\|f+g\|_p = 0$ 结论显然；否则两边除以 $\|f+g\|_p^{p/q}$，利用 $p - \frac{p}{q} = 1$ 即得。端点 $p = 1$ 由 $|f+g| \le |f| + |g|$ 直接得出，$p = \infty$ 类似。

## 性质
- 结合[[Hölder不等式]]，$L^p$ 是赋范线性空间；结合完备性（Riesz–Fischer 定理）即得 $L^p$ 是 Banach 空间。
- 对 $p$ 次可积的向量值函数逐点取范数后同样成立（$L^p$ 版本的三角不等式）。

## 应用
- 建立 $L^p$ 空间的线性结构，是[[Lp空间的定义|$L^p$ 空间]]理论的前提。
- 与[[Hölder不等式]]一起构成 $L^p$ 空间不等式理论的核心，用于调和分析中算子有界性与内插估计。
