---
tags:
  - 数学
dlink:
  - "[[--微积分--]]"
author:
  - Cyletix
  - GPT-4
---
对于大多数常见函数，混合偏导数是相等的。这由 **Schwarz 定理**（Schwarz's theorem）或称 **Clairaut 定理**（Clairaut's theorem）所保证。该定理表明，如果一个函数的混合偏导数在一个点及其附近连续，那么这两个混合偏导数是相等的。
# 定理陈述
设 $f$ 是定义在开集 $U \subset \mathbb{R}^2$ 上的二次连续可导函数，即函数 $f$ 具有连续的二阶偏导数。则对于 $U$ 中的任意点 $(x, y)$，有：
$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}
$$
### 示例
对于给定的函数 $f(x,y) = x^4 - 4xy + 2y^2$，我们已经计算了以下偏导数：
一阶偏导数：
$$
f_x = \frac{\partial f}{\partial x} = 4x^3 - 4y
$$
$$
f_y = \frac{\partial f}{\partial y} = -4x + 4y
$$
二阶偏导数：
$$
f_{xx} = \frac{\partial^2 f}{\partial x^2} = 12x^2
$$
$$
f_{yy} = \frac{\partial^2 f}{\partial y^2} = 4
$$
$$
f_{xy} = \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial y}(4x^3 - 4y) = -4
$$
$$
f_{yx} = \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial x}(-4x + 4y) = -4
$$
我们可以看到，混合偏导数 $f_{xy}$ 和 $f_{yx}$ 是相等的，即：
$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x} = -4
$$
### 例外情况
在某些特殊情况下，如果函数的二阶偏导数不连续或不存在，Schwarz 定理可能不适用。在这些情况下，混合偏导数可能不相等。不过，在实数域内的多数实际应用中，函数通常满足所需的条件，因此混合偏导数相等。
