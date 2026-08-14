---
tags:
  - 数学
dlink:
  - "[[---Sobolev空间---]]"
  - "[[Sobolev嵌入定理]]"
  - "[[紧算子的定义]]"
aliases:
  - Rellich–Kondrachov theorem
  - 紧嵌入定理
author:
  - DeepSeekV4Flash
---
连续嵌入保证有界集映射后有界，但变分法需要"有界序列有收敛子列"——即嵌入是**紧**的。Rellich–Kondrachov 定理说：在有界区域上，$W^{1,p}$ 到次临界 $L^q$（$q<p^*$）的嵌入是紧的。这是直接方法存在性证明的发动机。

> [!NOTE] Rellich–Kondrachov 紧嵌入
> 设 $\Omega\subset\mathbb R^n$ 为有界 Lipschitz 区域，$1\le p<n$。对一切 $1\le q<p^*=\frac{np}{n-p}$，
> $$W^{1,p}(\Omega)\hookrightarrow\hookrightarrow L^q(\Omega)$$
> 即 $W^{1,p}$ 中的有界序列在 $L^q$ 中有收敛子列。临界指数 $q=p^*$ 时嵌入不紧（平移反例）。

## 说明
- 紧嵌入 = 连续嵌入 + 有界集相对紧：$W^{1,p}$ 有界 $\Rightarrow$ 在 $L^q$ 中强收敛（可先取弱收敛子列，再用紧性提升为强收敛）
- 对 $W^{k,p}$ 的一般版本：$kp<n$ 时 $W^{k,p}\hookrightarrow\hookrightarrow L^q$，$q<p^*=\frac{np}{n-kp}$
- $kp>n$ 时 $W^{k,p}\hookrightarrow\hookrightarrow C^{m,\alpha}$（Hölder 空间紧嵌入）
- 有界性不可省：$\Omega=\mathbb R^n$ 时平移族 $u_m(x)=u(x-m)$ 有界但不相对紧

## 证明思想
- 用[[磨光算子]]把 $u$ 分成光滑部分与余项：$u=J_\varepsilon u+(u-J_\varepsilon u)$
- 光滑部分在 $L^q$ 中相对紧（Arzelà–Ascoli 型论断，$J_\varepsilon u$ 有界等度连续）
- 余项用 Sobolev 嵌入的插值形式 $\|u-J_\varepsilon u\|_{L^q}\le\varepsilon^\theta\|u\|_{W^{1,p}}$ 控制，$\varepsilon\to0$ 一致小
- 结合 $\varepsilon$ 指标取对角线子列完成

## 应用
- 变分法直接方法：能量泛函 $\mathcal E(u)=\int_\Omega(\frac12|\nabla u|^2-fu)$ 的极小化序列有界 $\Rightarrow$ 弱收敛 $\Rightarrow$ 紧嵌入给出强收敛 $\Rightarrow$ 取极限得极小元（见[[弱解（偏微分方程）|弱解]]）
- 特征值问题：$W^{1,2}_0\hookrightarrow\hookrightarrow L^2$ 使拉普拉斯算子的预解为紧算子（见[[紧算子的定义]]），谱离散

## 后续
紧嵌入把无穷维问题"降维"成有限维逼近，是椭圆方程与谱理论（Poincaré 不等式给出特征值下界，见[[Poincaré不等式]]）的核心工具。
