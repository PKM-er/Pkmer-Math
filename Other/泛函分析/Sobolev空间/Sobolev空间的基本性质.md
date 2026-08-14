---
tags:
  - 数学
dlink:
  - "[[---Sobolev空间---]]"
  - "[[Sobolev空间的定义]]"
  - "[[完备性]]"
aliases:
  - Properties of Sobolev spaces
author:
  - DeepSeekV4Flash
---
泛函分析工具箱（[[巴拿赫空间的定义|完备性]]、对偶、紧性）能否用在 $W^{k,p}$ 上，取决于它是否是好的 Banach 空间。答案是肯定的：$W^{k,p}$ 是完备、可分（$p<\infty$）、自反（$1<p<\infty$）的，这正是变分法与不动点方法的前提。

> [!NOTE] 基本性质
> 设 $1\le p\le\infty$，$k\ge0$，$\Omega\subset\mathbb R^n$ 开。
> 1. $W^{k,p}(\Omega)$ 是 **Banach 空间**（完备）
> 2. $1\le p<\infty$ 时 $W^{k,p}$ **可分**
> 3. $1<p<\infty$ 时 $W^{k,p}$ **自反**，且 $W^{k,p}_0$ 亦然
> 4. $H^k=W^{k,2}$ 是**希尔伯特空间**（内积见[[Sobolev空间的定义]]）

## 完备性证明要点
- Cauchy 列 $\{u_m\}$ 在 $W^{k,p}$ 中收敛 $\Rightarrow$ 对每个 $|\alpha|\le k$，$\{\partial^\alpha u_m\}$ 在 $L^p$ 中收敛（$L^p$ 完备，见[[Lp空间的定义]]）
- 极限 $u=\lim u_m$、$v_\alpha=\lim\partial^\alpha u_m$ 满足弱导数定义：对测试函数 $\varphi$ 取极限交换积分与极限（用[[控制收敛定理]]）
- 故 $v_\alpha=\partial^\alpha u$，收敛性成立

## 嵌入与稠密
- $C_c^\infty(\mathbb R^n)$ 在 $W^{k,p}(\mathbb R^n)$ 中稠密（[[磨光算子]]的全局结论）
- 对一般 $\Omega$，Meyers–Serrin 定理：$W^{k,p}(\Omega)\cap C^\infty(\Omega)$ 在 $W^{k,p}(\Omega)$ 中稠密；若 $\Omega$ 有足够正则边界，$C^\infty(\overline\Omega)$ 也稠密
- $W^{k,p}_0(\Omega)$ 定义为 $C_c^\infty(\Omega)$ 在 $W^{k,p}$ 范数下的闭包，是[[Poincaré不等式]]与[[弱解（偏微分方程）|弱解]]的自然空间

## 后续
自反性保证有界序列有弱收敛子列（Eberlein–Šmulian），这是变分法直接方法的关键；结合[[Rellich–Kondrachov紧嵌入]]可在 $L^q$ 中得到强收敛，见[[Sobolev嵌入定理]]。
