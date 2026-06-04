import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  EaseStoryIcon,
  ExperienceStoryIcon,
  ProblemStoryIcon,
} from "@/components/technology/SubsystemStoryIcons";
import { TechnologyIllustration } from "@/components/technology/TechnologyIllustration";
import { TechnologyVisualFrame } from "@/components/technology/TechnologyVisualFrame";
import { productionSubsystemImages } from "@/data/technology/subsystem-images";
import type { SubsystemDetailLocaleContent } from "@/data/technology/subsystem-detail-content";
import type { ProductionSubsystemId } from "@/data/technology/production-system";
import { cn } from "@/lib/utils";

type TechnologySubsystemDetailHeroProps = {
  subsystemId: ProductionSubsystemId;
  content: SubsystemDetailLocaleContent;
  isLive: boolean;
};

const storySteps = [
  { key: "problem" as const, Icon: ProblemStoryIcon, field: "problem" as const },
  { key: "ease" as const, Icon: EaseStoryIcon, field: "ease" as const },
  {
    key: "experience" as const,
    Icon: ExperienceStoryIcon,
    field: "experience" as const,
  },
] as const;

export async function TechnologySubsystemDetailHero({
  subsystemId,
  content,
  isLive,
}: TechnologySubsystemDetailHeroProps) {
  const t = await getTranslations("technology.subsystemDetail");
  const tSub = await getTranslations("technology.cip.subsystems");

  const storyLabels = {
    problem: t("hero.problemLabel"),
    ease: t("hero.easeLabel"),
    experience: t("hero.experienceLabel"),
  };

  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-50/40 via-surface to-surface">
      <div className="container-wide page-start-padding">
        <Link
          href="/teknoloji"
          className="text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          ← {t("backToTechnology")}
        </Link>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                CIP · {tSub(`${subsystemId}.title`)}
              </p>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-bold tracking-wide shadow-sm",
                  isLive
                    ? "bg-accent text-white"
                    : "bg-surface text-foreground-muted ring-1 ring-border/80",
                )}
              >
                {isLive ? tSub("badgeLive") : tSub("badgeComingSoon")}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {content.hero.headline}
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />

            <ol className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3">
              {storySteps.map(({ key, Icon, field }) => (
                <li
                  key={key}
                  className={cn(
                    "rounded-2xl border p-4 sm:p-5",
                    key === "ease"
                      ? "border-brand-200/70 bg-brand-50/60"
                      : "border-border/80 bg-surface/90 shadow-sm",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                      key === "problem"
                        ? "bg-amber-50 text-amber-700"
                        : key === "ease"
                          ? "bg-brand-100 text-accent"
                          : "bg-emerald-50 text-emerald-700",
                    )}
                  >
                    <Icon />
                  </span>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-accent">
                    {storyLabels[key]}
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      field === "experience"
                        ? "italic text-foreground-muted"
                        : "text-foreground-muted",
                    )}
                  >
                    {content.hero[field]}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative lg:sticky lg:top-24">
            <TechnologyVisualFrame className="w-full shadow-md">
              <TechnologyIllustration
                variant={subsystemId}
                className="h-24 w-40 sm:h-28 sm:w-48"
              />
            </TechnologyVisualFrame>
            <div className="relative -mt-8 overflow-hidden rounded-2xl border border-border/80 bg-white shadow-lg sm:-mt-10">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={productionSubsystemImages[subsystemId]}
                  alt={tSub(`${subsystemId}.imageAlt`)}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
