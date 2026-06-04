import { useTranslations } from "next-intl";
import {
  parseConsultingCase,
  type ConsultingCaseKey,
} from "@/components/consulting/consulting-case-data";
import { ConsultingCaseTabPanels } from "@/components/consulting/ConsultingCaseTabPanels";
import { cn } from "@/lib/utils";

export type { ConsultingCaseKey };

type ConsultingCaseBlockProps = {
  caseKey: ConsultingCaseKey;
  index: number;
  variant?: "default" | "muted";
};

export function ConsultingCaseBlock({
  caseKey,
  index,
  variant = "default",
}: ConsultingCaseBlockProps) {
  const t = useTranslations("consulting.cases");
  const item = parseConsultingCase(t.raw(`items.${caseKey}`), caseKey);

  const labels = {
    problem: t("labels.problem"),
    solution: t("labels.solution"),
    outcome: t("labels.outcome"),
  } as const;

  return (
    <section
      id={caseKey}
      className={cn(
        "section-padding scroll-mt-24",
        variant === "muted" ? "bg-surface-muted" : "bg-surface",
      )}
    >
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tabular-nums text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {item.title}
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-accent" aria-hidden />
          <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {item.lead}
          </p>
        </div>

        <div className="mt-10 max-w-6xl">
          <ConsultingCaseTabPanels
            caseKey={caseKey}
            tabListLabel={t("tabsGroupLabel")}
            labels={labels}
            problems={item.problems}
            solution={item.solution}
            outcomes={item.outcomes}
          />
        </div>
      </div>
    </section>
  );
}
