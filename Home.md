---
tags:
  - 数学
dlink:
  - "[[-高等数学-]]"
---
> [!example]+ 目录
>```dataview
>list 
>from ""
>where regexmatch("-.*-" ,file.name)
>sort file.name desc
>```

> [!note]+ 最近编辑
>```dataview
>table WITHOUT ID file.link AS "标题",file.mtime as "时间"
>from !"模板" and !"kanban"
>sort file.mtime desc
>limit 8
>```
>

> [!tip]+ 工具
>- [[Callouts Syntax]]
>- [[Markdown数学公式]]
>- [[Markdown数学公式_Callouts]]
>- [[Markdown数学公式_ArcherReilly]]
>- [[WolframAlpha]]
>- [[公式编辑器]]

>[!quote] 名言
>Mathematics requires a small dose, not of genius but of an imaginative freedom which, in a larger dose, would be insanity. -Angus K. Rodgers
>
>数学需要的不是天赋，而是少量的自由想象，但想象太过自由又会陷入疯狂。——安古斯·罗杰斯
