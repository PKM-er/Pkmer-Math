---
tags:
  - 数学
dlink:
  - "[[---弱拓扑与紧算子---]]"
  - "[[紧算子的谱]]"
  - "[[紧算子的对偶]]"
aliases:
  - Fredholm alternative
  - 弗雷德霍姆择一定理
author:
  - DeepSeekV4Flash
---
Fredholm 择一定理回答经典问题：积分方程 $x-\lambda Kx=y$ 何时可解？答案是"二选一"——要么对一切 $y$ 唯一可解，要么齐次方程有非平凡解。它把线性代数中"方阵可逆或奇异"的对立推广到紧算子，是积分方程理论的核心定理。前置依赖：[[紧算子的谱]]、[[紧算子的对偶]]、[[可逆算子]]。

> [!NOTE] Fredholm 择一定理
> 设 $K$ 为巴拿赫空间 $X$ 上的紧算子，$\lambda\ne 0$。对 $y\in X$，方程 $x-\lambda Kx=y$ 与转置方程 $\varphi-\lambda K^*\varphi=\psi$ 满足：
> 1. 要么 $I-\lambda K$ 可逆：方程对一切 $y$ 有唯一解（此时齐次方程只有零解）
> 2. 要么 $I-\lambda K$ 不可逆：齐次方程 $x-\lambda Kx=0$ 有非平凡解，且解空间有限维；此时方程可解当且仅当 $y$ 正交于齐次转置方程的解空间

## 与谱理论的联系
- $\lambda\ne 0$ 不是特征值 $\Leftrightarrow$ $I-\lambda K$ 可逆（即 $\lambda^{-1}\notin\sigma_p(K)$），由[[紧算子的谱]]的非零谱点恰为特征值
- 可解性条件（Fredholm 相容条件）：$\psi(y)=0$ 对一切 $\psi\in\ker(I-\lambda K^*)$，本质是 $\operatorname{im}(I-\lambda K)$ 闭且 $=\ker(I-\lambda K^*)^\perp$

## 例子
$\ell^2$ 上 $K(x_n)=(\alpha_n x_n)$，$\alpha_n\to 0$。方程 $x-\lambda Kx=y$ 化为 $x_n(1-\lambda\alpha_n)=y_n$：
- 若 $1/\lambda\notin\{\alpha_n\}$，唯一解 $x_n=y_n/(1-\lambda\alpha_n)$
- 若 $1/\lambda=\alpha_{n_0}$，需 $y_{n_0}=0$，否则无解（对应齐次转置解 $\psi=e_{n_0}$）

## 后续
Fredholm 择一定理是积分方程数值解与特征值问题的理论依据，其指标理论（$\dim\ker=\dim\ker(I-\lambda K^*)$）由[[紧算子的对偶]]保证。
