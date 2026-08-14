---
tags:
  - 数学
dlink:
  - "[[---赋范空间与巴拿赫空间---]]"
  - "[[半范数]]"
  - "[[局部凸空间]]"
aliases:
  - Fréchet space
  - 弗雷歇空间
author:
  - DeepSeekV4Flash
---
光滑函数空间 $C^\infty$ 无法赋予使"逐导数收敛"的范数，却可以通过可数个[[半范数]]同时控制所有导数。这类空间即 Fréchet 空间：完备、由可数半范数族生成的局部凸空间，是分布理论与偏微分方程的常用舞台。

> [!NOTE] Fréchet 空间
> 局部凸 Hausdorff 空间 $X$ 称为 **Fréchet 空间**，若其拓扑可由**可数**个半范数 $\{p_n\}$ 生成，且关于度量 $d(x,y)=\sum_{n=1}^{\infty}2^{-n}\dfrac{p_n(x-y)}{1+p_n(x-y)}$ 完备。

## 例子
- $C^\infty(\Omega)$：半范数 $p_{K,m}(f)=\sup_{|\alpha|\le m}\sup_{x\in K}|D^\alpha f(x)|$（$K$ 紧）
- 速降函数空间 $\mathcal S(\mathbb{R}^n)$（Schwartz 空间）
- $C(\mathbb{R}^n)$ 取紧集一致收敛拓扑

## 性质
- 开映射定理、闭图像定理在 Fréchet 空间之间依然成立
- 范数空间是 Fréchet 空间的特例（单个半范数即范数）

## 后续
Fréchet 空间是[[局部凸空间]]的重要子类，也是广义函数（分布）理论的基础框架；它与 Sobolev 空间共同支撑弱解理论（见后续章节）。
