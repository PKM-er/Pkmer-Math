---
tags:
  - 数学
dlink:
  - "[[---Lp空间---]]"
  - "[[Lp空间的定义]]"
  - "[[Hölder不等式]]"
aliases:
  - Lp 空间的包含关系
  - Embeddings of Lp spaces
author:
  - DeepSeekV4Flash
---

选择哪个 $L^p$ 作为工作空间，首先要知道不同阶的 $L^p$ 之间有无包含关系。结论由测度空间的"大小"决定：**有限测度**下高阶可积蕴含低阶可积（$L^q\subset L^p$），**无限测度**下一般互不包含。这个判据直接决定概率论与偏微分方程中空间选择的合法性。需先掌握[[Lp空间的定义]]与[[Hölder不等式]]。

## 定理（有限测度嵌入）

设 $\mu(X)<\infty$，$1\le p<q\le\infty$，则 $L^q(\mu)\subset L^p(\mu)$ 且

$$\|f\|_p\le\mu(X)^{1/p-1/q}\,\|f\|_q$$

## 证明

对 $q<\infty$：$\|f\|_p^p=\int|f|^p\cdot 1\,d\mu$，以 $r=q/p>1$ 与共轭指数 $r'=q/(q-p)$ 对 $|f|^p\in L^r$ 与 $\mathbf{1}_X\in L^{r'}$ 用 [[Hölder不等式]]：

$$\|f\|_p^p\le\|f\|_q^p\,\mu(X)^{1-p/q}$$

开 $p$ 次方得 $\|f\|_p\le\mu(X)^{1/p-1/q}\|f\|_q$。$q=\infty$ 时直接由 $\|f\|_p^p\le\mu(X)\|f\|_\infty^p$ 得出。

## 推论

- **概率空间**（$\mu(X)=1$）上 $L^\infty\subset\cdots\subset L^q\subset L^p\subset L^1$，且范数 $\|f\|_p$ 随 $p$ 单调不减：随机变量的 $q$ 阶矩存在蕴含 $p$ 阶矩存在（$p\le q$）。
- 嵌入常数 $\mu(X)^{1/p-1/q}$ 在概率空间上等于 $1$；在有限区间上随 $p,q$ 差距增大而放大。

## 无限测度：无包含关系

$\mathbb R$ 配 Lebesgue 测度时 $L^p$ 与 $L^q$（$p\ne q$）互不包含：

- $f(x)=x^{-a}\mathbf{1}_{[1,\infty)}$：$f\in L^q\iff aq>1$。取 $1/q<a<1/p$ 得 $f\in L^q$ 但 $f\notin L^p$。
- $f(x)=x^{-a}\mathbf{1}_{(0,1)}$：$f\in L^p\iff ap<1$。取 $1/q<a<1/p$ 得 $f\in L^p$ 但 $f\notin L^q$。

故无限测度空间上"低阶可积"与"高阶可积"是不可比的两个性质。

## 应用与后续

- 有界区域上的偏微分方程估计默认使用嵌入 $L^q\subset L^p$（$q>p$），配合[[Lp内插]]在端点之间插值。
- 概率论中矩的存在性与收敛关系（见[[收敛模式]]）依赖 $L^q\subset L^p$ 的方向。
- 光滑函数含导数范数空间之间的嵌入是 [[Sobolev嵌入定理]] 的主题，可视为本关系在更高正则性框架下的推广。