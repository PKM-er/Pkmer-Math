# sync-from-library.ps1
# 一键同步: Library/Math → D:\GitHub\Math → GitHub upstream
# 自动处理新增/修改/删除，无需手工干预
#
# 用法: 在 D:\GitHub\Math 下运行 .\sync-from-library.ps1

$ErrorActionPreference = "Continue"
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

Write-Host "=== 1. fetch Library ===" -ForegroundColor Cyan
git fetch local-lib

Write-Host "`n=== 2. 检出白名单(增+改) ===" -ForegroundColor Cyan
git checkout local-lib/main -- @WHITELIST 2>&1 | Out-Null
Write-Host "  白名单内容已更新" -ForegroundColor Green

Write-Host "`n=== 3. 检测Library已删的文件 ===" -ForegroundColor Cyan
$deleted = @()
# 遍历D盘所有被git跟踪的文件(白名单内)
$tracked = @(git ls-files -- @WHITELIST 2>&1 | Where-Object { $_ })
foreach ($f in $tracked) {
    $inLib = git cat-file -e "local-lib/main`:$f" 2>$null
    if (-not $?) {
        $deleted += $f
        git rm -f $f 2>&1 | Out-Null
        Write-Host "  DEL: $f" -ForegroundColor Red
    }
}
if ($deleted.Count -eq 0) { Write-Host "  无需删除" -ForegroundColor Green }

Write-Host "`n=== 4. 提交推送 ===" -ForegroundColor Cyan
$stat = git status --porcelain
if (-not $stat) {
    Write-Host "  无变更，跳过" -ForegroundColor Green
    exit 0
}
git add -A
$msg = "sync: Library auto-sync ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
git commit -m $msg
git push upstream main

Write-Host "`n=== 完成 ===" -ForegroundColor Green
git --no-pager log --oneline -3

