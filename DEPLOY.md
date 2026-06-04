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

## 3. Vercel deploy

1. [vercel.com](https://vercel.com) → GitHub ile giriş
2. **Add New Project** → `Conatus_Website`
3. Framework: Next.js (otomatik)
4. **Environment Variables** (`.env.example` dosyasına bakın):
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (opsiyonel)
   - `RESEND_FROM_EMAIL` (opsiyonel)
5. **Deploy**

## 4. Domain

Vercel → **Domains** → `conatus.com.tr` ve `www.conatus.com.tr`  
DNS kayıtlarını domain sağlayıcınızda Vercel’in verdiği değerlerle güncelleyin.

## 5. Canlı kontrol

- `/` → `/tr` yönlendirmesi
- `/en` İngilizce sayfalar
- İletişim formu (Resend env değişkenleri tanımlı olmalı)
