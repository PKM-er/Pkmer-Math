> [!example] [[-高等数学-|总目录]]

> [!example]- 微积分
>```dataview
>list 
>from ""
>where regexmatch("-.*-" ,file.name)
>and contains(file.path, "微积分")
>sort chapter
>```

> [!example]- 线性代数
>```dataview
>list 
>from ""
>where regexmatch("-.*-" ,file.name)
>and contains(file.path, "线性代数")
>sort chapter
>```

> [!example]- 概率论
>```dataview
>list
>where regexmatch("-.*-" ,file.name)
>and contains(file.path, "概率论")
>sort chapter
>```

> [!note]+ 最近编辑
>```dataview
>table WITHOUT ID file.link AS "标题", file.mtime
>from !"模板" and !"kanban"
>where contains(file.tags, "数学")
>sort file.mtime desc
>limit 16
>```

> [!todo]-
> ```dataview
> task
> where (contains(file.path,"_config_/todo/")
> and !fullyCompleted)
> ```
>```dataview
>list
>where  contains(file.tags, "数学") 
>and finished=false
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
>- [[Callouts Syntax]]
>- [[WolframAlpha]]
>- [[公式编辑器]]

>[!quote] 名言
>Mathematics requires a small dose, not of genius but of an imaginative freedom which, in a larger dose, would be insanity. -Angus K. Rodgers
>
>数学需要的不是天赋, 而是少量的自由想象, 但想象太过自由又会陷入疯狂. ——安古斯·罗杰斯
