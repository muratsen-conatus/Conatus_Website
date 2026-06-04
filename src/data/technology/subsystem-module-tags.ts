import type { ProductionSubsystemId } from "@/data/technology/production-system";

/** Alt sistem kartlarında gösterilen modül etiket anahtarları */
export const productionSubsystemModuleTags: Record<
  ProductionSubsystemId,
  readonly string[]
> = {
  toolManagement: ["suggestion", "talentCareer"],
  fieldManagement: ["fieldData", "mobileField"],
  operationsManagement: ["operationsPlanning", "efficiency"],
  productionManagement: ["vsm", "kanban", "lineMonitoring"],
  maintenanceManagement: ["preventiveMaintenance", "workOrder"],
  qualityManagement: ["qualityControl", "nonConformance"],
};
