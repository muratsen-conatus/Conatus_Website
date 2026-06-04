import { getTranslations } from "next-intl/server";
import { TechnologySubsystemFeatureTabPanels } from "@/components/technology/TechnologySubsystemFeatureTabPanels";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SubsystemDetailLocaleContent } from "@/data/technology/subsystem-detail-content";
import type { ProductionSubsystemId } from "@/data/technology/production-system";

type TechnologySubsystemKanoSectionProps = {
  subsystemId: ProductionSubsystemId;
  content: SubsystemDetailLocaleContent;
};

export async function TechnologySubsystemKanoSection({
  subsystemId,
  content,
}: TechnologySubsystemKanoSectionProps) {
  const t = await getTranslations("technology.subsystemDetail.features");

  const labels = {
    basic: t("tabBasic"),
    performance: t("tabPerformance"),
    premium: t("tabPremium"),
  } as const;

  const notes = {
    basic: t("basicNote"),
    performance: t("performanceNote"),
    premium: t("premiumNote"),
  } as const;

  return (
    <section className="section-padding bg-surface-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mx-auto mt-10 max-w-6xl">
          <TechnologySubsystemFeatureTabPanels
            subsystemId={subsystemId}
            tabListLabel={t("tabsGroupLabel")}
            labels={labels}
            notes={notes}
            features={content.features}
          />
        </div>
      </div>
    </section>
  );
}
