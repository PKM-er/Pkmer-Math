---
tags:
  - 数学
  - AI
  - 算法
  - 统计学
  - 信号处理
dlink:
  - "[[--线性代数--]]"
aliases:
  - Singular value decomposition
  - 奇异值分解
author:
  - Cyletix
datetime: 2023-08-29 11:09:04
---
奇异值分解是一种矩阵分解方法，将一个矩阵分解为三个矩阵的乘积。

设 $A$ 是一个 $m \times n$ 的矩阵，则 $A$ 可以分解为：

$$
A = U \Sigma V^T
$$

其中：

- $U$ 是一个 $m \times m$ 的正交矩阵，包含 $A$ 的左奇异向量。
- $\Sigma$ 是一个 $m \times n$ 的对角矩阵，包含 $A$ 的奇异值，其非负的对角元素按照从大到小的顺序排列。
- $V$ 是一个 $n \times n$ 的正交矩阵，包含 $A$ 的右奇异向量，$V^T$ 是 $V$ 的转置矩阵。

#### 举例
设 $A$ 是一个 $3 \times 2$ 的矩阵：
$$
A = \begin{bmatrix}
1 & 0 \\
0 & 1 \\
1 & 1
\end{bmatrix}
$$
它的奇异值分解为：
$$
A = \begin{bmatrix}
-0.707 & 0.707 \\
-0.707 & -0.707 \\
0 & 0
\end{bmatrix}
\begin{bmatrix}
1.414 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
-0.707 & -0.707 \\
0.707 & -0.707
\end{bmatrix}^T
$$

#### 性质

1. **奇异值**：$\Sigma$ 中的对角元素称为奇异值，通常记作 $\sigma_i$。这些奇异值是非负实数，且 $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$，其中 $r$ 是 $A$ 的秩。
2. **奇异向量**：矩阵 $U$ 和 $V$ 的列向量分别称为左奇异向量和右奇异向量。
3. **秩**：矩阵 $A$ 的秩等于其非零奇异值的个数。
4. **矩阵范数**：矩阵 $A$ 的奇异值可以用于计算其范数，如 $\|A\|_F = \sqrt{\sum_{i=1}^r \sigma_i^2}$，其中 $\|A\|_F$ 是 Frobenius 范数。

奇异值分解在数据压缩、图像处理和降维分析等领域有广泛应用。
