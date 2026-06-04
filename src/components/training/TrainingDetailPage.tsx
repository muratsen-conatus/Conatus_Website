import { getTranslations } from "next-intl/server";
import { TrainingCard } from "@/components/training/TrainingCard";
import { TrainingCtaSection } from "@/components/training/TrainingCtaSection";
import { TrainingDetailHero } from "@/components/training/TrainingDetailHero";
import {
  TrainingDetailTabPanels,
  type TrainingDetailSections,
  type TrainingDetailTabId,
} from "@/components/training/TrainingDetailTabPanels";
import {
  getRelatedTrainingCourses,
  getTrainingCourse,
  type TrainingCourseId,
} from "@/lib/training-catalog";

type TrainingDetailPageProps = {
  courseId: TrainingCourseId;
};

const detailTabIds: TrainingDetailTabId[] = [
  "content",
  "outcomes",
  "audience",
  "certification",
];

function formatDuration(
  days: number,
  t: Awaited<ReturnType<typeof getTranslations<"training.detail">>>,
): string {
  if (days === 0.5) return t("halfDay");
  return t("duration", { days: String(days) });
}

export async function TrainingDetailPage({ courseId }: TrainingDetailPageProps) {
  const course = getTrainingCourse(courseId);
  if (!course) return null;

  const t = await getTranslations("training.detail");
  const tCatalog = await getTranslations("training.catalog");
  const item = t.raw(`items.${courseId}`) as {
    tagline: string;
    intro: string;
    content: string[];
    outcomes: string[];
    audience: string[];
    certification: string[];
  };

  const sections: TrainingDetailSections = {
    content: item.content ?? [],
    outcomes: item.outcomes ?? [],
    audience: item.audience ?? [],
    certification: item.certification ?? [],
  };

  const labels = Object.fromEntries(
    detailTabIds.map((id) => [id, t(`sections.${id}`)]),
  ) as Record<TrainingDetailTabId, string>;

  const related = getRelatedTrainingCourses(courseId, 4);

  return (
    <>
      <TrainingDetailHero
        backLabel={t("backToPrograms")}
        course={course}
        title={tCatalog(`items.${courseId}.title`)}
        tagline={item.tagline}
        intro={item.intro}
        durationLabel={formatDuration(course.durationDays, t)}
        participantsLabel={t("participants", {
          count: course.maxParticipants,
        })}
      />

      <section className="section-padding bg-surface-muted/40">
        <div className="container-wide max-w-6xl">
          <TrainingDetailTabPanels
            courseId={courseId}
            courseTitle={tCatalog(`items.${courseId}.title`)}
            tabListLabel={t("tabsGroupLabel")}
            labels={labels}
            sections={sections}
          />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-padding border-t border-border/60 bg-surface">
          <div className="container-wide">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t("relatedTitle")}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((relatedCourse) => (
                <li key={relatedCourse.id}>
                  <TrainingCard courseId={relatedCourse.id} compact />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <TrainingCtaSection />
    </>
  );
}
