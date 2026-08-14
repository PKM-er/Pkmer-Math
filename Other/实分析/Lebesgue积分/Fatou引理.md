---
tags:
  - 数学
dlink:
  - "[[---Lebesgue积分---]]"
  - "[[单调收敛定理]]"
  - "[[控制收敛定理]]"
aliases:
  - Fatou's Lemma
author:
  - DeepSeekV4Flash
---
单调收敛定理要求函数列单调，而实际中往往只有下极限可控。Fatou 引理在无需单调性的前提下给出积分与下极限交换的不等式，是证明 $L^p$ 完备性等结论的关键工具。前置：[[单调收敛定理]]与[[Lebesgue积分的定义]]。

## 引理（Fatou）
设 $\{f_n\}$ 为非负可测函数列，则

$$\int \liminf_{n\to\infty} f_n \, d\mu \le \liminf_{n\to\infty} \int f_n \, d\mu$$

## 证明
令 $g_n = \inf_{k \ge n} f_k$，则 $g_n \uparrow \liminf f_n$，且由 $g_n \le f_k$（$k \ge n$）得 $\int g_n \le \inf_{k\ge n} \int f_k$。对 $\{g_n\}$ 用[[单调收敛定理]]：

$$\int \liminf f_n \, d\mu = \lim_n \int g_n \, d\mu \le \lim_n \inf_{k \ge n} \int f_k \, d\mu = \liminf_n \int f_n \, d\mu$$

## 注意
不等式可以严格成立。取 $\mathbb{R}$ 上的 Lebesgue 测度，令 $f_n = \mathbf{1}_{[n, n+1]}$，则逐点 $f_n \to 0$ 而 $\int f_n = 1$，于是

$$0 = \int \liminf f_n \, d\mu < \liminf \int f_n \, d\mu = 1$$

## 应用
- 证明[[Lp空间的定义|$L^p$ 空间]]的完备性：从 Cauchy 列提取几乎处处收敛子列后，用 Fatou 引理控制极限函数的范数。
- 与[[控制收敛定理]]配合，是证明积分与极限、导数交换次序的常用工具。