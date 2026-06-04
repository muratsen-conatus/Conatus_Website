"use client";

import Image from "next/image";
import type { ReferenceLogo } from "@/lib/getReferenceLogos";

type ReferencesMarqueeProps = {
  logos: ReferenceLogo[];
  emptyMessage: string;
};

/** Tüm referans logoları aynı alan içinde gösterilir */
const LOGO_BOX_CLASS =
  "relative h-14 w-32 shrink-0 sm:h-16 sm:w-36";

export function ReferencesMarquee({ logos, emptyMessage }: ReferencesMarqueeProps) {
  if (logos.length === 0) {
    return (
      <p className="mt-12 text-center text-sm text-foreground-muted">
        {emptyMessage}
      </p>
    );
  }

  const track = [...logos, ...logos];

  return (
    <div className="references-marquee relative mt-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-24" />

      <div className="references-marquee-track flex w-max items-center gap-10 py-4 sm:gap-14">
        {track.map((logo, index) => (
          <div
            key={`${logo.filename}-${index}`}
            className="group flex h-20 w-40 shrink-0 items-center justify-center sm:h-24 sm:w-44"
          >
            <div
              className={`${LOGO_BOX_CLASS} transition-transform duration-300 ease-out group-hover:scale-105`}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="144px"
                className="object-contain object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
