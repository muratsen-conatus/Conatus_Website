"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TrainingCardMedia } from "@/components/training/TrainingCardMedia";
import { TrainingIllustration } from "@/components/training/TrainingIllustration";
import { getDevelopmentProgram } from "@/lib/training-catalog";
import { cn } from "@/lib/utils";

type DevelopmentProgramCardProps = {
  programId: string;
  compact?: boolean;
  className?: string;
};

export function DevelopmentProgramCard({
  programId,
  compact = false,
  className,
}: DevelopmentProgramCardProps) {
  const t = useTranslations("training.developmentPrograms");
  const tCatalog = useTranslations("training.catalog");
  const program = getDevelopmentProgram(programId);
  if (!program) return null;

  const tagLabels = [
    t(`categories.${program.category}`),
    tCatalog(`options.${program.audience}`),
  ];

  return (
    <Link
      href={{
        pathname: "/egitim/program/[slug]",
        params: { slug: programId },
      }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <TrainingCardMedia compact={compact}>
        <TrainingIllustration
          variant={program.illustration}
          className={compact ? "h-16 w-28" : "h-20 w-36 sm:h-24 sm:w-44"}
        />
      </TrainingCardMedia>

      <div className={cn("flex flex-1 flex-col", compact ? "p-4" : "p-6 sm:p-7")}>
        <span className="text-xs font-bold tracking-wide text-accent">
          {program.code}
        </span>
        <h3
          className={cn(
            "mt-2 font-semibold leading-snug text-foreground transition-colors group-hover:text-accent",
            compact ? "text-base" : "text-lg",
          )}
        >
          {t(`items.${programId}.title`)}
        </h3>
        {!compact ? (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground-muted">
            {t(`items.${programId}.description`)}
          </p>
        ) : null}
        <ul
          className={cn(
            "flex flex-wrap gap-1.5",
            compact ? "mt-3" : "mt-5",
          )}
        >
          {tagLabels.map((label) => (
            <li
              key={label}
              className="rounded-full border border-brand-200/70 bg-brand-50/60 px-2.5 py-0.5 text-xs text-foreground-muted"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
