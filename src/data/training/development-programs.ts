/**
 * Kurumsal gelişim programları — birden fazla tekil eğitimin bir araya getirildiği paketler
 *
 * Yeni program eklemek için:
 * 1. Bu dosyaya kayıt ekleyin
 * 2. messages → training.developmentPrograms.items.{id} ve detail.items.{id}
 *
 * @see docs/training-catalog.md
 */

import type { TrainingIllustrationId } from "@/data/training/courses";

export type DevelopmentProgramAudience = "ofis" | "operasyon";

export type DevelopmentProgramCategory =
  | "yalin-101"
  | "sistem"
  | "teknik"
  | "liderlik"
  | "kisisel-gelisim";

export type DevelopmentProgram = {
  /** URL slug — `/egitim/program/[id]` */
  id: string;
  /** Program kodu — kart ve detay başlığında (örn. CNTS601) */
  code: string;
  audience: DevelopmentProgramAudience;
  category: DevelopmentProgramCategory;
  illustration: TrainingIllustrationId;
  /** Programı oluşturan tekil eğitim slug'ları */
  courseIds: string[];
};

export const developmentPrograms: DevelopmentProgram[] = [
  {
    id: "ofis-yalin-101",
    code: "CNTS601",
    audience: "ofis",
    category: "yalin-101",
    illustration: "lean-mindset",
    courseIds: [
      "yalin-dusunce-felsefesi-egitimi",
      "yalin-sistemler-temel-egitimi",
      "puko-surec-yaklasimi-egitimi",
      "a3-raporlama-teknikleri-egitimi",
      "kaizen-problem-cozme-teknikleri-egitimi",
    ],
  },
  {
    id: "operasyon-yalin-101",
    code: "CNTS602",
    audience: "operasyon",
    category: "yalin-101",
    illustration: "lean-mindset",
    courseIds: [
      "isg-ve-cevre-bilinci-farkindalik-egitimi",
      "kalite-bilinci-farkindalik-egitimi",
      "maliyet-bilinci-farkindalik-egitimi",
      "ekipman-bakimi-farkindalik-egitimi",
    ],
  },
  {
    id: "ofis-sistem",
    code: "CNTS603",
    audience: "ofis",
    category: "sistem",
    illustration: "lean-systems",
    courseIds: [
      "yalin-sistemler-temel-egitimi",
      "puko-surec-yaklasimi-egitimi",
      "kaizen-problem-cozme-teknikleri-egitimi",
    ],
  },
  {
    id: "operasyon-sistem",
    code: "CNTS604",
    audience: "operasyon",
    category: "sistem",
    illustration: "lean-systems",
    courseIds: [
      "cnts109-uretim-farkindaligi-egitimi",
      "kalite-bilinci-farkindalik-egitimi",
      "maliyet-bilinci-farkindalik-egitimi",
    ],
  },
  {
    id: "ofis-teknik",
    code: "CNTS605",
    audience: "ofis",
    category: "teknik",
    illustration: "analytics",
    courseIds: [
      "a3-raporlama-teknikleri-egitimi",
      "puko-surec-yaklasimi-egitimi",
      "kaizen-problem-cozme-teknikleri-egitimi",
    ],
  },
  {
    id: "operasyon-teknik",
    code: "CNTS606",
    audience: "operasyon",
    category: "teknik",
    illustration: "analytics",
    courseIds: [
      "isg-ve-cevre-bilinci-farkindalik-egitimi",
      "ekipman-bakimi-farkindalik-egitimi",
      "kalite-bilinci-farkindalik-egitimi",
    ],
  },
  {
    id: "ofis-liderlik",
    code: "CNTS607",
    audience: "ofis",
    category: "liderlik",
    illustration: "team-leadership",
    courseIds: [
      "yalin-dusunce-felsefesi-egitimi",
      "kaizen-problem-cozme-teknikleri-egitimi",
    ],
  },
  {
    id: "operasyon-liderlik",
    code: "CNTS608",
    audience: "operasyon",
    category: "liderlik",
    illustration: "team-leadership",
    courseIds: ["cnts109-uretim-farkindaligi-egitimi"],
  },
  {
    id: "ofis-kisisel-gelisim",
    code: "CNTS609",
    audience: "ofis",
    category: "kisisel-gelisim",
    illustration: "improvement",
    courseIds: [
      "yalin-dusunce-felsefesi-egitimi",
      "a3-raporlama-teknikleri-egitimi",
    ],
  },
  {
    id: "operasyon-kisisel-gelisim",
    code: "CNTS610",
    audience: "operasyon",
    category: "kisisel-gelisim",
    illustration: "improvement",
    courseIds: [
      "isg-ve-cevre-bilinci-farkindalik-egitimi",
      "maliyet-bilinci-farkindalik-egitimi",
    ],
  },
];

export const developmentProgramIds = developmentPrograms.map((p) => p.id);

export type DevelopmentProgramId = (typeof developmentProgramIds)[number];

export const developmentProgramAudiences: DevelopmentProgramAudience[] = [
  "ofis",
  "operasyon",
];

export const developmentProgramCategories: DevelopmentProgramCategory[] = [
  "yalin-101",
  "sistem",
  "teknik",
  "liderlik",
  "kisisel-gelisim",
];
