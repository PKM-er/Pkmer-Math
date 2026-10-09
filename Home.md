> [!example] [[-高等数学-|总目录]]

> [!example]- 微积分
> ```base
> filters:
>   and:
>     - file.hasTag("数学")
>     - file.name.startsWith("---")
>     - file.name.endsWith("---")
>     - file.path.contains("微积分")
> views:
>   - type: list
>     name: 列表
>     order:
>       - file.name
>     sort:
>       - property: chapter
>         direction: ASC
> ```

> [!example]- 线性代数
> ```base
> filters:
>   and:
>     - file.hasTag("数学")
>     - file.name.startsWith("---")
>     - file.name.endsWith("---")
>     - file.path.contains("线性代数")
> views:
>   - type: list
>     name: 列表
>     order:
>       - file.name
>     sort:
>       - property: chapter
>         direction: ASC
> ```

> [!example]- 概率论
> ```base
> filters:
>   and:
>     - file.hasTag("数学")
>     - file.name.startsWith("---")
>     - file.name.endsWith("---")
>     - file.path.contains("概率论")
> views:
>   - type: list
>     name: 列表
>     order:
>       - file.name
>     sort:
>       - property: chapter
>         direction: ASC
> ```

> [!danger]- [[-高等数学进阶-]]
> - [[--实分析--|实分析]]
> - [[拓扑学]]
> - [[--抽象代数--|抽象代数]]
> - [[--复分析--|复分析]]
> - [[数论]]
> - [[--偏微分方程--|偏微分方程]]
> - [[--积分变换--|积分变换]]
> - [[--微分几何--|微分几何]]
> - [[--泛函分析--|泛函分析]]
>   - [[---变分法---|变分法]]
> - [[--李群李代数--|李群李代数]]
> - [[范畴论]]

> [!note]+ 最近编辑
> ```base
> filters:
>   and:
>     - file.hasTag("数学")
>     - '!file.folder.contains("模板")'
>     - '!file.folder.contains("kanban")'
>     - /(微积分|概率论|线性代数|Other)/.matches(file.path)
> views:
>   - type: table
>     name: 列表
>     order:
>       - file.name
>       - file.mtime
>     sort:
>       - property: file.mtime
>         direction: DESC
>     limit: 16
> ```

> [!todo]-
> ```base
> filters:
>   and:
>     - file.hasTag("数学")
>     - finished == false
> views:
>   - type: list
>     name: 列表
> ```

> [!warning]- 同步冲突
> ```base
> filters:
>   - '/conflict \d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}/.matches(file.name)'
> views:
>   - type: list
> 	name: 列表
> ```

> [!tip]+ 参考
> - [[高等数学 第7版 上册 同济大学.pdf]]
> - [[高等数学 第7版 下册 同济大学.pdf]]
> - [[线性代数 第5版 同济大学.pdf]]
> - [[概率论与数理统计(浙大四版).pdf]]
> - [[Markdown数学公式]]
> - [[Callouts语法]]
> - [[WolframAlpha]]
> - [[公式编辑器]]

>[!quote] 名言
>人类对连续世界的三种基本抽象 
>**变化** × **结构** × **可能性**
