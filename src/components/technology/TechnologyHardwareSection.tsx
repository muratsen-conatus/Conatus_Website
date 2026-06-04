import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnologyHardwareDemoAnimation } from "@/components/technology/TechnologyHardwareDemoAnimation";
import { TechnologyHardwareProductCard } from "@/components/technology/TechnologyHardwareProductCard";
import { technologyDemoGridClass } from "@/components/technology/technology-demo-frame";
import type { HardwareProductId } from "@/data/technology/hardware-product-images";
import { cn } from "@/lib/utils";

const hardwareKeys: HardwareProductId[] = [
  "lines",
  "fixtures",
  "karakuri",
  "custom",
];

export function TechnologyHardwareSection() {
  const t = useTranslations("technology.hardware");

  return (
    <section
      id="donanim"
      className="scroll-mt-24 section-padding border-t border-border/60 bg-surface-muted"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <p className="mt-6 text-center">
          <span className="text-lg font-bold tracking-tight text-accent">
            {t("hashtag")}
          </span>
          <span className="mt-2 block text-sm text-foreground-muted">
            {t("hashtagNote")}
          </span>
        </p>

        <div className={cn("mt-12", technologyDemoGridClass)}>
          <TechnologyHardwareDemoAnimation label={t("gifLabel")} />

          <div className="flex min-h-0 min-w-0 flex-col">
            <div className="flex flex-col gap-4 lg:h-full lg:min-h-0 lg:flex-1 lg:gap-2">
              {hardwareKeys.map((key) => (
                <div key={key} className="min-w-0 lg:flex lg:min-h-0 lg:flex-1">
                  <TechnologyHardwareProductCard
                    id={key}
                    fillHeight
                    className="w-full lg:h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
