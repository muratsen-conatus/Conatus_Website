import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HardwareDetailLocaleContent } from "@/data/technology/hardware-detail-content";

type TechnologyHardwareDetailSectionsProps = {
  content: HardwareDetailLocaleContent;
};

export async function TechnologyHardwareDetailSections({
  content,
}: TechnologyHardwareDetailSectionsProps) {
  const t = await getTranslations("technology.hardwareDetail");

  return (
    <>
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            eyebrow={t("capabilities.eyebrow")}
            title={content.capabilities.title}
            description={content.capabilities.description}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.capabilities.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-surface-elevated p-5 shadow-sm"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-foreground-muted">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding border-t border-border/60 bg-surface-muted">
        <div className="container-wide">
          <SectionHeading
            eyebrow={t("applications.eyebrow")}
            title={content.applications.title}
          />
          <ul className="mx-auto mt-8 max-w-3xl space-y-3">
            {content.applications.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-foreground-muted sm:text-base"
              >
                <span className="font-bold text-accent" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/80 via-surface to-surface p-8 text-center shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t("platform.eyebrow")}
            </p>
            <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
              {content.platform.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
              {content.platform.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
