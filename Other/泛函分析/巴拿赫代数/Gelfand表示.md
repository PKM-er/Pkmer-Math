---
tags:
  - 数学
dlink:
  - "[[---巴拿赫代数---]]"
  - "[[特征（巴拿赫代数）]]"
  - "[[傅里叶变换]]"
aliases:
  - Gelfand transform
  - Gelfand 变换
author:
  - DeepSeekV4Flash
---
交换巴拿赫代数的抽象结构（乘法、谱、理想）与函数空间之间有一道桥：把每个元素 $a$ 映为特征空间上的函数 $\widehat a(\varphi)=\varphi(a)$。这就是 Gelfand 表示——它把代数同态嵌入连续函数代数，使 Fourier 变换、Gelfand 谱半径公式与谱理论获得统一表达。前置依赖：[[特征（巴拿赫代数）]]、[[交换巴拿赫代数]]。

> [!NOTE] Gelfand 表示
> 设 $A$ 为含单位元的交换巴拿赫代数，$\mathfrak{M}(A)$ 为特征空间。映射
> $$\Gamma:A\to C(\mathfrak{M}(A)),\qquad \Gamma(a)(\varphi)=\widehat a(\varphi)=\varphi(a)$$
> 称为 **Gelfand 表示**。它是连续代数同态，且 $\lVert\widehat a\rVert_\infty=r(a)$（谱半径，见[[谱半径公式]]），$a$ 的谱满足 $\sigma(a)=\widehat a(\mathfrak{M}(A))$。

## 基本性质
- $\Gamma$ 保持乘法与线性，不增范数：$\lVert\Gamma(a)\rVert_\infty\le\lVert a\rVert$
- **谱保持**：$\sigma(a)=\{\widehat a(\varphi):\varphi\in\mathfrak{M}(A)\}$，故谱半径 $r(a)=\lVert\widehat a\rVert_\infty$
- $a$ 可逆 $\iff\widehat a$ 处处非零（谱不含 $0$）
- 核 $\ker\Gamma=\bigcap\ker\varphi$ 是全体极大理想的交，称为**根**（radical）；$A$ 半单（radical 为零）当且仅当 $\Gamma$ 单射

## 例子
- $A=C(K)$：$\mathfrak{M}(A)\cong K$，$\Gamma$ 是恒等同构
- $A=\ell^1(\mathbb{Z})$：$\Gamma((a_n))=\sum a_n z^n$（$|z|=1$），即 **Fourier 级数**，像在 $C(\mathbb{T})$ 中稠
- $A=L^1(\mathbb{R})$：$\Gamma(f)=\widehat f$，即 **Fourier 变换**（无单位元情形经[[巴拿赫代数的单位化]]处理），像在 $C_0(\mathbb{R})$ 中稠

## 后续
Gelfand 表示把交换谱理论归结为连续函数论：Wiener 定理（$f$ 的 Fourier 级数不取零值则 $1/f$ 的 Fourier 级数绝对收敛）是其经典应用。在带对合的 $C^*$ 代数中 $\Gamma$ 是等距 $*$-同构（Gelfand–Naimark 定理，见[[C星代数]]）。
