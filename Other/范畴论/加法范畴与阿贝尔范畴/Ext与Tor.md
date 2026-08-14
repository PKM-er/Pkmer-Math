---
tags:
  - 数学
dlink:
  - "[[--加法范畴与阿贝尔范畴--]]"
  - "[[导出函子]]"
  - "[[函子的正合性]]"
aliases:
  - Ext Functor
  - Tor Functor
  - Ext と Tor
author:
  - DeepSeekV4Flash
---

$\mathrm{Hom}$ 与张量积都不精确：$\mathrm{Hom}$ 左正合、$\otimes$ 右正合。它们的高阶导出函子 $\mathrm{Ext}^n$ 与 $\mathrm{Tor}_n$ 分别度量"扩张"与"挠"，是同调代数中最常用的两个不变量。

需先掌握[[导出函子]]、[[函子的正合性]]与[[正合列]]。

## 定义
对环 $R$ 上的左模 $A,B$：
$$\mathrm{Ext}_R^n(A,B)=R^n\mathrm{Hom}_R(A,-)(B),\qquad \mathrm{Tor}^R_n(A,B)=L_n(A\otimes_R-)(B)$$
特别地 $\mathrm{Ext}^0_R(A,B)=\mathrm{Hom}_R(A,B)$，$\mathrm{Tor}^R_0(A,B)=A\otimes_R B$。

## 性质
- $\mathrm{Ext}^1_R(A,B)$ 一一对应于 $B$ 被 $A$ 扩张的等价类 $0\to B\to E\to A\to 0$——把"扩张问题"代数化
- $\mathrm{Tor}^R_1(N,-)=0$ 对所有变元 $\iff$ $N$ 平坦（$-\otimes_R N$ 正合，见[[函子的正合性]]）
- 沿短正合列给出长正合序列（$\mathrm{Ext}$ 对第二变元，$\mathrm{Tor}$ 对两个变元）

## 例子
- 对 $\mathbb{Z}$-模：$\mathrm{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/n,\mathbb{Z}/m)\cong\mathbb{Z}/\gcd(n,m)$，$\mathrm{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/n,\mathbb{Z}/m)\cong\mathbb{Z}/\gcd(n,m)$
- $\mathrm{Tor}_1^{\mathbb{Z}}(A,\mathbb{Q}/\mathbb{Z})$ 是 $A$ 的挠子群（$\mathbb{Q}/\mathbb{Z}$ 内射、可除）
- $\mathrm{Ext}_{\mathbb{Z}}^1(\mathbb{Z}/n,\mathbb{Z})\cong\mathbb{Z}/n$，由不分裂的短正合列 $0\to\mathbb{Z}\xrightarrow{\times n}\mathbb{Z}\to\mathbb{Z}/n\to 0$ 给出

## 应用
$\mathrm{Ext}$ 与 $\mathrm{Tor}$ 在代数拓扑（万有系数定理）、代数几何（$\mathrm{Ext}$ 层）、代数 $K$-理论与谱序列中无处不在；群上同调与层上同调都是 $\mathrm{Ext}$ 的特例（见[[导出函子]]）。
