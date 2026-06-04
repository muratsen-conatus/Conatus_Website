"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  alt: string;
  imageFit?: "contain" | "cover";
};

type HeroCarouselProps = {
  slides: HeroSlide[];
  intervalMs?: number;
  /** Fotoğraflar için cover, grafikler için contain (varsayılan) */
  imageFit?: "contain" | "cover";
  /** Carousel kutu oranı (ör. yatay infografikler için aspect-[3/2]) */
  aspectClassName?: string;
  /** Görsel padding sınıfları (contain modunda) */
  imagePaddingClassName?: string;
  /** Dış sarmalayıcı (ör. yükseklik hizalama) */
  className?: string;
};

export function HeroCarousel({
  slides,
  intervalMs = 5000,
  imageFit = "contain",
  aspectClassName = "aspect-[4/3] sm:aspect-[5/4]",
  imagePaddingClassName = "p-4 sm:p-6",
  className,
}: HeroCarouselProps) {
  const t = useTranslations("common.carousel");
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(next, intervalMs);
    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs, next]);

  if (slides.length === 0) return null;

  return (
    <div className={cn("relative flex w-full flex-col", className)}>
      <div
        className={cn(
          "relative min-h-0 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm",
          aspectClassName,
        )}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={
                (slide.imageFit ?? imageFit) === "cover"
                  ? "object-cover object-center"
                  : cn("object-contain", imagePaddingClassName)
              }
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-foreground shadow-sm transition-colors hover:bg-surface"
            aria-label={t("previous")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
              <path strokeLinecap="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 text-foreground shadow-sm transition-colors hover:bg-surface"
            aria-label={t("next")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
              <path strokeLinecap="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="mt-3 flex shrink-0 justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === activeIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-border-strong hover:bg-accent",
                )}
                aria-label={t("slide", { number: index + 1 })}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
