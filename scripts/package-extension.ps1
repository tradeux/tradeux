param(
  [string]$OutputDirectory = ""
)

$ErrorActionPreference = "Stop"
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$manifest = Get-Content -Raw (Join-Path $projectRoot "manifest.json") | ConvertFrom-Json
$version = [string]$manifest.version

if (-not $OutputDirectory) {
  $workerRoot = Join-Path (Split-Path -Parent $projectRoot) "TradeStylerWork"
  if (-not (Test-Path -LiteralPath $workerRoot -PathType Container)) {
    throw "TradeStylerWork was not found beside the extension at $workerRoot"
  }
  $OutputDirectory = Join-Path $workerRoot "release"
}

$outputRoot = [System.IO.Path]::GetFullPath($OutputDirectory)
New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null
$zipPath = Join-Path $outputRoot "poe-tradeux-$version.zip"

$tempParent = Join-Path $outputRoot ".package-staging"
New-Item -ItemType Directory -Path $tempParent -Force | Out-Null
$tempRoot = Join-Path $tempParent ("poe-tradeux-package-" + [guid]::NewGuid().ToString("N"))
$resolvedTempRoot = [System.IO.Path]::GetFullPath($tempRoot)
$resolvedTempParent = [System.IO.Path]::GetFullPath($tempParent)
if (
  -not $resolvedTempRoot.StartsWith(($resolvedTempParent + [System.IO.Path]::DirectorySeparatorChar), [System.StringComparison]::OrdinalIgnoreCase) -or
  -not ([System.IO.Path]::GetFileName($resolvedTempRoot)).StartsWith("poe-tradeux-package-", [System.StringComparison]::Ordinal)
) {
  throw "Refusing to use an unexpected temporary package path: $resolvedTempRoot"
}

$runtimeFiles = @(
  "manifest.json",
  "dist/content.js",
  "src/styler.js",
  "src/content.css",
  "src/poe2-bundled-icon-data.js",
  "src/poe2-corruption-data.js",
  "src/poe2-charm-data.js",
  "src/poe2-flask-data.js",
  "src/poe2-gem-data.js",
  "src/poe2-gear-data.js",
  "src/poe2-jewel-data.js",
  "src/poe2-waystone-data.js",
  "src/poe2-tablet-data.js",
  "src/poe2-unique-data.js"
)

function Copy-PackageFile([string]$RelativePath) {
  $sourcePath = Join-Path $projectRoot $RelativePath
  if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
    throw "Required extension file is missing: $RelativePath"
  }

  $destinationPath = Join-Path $resolvedTempRoot $RelativePath
  $destinationDirectory = Split-Path -Parent $destinationPath
  New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null
  Copy-Item -LiteralPath $sourcePath -Destination $destinationPath
}

try {
  New-Item -ItemType Directory -Path $resolvedTempRoot | Out-Null
  $runtimeFiles | ForEach-Object { Copy-PackageFile $_ }

  Get-ChildItem -LiteralPath (Join-Path $projectRoot "assets/icons") -File -Filter "icon-*.png" |
    ForEach-Object { Copy-PackageFile ("assets/icons/" + $_.Name) }
  Get-ChildItem -LiteralPath (Join-Path $projectRoot "assets/fonts") -File -Filter "*.ttf" |
    ForEach-Object { Copy-PackageFile ("assets/fonts/" + $_.Name) }
  Get-ChildItem -LiteralPath (Join-Path $projectRoot "assets/item-icons") -File -Filter "*.webp" |
    ForEach-Object { Copy-PackageFile ("assets/item-icons/" + $_.Name) }
  Get-ChildItem -LiteralPath (Join-Path $projectRoot "assets/ui") -File -Filter "*.png" |
    ForEach-Object { Copy-PackageFile ("assets/ui/" + $_.Name) }
  @(
    "arcane-sigil-v2.png",
    "corner-filigree-v2.png",
    "footer-crest-v2.png"
  ) | ForEach-Object { Copy-PackageFile ("assets/ui/frame/v2/" + $_) }

  Compress-Archive -Path (Join-Path $resolvedTempRoot "*") -DestinationPath $zipPath -CompressionLevel Optimal -Force
} finally {
  if (Test-Path -LiteralPath $resolvedTempRoot) {
    Remove-Item -LiteralPath $resolvedTempRoot -Recurse -Force
  }
  if ((Test-Path -LiteralPath $resolvedTempParent) -and -not (Get-ChildItem -LiteralPath $resolvedTempParent -Force)) {
    Remove-Item -LiteralPath $resolvedTempParent -Force
  }
}

$archive = Get-Item -LiteralPath $zipPath
[PSCustomObject]@{
  Path = $archive.FullName
  Bytes = $archive.Length
  Version = $version
}
