---
tags:
  - 数学
dlink:
  - "[[----一阶变分----]]"
aliases:
  - Euler–Lagrange equation
  - 欧拉-拉格朗日方程
  - オイラー＝ラグランジュ方程式
author:
  - DeepSeekV4Flash
  - GPT-6 Astra
---
变分问题中，泛函取极小的必要条件是其一阶变分为零；Euler–Lagrange 方程正是把这一条件具体化为关于未知函数的常/偏微分方程，是[[变分法]]的核心工具。需先掌握[[泛函与容许变分]]、[[第一变分]]和[[变分法基本引理]]；它延续[[多元函数极值]]的驻点思想，严格推导依赖分部积分与边界条件。

> [!NOTE] Euler–Lagrange 方程
> 对泛函 $J(u)=\int_a^b F(x,u(x),u'(x))\,dx$，设 $F\in C^2$，候选函数 $u\in C^2([a,b])$ 且 $u(a),u(b)$ 固定。若 $u$ 是容许函数中的 $C^1$ 局部极值，则必要条件是
> $$\frac{\partial F}{\partial u}-\frac{d}{dx}\frac{\partial F}{\partial u'}=0$$
> 对多变量函数 $u(x_1,\dots,x_n)$，若 $F,u$ 具有上述对应光滑性，并使用紧支集内部扰动，对应的内部方程为
> $$\frac{\partial F}{\partial u}-\sum_i\frac{\partial}{\partial x_i}\frac{\partial F}{\partial u_{x_i}}=0$$

## 推导要点
- 对单参数扰动 $u+\varepsilon v$（$v$ 在端点为零），极值条件 $\frac{d}{d\varepsilon}J(u+\varepsilon v)\big|_{\varepsilon=0}=0$ 给出
  $$\int_a^b\left(\frac{\partial F}{\partial u}v+\frac{\partial F}{\partial u'}v'\right)dx=0$$
- 对第二项分部积分并利用 $v(a)=v(b)=0$，消去边界项，由 $v$ 任意性得 Euler–Lagrange 方程（[[变分法基本引理]]）

自由端点还须满足[[自然边界条件]]；仅解内部方程不能替代边界条件。

## 例子
- **测地线**：长度泛函 $\int\sqrt{1+y'^2}\,dx$ 的极小曲线为直线（见[[测地线]]）；球面上的测地线为大圆的弧段，最短性须结合弧长与端点判断
- **最速降线**：$\int_0^a\frac{\sqrt{1+y'^2}}{\sqrt{2gy}}\,dx$ 在适当端点与下降分支条件下的极小曲线为摆线
- **极小曲面**：面积泛函的 Euler–Lagrange 方程即平均曲率为零（见[[极小曲面]]）
- **不显含 $x$ 的情形**：$\frac{\partial F}{\partial x}=0$ 时存在首次积分 $F-u'\frac{\partial F}{\partial u'}=\text{const}$（能量守恒形式，推导与回代要求见[[变分问题的首次积分]]）

## 与泛函分析的联系
在满足空间自反性、容许集弱闭性、有界极小化序列与弱下半连续性等条件时，[[变分法的直接方法]]保证极小元存在。Euler–Lagrange 方程给出驻值必要条件；对凸可微泛函和仿射容许集，驻值条件也是全局极小的充分条件，见[[凸泛函的极小值判别]]。一般凸约束集上的一阶条件写成变分不等式，并与[[弱解（偏微分方程）]]理论衔接。

## 后续
Euler–Lagrange 方程是力学（[[辛几何与哈密顿力学]]）与最优控制的基础；其正常约束版本（Lagrange 乘子，见[[等周约束变分问题]]）导出特征值问题，见[[特征值的变分刻画]]。
