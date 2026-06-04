import { useTranslations } from "next-intl";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { framedCarouselProps, whyUsSlideSources } from "@/lib/constants";

const itemKeys = ["holistic", "field", "measurable"] as const;
const slideAltKeys = ["slide1", "slide2", "slide3"] as const;

export function WhyUsSection() {
  const t = useTranslations("home.whyUs");
  const tSlides = useTranslations("home.whyUs.slides");

  const slides = whyUsSlideSources.map((src, index) => ({
    src,
    alt: tSlides(slideAltKeys[index]),
  }));

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("subtitle")}
        />

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <HeroCarousel slides={slides} {...framedCarouselProps} className="w-full" />

          <ol className="flex h-full min-h-0 flex-col justify-between gap-5 sm:gap-6">
            {itemKeys.map((key, index) => (
              <li key={key}>
                <p className="text-sm font-bold tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {t(`items.${key}.title`)}
                </h3>
                <div className="mt-2.5 h-1 w-12 rounded-full bg-accent" aria-hidden />
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {t(`items.${key}.description`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
