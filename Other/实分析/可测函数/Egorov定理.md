---
tags:
  - 数学
dlink:
  - "[[---可测函数---]]"
  - "[[几乎处处]]"
  - "[[控制收敛定理]]"
aliases:
  - Egorov's Theorem
  - 叶戈罗夫定理
author:
  - DeepSeekV4Flash
---
几乎处处收敛允许例外点随 $n$ 移动，这使"逐点极限与积分交换"不能直接进行。Egorov 定理说明：在有限测度集上，几乎处处收敛"几乎"是一致收敛——例外点可被压进任意小测度的集合。它把逐点收敛提升为一致收敛，是[[控制收敛定理]]与 Lusin 定理证明中的关键工具。需先掌握[[几乎处处]]与[[测度的定义与性质]]（上连续性）。

## 定理（Egorov）
设 $(X, \mathcal{A}, \mu)$ 为测度空间且 $\mu(X) < \infty$，$f_n, f$ 为几乎处处有限的[[可测函数的定义|可测函数]]，且 $f_n \to f$ 几乎处处。则对任意 $\delta > 0$，存在可测集 $E_\delta \subset X$ 使 $\mu(E_\delta) < \delta$，且 $f_n$ 在 $X \setminus E_\delta$ 上一致收敛于 $f$。

## 证明思路
固定 $k \in \mathbb{N}$，记 $A_{n,k} = \bigcup_{m \ge n} \{x : |f_m(x) - f(x)| \ge 1/k\}$。由 $f_n \to f$ a.e.，$A_{n,k}$ 随 $n$ 递减且 $\bigcap_n A_{n,k}$ 为零测集；由测度的[[测度的定义与性质|上连续性]]（$\mu(X) < \infty$）得 $\mu(A_{n,k}) \downarrow 0$。对每个 $k$ 取 $n_k$ 使 $\mu(A_{n_k,k}) < \delta/2^k$，令 $E_\delta = \bigcup_k A_{n_k,k}$，则 $\mu(E_\delta) < \delta$；在 $X \setminus E_\delta$ 上，对每个 $k$ 及所有 $m \ge n_k$ 有 $|f_m - f| < 1/k$，恰为一致收敛。

## 有限测度条件不可省
取 $X = \mathbb{R}$（Lebesgue 测度），$f_n = \mathbf{1}_{[n, n+1]}$。$f_n \to 0$ 逐点，但任意满足 $m(E) < 1$ 的集合 $E$ 都不能使 $f_n$ 在 $\mathbb{R} \setminus E$ 上一致收敛于 $0$：区间 $[n, n+1] \setminus E$ 的测度至少为 $1 - m(E) > 0$，对每个 $n$ 都非空。故 $\mu(X) < \infty$ 是本质条件。

## 推论
- 若 $\mu(X) < \infty$ 且 $f_n \to f$ a.e.，则 $f_n$ **近一致收敛**于 $f$：对任意 $\delta > 0$ 存在 $E_\delta$ 使 $f_n$ 在 $X \setminus E_\delta$ 上一致收敛。
- 若 $\mu(X) < \infty$，$f_n \to f$ a.e. 蕴含 $f_n$ **依测度收敛**：对任意 $\varepsilon > 0$，取 $k$ 使 $1/k < \varepsilon$，则当 $n \ge n_k$ 时 $\{x : |f_n - f| \ge \varepsilon\} \subseteq A_{n_k,k} \subseteq E_\delta$，故 $\mu\{|f_n - f| \ge \varepsilon\} < \delta$。

## 后续
Egorov 定理用于证明 Lusin 定理（可测函数在去掉小测度集后连续）与 Vitali 收敛定理（结合等度可积性给出无控制函数时的极限交换），也是[[控制收敛定理]]若干证明路径的组成部分；在概率论中它连接几乎必然收敛与依测度收敛两种模式。