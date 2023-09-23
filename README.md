# Pkmer-Math

基于Obsidian建立公开共享的数学知识库！
PKMer知识管理交流群(QQ): 825255377

## 前言

本系列内容亦在用较为粗略和通俗的语言描述 梳理高等数学的主要内容, 
由于开发者精力有限, 项目有烂尾和转手可能, 会优先梳理通识部分大纲内容, 然后根据本人复习掌握情况和偏好决定哪些内容的补充, 如有内容疏漏错误 或欲共同开发者 请联系开发者, 加群, 或者提issue

## 内容主要来源:

1. 高等数学同济版
2. Wikipedia
3. Chatgpt
4. 开发者们的学识

# 目录:

[[--高等数学--]]
	[[微积分]]
	[[线性代数]]
	[[概率论]]

# 一些技术经验

## 合并分支

如果有多个分支需要合并, 以下是合并步骤:

1. 首先切换到自己主要开发的分支, 比如我在main开发, 就先切换到master
2. 执行命令 `git pull origin master` 将master合并到main (大概吧,我也没太搞懂谁合并到谁= =)
3. 解决冲突, 这个如果有的话比较麻烦, 没有就不管
4. 将合并后的内容推送到指定分支main,  `git push origin master` 

## ~~子模块~~

~~对于不想在整个项目中开发, 想在自己的项目中开发的情况, 可以创建子模块: ~~

```cmd
cd "Pkmer-Math路径"
git submodule add "你的项目下的Math文件夹" Math

git submodule update --init

```

不再用子模块了, 子模块的更改不能在父项目直接提交
不过仍然可以将此项目引入你的项目当作子模块，只是需要单独对子目录拉取更新

## .gitignore构建

```.gitignore
# 首先排除自己, 每个人情况不一样,单独配置
.gitignore

# 同步.obsidian文件夹下指定的子文件夹, 这些插件都暂时没有用到, 将来找机会剔除
.obsidian/*
!.obsidian/plugins
.obsidian/plugins/*
!.obsidian/plugins/dataview/
!.obsidian/plugins/obsidian-git/
!.obsidian/plugins/obsidian-linter/
!.obsidian/plugins/quickadd/
!.obsidian/plugins/obsidian-outliner/
!.obsidian/plugins/table-editor-obsidian/
!.obsidian/plugins/obsidian-latex-suite/
!.obsidian/plugins/templater-obsidian
!.obsidian/app.json
!.obsidian/snippets

# 其他ob相关文件夹
.history
.trash

# 针对Mac系统的忽略
.DS_Store

# 子模块相关, 暂时没有用到
.gitmodules

# vscode配置文件夹
.vscode
```
