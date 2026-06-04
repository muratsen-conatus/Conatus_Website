import { useTranslations } from "next-intl";
import { PageCtaSection } from "@/components/ui/PageCtaSection";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <PageCtaSection
      title={t("title")}
      description={t("description")}
      buttonLabel={t("button")}
    />
  );
}
