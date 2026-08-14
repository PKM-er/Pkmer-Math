---
tags:
  - 数学
dlink:
  - "[[---Sobolev空间---]]"
  - "[[弱导数]]"
  - "[[Lp空间的定义]]"
aliases:
  - Sobolev space
  - W空间
author:
  - DeepSeekV4Flash
---
很多问题（椭圆方程、变分原理）需要的不是单个函数的导数，而是"所有弱导数都属于某个 $L^p$"的函数类。Sobolev 空间正是把[[弱导数]]与[[Lp空间的定义|$L^p$ 空间]]组合起来得到的 Banach 空间，是弱解理论的栖息地。

> [!NOTE] Sobolev 空间 $W^{k,p}(\Omega)$
> 设 $1\le p\le\infty$，$k$ 为非负整数。**$W^{k,p}(\Omega)$** 是满足"对任意 $|\alpha|\le k$，弱导数 $\partial^\alpha u$ 存在且 $\partial^\alpha u\in L^p(\Omega)$"的函数全体，配范数
> $$\|u\|_{W^{k,p}}=\left(\sum_{|\alpha|\le k}\|\partial^\alpha u\|_{L^p}^p\right)^{1/p}\ (1\le p<\infty),\qquad \|u\|_{W^{k,\infty}}=\max_{|\alpha|\le k}\|\partial^\alpha u\|_{L^\infty}$$
> 特别记 $H^k(\Omega)=W^{k,2}(\Omega)$，它配内积 $\langle u,v\rangle_{H^k}=\sum_{|\alpha|\le k}\langle\partial^\alpha u,\partial^\alpha v\rangle_{L^2}$ 是希尔伯特空间。

## 说明
- 定义中"弱导数存在"指按[[弱导数]]意义唯一存在（几乎处处），不要求经典可微
- $k=0$ 时 $W^{0,p}=L^p$；$p=2$ 时记号 $H^k$ 更常用
- 范数也可用 Fourier 侧写法 $\|u\|_{H^s}=\left(\int(1+|\xi|^2)^s|\hat u(\xi)|^2\,d\xi\right)^{1/2}$（分数阶 $s$ 的推广，见[[Sobolev嵌入定理]]）

## 例子
- $u(x)=|x|$ 属于 $W^{1,p}(-1,1)$（任意 $p<\infty$），因 $\operatorname{sgn}x\in L^p$
- $u=\mathbf{1}_{(0,1)}$ 不属于 $W^{1,1}(0,2)$：阶跃函数没有 $L^1$ 弱导数（弱导数会是 $\delta$，不是函数）
- 有界开集上 $C^\infty(\overline\Omega)\subset W^{k,p}(\Omega)$ 且稠密（正则情形的[[磨光算子]]结论）

## 后续
$W^{k,p}$ 的完备性、可分性、自反性见[[Sobolev空间的基本性质]]；$W^{1,p}_0(\Omega)$（紧支逼近闭包）与[[Poincaré不等式]]结合给出变分法所需的等价范数，[[Sobolev嵌入定理]]则说明 $W^{k,p}$ 自动包含更正则的函数。
