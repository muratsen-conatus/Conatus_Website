import type { ProductionSubsystemId } from "@/data/technology/production-system";

export const productionSubsystemSlugs = {
  toolManagement: "tool-management",
  fieldManagement: "field-management",
  operationsManagement: "operations-management",
  productionManagement: "production-management",
  maintenanceManagement: "maintenance-management",
  qualityManagement: "quality-management",
} as const satisfies Record<ProductionSubsystemId, string>;

export type ProductionSubsystemSlug =
  (typeof productionSubsystemSlugs)[ProductionSubsystemId];

export const productionSubsystemSlugList = Object.values(
  productionSubsystemSlugs,
) as ProductionSubsystemSlug[];

export function getSubsystemIdFromSlug(
  slug: string,
): ProductionSubsystemId | undefined {
  const entry = (
    Object.entries(productionSubsystemSlugs) as [ProductionSubsystemId, string][]
  ).find(([, value]) => value === slug);
  return entry?.[0];
}

export function isProductionSubsystemSlug(
  slug: string,
): slug is ProductionSubsystemSlug {
  return productionSubsystemSlugList.includes(slug as ProductionSubsystemSlug);
}

export function getSubsystemSlug(id: ProductionSubsystemId): ProductionSubsystemSlug {
  return productionSubsystemSlugs[id];
}
