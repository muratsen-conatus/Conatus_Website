import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageCtaSection } from "@/components/ui/PageCtaSection";
import { DevelopmentProgramCard } from "@/components/training/DevelopmentProgramCard";
import { TrainingCard } from "@/components/training/TrainingCard";
import { TrainingIllustration } from "@/components/training/TrainingIllustration";
import {
  getDevelopmentProgram,
  getProgramsByAudience,
  type DevelopmentProgramId,
} from "@/lib/training-catalog";

type DevelopmentProgramDetailPageProps = {
  programId: DevelopmentProgramId;
};

export async function DevelopmentProgramDetailPage({
  programId,
}: DevelopmentProgramDetailPageProps) {
  const program = getDevelopmentProgram(programId);
  if (!program) return null;

  const t = await getTranslations("training.developmentPrograms");
  const item = t.raw(`detail.items.${programId}`) as {
    tagline: string;
    intro: string;
    outcomes: string[];
    structure: string[];
  };

  const siblingPrograms = getProgramsByAudience(program.audience).filter(
    (p) => p.id !== programId,
  );

  return (
    <>
      <section className="bg-surface page-start-padding">
        <div className="container-wide">
          <Link
            href="/egitim"
            className="text-sm text-foreground-muted transition-colors hover:text-accent"
          >
            ← {t("detail.backToTraining")}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-14">
            <div>
              <p className="text-sm font-bold tracking-wide text-accent">
                {program.code}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t(`items.${programId}.title`)}
              </h1>
              <p className="mt-4 text-lg font-medium text-foreground-muted">
                {item.tagline}
              </p>
              <p className="mt-8 text-base leading-relaxed text-foreground-muted">
                {item.intro}
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-xs items-center justify-center rounded-2xl border border-border/80 bg-gradient-to-b from-brand-50/50 to-surface px-8 py-12 lg:mx-0 lg:max-w-none">
              <TrainingIllustration
                variant={program.illustration}
                className="h-28 w-48"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/80 bg-surface-muted/30 py-14 sm:py-16">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2">
            <article>
              <h2 className="text-xl font-semibold text-foreground">
                {t("detail.outcomesTitle")}
              </h2>
              <ul className="mt-4 space-y-3">
                {item.outcomes.map((line) => (
                  <li
                    key={line.slice(0, 48)}
                    className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h2 className="text-xl font-semibold text-foreground">
                {t("detail.structureTitle")}
              </h2>
              <ul className="mt-4 space-y-3">
                {item.structure.map((line) => (
                  <li
                    key={line.slice(0, 48)}
                    className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {program.courseIds.length > 0 ? (
        <section className="section-padding bg-surface">
          <div className="container-wide">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("detail.includedCoursesTitle")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-foreground-muted">
              {t("detail.includedCoursesDescription")}
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {program.courseIds.map((courseId) => (
                <li key={courseId}>
                  <TrainingCard courseId={courseId} compact />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {siblingPrograms.length > 0 ? (
        <section className="border-t border-border/80 bg-surface-muted/25 py-14 sm:py-16">
          <div className="container-wide">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("detail.relatedProgramsTitle", {
                audience: t(`audiences.${program.audience}`),
              })}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {siblingPrograms.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <DevelopmentProgramCard programId={p.id} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <PageCtaSection
        variant="dark"
        title={t("detail.ctaTitle")}
        description={t("detail.ctaDescription")}
        buttonLabel={t("detail.ctaButton")}
      />
    </>
  );
}
