import { useTranslations } from "next-intl";
import { PageCtaSection } from "@/components/ui/PageCtaSection";

export function ConsultingCtaSection() {
  const t = useTranslations("consulting.cta");

  return (
    <PageCtaSection
      title={t("title")}
      description={t("description")}
      buttonLabel={t("contact")}
    />
  );
}
