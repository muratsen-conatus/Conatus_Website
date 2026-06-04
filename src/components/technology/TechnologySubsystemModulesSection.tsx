import { getTranslations } from "next-intl/server";
import { TechnologyIllustration } from "@/components/technology/TechnologyIllustration";
import { TechnologyVisualFrame } from "@/components/technology/TechnologyVisualFrame";
import { productionSubsystemModuleTags } from "@/data/technology/subsystem-module-tags";
import type { ProductionSubsystemId } from "@/data/technology/production-system";

type TechnologySubsystemModulesSectionProps = {
  subsystemId: ProductionSubsystemId;
};

export async function TechnologySubsystemModulesSection({
  subsystemId,
}: TechnologySubsystemModulesSectionProps) {
  const t = await getTranslations("technology.subsystemDetail.modules");
  const tModules = await getTranslations("technology.cip.subsystems.modules");
  const moduleKeys = productionSubsystemModuleTags[subsystemId];

  if (moduleKeys.length === 0) return null;

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,320px)] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
              {t("description")}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {moduleKeys.map((key) => (
                <li
                  key={key}
                  className="flex items-center gap-3 rounded-xl border border-brand-200/60 bg-brand-50/50 px-4 py-3.5 transition-colors hover:border-accent/40 hover:bg-brand-50"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
                    aria-hidden
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {tModules(key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <TechnologyVisualFrame className="mx-auto w-full max-w-xs lg:max-w-none">
            <TechnologyIllustration
              variant={subsystemId}
              className="h-28 w-44 sm:h-32 sm:w-52"
            />
          </TechnologyVisualFrame>
        </div>
      </div>
    </section>
  );
}
