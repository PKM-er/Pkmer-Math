---
tags:
  - 数学
dlink:
  - "[[---泛函分析的应用---]]"
  - "[[算子半群]]"
  - "[[一致有界原理]]"
aliases:
  - Hille–Yosida theorem
  - ヒル・吉田の定理
author:
  - DeepSeekV4Flash
---
[[算子半群]]的生成元何时是某个 C₀-半群的生成元？Hille–Yosida 定理给出精确刻画：耗散性（或预解估计）加上稠定闭性。它是半群理论的核心定理，把抽象的生成问题化为对预解式的范数估计。需先掌握[[算子半群]]、[[谱（巴拿赫代数）]]、[[一致有界原理]]与[[可逆算子]]。

> [!NOTE] Hille–Yosida 定理（收缩半群版本）
> 闭稠定算子 $A$ 生成 $X$ 上的 C₀-**收缩**半群（$\|T(t)\|\le1$）当且仅当：
> 1. $(0,\infty)\subset\rho(A)$（正实轴在预解集中）
> 2. 对一切 $\lambda>0$，$\|(\lambda I-A)^{-1}\|\le\dfrac{1}{\lambda}$
> 一般版本（$\|T(t)\|\le Me^{\omega t}$）：预解估计 $\|(\lambda I-A)^{-n}\|\le\dfrac{M}{(\lambda-\omega)^n}$ 对一切 $\lambda>\omega$、$n\in\mathbb N$ 成立。

## 证明思路
- **必要性**：由 $T(t)=e^{tA}$，$R(\lambda,A)=\int_0^\infty e^{-\lambda t}T(t)\,dt$（Laplace 变换），范数估计直接来自 $\|T(t)\|\le1$
- **充分性**：作 Yosida 逼近 $A_\lambda=\lambda A R(\lambda,A)=\lambda^2 R(\lambda,A)-\lambda I$（有界算子），证明 $T_\lambda(t)=e^{tA_\lambda}$ 强收敛，极限 $T(t)$ 即为所求半群；由 $A_\lambda\to A$ 在预解意义下收敛推出 $A$ 为生成元

## 判定条件（等价形式）
- **Lumer–Phillips 定理**：$A$ 生成收缩半群当且仅当 $A$ 稠定、闭、**耗散**（$\mathrm{Re}\langle Ax,x\rangle\le0$，在希尔伯特空间情形）且存在 $\lambda_0>0$ 使 $\lambda_0 I-A$ 满射
- 无界自伴算子的情形：$A=A^*$ 且 $A\le0$（如 $\Delta$）生成压缩半群，可直接由[[谱定理（有界自伴算子）]]的连续函数演算得到 $e^{tA}$，无需 Hille–Yosida

## 例子
- $\Delta$（$\le0$ 的自伴算子）在 $L^2$ 上生成热半群，见[[热方程]]
- $A=\frac{d}{dx}$ 在 $L^2(\mathbb R)$ 上生成平移半群 $T(t)f(x)=f(x+t)$
- 有界算子 $A\in\mathcal B(X)$ 生成 $T(t)=e^{tA}=\sum\frac{t^nA^n}{n!}$（Neumann 级数收敛）

## 后续
Hille–Yosida 定理衔接[[算子半群]]、[[一致有界原理]]与谱理论，是抽象 Cauchy 问题适定性的标准判据，也是随机过程（生成元与 Markov 半群）的数学基础。
