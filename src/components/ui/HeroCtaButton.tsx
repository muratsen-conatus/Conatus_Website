"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type HeroCtaButtonProps = {
  label: string;
  className?: string;
};

export function HeroCtaButton({ label, className }: HeroCtaButtonProps) {
  return (
    <Link
      href="/iletisim"
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]",
        className,
      )}
    >
      {label}
    </Link>
  );
}
