# Referans logoları

Bu klasöre **PNG** (veya JPG, WebP, SVG) formatında müşteri logolarını ekleyin. Dosya adı sitede görünen isim için kullanılır.

## Örnek

```
references/
  Altunkaya.png
  roketsan.png
  Toyota.png
  ToyotaBoshoku.jpg
  Yazaki.png
  yeni-musteri.png   ← eklediğinizde otomatik listelenir
```

## Kurallar

- Tercih: şeffaf arka planlı PNG
- Dosya adı: küçük harf veya PascalCase (ör. `acme-sirket.png`, `Toyota.png`)
- `README.md` ve gizli dosyalar (`.`) listelenmez

## Geliştirme

Logo ekledikten sonra sayfayı yenileyin (`npm run dev` çalışırken).

## Canlı site

Logolar repoda bu klasöre commit edilip deploy edildiğinde yayına alınır.
