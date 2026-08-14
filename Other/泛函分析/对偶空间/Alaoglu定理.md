---
tags:
  - 数学
dlink:
  - "[[---对偶空间---]]"
  - "[[弱星拓扑]]"
  - "[[紧致性]]"
aliases:
  - Banach–Alaoglu 定理
  - Banach–Alaoglu Theorem
author:
  - DeepSeekV4Flash
---
紧性在无穷维范数空间中基本失效（单位球紧 $\iff$ 有限维），但换到对偶空间的弱*拓扑后局面逆转：对偶空间单位球总是弱*紧的。这是泛函分析中最常用的一条紧性定理——"从有界提取收敛"在弱*意义下永远可行。前置依赖：[[弱星拓扑]]、[[对偶空间（泛函分析）]]、[[紧致性]]。

> [!NOTE] Banach–Alaoglu 定理
> 设 $X$ 为赋范空间，则对偶空间 $X^*$ 的闭单位球
> $$B_{X^*}=\{\varphi\in X^*:\|\varphi\|\le1\}$$
> 在[[弱星拓扑]] $\sigma(X^*,X)$ 下**紧**。

## 证明思想
把 $B_{X^*}$ 嵌入乘积空间 $D^X=\prod_{x\in X}D_x$（$D_x=\{\alpha\in\mathbb{K}:|\alpha|\le\|x\|\}$）：映射 $\varphi\mapsto(\varphi(x))_{x\in X}$ 是同胚嵌入，像集在乘积中闭，由 Tychonoff 定理（有限维单位球紧）得 $B_{X^*}$ 紧。

## 推论
- $X$ 可分时 $B_{X^*}$ 弱*紧可度量，故每个有界序列 $\{\varphi_n\}\subset X^*$ 有弱*收敛子列
- $X$ 自反时 $B_X$ 弱紧（与[[自反空间]]中 Eberlein–Šmulian 结合）
- 泛函分析中"弱*紧性"常作为没有强紧性的替代品：$L^1$ 有界序列在 $(L^1)^*\cong L^\infty$ 的弱*拓扑下有收敛子列

## 后续
Alaoglu 定理支撑弱*紧性与变分法、测度论（Prokhorov 紧性）与算子理论；与一致有界原理（[[一致有界原理]]）合起来处理"有界序列的收敛子列"问题。
