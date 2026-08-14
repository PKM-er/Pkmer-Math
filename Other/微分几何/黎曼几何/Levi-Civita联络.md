---
tags:
  - 数学
dlink:
  - "[[---黎曼几何---]]"
  - "[[仿射联络]]"
  - "[[黎曼度量]]"
aliases:
  - Levi-Civita connection
  - レビ・チビタ接続
author:
  - DeepSeekV4Flash
---

仿射联络有很多，但[[黎曼度量]]选出其中"最自然"的一个：既不扭曲（无挠）又与度量相容（保内积）。这个唯一联络以 Levi-Civita 命名，是黎曼几何一切计算的核心工具。

需先掌握[[仿射联络]]与[[黎曼度量]]。

## 定义
黎曼流形 $(M,g)$ 上满足以下两条件的仿射联络 $\nabla$ 称为 **Levi-Civita 联络**（黎曼联络）：
1. **无挠**：$\nabla_X Y-\nabla_Y X=[X,Y]$
2. **度量相容**：$X\,g(Y,Z)=g(\nabla_X Y,Z)+g(Y,\nabla_X Z)$

## 基本定理
> [!NOTE] Levi-Civita 定理
> 黎曼流形上存在唯一的 Levi-Civita 联络。

唯一性来自无挠与度量相容两组条件逐一确定联络系数。

## Christoffel 符号
在坐标下由度量给出：
$$\Gamma^k_{ij}=\frac{1}{2}g^{kl}\left(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}\right)$$
其中 $(g^{kl})$ 是 $(g_{ij})$ 的逆矩阵。

## 性质
- 度量相容等价于：平行移动保持内积（见[[平行移动]]）
- 无挠保证测地线方程、曲率张量的对称性等标准公式成立
- 曲面情形即曲面论中的黎曼联络：Christoffel 符号与[[第一基本形式]]导出的系数一致

## 应用
Levi-Civita 联络定义[[测地线方程]]、[[协变导数]]与[[平行移动]]，并导出[[黎曼曲率张量]]；广义相对论中时空的联络即 Levi-Civita 联络。
