---
tags:
  - 数学
dlink:
  - "[[-高等数学-]]"
---
# 目录
```dataview
list 
from ""
where regexmatch("-.*-" ,file.name)
sort file.name desc
```

---
# 最近编辑
```dataview
table WITHOUT ID file.link AS "标题",file.mtime as "时间"
from !"模板" and !"kanban"
sort file.mtime desc
limit 8
```

---
# 网页工具
- [[WolframAlpha]]
- [[公式编辑器]]
