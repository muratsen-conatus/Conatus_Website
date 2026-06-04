#!/usr/bin/env bash
# Resend API anahtarını Vercel'e ekler ve production redeploy tetikler.
# Kullanım: ./scripts/add-resend-key.sh re_xxxxxxxx
set -euo pipefail

if [[ $# -lt 1 ]] || [[ -z "${1:-}" ]]; then
  echo "Kullanım: ./scripts/add-resend-key.sh re_YOUR_API_KEY"
  echo "Anahtar: https://resend.com/api-keys"
  exit 1
fi

KEY="$1"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

TOKEN=$(python3 -c "import json; print(json.load(open('$HOME/Library/Application Support/com.vercel.cli/auth.json'))['token'])")
BODY=$(KEY="$KEY" python3 -c 'import json,os; print(json.dumps({"key":"RESEND_API_KEY","value":os.environ["KEY"],"type":"encrypted","target":["production","preview","development"]}))')

ENV_ID=$(curl -sS "https://api.vercel.com/v9/projects/prj_zWihMWgFKYpXNJ9AdVpA5JFjekco/env?teamId=team_OcqBTXW89MneIfchu4MhQtyo" \
  -H "Authorization: Bearer $TOKEN" | python3 -c "import json,sys; print(next((e['id'] for e in json.load(sys.stdin).get('envs',[]) if e['key']=='RESEND_API_KEY'), ''))")

if [[ -n "$ENV_ID" ]]; then
  curl -sS -X PATCH "https://api.vercel.com/v9/projects/prj_zWihMWgFKYpXNJ9AdVpA5JFjekco/env/${ENV_ID}?teamId=team_OcqBTXW89MneIfchu4MhQtyo" \
    -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
    -d "$(KEY="$KEY" python3 -c 'import json,os; print(json.dumps({"value":os.environ["KEY"],"target":["production","preview","development"],"type":"encrypted"}))')" \
    | python3 -c "import json,sys; d=json.load(sys.stdin); print('RESEND_API_KEY güncellendi.' if d.get('key') else d)"
else
  curl -sS -X POST "https://api.vercel.com/v10/projects/prj_zWihMWgFKYpXNJ9AdVpA5JFjekco/env?teamId=team_OcqBTXW89MneIfchu4MhQtyo" \
    -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d "$BODY" \
    | python3 -c "import json,sys; d=json.load(sys.stdin); print('RESEND_API_KEY eklendi.' if d.get('created') else d)"
fi

echo "Production redeploy başlatılıyor..."
npx vercel@latest deploy --prod --yes --scope conatuscomtr

echo "Tamam. Formu test edin: https://conatus-website-omega.vercel.app/tr/iletisim"
