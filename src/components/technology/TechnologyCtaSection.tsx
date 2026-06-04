import { useTranslations } from "next-intl";
import { PageCtaSection } from "@/components/ui/PageCtaSection";

export function TechnologyCtaSection() {
  const t = useTranslations("technology.cta");

  return (
    <PageCtaSection
      title={t("title")}
      description={t("description")}
      buttonLabel={t("contact")}
    />
  );
}
