# sync-from-library.ps1
# 一键同步: Library/Math → D:\GitHub\Math → GitHub upstream
# 自动处理: 新增 + 修改
# 不自动删除: 删除需在D盘手动 git rm（保护协作内容不被误删）
#
# 用法: 在 D:\GitHub\Math 下运行 .\sync-from-library.ps1

$ErrorActionPreference = "Stop"
Set-Location "D:\GitHub\Math"

$WHITELIST = @(
    "微积分", "概率论", "线性代数",
    "Other/初等数学", "Other/复分析", "Other/实分析",
    "Other/差分方程", "Other/抽象代数", "Other/偏微分方程",
    "Other/离散数学", "Other/李群李代数", "Other/说明",
    "Other/-高等数学-.md", "Other/-高等数学进阶-.md",
    "Other/--微分几何--.md", "Other/--泛函分析--.md",
    "Other/Lp范数.md", "Other/可加性.md", "Other/微分流形.md",
    "Other/拓扑学.md", "Other/数论.md", "Other/范畴论.md",
    "Other/数学基础概念模型.md",
    "Home.md", "README.md"
)

# 1. 先拉取云端最新（保护别人的提交不被覆盖）
Write-Host "=== 1/3 pull upstream ===" -ForegroundColor Cyan
git pull upstream main

# 2. fetch + checkout（Library → D盘，仅白名单）
Write-Host "`n=== 2/3 checkout Library ===" -ForegroundColor Cyan
git fetch local-lib
git checkout local-lib/main -- @WHITELIST

# 3. 提交推送
Write-Host "`n=== 3/3 commit & push ===" -ForegroundColor Cyan
if (-not (git status --porcelain)) {
    Write-Host "无变更" -ForegroundColor Green
    exit 0
}
git add -A
$msg = "sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $msg
git push upstream main

Write-Host "`n=== done ===" -ForegroundColor Green

