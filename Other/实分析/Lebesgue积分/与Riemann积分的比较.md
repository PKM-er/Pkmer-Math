---
tags:
  - 数学
dlink:
  - "[[---Lebesgue积分---]]"
  - "[[定积分]]"
  - "[[可测集]]"
aliases:
  - Lebesgue 判别
  - Riemann 可积性的 Lebesgue 判别
  - Lebesgue vs Riemann 积分
author:
  - DeepSeekV4Flash
---
微积分中的[[定积分]]（Riemann 积分）是最先学会的积分，但它对函数要求苛刻：函数须有界、不连续点不能"太多"，且极限交换依赖一致收敛。[[Lebesgue积分的定义|Lebesgue 积分]]是它的推广，两者关系由 **Lebesgue 判别**精确刻画：Riemann 可积 ⟺ 有界且不连续点集为零测集。需先掌握[[Lebesgue积分的定义]]、[[可测集]]（零测集概念）与[[几乎处处]]。

## Riemann 可积 ⟹ Lebesgue 可积
闭区间 $[a,b]$ 上有界的 Riemann 可积函数 $f$ 必 Lebesgue 可积，且积分值相等：

$$
\int_a^b f(x)\,dx = \int_{[a,b]} f\,dm
$$

这是 Lebesgue 积分作为 Riemann 积分**推广**的精确含义：旧积分不丢，新积分更多。反之不成立（见下）。

## Lebesgue 判别
设 $f$ 在 $[a,b]$ 上有界，$D_f$ 为 $f$ 的不连续点集。则 $f$ Riemann 可积当且仅当

$$
m(D_f) = 0
$$

即不连续点构成**零测集**。证明思路：Riemann 和的上、下和之差由振荡 $\omega_f(x)$ 控制；$f$ Riemann 可积当且仅当对每个 $\varepsilon>0$，$\omega_f(x)\ge\varepsilon$ 的点集可被总长度任意小的区间覆盖，等价于 $D_f$ 零测（见[[可测集]]）。

### 直接推论
- [[连续性|连续函数]]在闭区间上必 Riemann 可积（$D_f=\varnothing$）。
- 只有可数个不连续点（如阶梯函数、单调函数）的函数必 Riemann 可积——可数个点构成零测集。
- Riemann 可积函数必[[几乎处处|几乎处处]]连续；反之"除零测集外连续"的有界函数必 Riemann 可积。

## Lebesgue 比 Riemann 多积了哪些函数
**Dirichlet 函数** $D(x)=\mathbf{1}_{\mathbb{Q}\cap[0,1]}(x)$：处处不连续，$D_f=[0,1]$ 测度为 $1$，Riemann 不可积；但 $D=0$ [[几乎处处|a.e.]]，Lebesgue 积分为 $0$（见[[几乎处处]]中的例子）。

**Thomae 函数**（Riemann 函数）：$T(p/q)=1/q$（$p/q$ 既约）、$T(x)=0$（$x$ 无理）。不连续点集恰为 $\mathbb{Q}$，零测集，故 Riemann 可积且积分为 $0$——它显示"可积"远比"连续"宽松。

## 极限交换的差异
Riemann 积分换序需要一致收敛；Lebesgue 只需逐点收敛加控制（[[单调收敛定理]]、[[控制收敛定理]]）。例：枚举 $[0,1]$ 中有理数 $r_1,r_2,\dots$，令 $f_n=\mathbf{1}_{\{r_1,\dots,r_n\}}$。每个 $f_n$ 只有有限个不连续点，Riemann 可积且积分为 $0$；但 $f_n\to D$ 逐点收敛，极限 Dirichlet 函数 Riemann 不可积——逐点极限破坏了 Riemann 可积性，Lebesgue 理论则用控制收敛定理直接处理。

## 反常积分：条件收敛 ≠ Lebesgue 可积
Lebesgue 积分本质上要求**绝对可积**：$f$ 可积 ⟺ $|f|$ 可积。因此条件收敛的反常积分不在 Lebesgue 可积范围内。例：

$$
\int_0^\infty \frac{\sin x}{x}\,dx = \frac{\pi}{2} \quad \text{（条件收敛），} \qquad \int_0^\infty \left|\frac{\sin x}{x}\right|\,dx = \infty
$$

$\sin x/x$ 是 Lebesgue 可测但不 Lebesgue 可积（见[[反常积分]]）。这说明两种"积分"各有边界：Lebesgue 积分换取的是极限定理与可积函数类的完备性（[[Lp空间的定义|$L^p$ 空间]]），代价是不再直接涵盖条件收敛的广义积分。

## 后续
与 Riemann 积分的比较是理解 Lebesgue 积分意义的入口：它解释了为何 $L^p$ 空间（[[Lp空间的定义]]）与概率期望可以建立在不完备的 Riemann 积分上——以及为何推广后极限交换（[[控制收敛定理]]）、重积分换序（[[Fubini定理]]）不再需要苛刻条件。Lebesgue 判别同时也是数值积分误差分析的理论背景。
