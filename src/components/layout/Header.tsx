"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { logos, navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Pathname } from "@/i18n/pathnames";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: Pathname) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logos.color}
            alt="CONATUS"
            width={140}
            height={40}
            className="h-8 w-auto lg:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("ariaMain")}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-brand-50 text-[#0066cc]"
                  : "text-foreground-muted hover:text-foreground",
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button href="/iletisim" size="sm">
            {t("contact")}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? t("menuClose") : t("menuOpen")}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden
          >
            {open ? (
              <>
                <path strokeLinecap="round" d="M6 6l12 12" />
                <path strokeLinecap="round" d="M6 18L18 6" />
              </>
            ) : (
              <>
                <path strokeLinecap="round" d="M4 7h16" />
                <path strokeLinecap="round" d="M4 12h16" />
                <path strokeLinecap="round" d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="container-wide flex flex-col gap-1 py-4" aria-label={t("ariaMobile")}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium",
                  isActive(item.href)
                    ? "bg-brand-50 text-[#0066cc]"
                    : "text-foreground",
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between px-4">
              <LanguageSwitcher />
              <Link
                href="/iletisim"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                {t("contact")}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
