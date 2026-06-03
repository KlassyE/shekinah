$root = Join-Path (Get-Location).Path 'dist'
Get-ChildItem -Recurse $root -File |
  Sort-Object Length -Descending |
  Select-Object -First 25 |
  ForEach-Object {
    '{0,8:N0} KB  {1}' -f ($_.Length / 1KB), $_.FullName.Replace($root + '\', '')
  }

$total = (Get-ChildItem -Recurse $root -File | Measure-Object Length -Sum).Sum
'TOTAL dist: {0:N1} MB' -f ($total / 1MB)
