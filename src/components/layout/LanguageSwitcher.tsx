"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M2 12h20" />
      <path
        strokeLinecap="round"
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const switchLocale = (loc: Locale) => {
    if (loc === locale) {
      setOpen(false);
      return;
    }

    if (
      pathname === "/kurumsal/ekip/[slug]" ||
      pathname === "/egitim/[slug]" ||
      pathname === "/egitim/program/[slug]" ||
      pathname === "/teknoloji/[slug]"
    ) {
      if (typeof params.slug === "string") {
        router.replace(
          { pathname, params: { slug: params.slug } },
          { locale: loc },
        );
      } else {
        router.replace(
          pathname.startsWith("/egitim")
            ? "/egitim"
            : pathname.startsWith("/teknoloji")
              ? "/teknoloji"
              : "/kurumsal",
          { locale: loc },
        );
      }
      setOpen(false);
      return;
    }
    router.replace(pathname, { locale: loc });
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={tCommon("language")}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition-colors",
          "hover:border-brand-200 hover:bg-brand-50/50",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          open && "border-brand-200 bg-brand-50/50",
        )}
      >
        <GlobeIcon className="h-4 w-4 shrink-0 text-[#0066cc]" />
        <span>{t(`localeNames.${locale}`)}</span>
        <ChevronIcon
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-foreground-muted transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={tCommon("language")}
          className="absolute right-0 top-full z-50 mt-1.5 min-w-full overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg shadow-black/8"
        >
          {routing.locales.map((loc) => (
            <li key={loc} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={locale === loc}
                onClick={() => switchLocale(loc)}
                className={cn(
                  "flex w-full items-center px-4 py-2 text-left text-sm transition-colors",
                  locale === loc
                    ? "bg-brand-50 font-semibold text-[#0066cc]"
                    : "text-foreground-muted hover:bg-surface-muted hover:text-foreground",
                )}
              >
                {t(`localeNames.${loc}`)}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
