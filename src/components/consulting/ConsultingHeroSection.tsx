import { useTranslations } from "next-intl";
import { ConsultingIcon } from "@/components/icons/ServiceIcons";
import { HeroCtaButton } from "@/components/ui/HeroCtaButton";
import { PageHero } from "@/components/ui/PageHero";

export function ConsultingHeroSection() {
  const t = useTranslations("consulting.hero");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      actions={<HeroCtaButton label={t("cta")} />}
      aside={
        <div
          className="flex h-40 w-40 items-center justify-center rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-brand-100/50 to-brand-50 text-accent shadow-lg shadow-brand-600/10 sm:h-48 sm:w-48"
          aria-hidden
        >
          <ConsultingIcon className="h-20 w-20 sm:h-24 sm:w-24" />
        </div>
      }
    />
  );
}
