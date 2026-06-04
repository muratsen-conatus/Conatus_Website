import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { TrainingDetailPage } from "@/components/training/TrainingDetailPage";
import { routing } from "@/i18n/routing";
import {
  isTrainingCourseId,
  trainingCourseIds,
  type TrainingCourseId,
} from "@/lib/training-catalog";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    trainingCourseIds.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isTrainingCourseId(slug)) return {};

  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const item = messages.training.catalog.items[slug];
  const detail = messages.training.detail.items[slug];

  return {
    title: `${item.title} | CONATUS`,
    description: detail.tagline,
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;

  if (!isTrainingCourseId(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  return <TrainingDetailPage courseId={slug as TrainingCourseId} />;
}
