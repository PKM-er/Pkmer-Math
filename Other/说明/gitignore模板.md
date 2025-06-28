# Gitignore 模板

这是一个通用的 .gitignore 文件模板，适用于大多数情况。将此内容保存为 `.gitignore` 放在根目录下, 根据需求自定义规则, 可以根据需要自定义此文件，无需同步到仓库

```gitignore
# 排除自己, 必须添加此项!  
.gitignore

# 同步.obsidian文件夹下指定的子文件夹,名称前加"!", 这些插件都暂时没有用到, 将来找机会剔除
.obsidian/*   # 不同步obsidian所有配置项
.obsidian/app.json
!.obsidian/appearance.json   # 在不同步所有配置的前提下,需要同步的反例加上!
.obsidian/bookmarks.json
!.obsidian/community-plugins.json
!.obsidian/core-plugins.json
!.obsidian/graph.json
!.obsidian/hotkeys.json
.obsidian/graph.json
.obsidian/types.json
.obsidian/workspace.json


!.obsidian/snippets
!.obsidian/plugins/*
!.obsidian/plugins/dataview
!.obsidian/plugins/templater-obsidian
# !.obsidian/plugins/obsidian-git/
# !.obsidian/plugins/obsidian-linter/
!.obsidian/plugins/quickadd/
# !.obsidian/plugins/obsidian-outliner/
# !.obsidian/plugins/table-editor-obsidian/
# !.obsidian/plugins/obsidian-latex-suite/


# assert文件夹
# _assets_/*
_assets_/草稿


# 其他ob相关文件夹
.history
.trash

# 针对Mac系统的忽略
.DS_Store

# 子模块相关, 暂时没有用到
.gitmodules

# vscode配置文件夹
.vscode

# node_modules文件夹
node_modules

# package.json和包锁文件
package.json
package-lock.json

# mcp相关
*mcp*

# 日志文件
*.log
```
