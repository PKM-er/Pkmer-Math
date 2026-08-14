---
tags:
  - 数学
dlink:
  - "[[---泛函分析的应用---]]"
  - "[[变分法]]"
  - "[[调和函数]]"
aliases:
  - Dirichlet's principle
  - 狄利克雷原理
  - ディリクレ原理
author:
  - DeepSeekV4Flash
---
Dirichlet 原理把"求调和函数"转化为"极小化 Dirichlet 能量"：在固定边界值的函数类中，使梯度平方积分最小的函数恰是[[调和函数]]。它最早被 Riemann 用来证明共形映射的存在性，后来由 Hilbert 用变分法的直接方法严格化，是[[变分法]]与[[弱解（偏微分方程）]]理论的源头。需先掌握[[变分法]]的直接方法与[[拉普拉斯算子]]。

> [!NOTE] Dirichlet 原理
> 设 $\Omega\subset\mathbb R^n$ 有界，$g$ 为 $\partial\Omega$ 上的函数。在 $H^1_g(\Omega)=\{u\in H^1(\Omega): u|_{\partial\Omega}=g\}$ 上极小化
> $$\mathcal E(u)=\frac12\int_\Omega|\nabla u|^2\,dx$$
> 则极小元 $u$ 满足 $\Delta u=0$（调和），且由 Dirichlet 能量的极小性唯一确定。

## 与调和函数的关系
- 对 $u$ 的任意扰动 $v\in H^1_0$，能量极小性等价于 $\int_\Omega\nabla u\cdot\nabla v\,dx=0$，这正是 Laplace 方程 $\Delta u=0$ 的弱形式
- **唯一性**：能量泛函严格凸（由[[内积诱导的范数]]的平行四边形律），故极小元唯一
- 非齐次情形 $\Delta u=f$ 对应能量 $\mathcal E_f(u)=\frac12\int|\nabla u|^2-\int fu$，见[[泊松方程]]

## 历史与严格化
- Riemann 时代直接断言能量泛函有极小元（"Dirichlet 原理"），因未证明极小化序列收敛而被 Weierstrass 指出漏洞
- Hilbert（1900 前后）证明：$H^1$ 是完备的[[希尔伯特空间的定义|希尔伯特空间]]，能量泛函强制且弱下半连续，极小化序列弱收敛到极小元——这就是[[变分法]]直接方法的标准三步
- 现代表述用[[Sobolev空间的定义|Sobolev空间]] $H^1$ 与[[Rellich–Kondrachov紧嵌入]]处理紧性与边界取值

## 后续
Dirichlet 原理是椭圆方程[[弱解（偏微分方程）|弱解]]理论的雏形，其能量观点贯穿[[有限元方法]]（极小元在分片多项式空间上的近似）与[[特征值的变分刻画]]（Rayleigh 商）。
