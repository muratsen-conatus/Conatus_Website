import { getLocale, getTranslations } from "next-intl/server";
import { TechnologyHardwareDetailHero } from "@/components/technology/TechnologyHardwareDetailHero";
import { TechnologyHardwareDetailSections } from "@/components/technology/TechnologyHardwareDetailSections";
import { PageCtaSection } from "@/components/ui/PageCtaSection";
import { getHardwareDetailContent } from "@/data/technology/hardware-detail-content";
import type { HardwareProductId } from "@/data/technology/hardware-product-images";

type TechnologyHardwareDetailPageProps = {
  productId: HardwareProductId;
};

export async function TechnologyHardwareDetailPage({
  productId,
}: TechnologyHardwareDetailPageProps) {
  const locale = await getLocale();
  const content = getHardwareDetailContent(productId, locale);
  const tCta = await getTranslations("technology.cta");

  return (
    <>
      <TechnologyHardwareDetailHero productId={productId} content={content} />
      <TechnologyHardwareDetailSections content={content} />
      <PageCtaSection
        title={tCta("title")}
        description={tCta("description")}
        buttonLabel={tCta("contact")}
      />
    </>
  );
}
