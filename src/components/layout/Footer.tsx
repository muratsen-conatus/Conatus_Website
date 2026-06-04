import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FooterSocialIcons } from "@/components/layout/FooterSocialIcons";
import { logos, siteConfig, socialLinks } from "@/lib/constants";

const footerLinks = [
  { href: "/gizlilik-kvkk" as const, labelKey: "privacy" as const },
  { href: "/iletisim" as const, labelKey: "contact" as const },
  { href: "/kurumsal" as const, labelKey: "corporate" as const },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const social = socialLinks.map((item) => ({
    id: item.id,
    href: item.href,
    label: t(item.labelKey),
  }));

  return (
    <footer className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-950 text-white">
      <div className="container-wide grid min-h-16 grid-cols-1 items-center gap-y-3 px-4 sm:h-16 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-x-8 sm:gap-y-0 sm:px-6 lg:h-20 lg:px-8">
        <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
          <Link href="/" className="shrink-0 opacity-95 transition-opacity hover:opacity-100">
            <Image
              src={logos.white}
              alt={siteConfig.name}
              width={120}
              height={32}
              className="h-8 w-auto lg:h-9"
            />
          </Link>
          <p className="text-xs leading-snug text-white/80 sm:text-sm">
            © {year}
            <span className="text-white/60"> · </span>
            {t("rights")}
          </p>
        </div>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs sm:text-sm"
          aria-label={t("ariaLabel")}
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-white/90 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center sm:justify-end">
          <FooterSocialIcons links={social} />
        </div>
      </div>
    </footer>
  );
}
