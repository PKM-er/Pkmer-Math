---
tags:
  - 数学
dlink:
  - "[[---Lp空间---]]"
  - "[[Lp空间的定义]]"
  - "[[Minkowski不等式]]"
  - "[[Fatou引理]]"
aliases:
  - Riesz-Fischer 定理
  - Riesz–Fischer theorem
author:
  - DeepSeekV4Flash
---
分析中的极限运算要求空间"封闭"：$L^p$ 中每个 Cauchy 序列都必须收敛到 $L^p$ 内的函数，否则逐点逼近的极限可能逃出空间。Riesz–Fischer 定理保证了这一点（$1\le p<\infty$），使 $L^p$ 成为 Banach 空间，也让级数理论、不动点论证可以安全地进行。需先掌握[[Lp空间的定义]]、[[Minkowski不等式]]与[[Fatou引理]]。

## 定理（Riesz–Fischer）
设 $(X,\mathcal A,\mu)$ 为测度空间，$1\le p<\infty$，则 $L^p(\mu)$ 按范数 $\|\cdot\|_p$ 完备：每个 Cauchy 序列都在 $L^p$ 中收敛。故 $L^p$ 是 Banach 空间；$p=2$ 时 $L^2$ 是 Hilbert 空间。

## 证明思路
取 Cauchy 序列 $\{f_n\}$ 的子列 $\{f_{n_k}\}$ 使 $\|f_{n_{k+1}}-f_{n_k}\|_p\le2^{-k}$，并令

$$
g=\sum_{k=1}^{\infty}|f_{n_{k+1}}-f_{n_k}|
$$

由[[Minkowski不等式]]的级数形式，$\|g\|_p\le\sum_k2^{-k}<\infty$，故 $g<\infty$ a.e.。于是

$$
f_{n_1}+\sum_{k=1}^{\infty}(f_{n_{k+1}}-f_{n_k})
$$

在 $X$ 上几乎处处绝对收敛，其 a.e. 极限记为 $f$（在发散点处补定义 $f=0$）。因 $|f|\le|f_{n_1}|+g\in L^p$，得 $f\in L^p$；又 $|f_{n_k}-f|\le g$ 对一切 $k$ 成立，由[[控制收敛定理]]（或 [[Fatou引理]]）得 $\|f_{n_k}-f\|_p\to0$。最后用标准 $\varepsilon/3$ 论证把子列的收敛传回整个 Cauchy 序列。

## 推论
- $L^p$ 中绝对收敛的级数收敛：若 $\sum_n\|f_n\|_p<\infty$，则 $\sum_n f_n$ 在 $L^p$ 中收敛。
- 完备性使压缩映射原理等不动点定理可在 $L^p$ 中直接使用，是偏微分方程与积分方程解的存在性论证的常规步骤。
- $p=\infty$ 时 $L^\infty$ 也完备，但证明依赖本质上确界与几乎处处一致收敛，与 $p<\infty$ 不同。

## 后续
$L^p$ 的完备性把它纳入 Banach 空间理论：可与[[完备性|泛函分析中的范数完备性]]衔接，$1<p<\infty$ 时对偶 $(L^p)'\cong L^q$（与[[Hölder不等式]]呼应），$L^2$ 的 Hilbert 空间结构则以[[Riesz表示定理]]等为代表。