---
tags:
  - 数学
dlink:
  - "[[---Lp空间---]]"
  - "[[Hölder不等式]]"
  - "[[对偶空间（泛函分析）]]"
aliases:
  - Dual space of Lp
  - Lp 对偶
author:
  - DeepSeekV4Flash
---

$L^p$ 空间的对偶可以"算出来"：对 $1\le p<\infty$，$L^p$ 上每个连续线性泛函都形如 $\varphi(f)=\int fg\,d\mu$，其中 $g$ 唯一地属于共轭指数空间 $L^q$。这把抽象的对偶空间还原为"与某个函数配对"，是 [[Radon-Nikodym定理]] 与 [[Hölder不等式]] 在函数空间上的结晶。需先掌握[[Lp空间的定义]]与[[Hölder不等式]]。

## 定理（$L^p$ 对偶）

设 $(X,\mathcal A,\mu)$ 为测度空间，$1<p<\infty$，$1/p+1/q=1$。对每个 $g\in L^q$，

$$\varphi_g(f)=\int fg\,d\mu$$

定义 $L^p$ 上的连续线性泛函，且映射 $g\mapsto\varphi_g$ 是 $L^q$ 到 $(L^p)^*$ 的**等距同构**：$\|\varphi_g\|=\|g\|_q$。当 $\mu$ 为 σ-有限测度时结论对 $p=1$ 也成立，即 $(L^1)^*\cong L^\infty$。

## 证明思路

- **Hölder 给出有界性**：$|\varphi_g(f)|\le\|f\|_p\|g\|_q$，故 $\|\varphi_g\|\le\|g\|_q$。
- **满射性（$1<p<\infty$）**：设 $\varphi\in(L^p)^*$。对 $\mu$-有限集 $E$ 定义 $\nu(E)=\varphi(\mathbf{1}_E)$，可验证 $\nu$ 为符号测度且 $\nu\ll\mu$，由[[Radon-Nikodym定理]]得 $\varphi(f)=\int fg\,d\mu$ 先对简单函数成立，再以[[简单函数]]逼近推广到整个 $L^p$。
- **$g\in L^q$ 且范数相等**：取 $f=|g|^{q-1}\operatorname{sgn}(g)\,\mathbf{1}_{\{|g|\le n\}}\in L^p$ 代入，得 $\int_{\{|g|\le n\}}|g|^q\,d\mu\le\|\varphi\|\,\|f\|_p$，令 $n\to\infty$ 得 $\|g\|_q\le\|\varphi\|$。综合即 $\|\varphi\|=\|g\|_q$。

## 推论与性质

- $1<p<\infty$ 时 $L^p$ **自反**：$(L^p)^{**}\cong L^p$（见[[自反空间]]），单位球弱紧，有界序列有弱收敛子列。
- $(L^1)^*\cong L^\infty$，但 $L^\infty$ 的对偶严格大于 $L^1$（需用带有限可加测度的空间表示），故 $L^1$ 与 $L^\infty$ 均不自反。
- **弱收敛判据**：$f_n\rightharpoonup f$ 当且仅当 $\int f_n g\,d\mu\to\int fg\,d\mu$ 对一切 $g\in L^q$ 成立。这对验证变分问题与偏微分方程弱解中的紧性至关重要。

## 后续

$L^p$ 对偶表示是[[对偶空间的例子]]中最重要的一类；它把[[Alaoglu定理]]、弱*紧性与[[Hahn-Banach定理]]的具体形态带进积分理论，也是广义函数论中 $L^p$ 与分布对偶衔接的基础。