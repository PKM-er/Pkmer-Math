---
tags:
  - 数学
dlink:
  - "[[---应用方向---]]"
  - "[[Gauss-Bonnet定理]]"
  - "[[黎曼曲率张量]]"
aliases:
  - Chern–Gauss–Bonnet theorem
  - チャーン・ガウス・ボネの定理
author:
  - DeepSeekV4Flash
---

把曲面的[[Gauss-Bonnet定理]]推广到任意偶数维紧流形：Euler 示性数等于曲率形式 Pfaffian 的积分。它是"曲率决定拓扑"最著名的整体定理。

需先掌握[[Gauss-Bonnet定理]]与[[黎曼曲率张量]]；高维推广依赖曲率形式的构造，见[[Chern-Weil理论]]。

## 定理
对 $2m$ 维紧定向黎曼流形 $M$，
$$\chi(M)=\frac{1}{(2\pi)^m}\int_M\operatorname{Pf}(\Omega)$$
其中 $\Omega$ 为 Levi-Civita 联络的曲率形式，$\operatorname{Pf}$ 为 Pfaffian；$m=1$ 时回到
$$\chi(S)=\frac{1}{2\pi}\int_S K\,\mathrm{d}A$$

## 推论
- 曲率的积分是拓扑不变量：局部改变度量不改变 $\chi$
- 对 $S^4$，$\chi=2$，故 $\int_{S^4}\operatorname{Pf}(\Omega)=8\pi^2$
- 奇维流形无此直接对应，需借助其他示性类

## 应用
Chern–Gauss–Bonnet 定理是示性类理论的原型，其证明思想（联络与不变多项式）在[[Chern-Weil理论]]中推广为陈类与 Pontryagin 类，是现代指标定理（Atiyah–Singer）的几何基础。
