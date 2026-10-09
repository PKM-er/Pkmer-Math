---
tags:
  - 数学
  - 算法
  - 信号处理
dlink:
  - "[[---矩阵---]]"
aliases:
  - Singular value decomposition
  - 奇异值分解
author:
  - Cyletix
  - GPT-6
datetime: 2023-08-29 11:09:04
---
奇异值分解是一种矩阵分解方法，将一个矩阵分解为三个矩阵的乘积。

设 $A$ 是一个 $m\times n$ 的实矩阵，若记 $r=\operatorname{rank}(A)$，则其紧致奇异值分解可写为：

$$
A = U \Sigma V^T
$$

其中：

- $U$ 是一个 $m \times r$ 的列正交矩阵，包含 $A$ 的左奇异向量。
- $\Sigma$ 是一个 $r \times r$ 的对角矩阵，其对角元素是 $A$ 的正奇异值，且按从大到小排列。
- $V$ 是一个 $n \times r$ 的列正交矩阵，包含 $A$ 的右奇异向量。

复矩阵的相应分解使用酉矩阵与共轭转置 $V^*$，而不是普通转置。

## 举例
设 $A$ 是一个 $3 \times 2$ 的矩阵：
$$
A = \begin{bmatrix}
1 & 0 \\
0 & 1 \\
1 & 1
\end{bmatrix}
$$
它的一种紧致奇异值分解为：
$$
A = \begin{bmatrix}
\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{2}} \\
\frac{2}{\sqrt{6}} & 0
\end{bmatrix}
\begin{bmatrix}
\sqrt{3} & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}}
\end{bmatrix}^T
$$

## 性质

1. **奇异值**：$\Sigma$ 中的对角元素称为奇异值，通常记作 $\sigma_i$。这些奇异值是非负实数，且 $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$，其中 $r$ 是 $A$ 的秩。
2. **奇异向量**：矩阵 $U$ 和 $V$ 的列向量分别称为左奇异向量和右奇异向量。
3. **秩**：矩阵 $A$ 的[[矩阵的秩]]等于其非零奇异值的个数。
4. **矩阵范数**：矩阵 $A$ 的奇异值可以用于计算其范数，如 $\|A\|_F = \sqrt{\sum_{i=1}^r \sigma_i^2}$，其中 $\|A\|_F$ 是 Frobenius 范数。

奇异值分解在数据压缩、图像处理和降维分析等领域有广泛应用。

## 从分解得到最小范数解

对上述紧致 SVD，定义伪逆 $A^+=V\Sigma^{-1}U^T$。则全部最小二乘解为
$$x=A^+b+z,\qquad z\in\ker A,$$
其中 $A^+b$ 与 $\ker A$ 正交，故为唯一的最小范数最小二乘解。拟合向量 $AA^+b=UU^Tb$ 是 $b$ 在列空间上的[[正交投影]]；当 $A=0$ 时，紧致分解可视为空因子，直接取 $A^+=0$。

把例中的分解用于 $b=(1,2,2)^T$，得到 $U^Tb=(7/\sqrt6,-1/\sqrt2)^T$，再依次乘 $\Sigma^{-1}$ 和 $V$，结果为 $(2/3,5/3)^T$，与[[正规方程]]和[[QRD]]一致。

奇异值还说明稳定性：满列秩时 $\kappa_2(A)=\sigma_1/\sigma_n$；非常小的奇异值会在求逆时放大噪声。数值秩的阈值应结合精度、尺度和数据误差选择；截断小奇异值是正则化取舍，会改变原最小二乘问题，不能把数值截断当作精确的代数秩。

## 存在性与构造

令 $A\in\mathbb R^{m\times n}$。由[[正交对角化]]，$A^TA$ 有标准正交特征基 $v_1,\ldots,v_n$，特征值按 $\lambda_1\ge\cdots\ge\lambda_n\ge0$ 排列。非负性来自 $x^TA^TAx=\|Ax\|^2\ge0$；同一恒等式给出 $\ker(A^TA)=\ker A$，故恰有 $r=\operatorname{rank}(A)$ 个正特征值。

对 $1\le i\le r$，令 $\sigma_i=\sqrt{\lambda_i}$、$u_i=Av_i/\sigma_i$。于是
$$u_i^Tu_j=\frac{v_i^TA^TAv_j}{\sigma_i\sigma_j}=\delta_{ij}.$$
对 $i>r$ 则 $Av_i=0$。将任意 $x$ 按 $v_i$ 展开可得
$$Ax=\sum_{i=1}^r\sigma_i u_i(v_i^Tx),\qquad A=\sum_{i=1}^r\sigma_i u_iv_i^T=U\Sigma V^T.$$
这就是前文紧致分解。将左右奇异向量分别补成 $\mathbb R^m$ 与 $\mathbb R^n$ 的标准正交基，并将 $\Sigma$ 补为 $m\times n$ 的矩形对角矩阵，即得完整 SVD。重奇异值允许在相应子空间中协调更换左右基，分解一般不唯一。
