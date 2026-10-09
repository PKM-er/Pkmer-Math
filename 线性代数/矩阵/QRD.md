---
tags:
  - 数学
  - AI
dlink:
  - "[[---矩阵---]]"
aliases:
  - QR Decomposition
  - QR分解
author:
  - Cyletix
  - GPT-4
  - GPT-6
---
## QRD
对实矩阵 $A\in\mathbb R^{m\times n}$（$m\ge n$），完整 QR 可取正交方阵 $Q\in\mathbb R^{m\times m}$ 与上梯形 $R\in\mathbb R^{m\times n}$；精简 QR 可取列正交 $Q\in\mathbb R^{m\times n}$ 与上三角 $R\in\mathbb R^{n\times n}$，满足：
$$
A = QR.
$$

当 $A$ 是列满秩矩阵时, 可以取 $Q$ 的列向量为一组标准正交向量组; 当 $A$ 是可逆方阵时, $Q$ 是正交方阵, $R$ 是可逆上三角矩阵。

## 步骤
下面的求逆公式只针对可逆方阵；矩形的列正交 $Q$ 没有通常意义的逆矩阵。
1. **QRD**：将矩阵 $A$ 分解为正交矩阵 $Q$ 和上三角矩阵 $R$：
$$
A = QR
$$

2. **求解 $R$ 的逆矩阵**：利用上三角矩阵的特性，逐列求解逆矩阵。

3. **求解 $Q$ 的逆矩阵**：由于 $Q$ 是正交矩阵，$Q$ 的逆矩阵等于其[[转置]]矩阵：
$$
Q^{-1} = Q^T
$$

4. **组合逆矩阵**：
$$
A^{-1} = R^{-1}Q^T
$$

## 最小二乘与构造

对列满秩的 $A$ 取精简 QR，$Q^TQ=I_n$ 且 $R$ 可逆。由正交分解，最小二乘解满足 $R\hat x=Q^Tb$，直接三角回代即可，不必显式求 $R^{-1}$。

[[正规方程#一个贯通分解方法的计算|共同算例]]中的矩阵可取
$$Q=\begin{bmatrix}1/\sqrt2&-1/\sqrt6\\0&2/\sqrt6\\1/\sqrt2&1/\sqrt6\end{bmatrix},\quad R=\begin{bmatrix}\sqrt2&1/\sqrt2\\0&\sqrt{3/2}\end{bmatrix}.$$
对 $b=(1,2,2)^T$，$Q^Tb=(3/\sqrt2,5/\sqrt6)^T$，回代得到 $\hat x=(2/3,5/3)^T$。

理论上可用[[施密特正交化]]理解 QR；实际浮点计算常用 Householder 反射或 Givens 旋转，经典 Gram–Schmidt 在近线性相关时可能丢失正交性。秩亏矩阵仍可作 QR，但 $R$ 不可逆；应结合列选主元判秩或用[[SVD]]处理，不能继续套唯一解回代。
