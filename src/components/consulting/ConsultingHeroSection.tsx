import { useTranslations } from "next-intl";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroCtaButton } from "@/components/ui/HeroCtaButton";
import { PageHero } from "@/components/ui/PageHero";
import { consultingHeroSlideSources } from "@/data/consulting/consulting-tab-images";
import { framedCarouselProps } from "@/lib/constants";

const heroSlideAltKeys = ["consulting", "karakuri", "lines", "fixtures"] as const;

export function ConsultingHeroSection() {
  const t = useTranslations("consulting.hero");
  const tSlides = useTranslations("consulting.hero.slides");

  const slides = consultingHeroSlideSources.map((src, index) => ({
    src,
    alt: tSlides(heroSlideAltKeys[index]),
  }));

  return (
    <PageHero
      asideAlign="start"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      actions={<HeroCtaButton label={t("cta")} />}
      aside={<HeroCarousel slides={slides} {...framedCarouselProps} className="w-full" />}
    />
  );
}
