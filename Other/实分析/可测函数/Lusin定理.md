---
tags:
  - 数学
dlink:
  - "[[---可测函数---]]"
  - "[[Egorov定理]]"
  - "[[简单函数]]"
aliases:
  - Lusin's Theorem
  - 卢津定理
author:
  - DeepSeekV4Flash
---
可测函数可以处处不连续（如[[几乎处处|狄利克雷函数]]），却并非与连续性无缘：Lusin 定理说明，在 $\mathbb{R}^n$ 上任何可测函数去掉一个任意小测度集后都是连续函数——"可测"在本质上几乎就是"连续"。它把测度论与连续函数理论连接起来，是[[Riesz表示定理]]、分布理论与[[Lp空间的定义|$L^p$ 空间]]逼近性质的基础。需先掌握[[可测函数的定义]]与[[Egorov定理]]。

## 定理（Lusin）
设 $E \subset \mathbb{R}^n$ 为 Lebesgue 可测集，$f: E \to \mathbb{R}$ 可测且几乎处处有限。则对任意 $\delta > 0$，存在闭集 $F_\delta \subset E$，使 $m(E \setminus F_\delta) < \delta$ 且 $f$ 在 $F_\delta$ 上的限制连续。

等价地：存在连续函数 $g: E \to \mathbb{R}$，使 $f = g$ 在 $F_\delta$ 上成立。

## 证明思路
1. **简单函数情形**：对 $\varphi = \sum_{k=1}^{n} a_k \mathbf{1}_{A_k}$（$A_k$ 两两不交），由 Lebesgue 测度的内正则性，对每个 $A_k$ 取闭集 $F_k \subset A_k$ 使 $m(A_k \setminus F_k) < \delta/n$。则 $F = \bigcup_k F_k$ 为闭集、$m(E \setminus F) < \delta$，且 $\varphi$ 在 $F$ 上连续：每个 $F_k$ 在 $F$ 中既闭又开，$\varphi$ 在 $F_k$ 上取常值 $a_k$。
2. **一般可测函数**：非负情形用递增[[简单函数]]列 $\varphi_n \uparrow f$ 逼近（简单函数逼近定理）。由[[Egorov定理]]，存在 $E_0 \subset E$（$m(E \setminus E_0) < \delta/2$）使 $\varphi_n$ 在 $E_0$ 上一致收敛于 $f$；对每个 $n$，由第 1 步取闭集 $F_n \subset E_0$（$m(E_0 \setminus F_n) < \delta/2^{n+1}$）使 $\varphi_n$ 在 $F_n$ 上连续。则 $F = \bigcap_n F_n$ 为闭集、$m(E \setminus F) < \delta$，且每个 $\varphi_n$ 在 $F$ 上连续、一致收敛于 $f$，故 $f$ 在 $F$ 上连续。一般函数按 $f = f^+ - f^-$ 分解即可。

## 例
$[0,1]$ 上的狄利克雷函数 $\mathbf{1}_{\mathbb{Q}}$ 处处不连续、Riemann 不可积。Lusin 定理说明它仍是"几乎连续"的：取开集 $U \supset \mathbb{Q}$ 使 $m(U) < \delta$，则闭集 $F = [0,1] \setminus U$ 不含有理数，$\mathbf{1}_{\mathbb{Q}}$ 在 $F$ 上恒为 $0$，连续。

## 与 Egorov 定理的联系
[[Egorov定理]]处理函数列的收敛模式（把 a.e. 收敛提升为一致收敛），Lusin 定理处理单个函数的正则性（把可测性提升为连续性）；两者都以"挖去小测度集"为手段，且常配合使用。

## 后续
Lusin 定理用于证明紧支连续函数在[[Lp空间的定义|$L^p$ 空间]]中稠密、Riesz 表示定理（正线性泛函由测度给出）、分布理论中测试函数的存在性，以及概率测度的正则性；它与[[几乎处处]]约定一起，使许多测度论结论可以"先在连续函数上验证"。