import { useTranslations } from "next-intl";
import { MissionIcon, VisionIcon } from "@/components/icons/CorporateIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  { key: "mission" as const, Icon: MissionIcon },
  { key: "visionCard" as const, Icon: VisionIcon },
];

export function MissionVisionSection() {
  const t = useTranslations("corporate.vision");

  return (
    <section className="section-padding bg-surface-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cards.map(({ key, Icon }) => (
            <article
              key={key}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="text-[#0066cc]" />
                <h3 className="text-xl font-semibold leading-none text-[#0066cc]">
                  {t(`${key}.title`)}
                </h3>
              </div>
              <p className="mt-4 text-left text-base leading-relaxed text-foreground">
                {t(`${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
