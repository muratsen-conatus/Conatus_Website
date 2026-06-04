import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featureKeys = ["modular", "multiTenant", "independent"] as const;

export function TechnologyHierarchySection() {
  const t = useTranslations("technology.cip.hierarchy");

  return (
    <section className="section-padding border-t border-border/60 bg-surface-muted">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <Image
              src="/technology/cip-architecture.png"
              alt={t("imageAlt")}
              width={1024}
              height={923}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="min-w-0">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              align="left"
              className="max-w-none"
            />

            <ul className="mt-8 list-disc space-y-3 border-t border-border/60 pt-8 pl-5 marker:text-[#0066cc]">
              {featureKeys.map((key) => (
                <li
                  key={key}
                  className="text-sm leading-relaxed text-foreground-muted sm:text-base"
                >
                  {t(`features.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
