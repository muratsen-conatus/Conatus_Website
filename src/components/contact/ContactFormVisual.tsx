"use client";

import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const stepKeys = ["submit", "review", "followup"] as const;

const timelineCol = "2.25rem";

export function ContactFormVisual() {
  const t = useTranslations("contact.visual");

  return (
    <div className="grid h-full min-h-0 grid-rows-2">
      <div className="flex min-h-0 items-center justify-center px-3 py-4 sm:px-4 sm:py-5">
        <div
          className="contact-visual-root relative aspect-[8/5] w-full max-w-[14rem] sm:max-w-[17rem] lg:max-w-[19rem]"
          aria-hidden
        >
        <div className="contact-visual-grid absolute inset-0 opacity-20" />
        <div className="contact-visual-orb contact-visual-orb-a absolute left-[12%] top-[20%] h-[38%] w-[38%] rounded-full bg-brand-300/45 blur-2xl" />
        <div className="contact-visual-orb contact-visual-orb-b absolute bottom-[15%] right-[8%] h-[42%] w-[42%] rounded-full bg-accent/18 blur-3xl" />
        <div className="contact-visual-orb contact-visual-orb-c absolute left-[42%] top-[50%] h-[26%] w-[26%] rounded-full bg-brand-200/55 blur-xl" />

        <div className="absolute left-1/2 top-1/2 aspect-square h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2">
          <div className="contact-visual-ring h-full w-full rounded-full border border-brand-300/55" />
        </div>
        <div className="absolute left-1/2 top-1/2 aspect-square h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2">
          <div className="contact-visual-ring contact-visual-ring-inner h-full w-full rounded-full border border-dashed border-brand-400/50" />
        </div>

        <svg
          className="absolute inset-0 h-full w-full opacity-75"
          viewBox="0 0 320 180"
          fill="none"
        >
          <path
            className="contact-visual-path"
            d="M40 90 Q160 40 280 90"
            stroke="#0066cc"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            className="contact-visual-path contact-visual-path-delayed"
            d="M60 120 Q160 150 260 70"
            stroke="#0066cc"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        <div className="contact-visual-node contact-visual-node-1 absolute left-[16%] top-[36%] h-2.5 w-2.5 rounded-full bg-accent" />
        <div className="contact-visual-node contact-visual-node-2 absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-brand-400" />
        <div className="contact-visual-node contact-visual-node-3 absolute bottom-[32%] left-[40%] h-3 w-3 rounded-full border-2 border-accent bg-white/80" />
        </div>
      </div>

      <div className="flex min-h-0 flex-col justify-end">
        <div
          className="rounded-xl border border-brand-200/55 bg-white/55 p-4 shadow-sm shadow-brand-600/5 backdrop-blur-[2px] sm:rounded-2xl sm:p-5"
          style={{ ["--timeline-col" as string]: timelineCol } as CSSProperties}
        >
          <div
            className="grid gap-x-3 border-b border-brand-200/60 pb-4"
            style={{ gridTemplateColumns: `${timelineCol} minmax(0, 1fr)` }}
          >
            <div className="col-start-2 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {t("eyebrow")}
              </p>
              <h2 className="mt-1 text-base font-bold leading-snug text-foreground sm:text-lg">
                {t("processTitle")}
              </h2>
            </div>
          </div>

          <ol className="mt-4 space-y-0">
            {stepKeys.map((key, index) => (
              <li
                key={key}
                className={cn(
                  "relative grid gap-x-3",
                  index < stepKeys.length - 1 ? "pb-8 sm:pb-9" : "pb-0",
                )}
                style={{ gridTemplateColumns: `${timelineCol} minmax(0, 1fr)` }}
              >
                {index < stepKeys.length - 1 ? (
                  <span
                    className="absolute bottom-0 top-9 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-400 to-brand-200"
                    style={{ left: "calc(var(--timeline-col) / 2)" }}
                    aria-hidden
                  />
                ) : null}

                <span
                  className={cn(
                    "relative z-10 flex h-9 w-9 items-center justify-center justify-self-center rounded-full bg-accent text-xs font-bold text-white shadow-md shadow-brand-600/20",
                    index === 0 && "contact-visual-node-1",
                    index === 1 && "contact-visual-node-2",
                    index === 2 && "contact-visual-node-3",
                  )}
                >
                  {index + 1}
                </span>

                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    {t(`process.${key}.title`)}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                    {t(`process.${key}.text`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
