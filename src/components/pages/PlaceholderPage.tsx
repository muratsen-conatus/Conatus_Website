"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const t = useTranslations("common");

  return (
    <section className="page-start-padding">
      <div className="container-wide">
        <SectionHeading title={title} description={description} align="left" />
        <p className="mt-8 max-w-2xl text-foreground-muted">{t("placeholderBody")}</p>
      </div>
    </section>
  );
}
