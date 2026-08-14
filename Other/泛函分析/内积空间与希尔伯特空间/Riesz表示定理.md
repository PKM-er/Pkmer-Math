---
tags:
  - 数学
dlink:
  - "[[---内积空间与希尔伯特空间---]]"
  - "[[希尔伯特空间的定义]]"
  - "[[线性映射]]"
aliases:
  - Riesz 表示定理
  - Riesz representation theorem
author:
  - DeepSeekV4Flash
---
对偶空间（连续线性泛函全体）是分析的核心对象。对一般巴拿赫空间它要靠 Hahn–Banach 定理艰难构造，而希尔伯特空间中的答案异常优美：每个连续线性泛函就是"与某个向量取内积"，空间与自己的对偶完全同构。

> [!NOTE] Riesz 表示定理
> 设 $H$ 是希尔伯特空间。对每个连续线性泛函 $\varphi\in H^*$，存在唯一 $y_\varphi\in H$ 使得
> $$\varphi(x)=\langle x,y_\varphi\rangle,\quad \forall x\in H$$
> 且 $\|\varphi\|=\|y_\varphi\|$。映射 $\varphi\mapsto y_\varphi$ 是 $H^*\to H$ 的**共轭线性**等距同构。

## 性质
- $H^*\cong H$：希尔伯特空间自对偶（一般巴拿赫空间的对偶没有这种表示，需借助 Hahn–Banach 定理）
- 推论（**弱收敛**）：$x_n\rightharpoonup x$ 当且仅当 $\langle x_n,y\rangle\to\langle x,y\rangle$ 对一切 $y\in H$ 成立
- 推论：每个有界线性算子存在唯一**伴随算子**，见[[伴随算子]]

## 后续
Riesz 表示是量子力学中"态=向量、观测=内积"的数学根据，也是谱定理、变分法与偏微分方程弱解理论（Lax–Milgram）的基石。
