---
tags:
  - 数学
dlink:
  - "[[---对偶空间---]]"
  - "[[Hahn-Banach定理]]"
  - "[[对偶空间（泛函分析）]]"
aliases:
  - Hahn-Banach Separation Theorem
  - 超平面分离定理
author:
  - DeepSeekV4Flash
---
解析形式的 Hahn–Banach 定理把泛函从子空间延拓出去；几何形式则反过来把"泛函存在"翻译成"凸集可被超平面分开"。直观上：两个不交的凸集之间总能插入一个（平移）超平面。它是凸分析、最优化与经济学均衡理论的基石。前置依赖：[[Hahn-Banach定理]]、[[对偶空间（泛函分析）]]。

> [!NOTE] 分离定理（几何形式）
> 设 $X$ 为赋范空间，$A,B\subset X$ 为不交凸集，且 $A$ 有内点（或 $A$ 紧、$B$ 闭）。则存在非零 $\varphi\in X^*$ 与 $t\in\mathbb{R}$ 使
> $$\varphi(a)\le t\le\varphi(b)\qquad(\forall a\in A,\,b\in B)$$
> 即闭超平面 $\{\varphi=t\}$ 分离 $A$ 与 $B$。若 $A$ 紧、$B$ 闭不交，可做到严格分离（$\sup\varphi(A)<\inf\varphi(B)$）。

## 支撑超平面
- 闭凸集 $C$ 的边界点 $x_0$ 处存在支撑超平面：$\varphi(x_0)=\sup_C\varphi$
- 凸集 $C$ 是其所有包含它的闭半空间之交（$\bigcap_{\varphi}\{x:\varphi(x)\le\sup_C\varphi\}$）

## 推论与应用
- **Mazur 定理**：赋范空间中凸集的范数闭包等于弱闭包（配合[[弱拓扑]]）
- 极小化问题的刻画：$x^*$ 极小化凸函数 $f$ 当且仅当 $0\in\partial f(x^*)$（次梯度）
- 对偶锥与对偶问题（Lagrange 对偶）的几何基础

## 后续
分离定理把几何直观变成分析工具，用于凸优化、博弈论（均衡存在性）、以及[[对偶空间（泛函分析）|对偶空间]]在约束理论中的应用。
