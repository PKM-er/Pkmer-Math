---
tags:
  - 数学
dlink:
  - "[[---泛函分析的应用---]]"
  - "[[变分法]]"
  - "[[Riesz表示定理]]"
aliases:
  - Galerkin method
  - Ritz–Galerkin 方法
  - ガラーキン法
author:
  - DeepSeekV4Flash
---
椭圆边值问题的弱形式 $a(u,v)=\langle f,v\rangle$ 一般无法精确求解；Galerkin 方法把问题限制在一族有限维子空间 $V_n\subset V$ 上求近似解 $u_n$，再利用投影性质证明收敛。它是[[变分法]]的离散版本，也是[[有限元方法]]的理论内核。需先掌握[[弱解（偏微分方程）]]、[[Riesz表示定理]]与[[内积空间的定义]]。

> [!NOTE] Galerkin 方法
> 设 $V$ 为希尔伯特空间，$a:V\times V\to\mathbb R$ 为连续强制双线性形式（$a(u,u)\ge c\|u\|^2$），$V_n\subset V$ 为有限维子空间。求 $u_n\in V_n$ 使
> $$a(u_n,v)=\langle f,v\rangle,\qquad \forall v\in V_n$$
> 则该问题有唯一解，且 $u_n$ 是 $u$ 在 $a$-内积意义下到 $V_n$ 的投影（Céa 引理）：
> $$\|u-u_n\|\le \frac{M}{c}\,\inf_{v\in V_n}\|u-v\|$$

## 误差估计（Céa 引理）
- 由强制性 $c\|u-u_n\|^2\le a(u-u_n,u-u_n)=a(u-u_n,u-v)\le M\|u-u_n\|\|u-v\|$ 对一切 $v\in V_n$
- 约去 $\|u-u_n\|$ 得 $\|u-u_n\|\le\frac{M}{c}\inf_{v\in V_n}\|u-v\|$：误差由 $V_n$ 的逼近能力控制
- 当 $V_n$ 是分片多项式空间时，$\inf$ 由插值误差给出，衔接[[Sobolev嵌入定理]]（见[[有限元方法]]）

## 构造与选择
- **Ritz 方法**：对变分形式极小化能量泛函 $\mathcal E(u)=\frac12a(u,u)-\langle f,u\rangle$，取 $V_n$ 中极小元（与 Galerkin 等价）
- **基函数选择**：谱方法取 $V_n=\mathrm{span}\{\varphi_1,\dots,\varphi_n\}$ 为三角多项式/多项式；有限元取分片多项式（见[[有限元方法]]）
- **离散方程**：设 $u_n=\sum c_j\varphi_j$，由 $a(u_n,\varphi_i)=\langle f,\varphi_i\rangle$ 得到线性方程组 $Ac=b$，$A_{ij}=a(\varphi_j,\varphi_i)$（刚度矩阵）

## 例子
$-\Delta u=f$ 在 $H^1_0$ 上的弱形式：$a(u,v)=\int_\Omega\nabla u\cdot\nabla v\,dx$。取 $V_n$ 为分片线性函数空间，刚度矩阵 $A_{ij}=\int_\Omega\nabla\varphi_j\cdot\nabla\varphi_i\,dx$，解线性方程组即得近似解——这就是有限元方法的雏形。

## 后续
Galerkin 方法衔接[[有限元方法]]、谱方法与投影方法，其收敛性分析（Céa 引理 + 插值估计）是数值偏微分方程的标准框架，也用于特征值问题（见[[特征值的变分刻画]]）。
