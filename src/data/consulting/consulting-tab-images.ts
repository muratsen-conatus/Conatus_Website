import type { ConsultingCaseKey } from "@/components/consulting/consulting-case-data";

export type ConsultingTabKind = "problem" | "solution" | "outcome";

/** Vaka başına döngüsel stock görseller (public/consulting/tabs) */
const caseImagePools: Record<
  Exclude<ConsultingCaseKey, "deger">,
  readonly string[]
> = {
  capacity: [
    "/consulting/tabs/capacity-1.jpg",
    "/consulting/tabs/capacity-2.jpg",
    "/consulting/tabs/capacity-3.jpg",
    "/consulting/tabs/capacity-4.jpg",
    "/consulting/tabs/capacity-5.jpg",
    "/consulting/tabs/capacity-6.jpg",
  ],
  cph: [
    "/consulting/tabs/cph-1.jpg",
    "/consulting/tabs/cph-2.jpg",
    "/consulting/tabs/cph-3.jpg",
    "/consulting/tabs/cph-4.jpg",
    "/consulting/tabs/cph-5.jpg",
    "/consulting/tabs/cph-6.jpg",
  ],
  eph: [
    "/consulting/tabs/eph-1.jpg",
    "/consulting/tabs/eph-2.jpg",
    "/consulting/tabs/eph-3.jpg",
    "/consulting/tabs/eph-4.jpg",
    "/consulting/tabs/eph-5.jpg",
    "/consulting/tabs/eph-6.jpg",
  ],
  culture: [
    "/consulting/tabs/culture-1.jpg",
    "/consulting/tabs/culture-2.jpg",
    "/consulting/tabs/culture-3.jpg",
    "/consulting/tabs/culture-4.jpg",
    "/consulting/tabs/culture-5.jpg",
    "/consulting/tabs/culture-6.jpg",
  ],
};

const tabOffsets: Record<ConsultingTabKind, number> = {
  problem: 0,
  solution: 2,
  outcome: 4,
};

export function getConsultingTabImage(
  caseKey: string,
  tab: ConsultingTabKind,
  slideIndex: number,
): string {
  const pool = caseImagePools[caseKey as keyof typeof caseImagePools];
  if (!pool?.length) {
    return "/consulting/tabs/capacity-1.jpg";
  }
  const index = (slideIndex + tabOffsets[tab]) % pool.length;
  return pool[index] ?? pool[0];
}
