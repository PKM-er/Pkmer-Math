---
tags:
  - 数学
dlink:
  - "[[---泛函分析的应用---]]"
  - "[[变分法]]"
  - "[[测地线]]"
aliases:
  - Euler–Lagrange equation
  - 欧拉-拉格朗日方程
  - オイラー＝ラグランジュ方程式
author:
  - DeepSeekV4Flash
---
变分问题中，泛函取极小的必要条件是其一阶变分为零；Euler–Lagrange 方程正是把这一条件具体化为关于未知函数的常/偏微分方程，是[[变分法]]的核心工具。需先掌握[[变分法]]的直接方法思想与微积分中[[多元函数极值]]；严格推导依赖分部积分与边界条件。

> [!NOTE] Euler–Lagrange 方程
> 对泛函 $J(u)=\int_a^b F(x,u(x),u'(x))\,dx$，若 $u\in C^2$ 且 $u(a),u(b)$ 固定，则 $J$ 取极值的必要条件是
> $$\frac{\partial F}{\partial u}-\frac{d}{dx}\frac{\partial F}{\partial u'}=0$$
> 对多变量函数 $u(x_1,\dots,x_n)$，对应
> $$\frac{\partial F}{\partial u}-\sum_i\frac{\partial}{\partial x_i}\frac{\partial F}{\partial u_{x_i}}=0$$

## 推导要点
- 对单参数扰动 $u+\varepsilon v$（$v$ 在端点为零），极值条件 $\frac{d}{d\varepsilon}J(u+\varepsilon v)\big|_{\varepsilon=0}=0$ 给出
  $$\int_a^b\left(\frac{\partial F}{\partial u}v+\frac{\partial F}{\partial u'}v'\right)dx=0$$
- 对第二项分部积分并利用 $v(a)=v(b)=0$，消去边界项，由 $v$ 任意性得 Euler–Lagrange 方程（变分法基本引理）

## 例子
- **测地线**：长度泛函 $\int\sqrt{1+y'^2}\,dx$ 的极小曲线为直线（见[[测地线]]）；球面上的测地线为测地圆
- **最速降线**：$\int_0^a\frac{\sqrt{1+y'^2}}{\sqrt{2gy}}\,dx$ 的极小曲线为摆线
- **极小曲面**：面积泛函的 Euler–Lagrange 方程即平均曲率为零（见[[极小曲面]]）
- **不显含 $x$ 的情形**：$\frac{\partial F}{\partial x}=0$ 时存在首次积分 $F-u'\frac{\partial F}{\partial u'}=\text{const}$（能量守恒形式）

## 与泛函分析的联系
极小元的存在性由[[变分法]]的直接方法（强制性+弱下半连续）保证，Euler–Lagrange 方程只给出必要条件；当泛函凸时两者等价，此时极小元恰是变分不等式的解，并与[[弱解（偏微分方程）]]理论衔接。

## 后续
Euler–Lagrange 方程是力学（[[辛几何与哈密顿力学]]）与最优控制的基础；其约束版本（Lagrange 乘子）导出特征值问题，见[[特征值的变分刻画]]。
