---
tags:
  - 数学
  - 目录
dlink:
  - "[[--泛函分析--]]"
author:
  - DeepSeekV4Flash
chapter: 9
---

> [!quote] 核心思想
> 把"函数光滑到何种程度"量化成可测的条件，正是 Sobolev 空间的出发点：[[弱导数]]把经典导数推广到可积函数，[[Sobolev空间的定义]]由此成为带有弱导数的 $L^p$ 函数全体。[[磨光算子]]保证光滑函数稠密，[[Sobolev不等式]]与[[Sobolev嵌入定理]]回答"导数能控制多少可积性与正则性"，[[Rellich–Kondrachov紧嵌入]]与[[Poincaré不等式]]是变分法的核心工具，[[迹定理]]处理边界取值，最终导向偏微分方程的[[弱解（偏微分方程）|弱解]]理论。

# 目录
1. [[弱导数]]
2. [[Sobolev空间的定义]]
3. [[Sobolev空间的例子]]
4. [[Sobolev空间的基本性质]]
5. [[磨光算子]]
6. [[Sobolev不等式]]
7. [[Sobolev嵌入定理]]
8. [[Rellich–Kondrachov紧嵌入]]
9. [[Poincaré不等式]]
10. [[迹定理]]
11. [[弱解（偏微分方程）]]

# 自动索引

```base
filters:
  and:
    - file.name != this.file.name
    - or:
        - file.folder == this.file.folder
        - 'file.hasProperty("dlink") && dlink.contains(this.file.name)'
views:
  - type: list
	name: 列表
```

# 孤立笔记

```base
filters:
  and:
    - file.folder == this.file.folder
    - file.name != this.file.name
    - or:
        - '!file.hasProperty("dlink")'
        - '!dlink.contains(this)'
views:
  - type: list
	name: 列表
```
