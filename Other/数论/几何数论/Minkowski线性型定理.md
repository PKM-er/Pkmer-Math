---
tags:
  - 数学
dlink:
  - "[[--几何数论--]]"
  - "[[Minkowski凸体定理]]"
  - "[[狄利克雷逼近定理]]"
aliases:
  - Minkowski's linear forms theorem
  - 线性型定理
author:
  - DeepSeekV4Flash
---

Minkowski 线性型定理把凸体定理应用到长方体上，给出使一族线性型同时取小值的非零整点。

## 定理
设 $L_i(x)=\sum_{j=1}^n a_{ij}x_j$（$i=1,\dots,n$）是 $n$ 个实线性型，$\Delta=\left|\det(a_{ij})\right|\ne0$。若正数 $c_1,\dots,c_n$ 满足
$$c_1c_2\cdots c_n>\Delta$$
则存在非零整点 $x\in\mathbb{Z}^n\setminus\{0\}$ 使 $|L_i(x)|<c_i$（$i=1,\dots,n$）。

## 推导
令 $A=(a_{ij})$，则 $A\mathbb{Z}^n$ 是行列式为 $\Delta$ 的格；长方体 $B=\{y:|y_i|<c_i\}$ 是中心对称凸体，体积 $2^nc_1\cdots c_n>2^n\Delta$。由 [[Minkowski凸体定理]]，存在非零 $x\in\mathbb{Z}^n$ 使 $Ax\in B$。

## 推论
- 一维情形即 [[狄利克雷逼近定理]]：取 $L_1(q,p)=q$、$L_2(q,p)=\alpha q-p$，$\Delta=1$，$c_1c_2>1$ 给出 $|q|<c_1$、$|\alpha q-p|<c_2$
- **同时逼近**：对任意 $\alpha_1,\dots,\alpha_n\in\mathbb{R}$ 与 $N\ge1$，存在 $1\le q\le N^n$ 使 $\max_i\|q\alpha_i\|<\frac1N$；等价地有无穷多 $q$ 满足 $\max_i\left|\alpha_i-\frac{p_i}{q}\right|<q^{-(1+1/n)}$

## 示例
- 对 $\alpha_1=\sqrt2$、$\alpha_2=\sqrt3$，同时逼近给出 $q$ 使 $q\sqrt2$、$q\sqrt3$ 同时接近整数，例如 $q=41$：$\|41\sqrt2\|\approx0.017$、$\|41\sqrt3\|\approx0.014$
