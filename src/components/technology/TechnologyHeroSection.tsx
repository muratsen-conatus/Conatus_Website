import { useTranslations } from "next-intl";
import { TechnologyIcon } from "@/components/icons/ServiceIcons";
import { HeroCtaButton } from "@/components/ui/HeroCtaButton";
import { PageHero } from "@/components/ui/PageHero";

export function TechnologyHeroSection() {
  const t = useTranslations("technology.hero");
  const tSlogan = useTranslations("technology.slogan");

  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      actions={
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <HeroCtaButton label={t("cta")} />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold tracking-tight text-accent">
              {tSlogan("tag")}
            </span>
            <span className="text-xs text-foreground-muted">
              {tSlogan("note")}
            </span>
          </div>
        </div>
      }
      aside={
        <div
          className="flex h-40 w-40 items-center justify-center rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-brand-100/50 to-brand-50 text-[#0066cc] shadow-lg shadow-brand-600/10 sm:h-48 sm:w-48"
          aria-hidden
        >
          <TechnologyIcon className="h-20 w-20 sm:h-24 sm:w-24" />
        </div>
      }
    />
  );
}
