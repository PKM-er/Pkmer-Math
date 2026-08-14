---
tags:
  - 数学
dlink:
  - "[[---Sobolev空间---]]"
  - "[[Sobolev不等式]]"
  - "[[Sobolev空间的定义]]"
aliases:
  - Sobolev embedding theorem
  - Sobolev 嵌入
author:
  - DeepSeekV4Flash
---
Sobolev 空间的定义包含全部 $k$ 阶弱导数，那么"导数阶数"能兑换成"可积性"或"连续性"吗？Sobolev 嵌入定理给出完整兑换表：$kp<n$ 时换可积性（$L^q$），$kp>n$ 时换 Hölder 连续性，$kp=n$ 是临界情形。

> [!NOTE] Sobolev 嵌入定理
> 设 $\Omega\subset\mathbb R^n$ 为有界 Lipschitz 区域，$u\in W^{k,p}(\Omega)$。
> 1. 若 $kp<n$，则 $W^{k,p}\hookrightarrow L^q$ 对一切 $q\le \frac{np}{n-kp}$（连续嵌入）
> 2. 若 $kp=n$，则 $W^{k,p}\hookrightarrow L^q$ 对一切 $q<\infty$（临界情形，不含 $L^\infty$）
> 3. 若 $kp>n$，则 $W^{k,p}\hookrightarrow C^{k-\lfloor n/p\rfloor-1,\alpha}$（Hölder 连续，$\alpha$ 由 $n/p$ 的小数部分决定）

## 说明
- 情形 1 由迭代应用[[Sobolev不等式]]得到：$W^{1,p}\hookrightarrow L^{p^*}$，再对导数重复并插值
- 情形 3 的关键是 Morrey 不等式：$u\in W^{1,p}$、$p>n$ 时 $\|u\|_{C^{0,\alpha}}\le C\|u\|_{W^{1,p}}$，其中 $\alpha=1-n/p$（一维即绝对连续函数）
- 临界 $kp=n$：$W^{1,n}$ 不嵌入 $L^\infty$（反例见[[Sobolev空间的例子]]的 $\log\log(1/|x|)$），但嵌入一切 $L^q$、$q<\infty$（Trudinger 指数型）
- 嵌入是**连续**的：$\|u\|_{L^q}\le C\|u\|_{W^{k,p}}$。更精细地，$q<p^*$ 时在合适条件下是**紧**嵌入，见[[Rellich–Kondrachov紧嵌入]]

## 例子
- $n=3,\ p=2,\ k=1$：$H^1\hookrightarrow L^6$（临界指数 $2^*=6$），且 $H^1\hookrightarrow L^q,\ \forall q\le6$
- $n=3,\ p=2,\ k=2$：$kp=4>3$，$H^2\hookrightarrow C^{0,1/2}$（$\frac{n}{p}=\frac32$ 非整数，$\gamma=\lceil\frac32\rceil-\frac32=\frac12$）——二阶弱导数足够给出 Hölder 连续代表元
- $n=1,\ p=1,\ k=1$：$kp=1=n$（临界），$W^{1,1}(\mathbb R)\hookrightarrow L^\infty$ 成立——一维绝对连续函数在无穷远处趋于 $0$，故 $\|u\|_\infty\le\|u'\|_{L^1}$；说明临界指数处的 $L^\infty$ 嵌入只在低维成立

## 后续
嵌入定理说明 $W^{k,p}$ 自动包含更正则的函数，这让弱解可以"自动变好"（椭圆正则性理论）；$kp>n$ 情形成立时弱解就是经典解，见[[弱解（偏微分方程）|弱解]]。紧版本[[Rellich–Kondrachov紧嵌入]]是变分法的存在性核心。
