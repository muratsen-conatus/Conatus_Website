# Eğitim kataloğu — yeni içerik ekleme

Liste sayfasında tekil eğitimler ve gelişim programları **tek bölümde** birleşiktir. **Eğitim türü** filtresi: `tekil-egitim` / `gelisim-programi`.

| Tür | Açıklama | URL |
|-----|----------|-----|
| **Gelişim programı** | Birden fazla tekil eğitimin paketi (10 program) | `/egitim/program/{slug}` |
| **Tekil eğitim** | Bağımsız eğitim modülü | `/egitim/{slug}` |

Bileşen: `src/components/training/TrainingCatalogSection.tsx`

---

## Gelişim programı ekleme

1. `src/data/training/development-programs.ts` — yeni kayıt (`code`: CNTS601–CNTS610 serisi)
2. `messages/tr.json` ve `en.json` → `training.developmentPrograms.items.{id}` ve `detail.items.{id}`

---

## Tekil eğitim ekleme

Eğitim listesi, filtreler ve detay sayfaları üç adımda genişletilir.

## 1. Katalog kaydı

`src/data/training/courses.ts` dosyasındaki `trainingCourses` dizisine yeni bir nesne ekleyin:

```ts
{
  id: "yeni-egitim-slug",        // URL: /tr/egitim/yeni-egitim-slug
  code: "CNTS111",
  illustration: "lean-mindset",  // TrainingIllustrationId — aşağıdaki listeden
  durationDays: 1,               // 0.5 = yarım gün
  maxParticipants: 16,
  kategori: ["yalin-101"],
  sistem: ["uretim-sistemleri"],
  katilimci: ["operasyon"],
  ortam: ["yuz-yuze"],
  yontem: [],
}
```

**Illustration seçenekleri:** `lean-mindset`, `lean-systems`, `process-cycle`, `analytics`, `improvement`, `team-leadership`, `awareness`

Yeni bir çizim stili gerekiyorsa `src/components/training/TrainingIllustration.tsx` içine variant ekleyin.

## 2. Kart metinleri (liste)

`messages/tr.json` ve `messages/en.json`:

```json
"training": {
  "catalog": {
    "items": {
      "yeni-egitim-slug": {
        "title": "...",
        "description": "..."
      }
    }
  }
}
```

## 3. Detay sayfası metinleri

Aynı dosyalarda `training.detail.items.{slug}`:

```json
"tagline": "...",
"intro": "...",
"content": ["...", "..."],
"outcomes": ["..."],
"audience": ["..."],
"certification": ["..."]
```

Bölüm başlıkları `training.detail.sections` altında ortaktır; sadece madde listeleri eğitime özeldir.

## Otomatik davranış

- Slug, `generateStaticParams` ile statik sayfa üretilir.
- Filtreler `kategori`, `sistem`, `katilimci`, `ortam`, `yontem` alanlarından okunur.
- Liste sayfasında sayfalama `TRAINING_PAGE_SIZE` (varsayılan 9) ile `src/lib/training-catalog.ts` içinden ayarlanır.

## Kontrol listesi

- [ ] `courses.ts` kaydı
- [ ] TR + EN `catalog.items`
- [ ] TR + EN `detail.items`
- [ ] `npm run build` veya `/tr/egitim` ve `/tr/egitim/{slug}` önizlemesi
