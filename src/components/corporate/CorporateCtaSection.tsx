import { useTranslations } from "next-intl";
import { PageCtaSection } from "@/components/ui/PageCtaSection";

export function CorporateCtaSection() {
  const t = useTranslations("corporate.cta");

  return (
    <PageCtaSection
      title={t("title")}
      description={t("description")}
      buttonLabel={t("contact")}
    />
  );
}
