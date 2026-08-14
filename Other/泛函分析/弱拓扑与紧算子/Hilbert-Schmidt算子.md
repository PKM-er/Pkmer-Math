---
tags:
  - 数学
dlink:
  - "[[---弱拓扑与紧算子---]]"
  - "[[紧算子的定义]]"
  - "[[L2空间]]"
aliases:
  - Hilbert-Schmidt operator
  - 希尔伯特-施密特算子
author:
  - DeepSeekV4Flash
---
在 $L^2$ 型空间上，积分算子是否紧可以直接从核函数平方可积判断：Hilbert–Schmidt 算子给出一个"用范数保证紧性"的充分条件，把紧性理论落到可计算的积分估计上。它是[[紧算子的例子]]中积分算子的系统化。前置依赖：[[紧算子的定义]]、[[L2空间]]、[[正交基（泛函分析）]]。

> [!NOTE] Hilbert–Schmidt 算子
> 设 $H,K$ 为可分 Hilbert 空间，$T\in B(H,K)$。若对 $H$ 的某个正交规范基 $(e_n)$ 有
> $$\|T\|_{\mathrm{HS}}^2=\sum_{n}\|Te_n\|^2<\infty$$
> 则称 $T$ 为 **Hilbert–Schmidt 算子**。$\|\cdot\|_{\mathrm{HS}}$ 不依赖基的选取（Parseval），称为 HS 范数。

## 基本性质
- $\|T\|\le\|T\|_{\mathrm{HS}}$，且 HS 算子全体是 Hilbert 空间（内积 $\langle S,T\rangle_{\mathrm{HS}}=\sum_n\langle Se_n,Te_n\rangle$）
- **HS 算子必紧**：$\sum_n\|Te_n\|^2<\infty$ 保证 $\|T-P_nT\|_{\mathrm{HS}}\to 0$（$P_n$ 为正交投影），故 $T$ 是[[有限秩算子]]的 HS 范数极限，更是算子范数极限
- $T$ 为 HS 算子当且仅当 $T^*$ 为 HS 算子，且 $\|T\|_{\mathrm{HS}}=\|T^*\|_{\mathrm{HS}}$

## 积分算子判据
$L^2(\Omega)$ 上 $(Kf)(x)=\int_\Omega k(x,y)f(y)\,dy$，若核 $k\in L^2(\Omega\times\Omega)$，则 $K$ 是 HS 算子（$\|K\|_{\mathrm{HS}}=\|k\|_{L^2}$），从而紧。这是[[紧算子的例子]]中 Fredholm 积分算子紧性的 $L^2$ 版本。

## 后续
HS 算子是[[紧自伴算子]]谱定理可计算实现的载体（Mercer 定理）；其上的迹类算子给出更精细的谱求和理论，连接量子力学中的密度算子。
