import { useTranslations } from "next-intl";
import { PageCtaSection } from "@/components/ui/PageCtaSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillarConfig = [
  {
    id: "scope",
    labelKey: "groups.scope",
    itemKeys: ["system", "subsystem", "module"] as const,
    itemPrefix: "scope",
  },
  {
    id: "commercial",
    labelKey: "groups.commercial",
    itemKeys: ["subscription", "perpetual"] as const,
    itemPrefix: "commercial",
  },
  {
    id: "seats",
    labelKey: "groups.seats",
    itemKeys: ["floating", "fixed"] as const,
    itemPrefix: "seats",
  },
] as const;

type LicensingPillarCardProps = {
  step: string;
  title: string;
  items: { title: string; description: string }[];
};

function LicensingPillarCard({ step, title, items }: LicensingPillarCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/95 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-200 hover:shadow-md sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div className="licensing-card-shine absolute inset-0" />
      </div>

      <div className="relative">
        <p className="text-sm font-bold tabular-nums text-accent">{step}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h3>
        <div className="mt-4 h-1 w-12 rounded-full bg-accent" aria-hidden />
      </div>

      <ul className="relative mt-6 flex flex-1 flex-col gap-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-t border-border/60 pt-4 first:border-t-0 first:pt-0"
          >
            <p className="text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function TechnologyLicensingSection() {
  const t = useTranslations("technology.cip.licensing");

  return (
    <section
      id="licensing"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/60 section-padding"
    >
      <div className="licensing-section-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="licensing-section-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {pillarConfig.map((pillar, index) => {
            const items = pillar.itemKeys.map((key) => ({
              title: t(`${pillar.itemPrefix}.${key}.title`),
              description: t(`${pillar.itemPrefix}.${key}.description`),
            }));

            return (
              <LicensingPillarCard
                key={pillar.id}
                step={String(index + 1).padStart(2, "0")}
                title={t(pillar.labelKey)}
                items={items}
              />
            );
          })}
        </div>

        <PageCtaSection
          variant="inset"
          className="mt-12 sm:mt-14"
          title={t("cta.title")}
          description={t("cta.description")}
          buttonLabel={t("cta.button")}
        />
      </div>
    </section>
  );
}
