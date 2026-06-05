"use client";

import { useTranslations } from "next-intl";
import { TechnologyIllustration } from "@/components/technology/TechnologyIllustration";
import { cn } from "@/lib/utils";

const nodeConfig = [
  {
    key: "internal" as const,
    illustration: "integration-internal" as const,
    position: "left-[6%] top-[12%] sm:left-[8%] sm:top-[14%]",
    floatClass: "integration-hub-node-1",
    lineEnd: { x: 95, y: 95 },
  },
  {
    key: "external" as const,
    illustration: "integration-external" as const,
    position: "right-[6%] top-[12%] sm:right-[8%] sm:top-[14%]",
    floatClass: "integration-hub-node-2",
    lineEnd: { x: 305, y: 95 },
  },
  {
    key: "flexible" as const,
    illustration: "integration-flexible" as const,
    position: "bottom-[8%] left-1/2 -translate-x-1/2 sm:bottom-[10%]",
    floatClass: "integration-hub-node-3",
    lineEnd: { x: 200, y: 305 },
  },
];

type TechnologyIntegrationHubVisualProps = {
  className?: string;
};

export function TechnologyIntegrationHubVisual({
  className,
}: TechnologyIntegrationHubVisualProps) {
  const t = useTranslations("technology.cip.integration.hub");
  const tItems = useTranslations("technology.cip.integration.items");

  const hubCenter = { x: 200, y: 200 };

  return (
    <figure
      className={cn("integration-hub-root relative mx-auto h-full w-full min-h-[280px]", className)}
      aria-label={t("figureLabel")}
    >
      <div className="integration-hub-grid absolute inset-0 opacity-25" aria-hidden />
      <div
        className="integration-hub-orb integration-hub-orb-a absolute left-[10%] top-[18%] h-[34%] w-[34%] rounded-full bg-brand-300/40 blur-2xl"
        aria-hidden
      />
      <div
        className="integration-hub-orb integration-hub-orb-b absolute bottom-[12%] right-[6%] h-[38%] w-[38%] rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />

      <div
        className="integration-hub-orbit-ring absolute left-1/2 top-1/2 aspect-square h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-300/45"
        aria-hidden
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        {nodeConfig.map(({ key, lineEnd }, index) => (
          <path
            key={key}
            className={cn(
              "integration-hub-path text-accent",
              index === 1 && "integration-hub-path-delay-2",
              index === 2 && "integration-hub-path-delay-3",
            )}
            d={`M${lineEnd.x} ${lineEnd.y} Q${(lineEnd.x + hubCenter.x) / 2} ${(lineEnd.y + hubCenter.y) / 2 - (index === 2 ? 28 : 18)} ${hubCenter.x} ${hubCenter.y}`}
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />
        ))}
        <circle
          className="integration-hub-flow integration-hub-flow-1"
          r="4"
          fill="#0066cc"
          fillOpacity="0.85"
        >
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M95 95 Q147 130 200 200"
          />
        </circle>
        <circle
          className="integration-hub-flow integration-hub-flow-2"
          r="3.5"
          fill="#0066cc"
          fillOpacity="0.7"
        >
          <animateMotion
            dur="5.5s"
            repeatCount="indefinite"
            begin="-1.8s"
            path="M305 95 Q252 130 200 200"
          />
        </circle>
        <circle
          className="integration-hub-flow integration-hub-flow-3"
          r="3.5"
          fill="#0066cc"
          fillOpacity="0.7"
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            begin="-3.2s"
            path="M200 305 Q200 252 200 200"
          />
        </circle>
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="integration-hub-center flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-2xl border-2 border-accent/50 bg-white/90 shadow-lg shadow-brand-600/15 backdrop-blur-sm sm:h-20 sm:w-20">
          <span className="text-lg font-bold text-accent sm:text-xl">{t("centerTitle")}</span>
        </div>
      </div>

      {nodeConfig.map(({ key, illustration, position, floatClass }) => (
        <div key={key} className={cn("absolute z-10", position)}>
          <div
            className={cn(
              "integration-hub-node flex w-[5.5rem] flex-col items-center gap-1.5 rounded-xl border border-brand-200/70 bg-white/85 px-2 py-2.5 text-center shadow-md shadow-brand-600/10 backdrop-blur-sm sm:w-[7rem] sm:gap-2 sm:px-2.5 sm:py-3",
              floatClass,
            )}
          >
            <TechnologyIllustration
              variant={illustration}
              className="h-8 w-8 text-accent sm:h-9 sm:w-9"
            />
            <span className="text-[9px] font-semibold uppercase leading-tight tracking-wide text-accent sm:text-[10px]">
              {tItems(`${key}.eyebrow`)}
            </span>
          </div>
        </div>
      ))}

      <figcaption className="absolute inset-x-0 bottom-1 text-center text-xs text-foreground-muted sm:text-sm">
        {t("caption")}
      </figcaption>
    </figure>
  );
}
