"use client";

import { cn } from "@/lib/utils";

type PaginationTheme = "accent" | "navy";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  labels: {
    previous: string;
    next: string;
    page: string;
  };
  className?: string;
  theme?: PaginationTheme;
};

const paginationThemes: Record<
  PaginationTheme,
  { nav: string; active: string }
> = {
  accent: {
    nav: "hover:border-accent/40 hover:text-accent",
    active: "border-accent bg-accent text-white",
  },
  navy: {
    nav: "hover:border-brand-800/50 hover:text-brand-900",
    active: "border-brand-900 bg-brand-900 text-white",
  },
};

function pageRange(current: number, total: number): number[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages = new Set<number>([1, total, current, current - 1, current + 1]);
  return [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  labels,
  className,
  theme = "accent",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = pageRange(page, totalPages);
  const styles = paginationThemes[theme];

  return (
    <nav
      aria-label={labels.page}
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className={cn(
          "rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-40",
          styles.nav,
        )}
      >
        {labels.previous}
      </button>

      <ul className="flex flex-wrap items-center gap-1">
        {pages.map((p, index) => {
          const prev = pages[index - 1];
          const showEllipsis = prev !== undefined && p - prev > 1;
          return (
            <li key={p} className="flex items-center gap-1">
              {showEllipsis ? (
                <span className="px-1 text-foreground-muted" aria-hidden>
                  …
                </span>
              ) : null}
              <button
                type="button"
                aria-current={p === page ? "page" : undefined}
                onClick={() => onPageChange(p)}
                className={cn(
                  "min-w-9 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                  p === page
                    ? styles.active
                    : cn("border-border text-foreground", styles.nav),
                )}
              >
                {p}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className={cn(
          "rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-40",
          styles.nav,
        )}
      >
        {labels.next}
      </button>
    </nav>
  );
}
