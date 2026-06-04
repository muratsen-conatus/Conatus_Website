"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import {
  TRAINING_CERTIFICATE_CAROUSEL_VARIANTS,
  TRAINING_CERTIFICATE_SAMPLE_IMAGE,
} from "@/components/training/certificates/training-certificate-carousel";
import { cn } from "@/lib/utils";

type TrainingCertificateCarouselProps = {
  className?: string;
  intervalMs?: number;
};

export function TrainingCertificateCarousel({
  className,
  intervalMs = 6000,
}: TrainingCertificateCarouselProps) {
  const t = useTranslations("training.detail.certificates");
  const tCarousel = useTranslations("training.detail.certificates.carousel");
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = TRAINING_CERTIFICATE_CAROUSEL_VARIANTS.map((variant) => ({
    id: variant,
    label: t(`${variant}.documentTitle`),
    imageAlt: t(`${variant}.documentTitle`),
  }));

  const count = slides.length;
  const safeIndex = count > 0 ? activeIndex % count : 0;
  const slide = slides[safeIndex];

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      setActiveIndex((index + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);
  const prev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = window.setInterval(next, intervalMs);
    return () => window.clearInterval(timer);
  }, [count, intervalMs, next]);

  if (!slide) return null;

  return (
    <div className={cn("flex h-full min-h-0 flex-col", className)}>
      <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center">
        <div
          className="relative w-full max-w-[20rem] shadow-xl"
          style={{ aspectRatio: "842 / 595" }}
        >
          {slides.map((s, index) => (
            <div
              key={s.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-in-out",
                index === safeIndex
                  ? "opacity-100"
                  : "pointer-events-none opacity-0",
              )}
              aria-hidden={index !== safeIndex}
            >
              <Image
                src={TRAINING_CERTIFICATE_SAMPLE_IMAGE}
                alt={s.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 20rem"
                priority={index === 0}
              />
            </div>
          ))}

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute -left-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-lg text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-black/50 sm:-left-2 sm:h-9 sm:w-9"
                aria-label={tCarousel("previous")}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute -right-1 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-lg text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-black/50 sm:-right-2 sm:h-9 sm:w-9"
                aria-label={tCarousel("next")}
              >
                ›
              </button>
            </>
          ) : null}
        </div>

        <p
          key={slide.id}
          className="mt-3 shrink-0 text-center text-xs font-bold uppercase tracking-wide text-white/95"
        >
          {slide.label}
        </p>
      </div>

      {count > 1 ? (
        <div className="mt-3 flex shrink-0 justify-center gap-2 pb-1">
          {slides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === safeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80",
              )}
              aria-label={tCarousel("slide", { number: index + 1 })}
              aria-current={index === safeIndex}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
