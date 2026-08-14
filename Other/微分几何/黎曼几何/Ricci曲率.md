---
tags:
  - 数学
dlink:
  - "[[---黎曼几何---]]"
  - "[[黎曼曲率张量]]"
  - "[[数量曲率]]"
aliases:
  - Ricci curvature
  - リッチ曲率
author:
  - DeepSeekV4Flash
---

截面曲率太多时，沿每个方向求平均就得到 **Ricci 曲率**：它刻画"沿某个方向的小球体积如何被曲率改变"，是联系几何与分析（体积比较）以及广义相对论的关键量。

需先掌握[[黎曼曲率张量]]与[[截面曲率]]。

## 定义
**Ricci 张量**是黎曼曲率张量的迹：
$$\operatorname{Ric}(X,Y)=\operatorname{tr}\big(Z\mapsto R(Z,X)Y\big)$$
对规范正交基 $\{e_1,\dots,e_n\}$：
$$\operatorname{Ric}(X,Y)=\sum_{i=1}^n g(R(e_i,X)Y,e_i)$$
坐标分量 $\operatorname{Ric}_{ij}=R^k{}_{ikj}$。

## 性质
- 对称：$\operatorname{Ric}(X,Y)=\operatorname{Ric}(Y,X)$（$(0,2)$ 型对称张量）
- 平均解释：对单位向量 $v$，$\operatorname{Ric}(v,v)=\sum_{i=2}^n K(v,e_i)$，即含 $v$ 的二维平面截面曲率之和
- 爱因斯坦流形：$\operatorname{Ric}=\lambda g$（$\lambda$ 常数），如球面、双曲空间

## 示例
- 单位球面 $S^n$：$\operatorname{Ric}=(n-1)g$
- 双曲空间 $\mathbb{H}^n$：$\operatorname{Ric}=-(n-1)g$
- 平坦空间：$\operatorname{Ric}=0$

## 应用
- 体积比较：$\operatorname{Ric}\ge 0$ 时小测地球体积不超过欧氏球（体积比较定理）
- Bonnet–Myers 定理：$\operatorname{Ric}\ge (n-1)k>0$ 推出直径 $\le \pi/\sqrt{k}$，流形紧
- 广义相对论：爱因斯坦场方程以 Ricci 张量为核心（见[[数量曲率]]）
