import { setRequestLocale } from "next-intl/server";
import { TechnologyPage } from "@/components/technology/TechnologyPage";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;

  return {
    title: messages.technology.metadata.title,
    description: messages.technology.metadata.description,
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TechnologyPage />;
}
