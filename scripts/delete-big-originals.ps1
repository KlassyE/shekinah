$dir = Join-Path (Get-Location).Path 'public\site-assets\uploads\gallery\2'
$big = Get-ChildItem $dir -File | Where-Object {
  $_.Extension -match '(?i)\.(jpg|jpeg|heic|png)$' -and $_.Length -gt 600KB
}
$freed = ($big | Measure-Object Length -Sum).Sum
$big | Remove-Item -Force
'DELETED: {0} files, {1:N1} MB freed' -f $big.Count, ($freed/1MB)
