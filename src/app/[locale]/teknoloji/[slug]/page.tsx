import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { TechnologyHardwareDetailPage } from "@/components/technology/TechnologyHardwareDetailPage";
import { TechnologySubsystemDetailPage } from "@/components/technology/TechnologySubsystemDetailPage";
import { routing } from "@/i18n/routing";
import {
  getHardwareDetailContent,
  getHardwareProductIdFromSlug,
  getSubsystemDetailContent,
  getSubsystemIdFromSlug,
  hardwareProductSlugList,
  isHardwareProductSlug,
  isProductionSubsystemSlug,
  productionSubsystemSlugList,
  type ProductionSubsystemId,
} from "@/lib/technology-catalog";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const allTechnologySlugs = [
  ...productionSubsystemSlugList,
  ...hardwareProductSlugList,
] as const;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allTechnologySlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;

  if (isHardwareProductSlug(slug)) {
    const productId = getHardwareProductIdFromSlug(slug);
    if (!productId) return {};

    const content = getHardwareDetailContent(productId, locale);
    const messages = (await import(`../../../../../messages/${locale}.json`))
      .default;
    const title = messages.technology.hardware.items[productId].title;

    return {
      title: `${title} | CONATUS`,
      description: content.metaDescription,
    };
  }

  if (isProductionSubsystemSlug(slug)) {
    const subsystemId = getSubsystemIdFromSlug(slug);
    if (!subsystemId) return {};

    const content = getSubsystemDetailContent(subsystemId, locale);
    const messages = (await import(`../../../../../messages/${locale}.json`))
      .default;
    const title = messages.technology.cip.subsystems[subsystemId].title;

    return {
      title: `${title} | CONATUS`,
      description: content.metaDescription,
    };
  }

  return {};
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (isHardwareProductSlug(slug)) {
    const productId = getHardwareProductIdFromSlug(slug);
    if (!productId) notFound();
    return <TechnologyHardwareDetailPage productId={productId} />;
  }

  if (isProductionSubsystemSlug(slug)) {
    const subsystemId = getSubsystemIdFromSlug(slug);
    if (!subsystemId) notFound();
    return (
      <TechnologySubsystemDetailPage
        subsystemId={subsystemId as ProductionSubsystemId}
      />
    );
  }

  notFound();
}
