# Generates MP3 voice-overs with ElevenLabs from textes.json (same texts as the Azure script).
# Usage (PowerShell):
#   $env:ELEVENLABS_API_KEY = "<key>"; $env:ELEVENLABS_VOICE_ID = "<voice id>"
#   .\generate-voices-elevenlabs.ps1
# The key is read from the environment only. Never store it in the project.
# Keep this file ASCII-only (Windows PowerShell 5.1 reads BOM-less files as ANSI).

param(
  [string]$Config = (Join-Path $PSScriptRoot "textes.json"),
  [string]$OutDir = (Join-Path $PSScriptRoot "..\audio")
)

$key = $env:ELEVENLABS_API_KEY
$voiceId = $env:ELEVENLABS_VOICE_ID
if (-not $key -or -not $voiceId) {
  throw "Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID environment variables first."
}

New-Item -ItemType Directory -Force $OutDir | Out-Null
$items = Get-Content $Config -Raw -Encoding UTF8 | ConvertFrom-Json
$uri = "https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128"

foreach ($it in $items) {
  $body = @{
    text           = $it.text
    model_id       = "eleven_multilingual_v2"
    voice_settings = @{ stability = 0.45; similarity_boost = 0.8; style = 0.4 }
  } | ConvertTo-Json -Depth 4
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($body)
  $out = Join-Path $OutDir $it.file
  Invoke-WebRequest -Uri $uri -Method Post -Headers @{ "xi-api-key" = $key } -ContentType "application/json" -Body $bytes -OutFile $out
  Write-Host "OK $($it.file)"
}
