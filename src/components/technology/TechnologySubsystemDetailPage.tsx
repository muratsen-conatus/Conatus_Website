import { getLocale, getTranslations } from "next-intl/server";
import { TechnologySubsystemDetailHero } from "@/components/technology/TechnologySubsystemDetailHero";
import { TechnologySubsystemKanoSection } from "@/components/technology/TechnologySubsystemKanoSection";
import { TechnologySubsystemMediaSection } from "@/components/technology/TechnologySubsystemMediaSection";
import { TechnologySubsystemModulesSection } from "@/components/technology/TechnologySubsystemModulesSection";
import { TechnologySubsystemTestimonialsSection } from "@/components/technology/TechnologySubsystemTestimonialsSection";
import { PageCtaSection } from "@/components/ui/PageCtaSection";
import { getSubsystemDetailContent } from "@/data/technology/subsystem-detail-content";
import type { ProductionSubsystemId } from "@/data/technology/production-system";

type TechnologySubsystemDetailPageProps = {
  subsystemId: ProductionSubsystemId;
};

export async function TechnologySubsystemDetailPage({
  subsystemId,
}: TechnologySubsystemDetailPageProps) {
  const locale = await getLocale();
  const content = getSubsystemDetailContent(subsystemId, locale);
  const tCta = await getTranslations("technology.cta");

  const isLive = subsystemId === "operationsManagement";

  return (
    <>
      <TechnologySubsystemDetailHero
        subsystemId={subsystemId}
        content={content}
        isLive={isLive}
      />
      <TechnologySubsystemMediaSection subsystemId={subsystemId} />
      <TechnologySubsystemModulesSection subsystemId={subsystemId} />
      <TechnologySubsystemKanoSection subsystemId={subsystemId} content={content} />
      <TechnologySubsystemTestimonialsSection />
      <PageCtaSection
        title={tCta("title")}
        description={tCta("description")}
        buttonLabel={tCta("contact")}
      />
    </>
  );
}
