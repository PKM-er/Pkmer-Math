> [!example] [[-高等数学-|总目录]]

> [!example]- 微积分
>```dataview
>list 
>from #数学
>where regexmatch("-.*-" ,file.name)
>and contains(file.path, "微积分")
>sort chapter
>```

> [!example]- 线性代数
>```dataview
>list 
>from #数学
>where regexmatch("-.*-" ,file.name)
>and contains(file.path, "线性代数")
>sort chapter
>```

> [!example]- 概率论
>```dataview
>list
>from #数学
>where regexmatch("-.*-" ,file.name)
>and contains(file.path, "概率论")
>sort chapter
>```

> [!note]+ 最近编辑
>```dataview
>table WITHOUT ID file.link AS "标题", file.mtime
>from #数学 and !"模板" and !"kanban"
>where regextest("(微积分|概率论|线性代数|Other)", file.path)
>sort file.mtime desc
>limit 16
>```

> [!todo]-
> ```dataview
> task
> where (contains(file.path,"_assets_/todo/")
> and !fullyCompleted)
> ```
>```dataview
>list
>from #数学 
>where finished=false
>```

> [!warning]- 同步冲突
> 
> ```dataview
> list
> WHERE regextest("conflict \d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}",file.name)
> ```

> [!tip]+ 参考
> - [[高等数学 第7版 上册 同济大学.pdf]]
> - [[高等数学 第7版 下册 同济大学.pdf]]
> - [[线性代数 第5版 同济大学.pdf]]
> - [[概率论与数理统计(浙大四版).pdf]]
>- [[Markdown数学公式]]
>- [[Callouts语法]]
>- [[WolframAlpha]]
>- [[公式编辑器]]

>[!quote] 名言
>人类对连续世界的三种基本抽象 
>**变化** × **结构** × **可能性**

