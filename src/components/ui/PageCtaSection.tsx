import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { CtaSectionBackdrop } from "@/components/ui/CtaSectionBackdrop";
import { trainingDetailCtaSectionClass } from "@/lib/training-detail-surface";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PageCtaSectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href?: ComponentProps<typeof Link>["href"];
  variant?: "light" | "dark" | "inset" | "heroMatch";
  className?: string;
};

export function PageCtaSection({
  title,
  description,
  buttonLabel,
  href = "/iletisim",
  variant = "light",
  className,
}: PageCtaSectionProps) {
  const isDark = variant === "dark";
  const isInset = variant === "inset";
  const isHeroMatch = variant === "heroMatch";

  return (
    <section
      className={cn(
        "relative overflow-hidden text-center",
        isHeroMatch
          ? cn("section-padding", trainingDetailCtaSectionClass)
          : isInset
            ? "rounded-2xl border border-brand-200/60 px-6 py-8 sm:px-10 sm:py-10"
            : isDark
              ? "border-t border-border/80 py-14 sm:py-16"
              : "section-padding border-y border-brand-200/60",
        className,
      )}
    >
      {!isHeroMatch ? (
        <CtaSectionBackdrop variant={isDark ? "dark" : "light"} />
      ) : null}

      <div className={cn("relative z-10", !isInset && "container-wide")}>
        {isHeroMatch ? (
          <div
            className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent"
            aria-hidden
          />
        ) : null}
        <h2
          className={cn(
            "font-bold tracking-tight",
            isDark
              ? "text-2xl text-white sm:text-3xl"
              : isInset
                ? "text-xl text-foreground sm:text-2xl"
                : isHeroMatch
                  ? "text-2xl text-foreground sm:text-3xl"
                  : "text-3xl text-foreground sm:text-4xl",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 leading-relaxed",
            isDark
              ? "max-w-xl text-base text-white/80"
              : isInset
                ? "max-w-2xl text-sm text-foreground-muted sm:text-base"
                : isHeroMatch
                  ? "max-w-2xl text-base text-foreground-muted sm:text-lg"
                  : "max-w-2xl text-lg text-foreground-muted",
          )}
        >
          {description}
        </p>
        <div className="mt-8 flex justify-center">
          {isDark ? (
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-400"
            >
              {buttonLabel}
            </Link>
          ) : (
            <Button href={href} variant="primary" size="lg">
              {buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
