---
tags:
  - 数学
dlink:
  - "[[--应用方向--]]"
  - "[[层]]"
  - "[[极限]]"
aliases:
  - Grothendieck Topology
  - Site
  - 景
  - グロタンディーク位相
author:
  - DeepSeekV4Flash
---

经典[[层]]理论依赖拓扑空间的开覆盖；但代数簇的 Zariski 拓扑太粗，覆盖太少。**Grothendieck拓扑**把"覆盖"公理化——不依赖开集，只要求一个"哪些筛算覆盖"的规则——使层论能在任意范畴上建立（平展、Nisnevich、fppf 等），这是算术几何与代数几何的语言基础。

需先掌握[[层]]（粘合公理）、[[函子]]（子函子、Hom 函子）与[[极限]]（拉回）。

## 定义
设 $\mathcal{C}$ 为小范畴。对象 $U$ 上的**筛**（sieve）是满足"后复合封闭"的态射族 $S$（$f:V\to U\in S$ 且 $g:W\to V$ 时 $f\circ g\in S$），等价于 $\operatorname{Hom}(-,U)$ 的一个子函子。$\mathcal{C}$ 上的 **Grothendieck拓扑** $J$ 对每个对象 $U$ 指定一族"覆盖筛" $J(U)$，满足：
- $U$ 上全体态射构成的筛 $\operatorname{Hom}(-,U)\in J(U)$
- 若 $S\in J(U)$ 且 $f:V\to U$，则拉回筛 $f^*S=\{h:W\to V\mid f\circ h\in S\}\in J(V)$（稳定）
- 若 $S\in J(U)$，且对每个 $f:V\to U\in S$ 都有 $T\in J(V)$，则 $\{f\circ h\mid f\in S,\ h\in T\}\in J(U)$（传递）

带 Grothendieck拓扑的范畴 $(\mathcal{C},J)$ 称为**景**（site）。

## 性质
- 预层 $F$ 是 $J$-**层**，若对每个覆盖筛 $S\in J(U)$，$F(U)$ 同构于 $S$ 上相容族的极限（粘合与唯一性合为一条）
- **层化**：每个预层有 $J$-层化（左伴随），层范畴 $\mathbf{Sh}(\mathcal{C},J)$ 是完备、余完备的**拓扑斯**（见[[拓扑斯]]）
- 拓扑空间情形：取 $\mathcal{C}=\mathcal{O}(X)$，$S\in J(U)$ 当且仅当 $S$ 含一个开覆盖——经典[[层]]是特例
- 平展景：$X$ 上平展态射作覆盖，其上层的上同调给出**平展上同调**

## 应用
Grothendieck拓扑让层论摆脱拓扑空间：平展上同调、l-进上同调（Weil 猜想的证明工具）、模空间的下降理论都建立其上；[[栈]]与[[拓扑斯]]是它的直接延伸。
