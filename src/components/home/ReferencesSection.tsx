import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReferencesMarquee } from "@/components/home/ReferencesMarquee";
import { getReferenceLogos } from "@/lib/getReferenceLogos";

export async function ReferencesSection() {
  const t = await getTranslations("home.references");
  const logos = getReferenceLogos();

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <ReferencesMarquee logos={logos} emptyMessage={t("empty")} />
      </div>
    </section>
  );
}
