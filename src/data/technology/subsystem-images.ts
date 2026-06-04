import type { ProductionSubsystemId } from "@/data/technology/production-system";

/** Alt sistem kartı ve detay sayfası görselleri */
export const productionSubsystemImages: Record<ProductionSubsystemId, string> =
  {
    toolManagement: "/technology/subsystems/production-management.png",
    fieldManagement: "/technology/subsystems/tool-management.png",
    operationsManagement: "/technology/subsystems/field-management.png",
    productionManagement: "/technology/subsystems/maintenance-management.png",
    maintenanceManagement: "/technology/subsystems/quality-management.png",
    qualityManagement: "/technology/subsystems/quality-card.png",
  };

/** Detay sayfası ek medya (video, platform önizleme) */
export const subsystemDetailMedia: Record<
  ProductionSubsystemId,
  {
    /** Ek arayüz / platform görseli */
    secondaryImage?: string;
    demoVideo?: string;
  }
> = {
  toolManagement: {
    secondaryImage: "/technology/cip-architecture.png",
  },
  fieldManagement: {
    secondaryImage: "/technology/cip-saas-homepage.jpg",
  },
  operationsManagement: {
    demoVideo: "/technology/cip-saas-demo.mp4",
    secondaryImage: "/technology/cip-saas-homepage.jpg",
  },
  productionManagement: {
    secondaryImage: "/technology/cip-saas-homepage.jpg",
  },
  maintenanceManagement: {
    secondaryImage: "/technology/cip-architecture.png",
  },
  qualityManagement: {
    secondaryImage: "/technology/cip-saas-homepage.jpg",
  },
};
