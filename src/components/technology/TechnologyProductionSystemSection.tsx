import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnologySubsystemCard } from "@/components/technology/TechnologySubsystemCard";
import { productionSubsystemIds } from "@/lib/technology-catalog";

export function TechnologyProductionSystemSection() {
  const t = useTranslations("technology.cip");

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("production.eyebrow")}
          title={t("production.title")}
          description={t("production.description")}
        />

        <ul className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productionSubsystemIds.map((id) => (
            <li key={id} className="min-h-0">
              <TechnologySubsystemCard id={id} className="h-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
