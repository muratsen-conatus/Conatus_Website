import { useTranslations } from "next-intl";
import { EnvelopeIcon, PhoneIcon } from "@/components/icons/ContactIcons";
import { siteConfig } from "@/lib/constants";

export function ContactInfoSection() {
  const t = useTranslations("contact.info");

  return (
    <section className="border-t border-border bg-surface-muted py-12 sm:py-14">
      <div className="container-wide">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          {t("directEyebrow")}
        </p>
        <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <EnvelopeIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                {t("emailLabel")}
              </span>
              <span className="mt-0.5 block text-base font-bold text-foreground">
                {siteConfig.email}
              </span>
            </span>
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                {t("phoneLabel")}
              </span>
              <span className="mt-0.5 block text-base font-bold text-foreground">
                {siteConfig.phone}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
