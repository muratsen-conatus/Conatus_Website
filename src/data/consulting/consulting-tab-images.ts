import type { ConsultingCaseKey } from "@/components/consulting/consulting-case-data";

export type ConsultingTabKind = "problem" | "solution" | "outcome";

/** Danışmanlık sayfası — üretim ve saha odaklı görsel havuzu */
export const consultingProductionImages = [
  "/hero/slide-consulting.jpg",
  "/technology/karakuri-conatus.jpg",
  "/technology/products/lines.jpg",
  "/technology/products/fixtures.jpg",
  "/technology/products/fixtures-v2.jpg",
  "/technology/products/karakuri.jpg",
  "/technology/products/custom.jpg",
  "/why-us/slide-1.jpg",
  "/why-us/slide-2.jpg",
  "/why-us/slide-3.jpg",
] as const;

/** Kahraman bölümü carousel — öne çıkan üretim görselleri */
export const consultingHeroSlideSources = [
  "/hero/slide-consulting.jpg",
  "/technology/karakuri-conatus.jpg",
  "/technology/products/lines.jpg",
  "/technology/products/fixtures-v2.jpg",
] as const;

const caseImagePools: Record<
  Exclude<ConsultingCaseKey, "deger">,
  readonly string[]
> = {
  capacity: consultingProductionImages,
  cph: consultingProductionImages,
  eph: consultingProductionImages,
  culture: consultingProductionImages,
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
    return consultingProductionImages[0];
  }
  const index = (slideIndex + tabOffsets[tab]) % pool.length;
  return pool[index] ?? pool[0];
}
