---
tags:
  - 数学
dlink:
  - "[[--代数数论--]]"
  - "[[代数整数环]]"
  - "[[代数数域]]"
aliases:
  - p-adic numbers
  - p进数域
  - p进整数
author:
  - DeepSeekV4Flash
---

p进数从"素数的局部"视角给每个素数配备一个完备数域，是解析数论与代数数论的桥梁；其整数环 $\mathbb{Z}_p$ 是[[代数整数环]]在局部域中的对应物。

## p进绝对值
对有理数 $x=p^k\dfrac{m}{n}$（$k\in\mathbb{Z}$，$m,n$ 均不被 $p$ 整除），定义 **p进绝对值**
$$|x|_p = p^{-k}, \qquad |0|_p=0$$

它满足非阿基米德三角不等式 $|x+y|_p \le \max\{|x|_p,|y|_p\}$。

## 定义
**p进数域** $\mathbb{Q}_p$ 是 $\mathbb{Q}$ 关于 $|\cdot|_p$ 的完备化；**p进整数环** $\mathbb{Z}_p=\{x\in\mathbb{Q}_p:|x|_p\le 1\}$。

每个 p进整数可唯一展开为
$$x = \sum_{i\ge 0} a_i p^i, \qquad a_i\in\{0,1,\dots,p-1\}$$
这个无穷级数在 $|\cdot|_p$ 下收敛，允许"向左无限延伸"的整数。

## 性质
- $\mathbb{Z}_p$ 是 $\mathbb{Q}_p$ 的整数环，其分式域是 $\mathbb{Q}_p$
- **Ostrowski 定理**：$\mathbb{Q}$ 的非平凡绝对值在等价意义下只有通常绝对值 $|\cdot|_\infty$ 与 p进绝对值 $|\cdot|_p$

## 示例
- 7 的 2 进展开：$7=1+1\cdot 2+1\cdot 4=111_2$
- $-1$ 的 5 进展开：$-1=4+4\cdot 5+4\cdot 5^2+\cdots=\cdots4444_5$，因为部分和 $4(1+5+\cdots+5^{n-1})=5^n-1$ 在 5 进拓扑下趋于 $-1$
- $|10|_5=\frac15$（$10=5\cdot 2$），$|1/125|_5=125$
