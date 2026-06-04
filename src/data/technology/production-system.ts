/** CIP — Üretim sistemi alt sistemleri */

export const productionSubsystemIds = [
  "toolManagement",
  "fieldManagement",
  "operationsManagement",
  "productionManagement",
  "maintenanceManagement",
  "qualityManagement",
] as const;

export type ProductionSubsystemId = (typeof productionSubsystemIds)[number];
