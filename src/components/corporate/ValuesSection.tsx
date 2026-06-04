"use client";

import { useTranslations } from "next-intl";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepEyebrow } from "@/components/ui/StepEyebrow";
import { corporateAssets, framedCarouselProps } from "@/lib/constants";

export function ValuesSection() {
  const t = useTranslations("corporate.values");

  const split = corporateAssets.valuesTabSplit;
  const valuesSlides = corporateAssets.valuesImages
    .slice(0, split)
    .map((src, index) => ({
      src,
      alt: `${t("tabs.values")} ${index + 1}`,
    }));
  const principlesSlides = corporateAssets.valuesImages
    .slice(split)
    .map((src, index) => ({
      src,
      alt: `${t("tabs.principles")} ${index + 1}`,
    }));

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          className="max-w-none w-full"
          descriptionClassName="mx-auto mt-4 max-w-none text-base leading-snug text-foreground-muted sm:text-lg lg:whitespace-nowrap"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <div className="mb-5 flex justify-center lg:justify-start">
              <StepEyebrow className="text-[#0066cc]">
                {t("tabs.values")}
              </StepEyebrow>
            </div>
            <HeroCarousel slides={valuesSlides} {...framedCarouselProps} />
          </div>

          <div>
            <div className="mb-5 flex justify-center lg:justify-start">
              <StepEyebrow className="text-[#0066cc]">
                {t("tabs.principles")}
              </StepEyebrow>
            </div>
            <HeroCarousel slides={principlesSlides} {...framedCarouselProps} />
          </div>
        </div>
      </div>
    </section>
  );
}
