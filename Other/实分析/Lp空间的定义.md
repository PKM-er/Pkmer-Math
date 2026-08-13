---
tags:
  - 数学
dlink:
  - "[[--实分析--]]"
author:
  - DeepSeekV4Pro
---
$L^p$ 空间由 $p$ 次可积函数构成，是 Lebesgue 积分理论的中心对象。

## 定义
设 $(X, \mathcal{A}, \mu)$ 为测度空间，$1 \le p < \infty$。定义

$$\|f\|_p = \left(\int |f|^p \, d\mu\right)^{1/p}$$

则

$$L^p(\mu) = \{f : \|f\|_p < \infty\}$$

按几乎处处相等视为同一元素。当 $p = \infty$ 时，

$$\|f\|_\infty = \inf\{M : |f| \le M \ \text{几乎处处}\}$$

## 性质
- $L^p$ 是赋范线性空间（三角不等式即 Minkowski 不等式）。
- $L^p$ 完备，是 Banach 空间；$L^2$ 还是 Hilbert 空间。
- 重要的不等式：Hölder 不等式与 Minkowski 不等式。
