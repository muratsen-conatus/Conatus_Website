import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnologyCipDemoAnimation } from "@/components/technology/TechnologyCipDemoAnimation";
import { TechnologyDeploymentSection } from "@/components/technology/TechnologyDeploymentSection";
import { TechnologyHierarchySection } from "@/components/technology/TechnologyHierarchySection";
import { TechnologyIntegrationSection } from "@/components/technology/TechnologyIntegrationSection";
import { TechnologyLicensingSection } from "@/components/technology/TechnologyLicensingSection";
import { TechnologyProductionSystemSection } from "@/components/technology/TechnologyProductionSystemSection";

export function TechnologyCipSection() {
  const t = useTranslations("technology.cip");

  return (
    <div id="cip" className="scroll-mt-24">
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                eyebrow={t("eyebrow")}
                title={t("title")}
                description={t("description")}
                align="left"
                className="max-w-none"
              />
            </div>
            <TechnologyCipDemoAnimation label={t("videoLabel")} />
          </div>
        </div>
      </section>

      <TechnologyHierarchySection />
      <TechnologyProductionSystemSection />
      <TechnologyDeploymentSection />
      <TechnologyIntegrationSection />
      <TechnologyLicensingSection />
    </div>
  );
}
