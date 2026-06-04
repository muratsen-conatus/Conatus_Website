import { getLocale, getTranslations } from "next-intl/server";
import { TechnologySubsystemTestimonialsMarquee } from "@/components/technology/TechnologySubsystemTestimonialsMarquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSubsystemTestimonialsCarousel } from "@/data/technology/subsystem-testimonials-carousel";

export async function TechnologySubsystemTestimonialsSection() {
  const locale = await getLocale();
  const t = await getTranslations("technology.subsystemDetail.testimonials");
  const items = getSubsystemTestimonialsCarousel(locale);
  const description = t("description");
  const trustIndustries = t("trustIndustries");

  return (
    <section className="section-padding border-t border-border/60 bg-gradient-to-b from-brand-50/70 via-surface-muted to-surface-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={description || undefined}
        />

        {trustIndustries ? (
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium text-foreground-subtle">
            {trustIndustries}
          </p>
        ) : null}
      </div>

      <div className="mt-10 sm:mt-12">
        <TechnologySubsystemTestimonialsMarquee items={items} />
      </div>
    </section>
  );
}
