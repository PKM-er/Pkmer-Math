---
tags:
  - 数学
dlink:
  - "[[---测度理论的应用---]]"
  - "[[绝对连续函数]]"
  - "[[分布函数]]"
aliases:
  - Radon–Nikodym Theorem
  - 拉东-尼科迪姆定理
  - R-N 定理
author:
  - DeepSeekV4Flash
---
Radon–Nikodym 定理回答"一个测度何时能由另一个测度的密度积分表示"：若 $\nu\ll\mu$（测度绝对连续）且两者 $\sigma$-有限，则存在可测函数 $f\ge0$ 使 $\nu(E)=\int_E f\,d\mu$。它把测度之间的"绝对连续"兑现为具体的密度函数，是概率密度、条件期望与统计推断的语言基础，也是泛函分析中[[Riesz表示定理]]类结论的共同来源。需先掌握[[测度的定义与性质]]、[[绝对连续函数]]与[[Lebesgue积分的定义]]。

## 定理
设 $(X,\mathcal{A})$ 为可测空间，$\mu,\nu$ 是 $\sigma$-有限测度且 $\nu\ll\mu$（即 $\mu(E)=0\Rightarrow\nu(E)=0$）。则存在唯一（$\mu$-几乎处处意义下）可测函数 $f:X\to[0,\infty)$，使

$$
\nu(E)=\int_E f\,d\mu,\qquad \forall E\in\mathcal{A}
$$

称 $f$ 为 $\nu$ 关于 $\mu$ 的 **Radon–Nikodym 导数**，记作 $f=\dfrac{d\nu}{d\mu}$。

## 要点
- **唯一性**：若 $f,g$ 均满足上式，则 $f=g$，$\mu$-a.e.。
- **链式法则**：若 $\lambda\ll\mu\ll\nu$，则 $\dfrac{d\lambda}{d\nu}=\dfrac{d\lambda}{d\mu}\,\dfrac{d\mu}{d\nu}$（$\nu$-a.e.）。
- **$\sigma$-有限不可省**：取 $X=[0,1]$，$\mu$ 为计数测度、$\nu$ 为 Lebesgue 测度。$\nu\ll\mu$ 显然（$\mu(E)=0\Rightarrow E=\varnothing$）；但若 $\nu(E)=\int_E f\,d\mu$，单点集给出 $0=\nu(\{x\})=\int_{\{x\}} f\,d\mu=f(x)$，迫使 $f\equiv0$，与 $\nu([0,1])=1$ 矛盾。这里 $\mu$ 不是 $\sigma$-有限的。
- **Lebesgue 分解定理**：对任意 $\sigma$-有限测度 $\nu,\mu$，可唯一分解 $\nu=\nu_{ac}+\nu_s$，其中 $\nu_{ac}\ll\mu$、$\nu_s\perp\mu$；$\nu_{ac}$ 正是由 $\dfrac{d\nu_{ac}}{d\mu}$ 给出的部分。
- **与实函数绝对连续的联系**：$[a,b]$ 上函数 $F$ 绝对连续 $\iff$ 其诱导的测度 $\nu_F((c,d])=F(d)-F(c)$ 关于 Lebesgue 测度绝对连续；此时 $\nu_F$ 的 R–N 导数恰为 $F'$，Lebesgue 形式的[[牛顿-莱布尼茨公式]]随之成立。

## 例
- 连续型随机变量的分布 $P_X$ 关于 Lebesgue 测度绝对连续，其 R–N 导数就是概率密度（见[[分布函数]]）。
- 离散与连续混合的分布整体上没有密度：按 Lebesgue 分解，离散部分关于计数测度、连续部分关于 Lebesgue 测度，需分别处理。

## 应用
- 概率论：条件期望的存在性由 R–N 定理保证；密度、似然比与统计推断都建立在其上。
- 泛函分析：$L^p$ 空间对偶的[[Riesz表示定理]]、金融数学中的等价鞅测度（Girsanov 定理）均依赖它。
- 测度论：测度的 Lebesgue 分解与[[有界变差函数]]的 Jordan 分解。

## 后续
Radon–Nikodym 定理是条件期望、$L^p$ 对偶理论与概率测度变换的基石，与[[Fubini定理]]并列为测度理论应用方向最核心的定理。