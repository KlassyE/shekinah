$dir = Join-Path (Get-Location).Path 'public\site-assets\uploads\gallery\2'
$big = Get-ChildItem $dir -File | Where-Object { $_.Extension -match '(?i)\.(jpg|jpeg|heic|png)$' -and $_.Length -gt 600KB }
$big | ForEach-Object { '{0,8:N0} KB  {1}' -f ($_.Length/1KB), $_.Name }
'COUNT: {0}   FREED: {1:N1} MB' -f $big.Count, (($big | Measure-Object Length -Sum).Sum/1MB)
