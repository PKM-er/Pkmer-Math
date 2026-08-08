---
tags:
  - 数学
dlink:
  - "[[---参数估计---]]"
author:
  - Cyletix
chapter: 7
---
bootstrap 方法是一种基于**重抽样**的统计推断方法，通过对原始样本进行有放回的重抽样来估计统计量的分布。

## 分类

- **非参数 bootstrap**：直接从原始样本中重抽样，不依赖分布假设
- **参数 bootstrap**：先估计总体参数，再从参数模型中生成新样本

## 基本步骤

1. 从原始样本 $\{x_1, \dots, x_n\}$ 中有放回地抽取 $B$ 个容量为 $n$ 的 bootstrap 样本
2. 对每个 bootstrap 样本计算感兴趣的统计量 $\hat{\theta}_b^*$
3. 用 $B$ 个 $\hat{\theta}_b^*$ 的经验分布逼近 $\hat{\theta}$ 的真实抽样分布

## 应用

- 估计标准误差：$SE(\hat{\theta}) \approx \sqrt{\frac{1}{B-1} \sum_{b=1}^B (\hat{\theta}_b^* - \bar{\theta}^*)^2}$
- 构造置信区间（分位数法、BCa 法等）
- 假设检验