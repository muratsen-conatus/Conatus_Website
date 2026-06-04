"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
  intervalMs?: number;
  className?: string;
};

export function ImageCarousel({
  slides,
  intervalMs = 5000,
  className,
}: ImageCarouselProps) {
  const t = useTranslations("common.carousel");
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(next, intervalMs);
    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs, next]);

  if (slides.length === 0) return null;

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-muted shadow-sm lg:aspect-[16/11]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === activeIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0",
            )}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}

        {slides.length > 1 ? (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === activeIndex
                    ? "w-8 bg-[#0066cc]"
                    : "w-2 bg-white/80 hover:bg-white",
                )}
                aria-label={t("slide", { number: index + 1 })}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
