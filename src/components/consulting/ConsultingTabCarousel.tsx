"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

export type ConsultingTabSlide = {
  id: string;
  label: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ConsultingTabCarouselProps = {
  slides: ConsultingTabSlide[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  intervalMs?: number;
  className?: string;
};

export function ConsultingTabCarousel({
  slides,
  activeIndex,
  onActiveIndexChange,
  intervalMs = 6000,
  className,
}: ConsultingTabCarouselProps) {
  const t = useTranslations("consulting.cases.carousel");
  const count = slides.length;
  const safeIndex = count > 0 ? activeIndex % count : 0;
  const slide = slides[safeIndex];

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      onActiveIndexChange((index + count) % count);
    },
    [count, onActiveIndexChange],
  );

  const next = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);
  const prev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = window.setInterval(next, intervalMs);
    return () => window.clearInterval(timer);
  }, [count, intervalMs, next]);

  if (!slide) {
    return (
      <div
        className={cn(
          "flex h-full min-h-[220px] items-center justify-center rounded-xl border border-dashed border-border bg-surface-muted/50",
          className,
        )}
      />
    );
  }

  const hasImage = Boolean(slide.imageSrc);

  return (
    <div className={cn("flex h-full min-h-[220px] flex-col", className)}>
      <div
        className={cn(
          "relative flex flex-1 flex-col overflow-hidden rounded-xl border border-brand-200/60 shadow-sm",
          hasImage
            ? "bg-surface-muted"
            : "bg-gradient-to-br from-brand-50/90 via-surface to-brand-100/40 p-6 sm:p-8",
        )}
      >
        {hasImage ? (
          <>
            <Image
              key={slide.imageSrc}
              src={slide.imageSrc!}
              alt={slide.imageAlt ?? slide.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
              aria-hidden
            />
            <div
              key={slide.id}
              className="relative z-[1] mt-auto p-5 text-left sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-brand-200">
                {slide.label}
              </p>
              <p className="mt-2 line-clamp-3 text-base font-bold leading-snug text-white sm:text-lg">
                {slide.title}
              </p>
            </div>
          </>
        ) : (
          <div
            key={slide.id}
            className="flex flex-1 flex-col justify-center p-6 text-center transition-opacity duration-300 sm:p-8"
          >
            <p className="text-sm font-bold tabular-nums text-accent">{slide.label}</p>
            <p className="mt-4 text-lg font-bold leading-snug text-foreground sm:text-xl">
              {slide.title}
            </p>
            {slide.description ? (
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {slide.description}
              </p>
            ) : null}
          </div>
        )}

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-surface/95 text-lg text-foreground shadow-sm transition-colors hover:border-brand-300 hover:text-accent sm:left-3"
              aria-label={t("previous")}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-surface/95 text-lg text-foreground shadow-sm transition-colors hover:border-brand-300 hover:text-accent sm:right-3"
              aria-label={t("next")}
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === safeIndex
                  ? "w-8 bg-accent"
                  : "w-2 bg-border-strong hover:bg-brand-300",
              )}
              aria-label={t("slide", { number: index + 1 })}
              aria-current={index === safeIndex}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
