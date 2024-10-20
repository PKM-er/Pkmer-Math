---
tags:
  - 数学
dlink:
  - "[[---矩阵---]]"
aliases:
  - LU Decomposition
  - LU分解
author:
  - Cyletix
  - GPT-4
---
## LUD
LU分解是矩阵分解的一种，将一个矩阵分解为一个下三角矩阵和一个上三角矩阵的乘积，有时需要再乘上一个置换矩阵。LU分解可以被视为[[高斯消元法]]的矩阵形式。

## 定义
对于方阵 $A$，$A$ 的 LU 分解是将它分解成一个下三角矩阵 $L$ 与上三角矩阵 $U$ 的乘积，也就是

$$
A = LU
$$

如果适当的改变 $A$ 的行的顺序或列的顺序，就可以将 $A$ 做 LU 分解。

## 示例
举例来说一个 $3 \times 3$ 的矩阵 $A$ ，其 LU 分解会写成下面的形式：

$$
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
=
\begin{bmatrix}
l_{11} & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33}
\end{bmatrix}
\begin{bmatrix}
u_{11} & u_{12} & u_{13} \\
0 & u_{22} & u_{23} \\
0 & 0 & u_{33}
\end{bmatrix}
$$

事实上，并不是每个矩阵都有 LU 分解。例如，从上式可知 $a_{11} = l_{11}u_{11}$，若 $a_{11} = 0$，则 $l_{11}$ 或 $u_{11}$ 等于 0，故 $L$ 或 $U$ 是非可逆矩阵，$A$ 必须也是非可逆矩阵。然而，存在着可逆矩阵 $A$ 满足 $a_{11} = 0$，这些 $A$ 就是没有 LU 分解的例子。该问题可借由置换 $A$ 的各行顺序来解决，最终会得到一个 $A$ 的 PLU 分解。
