---
tags:
  - 数学
dlink:
  - "[[---相似变换---]]"
author:
  - Cyletix
  - GPT-6
---
Jordan 标准型是矩阵在[[相似变换概述|相似变换]]下能化为的最简形式。当矩阵无法对角化（特征向量不足）时，Jordan 标准型提供了最接近对角化的结构，使其高次幂的计算和理论分析成为可能。

以下在复数域讨论；更一般地，要求矩阵的特征多项式在所用数域上分裂为一次因子。实矩阵若有非实特征值，通常需要转到复数域，或另用实块形式。

## 定义
### Jordan 块
一个 $k \times k$ 的 Jordan 块 $J$ 围绕特征值 $\lambda$ 构造：主对角线为 $\lambda$，紧邻上方的次对角线全为 1，其余为零。

$$
J = \begin{bmatrix}
\lambda & 1 & 0 & \cdots & 0 & 0\\
0 & \lambda & 1 & \cdots & 0 & 0\\
0 & 0 & \lambda & \cdots & 0 & 0\\
\vdots & \vdots & \vdots &  & \vdots & \vdots\\
0 & 0 & 0 & \cdots & \lambda & 1\\
0 & 0 & 0 & \cdots & 0 & \lambda
\end{bmatrix}
$$

一个 Jordan 标准型由若干个 Jordan 块沿对角线排列组成。
## 性质
Jordan 块最核心的代数性质在于其高次幂的极简计算。将 $J$ 拆分为数量矩阵与幂零矩阵之和：

$$J = \lambda I + N, \quad \text{其中 } N = \begin{bmatrix} 0 & 1 & 0 & \cdots & 0 \\ 0 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & 1 \\ 0 & 0 & 0 & \cdots & 0 \end{bmatrix}$$
通常矩阵乘法不可交换, 无法二项展开, 但是由于 $\lambda I$ 与 $N$ 可交换，且 $N$ 具有**幂零性**（当 $m \ge k$ 时，$N^m = \mathbf{0}$），可应用二项式定理：
$$J^n = (\lambda I + N)^n = \sum_{m=0}^{\min(n,k-1)} \binom{n}{m} \lambda^{n-m} N^m$$
这里 $n$ 为非负整数。$\lambda=0$ 时直接用 $J^n=N^n$（$J^0=I$），避免负指数或 $0^0$ 的歧义；$\lambda\ne0$ 时展开后的 $k \times k$ 矩阵形式为：
$$
J^n = \begin{bmatrix}
\lambda^n & n\lambda^{n-1} & \frac{n(n-1)}{2}\lambda^{n-2} & \cdots & \binom{n}{k-1}\lambda^{n-(k-1)} \\
0 & \lambda^n & n\lambda^{n-1} & \cdots & \binom{n}{k-2}\lambda^{n-(k-2)} \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
0 & 0 & 0 & \lambda^n & n\lambda^{n-1} \\
0 & 0 & 0 & 0 & \lambda^n
\end{bmatrix}
$$

## 计算
若要计算一个矩阵的N次幂, 在正常对角化遇到了困难, 则可以尝试计算其Jordan标准型来代替化简: 
1. **求解特征值**：解 $\det(A - \lambda I) = 0$，得到所有特征值。
2. **计算代数重数与几何重数**：确定每个 $\lambda$ 的[[代数重数]]和[[几何重数]]。若几何重数 < 代数重数，则存在大小大于 1 的 Jordan 块。
3. **构造 Jordan 块**：计算 $d_j=\dim\ker(A-\lambda I)^j$，令 $d_0=0$。大小至少为 $j$ 的块数是 $d_j-d_{j-1}$，大小恰为 $j$ 的块数是 $2d_j-d_{j-1}-d_{j+1}$；计算到 $d_j$ 稳定为该特征值的代数重数。
4. **求解广义特征向量**：解链式方程 $(A - \lambda I) v_1 = 0$，$(A - \lambda I) v_k = v_{k-1}$，为每个大于 1 阶的 Jordan 块找到足够的广义特征向量。
5. **构造相似变换矩阵 $P$**：$P$ 的列由特征向量和广义特征向量依次排列组成，对应于 Jordan 标准型中 Jordan 块的顺序。

### 为什么重数还不够

代数重数是所有块大小的和，几何重数是块的数量，二者不能总是决定各块大小。例如代数重数 4、几何重数 2 时，块大小既可能是 $3+1$，也可能是 $2+2$。前者的 $d_j$ 依次为 $0,2,3,4,4$，后者为 $0,2,4,4$。

每个大小为 $s$ 的块对 $d_j$ 贡献 $\min(j,s)$，因此一阶差分恰好数出大小至少为 $j$ 的块，二阶差分再给出恰为 $j$ 的块数。

## 示例

设 $A = \begin{bmatrix} 4 & 1 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 4 \end{bmatrix}$。

特征值 $\lambda = 4$（三重），几何重数为 1，故 Jordan 块为 $3 \times 3$。

- 解 $(A - 4I)v = 0$ 得特征向量 $v_1 = [1, 0, 0]^T$。
- 解方程链得广义特征向量 $v_2 = [0, 1, 0]^T$，$v_3 = [0, 0, 1]^T$。
- 令 $P = [v_1, v_2, v_3]$，则 $A$ 的 Jordan 标准型 $J = A$。

利用二项式展开公式直接求得：

$$
J^n = \begin{bmatrix}
4^n & n \cdot 4^{n-1} & \frac{n(n-1)}{2} \cdot 4^{n-2} \\
0 & 4^n & n \cdot 4^{n-1} \\
0 & 0 & 4^n
\end{bmatrix}
$$

此时 $A^n = P J^n P^{-1}$。事实上此处 $P=I$，故 $A^n = J^n$。