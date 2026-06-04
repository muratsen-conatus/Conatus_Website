"use client";

import Image from "next/image";
import type { CarouselTestimonial } from "@/data/technology/subsystem-testimonials-carousel";
import { cn } from "@/lib/utils";

type TechnologySubsystemTestimonialsMarqueeProps = {
  items: CarouselTestimonial[];
};

function TestimonialQuoteMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      className={cn("h-7 w-10 text-accent sm:h-8 sm:w-11", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M8 28V14.5c0-5.2 2.8-8.8 8.4-10.8L14 0C5.2 2.8 0 9.2 0 18.2V28h8zm24 0V14.5c0-5.2 2.8-8.8 8.4-10.8L38 0c-8.8 2.8-14 9.2-14 18.2V28h8z"
      />
    </svg>
  );
}

const CARD_CLASS =
  "grid h-[32rem] w-[22rem] shrink-0 grid-rows-[14.25rem_minmax(0,1fr)_auto] justify-items-center rounded-2xl border border-border bg-surface px-8 pt-8 pb-10 text-center shadow-sm";

function TestimonialMarqueeCard({ item }: { item: CarouselTestimonial }) {
  return (
    <article className={CARD_CLASS}>
      <header className="flex h-full w-full flex-col items-center justify-start gap-5">
        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-brand-100 bg-surface-muted">
          <Image
            src={item.imageSrc}
            alt={item.name}
            fill
            sizes="176px"
            className="object-cover object-top"
          />
        </div>
        <TestimonialQuoteMark className="shrink-0" />
      </header>

      <blockquote className="flex w-full min-h-0 items-center justify-center self-stretch overflow-hidden px-0.5 py-3">
        <p className="line-clamp-5 w-full text-base italic leading-snug text-foreground-muted">
          {item.quote}
        </p>
      </blockquote>

      <footer className="flex w-full min-h-[5.75rem] flex-col justify-center gap-1 self-stretch border-t border-border/70 pt-5">
        <h3 className="line-clamp-1 text-xl font-bold leading-tight text-foreground">
          {item.name}
        </h3>
        <p className="line-clamp-1 text-sm font-medium leading-snug text-accent">
          {item.role}
        </p>
        <p className="line-clamp-1 text-sm leading-snug text-foreground-muted">
          {item.company}
        </p>
      </footer>
    </article>
  );
}

export function TechnologySubsystemTestimonialsMarquee({
  items,
}: TechnologySubsystemTestimonialsMarqueeProps) {
  if (items.length === 0) return null;

  const track = [...items, ...items];

  return (
    <div className="testimonials-marquee relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-muted to-transparent sm:w-20 lg:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-muted to-transparent sm:w-20 lg:w-28" />

      <div
        className="testimonials-marquee-track flex w-max items-stretch gap-6 py-6 sm:gap-8 sm:py-8 lg:gap-10"
        role="list"
      >
        {track.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="h-[32rem] w-[22rem] shrink-0"
            role="listitem"
          >
            <TestimonialMarqueeCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
