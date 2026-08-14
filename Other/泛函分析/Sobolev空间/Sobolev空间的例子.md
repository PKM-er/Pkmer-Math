---
tags:
  - 数学
dlink:
  - "[[---Sobolev空间---]]"
  - "[[Sobolev空间的定义]]"
  - "[[弱导数]]"
aliases:
  - Examples of Sobolev spaces
author:
  - DeepSeekV4Flash
---
抽象的 $W^{k,p}$ 定义容易，但"哪些具体函数属于它"需要直观。通过一维与高维的典型例子可以看出：Sobolev 空间恰好容纳"有尖点但可积"的函数，排斥"有跳跃"的函数。

> [!NOTE] 一维判定
> $1\le p<\infty$，$u\in W^{1,p}(a,b)$ 当且仅当 $u$ 有绝对连续代表元且 $u'\in L^p(a,b)$（弱导数与逐点导数几乎处处相等）。

## 一维例子
- $u(x)=|x|\in W^{1,p}(-1,1)$ 对一切 $1\le p\le\infty$：弱导数 $\operatorname{sgn}x\in L^\infty\subset L^p$（这与 $|x|$ 是 1-Lipschitz 函数一致，见[[迹定理]]的 $W^{1,\infty}$ 说明）
- $u(x)=|x|^{1/2}\in W^{1,p}(-1,1)$ 当且仅当 $p<2$（弱导数 $\frac12\operatorname{sgn}x\,|x|^{-1/2}$ 无界，仅属 $L^p$、$p<2$），故 $u\notin W^{1,\infty}$——弱导数有界性是 $W^{1,\infty}$ 的硬性要求
- $u(x)=x^{1/3}\in W^{1,p}(0,1)$ 当且仅当 $p<3/2$（导数 $x^{-2/3}/3\in L^p$ 需 $\frac23p<1$）
- 阶跃函数 $u=\mathbf{1}_{(0,1)}\notin W^{1,1}$：弱导数若存在必为 $\delta$，不是 $L^1$ 函数
- 经典 $C^1$ 函数当然属于 $W^{1,p}$，且范数等于 $L^p$ 范数与导数 $L^p$ 范数之和（见[[Sobolev空间的定义]]）

## 高维例子
- $u(x)=|x|^{-\alpha}\in W^{1,p}(B_1)$（$B_1\subset\mathbb R^n$ 单位球）当且仅当 $\alpha p<n-p$（$p<n$ 时），因为 $|\nabla u|\sim|x|^{-\alpha-1}$ 且 $\int_{B_1}|x|^{-(\alpha+1)p}dx<\infty\iff(\alpha+1)p<n$
- 光滑且有界区域上的多项式、三角多项式都在所有 $W^{k,p}$ 中
- $u(x)=\log\log(1/|x|)$ 属于 $W^{1,n}(B_1)$ 但无界——说明 $W^{1,n}$ 不保证本性有界（见[[Sobolev嵌入定理]]临界指数）

## 后续
这些例子的"可积奇异性"正是弱解理论需要的宽容度：[[弱解（偏微分方程）|弱解]]允许解有奇点，只要奇点可积。进一步的范数估计与稠密性见[[Sobolev空间的基本性质]]与[[磨光算子]]。
