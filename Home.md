> [!example] [[-高等数学-|总目录]]

> [!example]- 微积分
> ```base
> filters:
>   and:
>     - file.hasTag("数学")
>     - file.name.startsWith("-")
>     - file.name.endsWith("-")
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
>     - file.name.startsWith("-")
>     - file.name.endsWith("-")
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
>     - file.name.startsWith("--")
>     - file.name.endsWith("--")
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
> - [[--复分析--|复分析]]
> - [[拓扑学]]
> - [[--微分几何--|微分几何]]
> - [[--偏微分方程--|偏微分方程]]
> - [[--泛函分析--|泛函分析]]
> - [[--抽象代数--|抽象代数]]
> - [[数论]]
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
> - [[Other/pdf参考资料/高等数学 第7版 上册 同济大学.pdf]]
> - [[Other/pdf参考资料/高等数学 第7版 下册 同济大学.pdf]]
> - [[Other/pdf参考资料/线性代数 第5版 同济大学.pdf]]
> - [[Other/pdf参考资料/概率论与数理统计(浙大四版).pdf]]
> - [[Markdown数学公式]]
> - [[_assets_/Callouts/Callouts语法|Callouts语法]]
> - [[_assets_/WolframAlpha|WolframAlpha]]
> - [[_assets_/公式编辑器|公式编辑器]]

>[!quote] 名言
>人类对连续世界的三种基本抽象 
>**变化** × **结构** × **可能性**
