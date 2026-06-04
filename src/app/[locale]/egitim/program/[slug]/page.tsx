import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { DevelopmentProgramDetailPage } from "@/components/training/DevelopmentProgramDetailPage";
import { routing } from "@/i18n/routing";
import {
  developmentProgramIds,
  isDevelopmentProgramId,
  type DevelopmentProgramId,
} from "@/lib/training-catalog";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    developmentProgramIds.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isDevelopmentProgramId(slug)) return {};

  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const item = messages.training.developmentPrograms.items[slug];
  const detail = messages.training.developmentPrograms.detail.items[slug];

  return {
    title: `${item.title} | CONATUS`,
    description: detail.tagline,
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;

  if (!isDevelopmentProgramId(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <DevelopmentProgramDetailPage programId={slug as DevelopmentProgramId} />
  );
}
