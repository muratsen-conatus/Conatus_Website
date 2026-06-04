import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnologyCipDemoAnimation } from "@/components/technology/TechnologyCipDemoAnimation";
import { TechnologyHardwareDemoAnimation } from "@/components/technology/TechnologyHardwareDemoAnimation";
import { cn } from "@/lib/utils";

const portfolioCardMediaClass =
  "rounded-none border-0 border-b border-brand-200/50 shadow-none";

export function TechnologyOverviewSection() {
  const t = useTranslations("technology.overview");
  const tCip = useTranslations("technology.cip");
  const tHardware = useTranslations("technology.hardware");

  return (
    <section className="section-padding bg-surface-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="#cip"
            className={cn(
              "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-colors",
              "hover:border-accent/50 hover:shadow-md",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            )}
          >
            <TechnologyCipDemoAnimation
              compact
              label={tCip("videoLabel")}
              className={portfolioCardMediaClass}
            />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                {t("software.title")}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted sm:text-base">
                {t("software.description")}
              </p>
            </div>
            <div className="border-t border-border/60 px-6 py-3.5 sm:px-7">
              <span className="inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-brand-700">
                {t("learnMore")}
                <span
                  className="ml-1 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </div>
          </a>

          <a
            href="#donanim"
            className={cn(
              "group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-colors",
              "hover:border-accent/50 hover:shadow-md",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            )}
          >
            <TechnologyHardwareDemoAnimation
              compact
              label={tHardware("gifLabel")}
              className={portfolioCardMediaClass}
            />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                {t("hardware.title")}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted sm:text-base">
                {t("hardware.description")}
              </p>
            </div>
            <div className="border-t border-border/60 px-6 py-3.5 sm:px-7">
              <span className="inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-brand-700">
                {t("learnMore")}
                <span
                  className="ml-1 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
