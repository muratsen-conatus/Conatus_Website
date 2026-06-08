import type { ConsultingCaseKey } from "@/components/consulting/consulting-case-data";

export type ConsultingTabKind = "problem" | "solution" | "outcome";

/** Vaka başına döngüsel görsel havuzları (üretim/operasyon temalı) */
const productionImagePool = [
  // Üretim ekipmanı / hat görseli
  "/technology/karakuri-conatus.jpg",
  // Operasyon ve üretim süreçleri (diyagram/illustration)
  "/technology/subsystems/production-management.png",
  "/technology/subsystems/operations-management.png",
  // Saha & uygulama odaklı görsel
  "/technology/subsystems/field-management.png",
  // Kalite & kart görseli (metin içermeyen varyant)
  "/technology/subsystems/quality-card.png",
  // Takım / yönetim panosu (üretimle ilgili görsel)
  "/technology/subsystems/tool-management.png",
] as const;

const caseImagePools: Record<
  Exclude<ConsultingCaseKey, "deger">,
  readonly string[]
> = {
  capacity: productionImagePool,
  cph: productionImagePool,
  eph: productionImagePool,
  culture: productionImagePool,
};

const tabOffsets: Record<ConsultingTabKind, number> = {
  problem: 0,
  solution: 2,
  outcome: 4,
};

/** Vaka / sekme / slayt için özel görseller */
const customTabImages: Partial<
  Record<
    Exclude<ConsultingCaseKey, "deger">,
    Partial<Record<ConsultingTabKind, Partial<Record<number, string>>>>
  >
> = {
  capacity: {
    solution: {
      0: "/consulting/tabs/value-stream-mapping.png",
    },
  },
};

export function getConsultingTabImage(
  caseKey: string,
  tab: ConsultingTabKind,
  slideIndex: number,
): string {
  const custom =
    customTabImages[caseKey as Exclude<ConsultingCaseKey, "deger">]?.[tab]?.[
      slideIndex
    ];
  if (custom) return custom;

  const pool = caseImagePools[caseKey as keyof typeof caseImagePools];
  if (!pool?.length) {
    return productionImagePool[0];
  }
  const index = (slideIndex + tabOffsets[tab]) % pool.length;
  return pool[index] ?? pool[0];
}
