import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnologyIllustration } from "@/components/technology/TechnologyIllustration";
import { TechnologyVisualFrame } from "@/components/technology/TechnologyVisualFrame";

const deploymentKeys = [
  { key: "cloud" as const, illustration: "cloud" as const },
  { key: "onPrem" as const, illustration: "on-prem" as const },
] as const;

export function TechnologyDeploymentSection() {
  const t = useTranslations("technology.cip.deployment");

  return (
    <section className="section-padding bg-surface-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {deploymentKeys.map(({ key, illustration }) => (
            <article
              key={key}
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
            >
              <TechnologyVisualFrame
                compact
                className="rounded-none border-0 border-b border-brand-200/40 shadow-none"
              >
                <div className="flex size-full items-center justify-center">
                  <TechnologyIllustration
                    variant={illustration}
                    className="h-auto w-auto max-h-14 max-w-[5.5rem] sm:max-w-[6rem]"
                  />
                </div>
              </TechnologyVisualFrame>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-foreground">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {t(`${key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
