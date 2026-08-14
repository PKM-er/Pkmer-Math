---
tags:
  - 数学
dlink:
  - "[[---测度理论的应用---]]"
  - "[[乘积测度]]"
  - "[[Lebesgue积分的定义]]"
aliases:
  - Fubini's Theorem
  - Tonelli 定理
  - Fubini 定理
author:
  - DeepSeekV4Flash
---
重积分 $\int_{X \times Y} f\,d(\mu \times \nu)$ 何时等于先对 $y$、再对 $x$ 的累次积分？Tonelli 定理与 Fubini 定理给出精确答案：非负可测函数无条件可交换（Tonelli），可积函数可交换且相等（Fubini）。需先掌握[[乘积测度]]、[[Lebesgue积分的定义]]与[[单调收敛定理]]。

## Tonelli 定理（非负可测函数）
设 $f \ge 0$ 为 $\mathcal{A} \otimes \mathcal{B}$-可测，则 $x \mapsto \int_Y f(x, y)\,d\nu(y)$ 是 $\mathcal{A}$-可测函数，且

$$
\int_{X \times Y} f\,d(\mu \times \nu) = \int_X \left(\int_Y f(x, y)\,d\nu(y)\right) d\mu(x)
$$

等式两边可取 $+\infty$；交换累次积分的顺序也成立。

## Fubini 定理（可积函数）
设 $f$ 为 $\mathcal{A} \otimes \mathcal{B}$-可测且 $\int_{X \times Y} |f|\,d(\mu \times \nu) < \infty$，则

1. 对几乎处处 $x$，$y \mapsto f(x, y)$ 关于 $\nu$ 可积；
2. $x \mapsto \int_Y f(x, y)\,d\nu(y)$ 关于 $\mu$ 可积；
3. 重积分等于累次积分，且顺序可交换：

$$
\int_{X \times Y} f\,d(\mu \times \nu) = \int_X \left(\int_Y f(x, y)\,d\nu(y)\right) d\mu(x) = \int_Y \left(\int_X f(x, y)\,d\mu(x)\right) d\nu(y)
$$

## 证明思路
先对示性函数 $f = \mathbf{1}_E$ 验证（矩形上显然，经 $\pi$-$\lambda$ 定理推广到 $\mathcal{A} \otimes \mathcal{B}$），经线性到简单函数；非负可测函数用[[单调收敛定理]]取极限即得 Tonelli；一般可积函数分解 $f = f^+ - f^-$，对正负部分用 Tonelli 即得 Fubini。

## 可积性条件不可省
在 $(0,1)^2$ 上取 $f(x, y) = \dfrac{x^2 - y^2}{(x^2 + y^2)^2}$。因 $\dfrac{\partial}{\partial x}\dfrac{x}{x^2+y^2} = \dfrac{y^2-x^2}{(x^2+y^2)^2}$，有

$$
\int_0^1 \int_0^1 f(x, y)\,dx\,dy = -\frac{\pi}{4}, \qquad \int_0^1 \int_0^1 f(x, y)\,dy\,dx = \frac{\pi}{4}
$$

两个累次积分不相等，因为 $\int_{(0,1)^2} |f| = \infty$，重积分不存在。

## 应用
- 重积分化为累次积分：$\int_{\mathbb{R}^2} f = \int_{\mathbb{R}}\left(\int_{\mathbb{R}} f(x, y)\,dy\right)dx$。
- 卷积 $f * g$ 的可积性与积分次序交换由 Tonelli 定理保证（见[[卷积]]）。
- 概率论中由联合分布求边缘分布、交换期望次序的理论依据。

## 后续
Fubini 定理是[[Lp空间的定义|$L^p$ 空间]]卷积不等式、傅里叶变换与调和分析、偏微分方程弱解理论等方向反复使用的工具。
