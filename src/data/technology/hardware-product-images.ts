export const hardwareProductImages = {
  lines: "/technology/products/lines.jpg",
  fixtures: "/technology/products/fixtures-v2.jpg",
  karakuri: "/technology/products/karakuri.jpg",
  custom: "/technology/products/custom.jpg",
} as const;

/** Kart görseli kırpma — geniş panoramik görseller için konum ayarı */
export const hardwareProductImageClass: Record<
  keyof typeof hardwareProductImages,
  string
> = {
  lines: "object-cover object-[28%_center]",
  fixtures: "object-cover object-center",
  karakuri: "object-cover object-[34%_center]",
  custom: "object-cover object-center",
};

export const hardwareRobotArmGif = "/technology/hardware-robot-arm.gif";

export type HardwareProductId = keyof typeof hardwareProductImages;
