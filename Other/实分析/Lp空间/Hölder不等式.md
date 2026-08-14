---
tags:
  - 数学
dlink:
  - "[[---Lp空间---]]"
  - "[[Lp空间的定义]]"
  - "[[Minkowski不等式]]"
aliases:
  - Hölder's inequality
  - 赫尔德不等式
author:
  - DeepSeekV4Flash
---
Hölder 不等式是 $L^p$ 空间理论的基石不等式：它把两个不同"可积阶"函数的乘积纳入 $L^1$，给出 $\|fg\|_1$ 以两个范数之积为上界的定量控制。有了它才能证明 $L^p$ 满足三角不等式（[[Minkowski不等式]]）并成为赋范空间。需先掌握[[Lp空间的定义]]与[[Lebesgue积分的定义]]。

## 定理（Hölder 不等式）
设 $(X, \mathcal{A}, \mu)$ 为测度空间，$1 \le p, q \le \infty$ 且 $\dfrac{1}{p} + \dfrac{1}{q} = 1$（称 $p, q$ 互为共轭指数）。若 $f \in L^p(\mu)$，$g \in L^q(\mu)$，则 $fg \in L^1(\mu)$ 且

$$\|fg\|_1 \le \|f\|_p \, \|g\|_q$$

## 证明（$1 < p < \infty$）
由 Young 不等式：对 $a, b \ge 0$，

$$ab \le \frac{a^p}{p} + \frac{b^q}{q}$$

取 $a = \dfrac{|f(x)|}{\|f\|_p}$，$b = \dfrac{|g(x)|}{\|g\|_q}$（若某范数为零则结论平凡），积分得

$$\int \frac{|f|\,|g|}{\|f\|_p \|g\|_q} \, d\mu \le \frac{1}{p} \int \frac{|f|^p}{\|f\|_p^p} \, d\mu + \frac{1}{q} \int \frac{|g|^q}{\|g\|_q^q} \, d\mu = \frac{1}{p} + \frac{1}{q} = 1$$

即得 $\|fg\|_1 \le \|f\|_p \|g\|_q$。端点情形 $p=1, q=\infty$ 由 $|fg| \le |f|\,\|g\|_\infty$ 直接得出。

## 特殊情形
- $p = q = 2$：即 Cauchy–Schwarz 不等式 $\int |fg| \, d\mu \le \|f\|_2 \|g\|_2$，是 $L^2$ 空间内积理论的基础。
- 等号成立条件：$|f|^p$ 与 $|g|^q$ 几乎处处成比例。

## 应用
- 证明[[Minkowski不等式]]，从而 $L^p$ 是赋范空间。
- $L^p$ 对偶理论：当 $1 \le p < \infty$ 时，$(L^p)^* \cong L^q$（$q$ 为共轭指数），见[[对偶空间（泛函分析）]]。
- 证明 $f \in L^p \cap L^q$ 时 $f \in L^r$（$p \le r \le q$）的内插性质。
