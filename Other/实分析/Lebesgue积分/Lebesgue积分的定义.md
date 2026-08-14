---
tags:
  - 数学
dlink:
  - "[[---Lebesgue积分---]]"
  - "[[可测函数的定义]]"
  - "[[Lp空间的定义]]"
author:
  - DeepSeekV4Flash
---
Lebesgue 积分通过简单函数逼近定义，是 Riemann 积分的推广，可积范围更广，其研究对象为[[可测函数的定义|可测函数]]。

## 定义
设 $(X, \mathcal{A}, \mu)$ 为测度空间。对非负简单函数 $\varphi = \sum_{k=1}^{n} a_k \mathbf{1}_{A_k}$（$a_k \ge 0$，$A_k$ 两两不交可测），定义其积分为

$$\int \varphi \, d\mu = \sum_{k=1}^{n} a_k \mu(A_k)$$

对非负可测函数 $f$，定义

$$\int f \, d\mu = \sup\left\{\int \varphi \, d\mu : \varphi \text{ 是简单函数},\ 0 \le \varphi \le f\right\}$$

对一般可测函数 $f$，若 $\int f^+ \, d\mu < \infty$ 或 $\int f^- \, d\mu < \infty$，则

$$\int f \, d\mu = \int f^+ \, d\mu - \int f^- \, d\mu$$

其中 $f^+ = \max(f, 0)$，$f^- = \max(-f, 0)$。

## 与 Riemann 积分的关系
- Riemann 可积的函数必 Lebesgue 可积，且两者相等；精确的判别（Riemann 可积 ⟺ 有界且不连续点零测）见[[与Riemann积分的比较]]。
- Lebesgue 可积但不 Riemann 可积的例子：Dirichlet 函数在 $[0,1]$ 上 Lebesgue 积分为 0，但 Riemann 不可积。
- 由 $p$ 次可积函数构成的[[Lp空间的定义|$L^p$ 空间]]是 Lebesgue 积分理论的中心对象。
