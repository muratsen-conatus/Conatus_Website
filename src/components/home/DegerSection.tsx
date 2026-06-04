import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandQuote } from "@/components/ui/BrandQuote";
import { StepEyebrow } from "@/components/ui/StepEyebrow";

const stepKeys = ["evaluation", "development", "guidance"] as const;

export function DegerSection() {
  const t = useTranslations("home.deger");

  return (
    <section id="deger" className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("subtitle")}
          title={t("title")}
          description={
            <>
              {t("descriptionIntro")}
              <span className="font-semibold text-accent">{t("subtitle")}</span>
              {t("descriptionAfterHighlight")}
            </>
          }
          className="max-w-none w-full"
          descriptionClassName="w-full max-w-none text-pretty"
        />

        {/* lg: subgrid ile alıntı satırı tüm kartlarda eşit yükseklik */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto] lg:items-stretch">
          {stepKeys.map((key, index) => {
            const items = t.raw(`steps.${key}.items`) as string[];
            const quote = t(`steps.${key}.quote`);

            return (
              <article
                key={key}
                className="grid grid-rows-[auto_auto_1fr_auto] gap-3 rounded-2xl border border-border bg-surface-elevated p-5 shadow-sm sm:gap-4 sm:p-6 lg:row-span-4 lg:grid-rows-subgrid lg:gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <StepEyebrow>{t(`steps.${key}.title`)}</StepEyebrow>
                </div>

                <h3 className="text-lg font-bold leading-snug text-foreground">
                  {t(`steps.${key}.heading`)}
                </h3>

                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-foreground-muted"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <BrandQuote fillHeight>{quote}</BrandQuote>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
