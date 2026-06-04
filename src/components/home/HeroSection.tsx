import { useTranslations } from "next-intl";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroCtaButton } from "@/components/ui/HeroCtaButton";
import { PageHero } from "@/components/ui/PageHero";
import { framedCarouselProps, heroSlideSources } from "@/lib/constants";

const slideAltKeys = ["matrix", "consulting", "training", "technology"] as const;

export function HeroSection() {
  const t = useTranslations("home.hero");
  const tSlides = useTranslations("home.hero.slides");

  const slides = heroSlideSources.map((src, index) => ({
    src,
    alt: tSlides(slideAltKeys[index]),
  }));

  return (
    <PageHero
      asideAlign="start"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      actions={<HeroCtaButton label={t("ctaPrimary")} />}
      aside={<HeroCarousel slides={slides} {...framedCarouselProps} className="w-full" />}
    />
  );
}
