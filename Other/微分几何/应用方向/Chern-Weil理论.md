---
tags:
  - 数学
dlink:
  - "[[---应用方向---]]"
  - "[[Chern-Gauss-Bonnet定理]]"
  - "[[平行移动]]"
aliases:
  - Chern–Weil theory
  - チャーン・ヴェイユ理論
author:
  - DeepSeekV4Flash
---

用曲率形式构造拓扑不变量：向量丛的示性类（陈类、Pontryagin 类、Euler 类）可表示为曲率的不变多项式，且与联络的选取无关。它把分析（曲率）与拓扑（示性类）统一起来。

需先掌握[[平行移动]]与[[黎曼曲率张量]]；整体化的典型例子见[[Chern-Gauss-Bonnet定理]]。

## 思想
对向量丛 $E\to M$ 取联络 $\nabla$，其曲率形式 $\Omega=\nabla^2$ 是 $\operatorname{End}(E)$ 值的 2-形式。对不变多项式 $P$，$P(\Omega)$ 为闭形式，且上同调类 $[P(\Omega)]$ 与联络无关。

## 示性类
- 陈类：由 $\det\!\left(I+\dfrac{i}{2\pi}\Omega\right)=1+c_1+\cdots+c_n$ 定义，$c_k=[P_k(\Omega)]$
- Pontryagin 类：实向量丛情形，由迹多项式给出
- Euler 类：定向实向量丛，由 Pfaffian 给出，回到[[Chern-Gauss-Bonnet定理]]

## 应用
Chern–Weil 理论是规范场论中拓扑量子数（瞬子、磁单极）的数学基础（见[[纤维丛与规范场论]]），也是指标定理与热核方法中上同调不变量来源。
