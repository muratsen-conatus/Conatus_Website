import { useTranslations } from "next-intl";
import { ConsultingCaseBlock } from "@/components/consulting/ConsultingCaseBlock";
import { consultingCaseKeys } from "@/components/consulting/consulting-case-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ConsultingCasesSection() {
  const t = useTranslations("consulting.cases");

  return (
    <>
      <section className="section-padding border-b border-border bg-surface-muted">
        <div className="container-wide">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />

          <nav
            className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
            aria-label={t("navLabel")}
          >
            {consultingCaseKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t(`items.${key}.nav`)}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {consultingCaseKeys.map((key, index) => (
        <ConsultingCaseBlock
          key={key}
          caseKey={key}
          index={index}
          variant={index % 2 === 1 ? "muted" : "default"}
        />
      ))}
    </>
  );
}
