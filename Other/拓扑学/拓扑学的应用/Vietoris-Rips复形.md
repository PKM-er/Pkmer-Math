---
tags:
  - 数学
dlink:
  - "[[--拓扑学的应用--]]"
  - "[[持久同调]]"
  - "[[度量空间]]"
aliases:
  - Vietoris–Rips Complex
  - VR复形
  - 韦氏-里普斯复形
author:
  - DeepSeekV4Flash
---

给点云建立单纯复形是拓扑数据分析的第一步。**Vietoris–Rips 复形** 只读距离矩阵：两两距离不超过 $\varepsilon$ 的点集就张成一个单纯形，$\varepsilon$ 连续增大即得过滤。

需先掌握[[度量空间]]与[[奇异同调]]，了解[[持久同调]]需要什么输入。

## 定义
度量空间 $X$ 的 **Vietoris–Rips 复形** $\mathrm{VR}_\varepsilon(X)$：顶点为 $X$，$\{x_0,\dots,x_k\}$ 构成 $k$-单纯形当且仅当其直径 $\le\varepsilon$（任两点距离 $\le\varepsilon$）。$\varepsilon$ 增大时得到子复形链 $\mathrm{VR}_\varepsilon(X)$，即一个过滤。**Čech 复形** $\check{\mathrm C}_\varepsilon(X)$ 是开球族 $\{B(x,\varepsilon)\}_{x\in X}$ 的神经复形：$\bigcap_{i}B(x_i,\varepsilon)\ne\varnothing$ 时 $\{x_i\}$ 成单纯形。

## 性质
- 神经引理：若球族的所有有限交为空或可缩，则 $\check{\mathrm C}_\varepsilon(X)$ 与并集 $\bigcup_x B(x,\varepsilon)$ 弱同伦等价
- 交错关系：$\mathrm{VR}_\varepsilon\subseteq\check{\mathrm C}_\varepsilon\subseteq\mathrm{VR}_{2\varepsilon}$（Euclid 空间），两过滤的持久同调在尺度因子 2 的意义下交错
- Rips 复形只需距离矩阵即可构造，计算代价低；Čech 复形需要开球的几何信息，单纯形更多

## 示例
- 三点等边三角形（边长 1）：$\varepsilon<1$ 时只有顶点，$\varepsilon\ge1$ 时三角形被填满（含 2-单纯形），$H_1$ 恒为 0，无环
- 正方形四顶点（边长 1）：$H_1$ 在 $1\le\varepsilon<\sqrt2$ 出现，持久区间 $[1,\sqrt2)$（见[[持久同调]]示例）

## 应用
Rips 过滤是[[持久同调]]最常用的输入，用于传感器覆盖、社交网络、分子构象分析；数据量大时改用 α-复形或只取 1-骨架控制规模。
