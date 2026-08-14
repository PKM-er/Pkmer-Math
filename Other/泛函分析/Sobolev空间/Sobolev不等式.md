---
tags:
  - 数学
dlink:
  - "[[---Sobolev空间---]]"
  - "[[Sobolev空间的定义]]"
  - "[[Sobolev嵌入定理]]"
aliases:
  - Gagliardo–Nirenberg–Sobolev 不等式
  - Sobolev inequality
  - Sobolev 不等式
author:
  - DeepSeekV4Flash
---
$W^{1,p}$ 的范数包含 $\|\nabla u\|_{L^p}$，那么"梯度控制函数本身"到什么程度？Sobolev 不等式给出临界答案：在一维以下（$p<n$），$W^{1,p}$ 自动嵌入 $L^{p^*}$，其中临界指数 $p^*=\frac{np}{n-p}$——这是[[Sobolev嵌入定理]]的起点，也是变分法中紧性的分水岭。

> [!NOTE] Gagliardo–Nirenberg–Sobolev 不等式
> 设 $1\le p<n$，$p^*=\dfrac{np}{n-p}$。存在常数 $C=C(n,p)$ 使对一切 $u\in C_c^\infty(\mathbb R^n)$，
> $$\|u\|_{L^{p^*}(\mathbb R^n)}\le C\,\|\nabla u\|_{L^p(\mathbb R^n)}$$
> 特别地 $p=1$ 时 $1^*=\frac{n}{n-1}$：$\|u\|_{L^{n/(n-1)}}\le C\|\nabla u\|_{L^1}$。

## 说明
- 指数 $p^*$ 由**尺度不变性**唯一决定：$u_\lambda(x)=u(\lambda x)$ 时两边按 $\lambda$ 的同一次幂缩放，要求 $-n/p^*=1-n/p$
- 等号（$p=1$）由塔尔迪尼函数取到，最优常数 $C=\frac{1}{n\sqrt\pi}\,\Gamma(1+n/2)^{1/n}$（Aubin–Talenti）
- 不等式的关键作用：它把 $W^{1,p}$ 的范数"压"到更可积的 $L^{p^*}$ 中，见[[Sobolev嵌入定理]]

## 证明思路（$p=1$ 的情形）
- 记 $u=J_1(u)$（磨光后取极限，见[[磨光算子]]），用一维积分表示
  $$|u(x)|\le\frac{1}{2}\int_{-\infty}^{\infty}|\partial_1 u(x_1,\dots,\tilde x_1,\dots,x_n)|\,d\tilde x_1$$
  对每个坐标写一遍，共 $n$ 个不等式
- 对 $n-1$ 个坐标不等式取几何平均再积分，用 Hölder 不等式（见[[Hölder不等式]]）剥出 $|\partial_i u|$，最后得到 $\|u\|_{L^{n/(n-1)}}\le C\sum_i\|\partial_i u\|_{L^1}\le C'\|\nabla u\|_{L^1}$
- $1<p<n$ 的情形把 $|u|^\gamma$ 代入 $p=1$ 结论并适当选 $\gamma$ 得到

## 后续
Sobolev 不等式直接推出 $W^{1,p}\hookrightarrow L^{p^*}$；结合插值（$q$ 介于 $p$ 与 $p^*$ 之间）得到 $W^{1,p}\hookrightarrow L^q$ 的一切 $q\in[p,p^*]$，临界情形 $p=n$ 与 $p>n$ 分别由 $L^q$ 嵌入与 Morrey 不等式处理（见[[Sobolev嵌入定理]]）。
