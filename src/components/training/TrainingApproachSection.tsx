import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrainingApproachLevels } from "@/components/training/TrainingApproachLevels";

const stepKeys = ["evaluation", "development", "guidance"] as const;

export function TrainingApproachSection() {
  const t = useTranslations("training.approach");

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid w-full items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
          <div className="min-w-0">
            <TrainingApproachLevels />
          </div>

          <div className="min-w-0">
            <div className="w-full overflow-hidden rounded-3xl border border-brand-200/50 bg-gradient-to-br from-brand-50/80 via-brand-100/50 to-brand-50 shadow-sm">
              <div className="p-6 sm:p-8 lg:p-9">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
                  {t("degerHeading")}
                </p>
                <ol className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                  {stepKeys.map((key, index) => (
                    <li key={key} className="flex gap-3 sm:gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md shadow-brand-600/15 sm:h-9 sm:w-9 sm:text-sm">
                        {index + 1}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
                          {t(`steps.${key}.eyebrow`)}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">
                          {t(`steps.${key}.title`)}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-foreground-muted sm:text-sm">
                          {t(`steps.${key}.description`)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
