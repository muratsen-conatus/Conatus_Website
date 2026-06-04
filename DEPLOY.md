# Conatus Website — Yayınlama Rehberi

Production build yerelde başarılı (`npm run build`). Aşağıdaki adımlar GitHub + Vercel içindir.

## 1. GitHub SSH anahtarı (bir kez)

1. [github.com/settings/keys](https://github.com/settings/keys) → **New SSH key**
2. Title: `MacBook Conatus`
3. Key (aşağıdaki satırın tamamı):

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIO+7JyiJGVAbG//kuPegY2/Qmu65NPNXM43X2rwPsrtk 129887490+senmuratsen@users.noreply.github.com
```

4. **Add SSH key**

## 2. GitHub repo + push

Terminalde proje klasöründe:

```bash
cd /Users/muratsen/Documents/Conatus_Website

# GitHub CLI ile giriş (tarayıcı açılır, bir kez)
./.tools/gh_2.69.0_macOS_arm64/bin/gh auth login -h github.com -p ssh -s repo,read:org

# Repo oluştur ve push
./.tools/gh_2.69.0_macOS_arm64/bin/gh repo create Conatus_Website --private --source=. --remote=origin --push
```

Repo zaten varsa yalnızca:

```bash
git remote set-url origin git@github.com:senmuratsen/Conatus_Website.git
git push -u origin main
```

## 3. Vercel deploy ✅

Proje **Conatus** takımında yayında:

- **Canlı site:** https://conatus-website-omega.vercel.app
- **Panel:** https://vercel.com/conatuscomtr/conatus-website

**Environment Variables** (Vercel → Settings → Environment Variables, `.env.example`):

- `RESEND_API_KEY` — iletişim formu için (henüz eklenmediyse form çalışmaz)
- `CONTACT_TO_EMAIL` (opsiyonel)
- `RESEND_FROM_EMAIL` (opsiyonel)

Yerel deploy: `npx vercel deploy --prod --scope conatuscomtr`

## 4. Domain (DNS — Guzel Hosting)

Domainler Vercel projesine eklendi. **Guzel Hosting** DNS panelinde:

| Kayıt | Ad | Değer |
|--------|-----|--------|
| A | `@` (conatus.com.tr) | `76.76.21.21` |
| A | `www` | `76.76.21.21` |

Alternatif: nameserver’ları `ns1.vercel-dns.com` ve `ns2.vercel-dns.com` yapın (tüm DNS Vercel’de yönetilir).

DNS yayıldıktan sonra site `https://www.conatus.com.tr` üzerinden açılır.

## 5. Canlı kontrol

- `/` → `/tr` yönlendirmesi
- `/en` İngilizce sayfalar
- İletişim formu (Resend env değişkenleri tanımlı olmalı)
