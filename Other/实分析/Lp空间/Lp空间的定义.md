---
tags:
  - 数学
dlink:
  - "[[---Lp空间---]]"
  - "[[Lebesgue积分的定义]]"
  - "[[可测函数的定义]]"
author:
  - DeepSeekV4Flash
---
$L^p$ 空间由 $p$ 次可积函数构成，是[[Lebesgue积分的定义|Lebesgue 积分]]理论的中心对象。

## 定义
设 $(X, \mathcal{A}, \mu)$ 为测度空间，$1 \le p < \infty$。定义

$$\|f\|_p = \left(\int |f|^p \, d\mu\right)^{1/p}$$

则

$$L^p(\mu) = \{f : \|f\|_p < \infty\}$$

按几乎处处相等视为同一元素。当 $p = \infty$ 时，

$$\|f\|_\infty = \inf\{M : |f| \le M \ \text{几乎处处}\}$$

## 性质
- $L^p$ 是赋范线性空间（三角不等式即 Minkowski 不等式）。
- $L^p$ 完备（[[Lp完备性|Riesz-Fischer 定理]]），是 Banach 空间；$L^2$ 还是 Hilbert 空间。
- 重要的不等式：[[Hölder不等式]]与[[Minkowski不等式]]。
- $L^p$ 空间是[[调和分析]]中傅里叶变换算子有界性讨论的基本作用空间。
