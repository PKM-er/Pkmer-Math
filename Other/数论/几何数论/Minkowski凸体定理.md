---
tags:
  - 数学
dlink:
  - "[[--几何数论--]]"
  - "[[基本区域]]"
  - "[[Minkowski线性型定理]]"
aliases:
  - Minkowski's convex body theorem
  - Minkowski 凸体定理
author:
  - DeepSeekV4Flash
---

Minkowski 凸体定理是数的几何的核心定理：足够"大"且中心对称的凸体必含非零格点。

## 定义
集合 $S\subseteq\mathbb{R}^n$ 称为**中心对称**的，若 $x\in S$ 蕴含 $-x\in S$。

## 定理
设 $\Lambda$ 是 $\mathbb{R}^n$ 中的格，$S$ 是中心对称的凸集。
- 若 $\operatorname{vol}S>2^n\det\Lambda$，则 $S$ 含非零格点 $\lambda\in\Lambda\setminus\{0\}$
- 若 $S$ 还是紧集，则条件放宽为 $\operatorname{vol}S\ge 2^n\det\Lambda$

## 推导
把 [[基本区域]] 中的 Blichfeldt 定理用于 $\frac12 S$：$\operatorname{vol}\frac12 S>\det\Lambda$，故存在 $x\ne y\in\frac12 S$ 使 $x-y\in\Lambda$。由对称性 $-y\in\frac12 S$，凸性给出
$$\frac12(x-y)=\frac{x+(-y)}2\in\frac12 S$$
故 $x-y\in S\cap\Lambda$，且 $x\ne y$ 保证其非零。

## 应用
- [[狄利克雷逼近定理]]：对任意 $\alpha\in\mathbb{R}$ 与 $\varepsilon>0$，存在整数 $p,q$ 使 $|q\alpha-p|<\varepsilon$、$|q|<\frac1\varepsilon$
- [[拉格朗日四平方定理]]：每个正整数可表为四个平方数之和
- [[Minkowski界]]：证明代数数域理想类群有限并给出类数计算方法

## 示例
- $n=2$，$\Lambda=\mathbb{Z}^2$：圆盘 $x^2+y^2\le\frac94$ 面积 $2.25\pi>4=2^2\det\Lambda$，必含非零整点，事实上 $(1,1)$ 就在其中
