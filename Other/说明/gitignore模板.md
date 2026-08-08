---
tags:
  - 规则
---
# .gitignore 说明

本仓库 `.gitignore` 只需一行排除 `.obsidian/`，不再追踪任何个人配置。

```gitignore
# 个人 Obsidian 配置一律不上传
.obsidian/
```

## 为什么只用一行？

- **个人配置（主题/快捷键/插件列表）人人不同**，同步到仓库只会造成冲突
- 默认配置将单独打包，需要的自行下载导入
- 普通人克隆仓库直接用自己本地的 Obsidian 配置，零冲突

## 如果你需要排除其他本地文件

不要改仓库的 `.gitignore`，使用 Git 本地排除文件：

```bash
# 编辑 .git/info/exclude（仅对你本地生效，不会提交到仓库）
# 例如排除你个人的笔记草稿
echo "我的草稿/"" >> .git/info/exclude
```

## 如果你是本仓库维护者

`.gitignore` 受 `CODEOWNERS` 保护，任何 PR 修改必须经过 @Cyletix 审批。
