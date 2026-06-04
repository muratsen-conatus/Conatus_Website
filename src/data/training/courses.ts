/**
 * Eğitim kataloğu — tek kaynak dosya
 *
 * Yeni eğitim eklemek için:
 * 1. Aşağıdaki diziye yeni bir `TrainingCourse` kaydı ekleyin (`id` = URL slug, örn. `yeni-egitim-adi`)
 * 2. `messages/tr.json` ve `messages/en.json` → `training.catalog.items.{id}` (kart)
 * 3. Aynı dosyalarda → `training.detail.items.{id}` (detay sayfası metinleri)
 * 4. `illustration` için `TrainingIllustrationId` listesinden bir görsel seçin
 *
 * @see docs/training-catalog.md
 */

export type TrainingIllustrationId =
  | "lean-mindset"
  | "lean-systems"
  | "process-cycle"
  | "analytics"
  | "improvement"
  | "team-leadership"
  | "awareness";

export type TrainingCourse = {
  /** URL slug — `/egitim/[id]` */
  id: string;
  code: string;
  illustration: TrainingIllustrationId;
  /** Örn. 1, 2 veya 0.5 */
  durationDays: number;
  maxParticipants: number;
  kategori: string[];
  sistem: string[];
  katilimci: string[];
  ortam: string[];
  yontem: string[];
};

export const trainingCourses: TrainingCourse[] = [
  {
    id: "yalin-dusunce-felsefesi-egitimi",
    code: "CNTS101",
    illustration: "lean-mindset",
    durationDays: 1,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: [
      "gelistirme-sistemleri",
      "satis-sistemleri",
      "uretim-sistemleri",
      "yonetim-sistemleri",
    ],
    katilimci: ["ofis"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "yalin-sistemler-temel-egitimi",
    code: "CNTS102",
    illustration: "lean-systems",
    durationDays: 1,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: [
      "gelistirme-sistemleri",
      "satis-sistemleri",
      "uretim-sistemleri",
      "yonetim-sistemleri",
    ],
    katilimci: ["ofis"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "puko-surec-yaklasimi-egitimi",
    code: "CNTS103",
    illustration: "process-cycle",
    durationDays: 1,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: [
      "gelistirme-sistemleri",
      "satis-sistemleri",
      "uretim-sistemleri",
      "yonetim-sistemleri",
    ],
    katilimci: ["ofis"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "a3-raporlama-teknikleri-egitimi",
    code: "CNTS104",
    illustration: "analytics",
    durationDays: 1,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: [
      "gelistirme-sistemleri",
      "satis-sistemleri",
      "uretim-sistemleri",
      "yonetim-sistemleri",
    ],
    katilimci: ["ofis"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "kaizen-problem-cozme-teknikleri-egitimi",
    code: "CNTS105",
    illustration: "improvement",
    durationDays: 2,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: [
      "gelistirme-sistemleri",
      "satis-sistemleri",
      "uretim-sistemleri",
      "yonetim-sistemleri",
    ],
    katilimci: ["ofis"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "cnts109-uretim-farkindaligi-egitimi",
    code: "CNTS106",
    illustration: "team-leadership",
    durationDays: 0.5,
    maxParticipants: 16,
    kategori: ["liderlik"],
    sistem: ["uretim-sistemleri"],
    katilimci: ["operasyon"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "isg-ve-cevre-bilinci-farkindalik-egitimi",
    code: "CNTS107",
    illustration: "awareness",
    durationDays: 0.5,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: ["uretim-sistemleri"],
    katilimci: ["operasyon"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "kalite-bilinci-farkindalik-egitimi",
    code: "CNTS108",
    illustration: "awareness",
    durationDays: 0.5,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: ["uretim-sistemleri"],
    katilimci: ["operasyon"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "maliyet-bilinci-farkindalik-egitimi",
    code: "CNTS109",
    illustration: "awareness",
    durationDays: 0.5,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: ["uretim-sistemleri"],
    katilimci: ["operasyon"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
  {
    id: "ekipman-bakimi-farkindalik-egitimi",
    code: "CNTS110",
    illustration: "awareness",
    durationDays: 0.5,
    maxParticipants: 16,
    kategori: ["yalin-101"],
    sistem: ["uretim-sistemleri"],
    katilimci: ["operasyon"],
    ortam: ["yuz-yuze"],
    yontem: [],
  },
];

export const trainingCourseIds = trainingCourses.map((c) => c.id);

export type TrainingCourseId = (typeof trainingCourseIds)[number];
