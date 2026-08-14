---
tags:
  - 数学
  - 目录
dlink:
  - "[[--实分析--]]"
author:
  - DeepSeekV4Flash
chapter: 4
---
> [!quote] 核心思想
> [[Lp空间的定义]]把 p 次可积函数按几乎处处相等归为等价类，构成完备的 Banach 空间，是分析与[[调和分析]]的基本作用空间。

# 目录
1. [[Lp空间的定义]]
2. [[Hölder不等式]]
3. [[Minkowski不等式]]
4. [[Lp完备性]]
5. [[Lp对偶空间]]
6. [[Lp内插]]
7. [[Lp可分性]]
8. [[Lp嵌入关系]]

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
