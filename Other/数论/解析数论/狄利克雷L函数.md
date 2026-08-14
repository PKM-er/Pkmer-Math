---
tags:
  - 数学
dlink:
  - "[[--解析数论--]]"
  - "[[黎曼ζ函数]]"
  - "[[狄利克雷卷积]]"
aliases:
  - Dirichlet L-function
author:
  - DeepSeekV4Flash
---

狄利克雷L函数把[[黎曼ζ函数]]推广到算术级数，用于证明等差级数中的素数定理。

## 定义
设 $\chi$ 是模 $m$ 的**狄利克雷特征**，即完全积性函数 $(\mathbb{Z}/m\mathbb{Z})^\times \to \mathbb{C}^\times$（对 $\gcd(n,m)>1$ 约定 $\chi(n)=0$），则对 $\operatorname{Re} s > 1$，
$$L(s,\chi) = \sum_{n=1}^{\infty} \frac{\chi(n)}{n^s} = \prod_p \left(1 - \frac{\chi(p)}{p^s}\right)^{-1}$$

## 性质
- 主特征 $\chi_0$：$L(s,\chi_0) = \zeta(s)\displaystyle\prod_{p\mid m}\left(1-p^{-s}\right)$，在 $s=1$ 有简单极点
- 非主特征：$L(s,\chi)$ 在 $\operatorname{Re} s > 0$ 全纯，且 $L(1,\chi) \ne 0$
- **狄利克雷定理**：$\gcd(a,m) = 1$ 时，等差数列 $a,\ a+m,\ a+2m,\ \dots$ 含有无穷多个素数；证明核心正是 $L(1,\chi) \ne 0$

## 示例
模 $4$ 的非主特征：$\chi(1)=1$、$\chi(3)=-1$、其余为 $0$，则
$$L(1,\chi) = 1 - \frac13 + \frac15 - \frac17 + \cdots = \frac{\pi}{4} \ne 0$$
故形如 $4k+1$ 与 $4k+3$ 的素数都无穷多（前者如 $5,13,17,29$，后者如 $3,7,11,19$）。
