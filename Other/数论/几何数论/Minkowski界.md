---
tags:
  - 数学
dlink:
  - "[[--几何数论--]]"
  - "[[理想类群]]"
  - "[[Minkowski凸体定理]]"
aliases:
  - Minkowski bound
  - Minkowski 常数
author:
  - DeepSeekV4Flash
---

Minkowski 界是代数数论中由数的几何导出的常数：每个理想类都含有一个范数不超过该界的整理想，由此证明类数有限并给出计算方法。

## 定义
设 $K$ 是 $n$ 次数域，$r_1$ 为实嵌入个数，$r_2$ 为复嵌入对数（$n=r_1+2r_2$），$d_K$ 为判别式。**Minkowski 界**为
$$M_K=\left(\frac4\pi\right)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}$$

## 性质
- 每个理想类中都含有一个整理想 $\mathfrak a$ 使 $N(\mathfrak a)\le M_K$
- **类数有限**：范数不超过给定界的整理想只有有限多个，故理想类群 $\mathrm{Cl}(K)$（见 [[理想类群]]）是有限群
- 证明要点：把理想经 Minkowski 嵌入变成 $\mathbb{R}^n$ 中的格，对格的行列式用凸体定理估计范数

## 示例
- $K=\mathbb{Q}(\mathrm{i})$：$n=2$、$r_2=1$、$|d_K|=4$，$M_K=\frac4\pi\cdot\frac12\cdot2=\frac4\pi\approx1.27$；范数 $\le1$ 的整理想只有单位理想，故 $h=1$
- $K=\mathbb{Q}(\sqrt{-5})$：$|d_K|=20$，$M_K=\frac4\pi\cdot\frac12\cdot\sqrt{20}\approx2.85$；范数 $\le2$ 的整理想只有 $(1)$ 与非主素理想 $(2,1+\sqrt{-5})$，故 $h=2$，与 [[理想类群]] 中结论一致
