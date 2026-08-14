---
tags:
  - 数学
dlink:
  - "[[---Sobolev空间---]]"
  - "[[Sobolev空间的定义]]"
  - "[[弱解（偏微分方程）]]"
aliases:
  - Poincaré 不等式
  - Poincaré inequality
  - 庞加莱不等式
author:
  - DeepSeekV4Flash
---
常数量可加进 $W^{1,p}$ 范数而不影响梯度。Poincaré 不等式说明：在 $W^{1,p}_0$（或固定平均值的子空间）上，$\|\nabla u\|_{L^p}$ 本身就是等价范数——梯度完全控制了函数。这是[[弱解（偏微分方程）|弱解]]存在性证明与特征值下界的关键。

> [!NOTE] Poincaré 不等式
> 设 $\Omega\subset\mathbb R^n$ 为有界连通 Lipschitz 区域，$1\le p<\infty$。存在 $C=C(n,p,\Omega)$ 使
> $$\int_\Omega|u|^p\,dx\le C\int_\Omega|\nabla u|^p\,dx,\qquad \forall\,u\in W^{1,p}_0(\Omega)$$
> 更一般地，若 $\int_\Omega u\,dx=0$（零均值），则同样的估计对 $u\in W^{1,p}(\Omega)$ 成立。

## 说明
- $W^{1,p}_0$ 版本：$u$ 在边界"消失"，故不能再有非零常数分量——常数函数是梯度零空间的唯一成员（连通区域上）
- 零均值版本用反证：若无界，取 $\|u_m\|_{L^p}=1$、$\|\nabla u_m\|_{L^p}\to0$ 的序列；零均值排除常数，[[Rellich–Kondrachov紧嵌入]]给出 $L^p$ 强收敛，极限 $u$ 满足 $\nabla u=0$ 且 $\int u=0$，矛盾
- 常数 $C$ 与区域直径有关：$\Omega$ 的尺度 $\lambda$ 放大时 $C\sim\lambda^p$；最佳常数与拉普拉斯第一特征值倒数相关

## 应用
- $W^{1,2}_0$ 上范数 $\|u\|_{H^1_0}=\|\nabla u\|_{L^2}$ 与 $\|\cdot\|_{H^1}$ 等价，Lax–Milgram 论证中双线性形式强制
- 特征值问题：$-\Delta u=\lambda u$ 的第一特征值 $\lambda_1=\inf\dfrac{\int|\nabla u|^2}{\int u^2}\ge 1/C>0$
- 椭圆方程 $-\Delta u=f$ 的[[弱解（偏微分方程）|弱解]]存在唯一性与能量估计

## 后续
Poincaré 不等式与[[Sobolev嵌入定理]]、[[Rellich–Kondrachov紧嵌入]]构成变分法的三大支柱，也用于证明 $H^1_0$ 中弱解的先验估计（Caccioppoli 不等式）。
