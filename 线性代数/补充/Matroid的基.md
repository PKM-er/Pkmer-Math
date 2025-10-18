---
tags:
  - 数学
dlink:
  - "[[--线性代数--]]"
  - "[[组合数学]]"
urlink: https://en.wikipedia.org/wiki/Basis_of_a_matroid
---
(**超纲内容**)
拟阵的基是一个最大独立集，即一个独立集且不被包含在任何其他独立集中的集合。
## 示例
在二维欧几里得平面 $\mathbb{R}^2$ 上的拟阵中，考虑以下独立集：
$$
\{ \emptyset, \{(0,1)\}, \{(2,0)\}, \{(0,1),(2,0)\}, \{(0,3)\}, \{(0,3),(2,0)\} \}
$$
该拟阵有两个基：
$$
\{(0,1),(2,0)\}, \{(0,3),(2,0)\}
$$
这是唯一的最大独立集。

在不同类型的拟阵中，基有不同的名称：
- **图拟阵 (graphic matroid)**：基是图的**生成森林**。
- **横拟阵 (transversal matroid)**：基是匹配端点的**横截面**。
- **线性拟阵 (linear matroid)**：基是向量空间中的**基**。
- **均匀拟阵 (uniform matroid)**：基是所有满足 $|B| = k$ 的集合。
- **分区拟阵 (partition matroid)**：基是每个类别中元素数量恰好为 $k_c$ 的集合。
- **自由拟阵 (free matroid)**：基是全集 $E$。

## 性质
### 交换性质
对于任意两个不同的基 $A$ 和 $B$，拟阵满足以下性质：
- **基交换性质**：若 $a \in A \setminus B$，则存在 $b \in B \setminus A$，使得
  $$
  (A \setminus \{ a \}) \cup \{ b \}
  $$
  是一个基。
- **对称基交换性质**：存在 $b \in B \setminus A$，使得
  $$
  (A \setminus \{ a \}) \cup \{ b \} \text{ 和 } (B \setminus \{ b \}) \cup \{ a \}
  $$
  均为基。
- **多对称交换性质**：对于任意 $X \subseteq A \setminus B$，存在 $Y \subseteq B \setminus A$ 使得
  $$
  (A \setminus X) \cup Y \text{ 和 } (B \setminus Y) \cup X
  $$
  均为基。
- **双射交换性质**：存在双射 $f: A \to B$ 使得
  $$
  (A \setminus \{ a \}) \cup \{ f(a) \}
  $$
  为基。

### 基的数量与大小
所有拟阵的基的基数相等，即
$$
|A| = |B| \quad \forall A,B \in \mathcal{B}
$$
在线性拟阵中，这个基数称为向量空间的**维数**。

## 对偶
拟阵 $(E, \mathcal{B})$ 的对偶拟阵 $(E, \mathcal{B}^*)$ 定义为：
$$
B^* \in \mathcal{B}^* \iff E \setminus B^* \in \mathcal{B}
$$
对偶拟阵满足 $(E, \mathcal{B}^{**}) = (E, \mathcal{B})$。

## 电路
基的对偶概念是电路。电路是最小的依赖集，即任意真子集都是独立的。

拟阵可以定义为 $(E, \mathcal{C})$，其中 $\mathcal{C}$ 为电路集，满足：
1. $\emptyset \notin \mathcal{C}$
2. 电路的任意真子集都不是电路
3. 若 $C_1 \neq C_2$ 且 $x \in C_1 \cap C_2$，则
   $$
   (C_1 \cup C_2) \setminus \{ x \}
   $$
   包含一个电路。

## 参考
- [Matroids Lecture 3 - Federico Ardila](https://www.youtube.com/watch?v=L7U1k_urI0U)
- [Theory of Matroids - Neil White](https://archive.org/details/theoryofmatroids1986unse)
- [Matroid Theory - D.J.A. Welsh]
