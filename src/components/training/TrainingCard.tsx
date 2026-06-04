"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TrainingCardMedia } from "@/components/training/TrainingCardMedia";
import { TrainingIllustration } from "@/components/training/TrainingIllustration";
import { getTrainingCourse } from "@/lib/training-catalog";
import { cn } from "@/lib/utils";

type TrainingCardProps = {
  courseId: string;
  compact?: boolean;
  className?: string;
};

export function TrainingCard({
  courseId,
  compact = false,
  className,
}: TrainingCardProps) {
  const t = useTranslations("training.catalog");
  const course = getTrainingCourse(courseId);
  if (!course) return null;

  const tagKeys = [
    ...course.kategori.slice(0, 1),
    ...course.sistem.slice(0, 1),
    ...course.katilimci.slice(0, 1),
  ];

  return (
    <Link
      href={{ pathname: "/egitim/[slug]", params: { slug: courseId } }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <TrainingCardMedia compact={compact}>
        <TrainingIllustration
          variant={course.illustration}
          className={compact ? "h-16 w-28" : "h-20 w-36 sm:h-24 sm:w-44"}
        />
      </TrainingCardMedia>

      <div className={cn("flex flex-1 flex-col", compact ? "p-4" : "p-6 sm:p-7")}>
        <span className="text-xs font-bold tracking-wide text-accent">
          {course.code}
        </span>
        <h3
          className={cn(
            "mt-2 font-semibold leading-snug text-foreground transition-colors group-hover:text-accent",
            compact ? "text-base" : "text-lg",
          )}
        >
          {t(`items.${courseId}.title`)}
        </h3>
        {!compact ? (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground-muted">
            {t(`items.${courseId}.description`)}
          </p>
        ) : null}
        {tagKeys.length > 0 ? (
          <ul
            className={cn(
              "flex flex-wrap gap-1.5",
              compact ? "mt-3" : "mt-5",
            )}
          >
            {tagKeys.map((key) => (
              <li
                key={key}
                className="rounded-full border border-brand-200/70 bg-brand-50/60 px-2.5 py-0.5 text-xs text-foreground-muted"
              >
                {t(`options.${key}`)}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div
        className={cn(
          "border-t border-border/60",
          compact ? "px-4 py-3" : "px-6 py-3.5 sm:px-7",
        )}
      >
        <span className="inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-brand-700">
          {t("cardCta")}
          <span
            className="ml-1 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
