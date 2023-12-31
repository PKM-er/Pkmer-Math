# Pkmer-Math

基于Obsidian建立公开共享的数学知识库！
PKMer知识管理交流群(QQ): 825255377
PKMer-Math开发者交流群(QQ): 782017903

## 前言

本系列内容亦在用较为粗略和通俗的语言描述 梳理高等数学的主要内容, 整理为markdown文件, 使用Obsidian的双链语法将其互相连接, 构成一个Obsidian的数学知识库.
由于开发者精力有限, 会优先梳理通识部分大纲内容, 然后根据本人复习掌握情况和偏好决定哪些内容的补充, 如有内容疏漏错误 或欲共同开发者 请联系开发者, 加群, 或者提issue

## 内容主要来源:

1. 高等数学同济版
2. Wikipedia
3. Chatgpt
4. 开发者们的学识
5. [基于Obsidian的新型考研数学笔记原子分子树的构建](https://www.bilibili.com/video/BV1dp4y1d7NQ)

---
# 目录:
目录以树状图形式组织, 最上级为总目录[[-高等数学-]],
依次向下细分为[[--微积分--]], [[--线性代数--]], [[--概率论--]]等具体学科分支, 
再下一级为章节, 
最下级为具体的词条, 文章等
如下所示: 

[[-高等数学-]]
	[[--微积分--]]
		极限
		导数与微分
		...
	[[--线性代数--]]
		行列式
		矩阵
		...
	[[--概率论--]]
	...
	


---
# 关于合作开发

本项目在GitHub开源，为了更好地进行和合作开发，计划在此做一些教程和规范

## 开发原则
1. 尽可能简洁, 让人能够快速理解
2. 对自己写的东西的正确性负责, 多改几次也没有关系
3. 

## 规范

所有词条都要按顺序添加上级目录的双链, 如:
积分表属于微积分的不定积分章节, 则需要添加名为dlink的property, 类型为list, 
值要依次添加--高等数学--, 微积分, 不定积分, 共计三项
如果是时间来不及则先将文件放到对应的文件夹下, 有时间再做整理

## 准备条件
大致分为几个部分: 
1. 如果在国内需要首先解决科学问题
2. 确保你要有个GitHub账号
3. 向开发者申请权限，有权限才能提交修改
4. 安装Git命令行工具
5. 在Obsidian配置Obsidian Git插件设置
6. 从GitHub第一次拉取项目， 使用clone命令

## Obsidian Git(Git插件)
对新手来说命令行太抽象了, 所以我建议在本项目使用Obsidian第三方git插件: **Obsidian Git**
1. 在Commit Author中设置好自己的Github账号
2. `ctrl+p`输入`obsidian git open source control view` 打开Obsidian Git工具的GUI界面, 在此GUI界面点按钮就行

## 开发步骤
分为拉取同步，提交修改, 推送，冲突处理等
### 1. 拉取(Pull)
从GitHub拉取(pull)别人的修改
### 2. 提交(commit)
将你的修改提交到GitHub
### 3. 推送(Push)
本地的多个修改保存后
### 4. 冲突处理
这个比较麻烦, 日后有空再写, 简单说一下就是如果发生了冲突就是你本地文件新改动的某行和其他人新改动并提交到云端的这行不一样, 你们又都是从同一个版本衍生来的, 所以合并冲突就是你们商量怎么改动, 商量好了你先把你的改动保存下来然后放弃自己的改动, 从云端拉取他人的改动, 你在他的新改动的基础上再做修改

上述提到的**修改**指的是 文件以及文本内容的增删改, 而文本内容的增删改是以行为单位进行的




---
# 一些技术经验

## 合并分支

如果有多个分支需要合并, 以下是合并步骤:

1. 首先切换到自己主要开发的分支, 比如我在main开发, 就先切换到master
2. 执行命令 `git pull origin master` 将master合并到main (大概吧,我也没太搞懂谁合并到谁= =)
3. 解决冲突, 这个如果有的话比较麻烦, 没有就不管
4. 将合并后的内容推送到指定分支main,  `git push origin master` 

## 子模块

对于不想在整个项目中开发, 想在自己的项目中开发的情况, 可以创建子模块: 

```cmd
cd "Pkmer-Math路径"
git submodule add "你的项目下的Math文件夹" Math

git submodule update --init

```

~~不再用子模块了, 子模块的更改不能在父项目直接提交~~
~~不过仍然可以将此项目引入你的项目当作子模块，只是需要单独对子目录拉取更新~~

现在可以使用子模块了, 按照上述步骤正常操作即可. 

## .gitignore构建

由于每个人的配置都不一样, 个人可能有需要用到某些插件和主题外观, 所以如有必要请使用.gitignore根据自己的情况来配置, 如果什么额外的插件都不用, 则不用管

```.gitignore
# 首先排除自己, 因为每个人情况不一样,单独配置
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
