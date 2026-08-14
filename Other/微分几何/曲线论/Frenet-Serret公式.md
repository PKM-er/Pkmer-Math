---
tags:
  - 数学
dlink:
  - "[[---曲线论---]]"
  - "[[Frenet标架]]"
  - "[[曲线论基本定理]]"
aliases:
  - Frenet-Serret equations
  - Frenet公式
  - 弗雷内-塞雷公式
author:
  - DeepSeekV4Flash
---

[[Frenet标架]]沿曲线移动，其变化率完全由两个标量函数（[[曲率（曲线论）|曲率]]与[[挠率]]）控制。Frenet-Serret 公式把这组运动方程写成紧凑的矩阵形式，是空间曲线局部理论的"运动学方程"。

需先掌握[[Frenet标架]]（$T,N,B$）与[[弧长参数化]]。

## 公式
对弧长参数化曲线 $\vec{r}(s)$：
$$\begin{cases}
T'=\kappa N\\[2pt]
N'=-\kappa T+\tau B\\[2pt]
B'=-\tau N
\end{cases}$$

矩阵形式（系数矩阵反对称）：
$$\begin{pmatrix}T\\N\\B\end{pmatrix}'=\begin{pmatrix}0&\kappa&0\\-\kappa&0&\tau\\0&-\tau&0\end{pmatrix}\begin{pmatrix}T\\N\\B\end{pmatrix}$$

## 推导要点
- $T'=\kappa N$：正是[[曲率（曲线论）|曲率]]的定义
- $B'=-\tau N$：由 $\tau=-\langle B',N\rangle$ 且 $B'\perp B$ 得到
- $N'=-\kappa T+\tau B$：由 $N=B\times T$ 求导展开得到

## 推论
- 平面曲线（$\tau=0$）：$N'=-\kappa T$，$B$ 恒为常向量
- 一般参数化用链式法则 $\dfrac{d}{ds}=\dfrac{1}{\|\vec{r}'(t)\|}\dfrac{d}{dt}$ 换算

## 应用
[[曲线论基本定理]]把 Frenet-Serret 公式视为线性常微分方程组，证明 $\kappa,\tau$ 完全决定曲线（差一个刚体运动）。
