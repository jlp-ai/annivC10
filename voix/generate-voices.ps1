# Generates MP3 voice-overs with Azure AI Speech (neural TTS) from textes.json.
# Usage (PowerShell):
#   $env:AZURE_SPEECH_KEY = "<key>"; $env:AZURE_SPEECH_REGION = "francecentral"
#   .\generate-voices.ps1
# The key is read from the environment only. Never store it in the project.
# Keep this file ASCII-only (Windows PowerShell 5.1 reads BOM-less files as ANSI).

param(
  [string]$Config = (Join-Path $PSScriptRoot "textes.json"),
  [string]$OutDir = (Join-Path $PSScriptRoot "..\audio")
)

$key = $env:AZURE_SPEECH_KEY
$region = $env:AZURE_SPEECH_REGION
if (-not $key -or -not $region) {
  throw "Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION environment variables first."
}

New-Item -ItemType Directory -Force $OutDir | Out-Null
$items = Get-Content $Config -Raw -Encoding UTF8 | ConvertFrom-Json
$uri = "https://$region.tts.speech.microsoft.com/cognitiveservices/v1"

foreach ($it in $items) {
  $text = [System.Security.SecurityElement]::Escape($it.text)
  $ssml = "<speak version='1.0' xml:lang='fr-FR'><voice name='$($it.voice)'><prosody rate='$($it.rate)'>$text</prosody></voice></speak>"
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($ssml)
  $headers = @{
    "Ocp-Apim-Subscription-Key" = $key
    "X-Microsoft-OutputFormat"  = "audio-24khz-96kbitrate-mono-mp3"
    "User-Agent"                = "escape-game-voices"
  }
  $out = Join-Path $OutDir $it.file
  Invoke-WebRequest -Uri $uri -Method Post -Headers $headers -ContentType "application/ssml+xml" -Body $bytes -OutFile $out
  Write-Host "OK $($it.file)"
}
