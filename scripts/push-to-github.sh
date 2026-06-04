#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GH="$ROOT/.tools/gh_2.69.0_macOS_arm64/bin/gh"

cd "$ROOT"

if [[ ! -x "$GH" ]]; then
  echo "GitHub CLI bulunamadı. DEPLOY.md içindeki kurulum adımlarına bakın."
  exit 1
fi

if ! "$GH" auth status &>/dev/null; then
  echo "GitHub'a giriş yapılıyor (tarayıcı açılacak)..."
  "$GH" auth login -h github.com -p ssh -s repo,read:org -w
fi

git remote set-url origin git@github.com:senmuratsen/Conatus_Website.git

if git ls-remote origin &>/dev/null 2>&1; then
  echo "Remote mevcut, push ediliyor..."
  git push -u origin main
else
  echo "Repo oluşturuluyor ve push ediliyor..."
  "$GH" repo create Conatus_Website --private --source=. --remote=origin --push
fi

echo "Tamam: https://github.com/senmuratsen/Conatus_Website"
