import { Link } from "@/i18n/navigation";
import { TrainingIllustration } from "@/components/training/TrainingIllustration";
import { trainingDetailHeroSectionClass } from "@/lib/training-detail-surface";
import type { TrainingCourse } from "@/lib/training-catalog";

type TrainingDetailHeroProps = {
  backLabel: string;
  course: TrainingCourse;
  title: string;
  tagline: string;
  intro: string;
  durationLabel: string;
  participantsLabel: string;
};

export function TrainingDetailHero({
  backLabel,
  course,
  title,
  tagline,
  intro,
  durationLabel,
  participantsLabel,
}: TrainingDetailHeroProps) {
  return (
    <section className={trainingDetailHeroSectionClass}>
      <div className="container-wide pt-6 sm:pt-8">
        <Link
          href="/egitim"
          className="text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          ← {backLabel}
        </Link>
      </div>

      <div className="container-wide page-start-padding pb-8 sm:pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {course.code}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {title}
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
              {tagline}
            </p>
            <ul className="mt-8 flex flex-wrap gap-3 text-sm text-foreground-muted">
              <li className="rounded-full border border-border bg-surface px-3 py-1.5 font-medium">
                {durationLabel}
              </li>
              <li className="rounded-full border border-border bg-surface px-3 py-1.5 font-medium">
                {participantsLabel}
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex w-full max-w-sm items-center justify-center rounded-2xl border border-border/80 bg-gradient-to-b from-brand-50/60 to-surface px-8 py-10 shadow-sm lg:max-w-md">
              <TrainingIllustration
                variant={course.illustration}
                className="h-32 w-52 sm:h-36 sm:w-56"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide pb-12 sm:pb-14 lg:pb-16">
        <p className="max-w-3xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}
