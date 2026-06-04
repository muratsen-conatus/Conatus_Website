import { useTranslations } from "next-intl";
import { PageCtaSection } from "@/components/ui/PageCtaSection";

export function TrainingCtaSection() {
  const t = useTranslations("training.cta");

  return (
    <PageCtaSection
      title={t("title")}
      description={t("description")}
      buttonLabel={t("contact")}
    />
  );
}
