import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

const links = [
  { key: "consulting" as const, href: "/danismanlik" as const },
  { key: "training" as const, href: "/egitim" as const },
] as const;

/** Danışmanlık / eğitim hero’larındaki ikon kutusu ile aynı renk paleti */
const ecosystemLinkClass =
  "inline-flex items-center gap-3 rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-brand-100/50 to-brand-50 px-6 py-4 text-accent shadow-lg shadow-brand-600/10 transition-colors hover:border-accent/50 hover:shadow-brand-600/20";

export function TechnologyEcosystemSection() {
  const t = useTranslations("technology.ecosystem");

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {links.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={ecosystemLinkClass}
            >
              <ServiceIcon
                type={key}
                className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
              />
              <span className="font-semibold">{t(key)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
