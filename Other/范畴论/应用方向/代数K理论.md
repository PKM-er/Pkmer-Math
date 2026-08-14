---
tags:
  - 数学
dlink:
  - "[[--应用方向--]]"
  - "[[阿贝尔范畴]]"
  - "[[投射对象与内射对象]]"
aliases:
  - Algebraic K-theory
  - 代数的K理論
author:
  - DeepSeekV4Flash
---

把拓扑中的 K-理论（向量丛的不变量）搬到代数里，得到**代数K理论**：它从环 $R$ 的有限生成投射模出发，构造出一串不变量 $K_0(R),K_1(R),\dots$，把"维数""行列式"等线性代数概念一般化，并统一了数论（理想类群）、代数几何（$K_0$）与拓扑（Bott 周期性）。

需先掌握[[阿贝尔范畴]]（正合列的 Grothendieck 群构造）、[[投射对象与内射对象]]（有限生成投射模）与[[森田等价]]（$K_0$ 的 Morita 不变性）。

## 定义
对环 $R$，设 $\mathcal{P}(R)$ 为有限生成投射右 $R$-模的范畴。
- **$K_0$**：由有限生成投射模的（同构类）生成、以短正合列 $0\to P'\to P\to P''\to0$ 的关系 $[P]=[P']+[P'']$ 商掉，得到交换群 $K_0(R)$。对域 $k$，$K_0(k)\cong\mathbb{Z}$（由维数给出）
- **$K_1$**：$K_1(R)=\mathrm{GL}(R)/E(R)$，其中 $\mathrm{GL}(R)$ 是有限阶一般线性群的直极限，$E(R)$ 由初等矩阵生成（Whitehead 引理：$E(R)=[\mathrm{GL}(R),\mathrm{GL}(R)]$）
- **高阶 $K_n$**（Quillen）：$K_n(R)=\pi_n(B\mathrm{GL}(R)^+)$（加构造），或 $K$ 谱的同伦群

## 性质
- **加法性**：$K_0(R_1\times R_2)\cong K_0(R_1)\oplus K_0(R_2)$；$K_0$ 与 $K_1$ 都是[[森田等价|Morita 不变量]]
- **数论联系**：Dedekind 整环 $\mathcal{O}$ 有 $K_0(\mathcal{O})\cong\mathbb{Z}\oplus\operatorname{Cl}(\mathcal{O})$（理想类群）；$K_1(\mathcal{O})\cong\mathcal{O}^\times$
- **几何联系**：$K_0(C(X))$（$X$ 紧致 Hausdorff 空间的连续函数环）与拓扑 K-理论 $K^0(X)$ 同构（Swan 定理）；$K_0(X)\otimes\mathbb{Q}\cong CH^*(X)\otimes\mathbb{Q}$（与周环的关系）
- **Bott 周期性**：拓扑 K-理论 $K^0(X)\cong K^2(X)$，复情形周期为 $2$

## 例子
- $K_0(\mathbb{Z})=\mathbb{Z}$（有限生成投射 $\mathbb{Z}$-模即自由模，秩给出同构）
- $K_1(\mathbb{Z})=\mathbb{Z}/2$（由 $-1$ 生成）；Bass–Heller–Swan：$K_1(\mathbb{C}[t,t^{-1}])\cong\mathbb{C}^\times\oplus\mathbb{Z}$
- $K_0$ 的 Grothendieck 构造正是[[阿贝尔范畴]]中"由正合列生成不变量"的模板（如 $\mathbb{Z}/m$ 模分解）

## 应用
代数K理论是数论（类群、Tamagawa 数猜想）、代数几何（$K_0$ 与陈特征、动机理论）与算子代数（Kasparov KK-理论）的共同语言；它把[[正合列]]的正合性翻译为加法群的代数结构。
