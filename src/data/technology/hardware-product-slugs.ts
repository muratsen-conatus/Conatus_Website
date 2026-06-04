import type { HardwareProductId } from "@/data/technology/hardware-product-images";

export const hardwareProductSlugs = {
  lines: "production-lines",
  fixtures: "fixtures-racks",
  karakuri: "karakuri-systems",
  custom: "custom-engineering",
} as const satisfies Record<HardwareProductId, string>;

export type HardwareProductSlug =
  (typeof hardwareProductSlugs)[HardwareProductId];

export const hardwareProductSlugList = Object.values(
  hardwareProductSlugs,
) as HardwareProductSlug[];

export function getHardwareProductIdFromSlug(
  slug: string,
): HardwareProductId | undefined {
  const entry = (
    Object.entries(hardwareProductSlugs) as [HardwareProductId, string][]
  ).find(([, value]) => value === slug);
  return entry?.[0];
}

export function isHardwareProductSlug(slug: string): slug is HardwareProductSlug {
  return hardwareProductSlugList.includes(slug as HardwareProductSlug);
}

export function getHardwareProductSlug(id: HardwareProductId): HardwareProductSlug {
  return hardwareProductSlugs[id];
}
