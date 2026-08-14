---
tags:
  - 数学
dlink:
  - "[[---巴拿赫代数---]]"
  - "[[Gelfand表示]]"
  - "[[伴随算子]]"
aliases:
  - C*-代数
  - C* 代数
  - C*-algebra
author:
  - DeepSeekV4Flash
---
在巴拿赫代数上加入"对合"（共轭转置/复共轭的抽象化）并要求范数满足 $C^*$ 恒等式，就得到 $C^*$ 代数。这一条额外公理使理论焕然一新：谱半径自动等于范数、交换情形完全由 Gelfand 表示分类（Gelfand–Naimark 定理），是算子代数与量子物理的数学基础。前置依赖：[[Gelfand表示]]、[[巴拿赫代数的定义]]、[[伴随算子]]。

> [!NOTE] $C^*$ 代数
> 带对合 $*$（满足 $(ab)^*=b^*a^*$、$(a^*)^*=a$、$(\lambda a)^*=\overline\lambda a^*$）的巴拿赫代数，若满足 **$C^*$ 恒等式**
> $$\lVert a^*a\rVert=\lVert a\rVert^2\qquad(\forall a),$$
> 则称为 $C^*$ 代数。$a^*=a$ 的元素称**自伴**（自共轭）。

## 基本性质
- **范数唯一性**：对合使谱半径公式退化，$r(a)=\lVert a\rVert$（$a$ 正规即 $a^*a=aa^*$ 时；见[[谱半径公式]]）
- 自伴元的谱是实数：$a=a^*\Rightarrow\sigma(a)\subseteq\mathbb{R}$
- 交换 $C^*$ 代数的 **Gelfand–Naimark 定理**：$A\cong C_0(\mathfrak{M}(A))$ 为等距 $*$-同构（$\widehat{a^*}=\overline{\widehat a}$）；含单位元时 $C(K)$
- **连续函数演算**：$a$ 正规时，$f\mapsto f(a)$ 从 $C(\sigma(a))$ 到 $A$ 是等距 $*$-同态（谱映射保持，见[[全纯函数演算]]）

## 例子
- $B(H)$：Hilbert 空间上有界算子全体，$*$ 为伴随，见[[伴随算子]]
- $C_0(X)$：局部紧空间上趋于零的连续函数，$*$ 为复共轭
- 紧算子代数 $\mathcal{K}(H)$：$B(H)$ 的闭理想，见[[紧算子的定义]]

## 后续
交换 $C^*$ 代数分类定理使"函数空间"成为研究对象本身；非交换 $C^*$ 代数经 GNS 构造嵌入 $B(H)$，是量子力学（可观测量=自伴算子）与 von Neumann 代数的出发点。
