"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";

export function ContactHero() {
  const t = useTranslations("contact.hero");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    />
  );
}
