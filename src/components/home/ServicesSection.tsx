import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

const services = [
  { key: "consulting" as const, href: "/danismanlik" as const },
  { key: "training" as const, href: "/egitim" as const },
  { key: "technology" as const, href: "/teknoloji" as const },
] as const;

export function ServicesSection() {
  const t = useTranslations("home.services");

  return (
    <section className="section-padding bg-surface-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface text-center shadow-sm transition-colors hover:border-accent/50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="flex flex-1 flex-col items-center px-6 py-8 sm:px-8 sm:py-10">
                <div className="mb-5 flex h-16 w-16 items-center justify-center text-[#0066cc]">
                  <ServiceIcon type={service.key} />
                </div>

                <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {t(`${service.key}.title`)}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
                  {t(`${service.key}.description`)}
                </p>
              </div>

              <div className="border-t border-border/60 px-6 py-3.5 sm:px-8">
                <span className="inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-brand-700">
                  {t("learnMore")}
                  <span
                    className="ml-1 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
