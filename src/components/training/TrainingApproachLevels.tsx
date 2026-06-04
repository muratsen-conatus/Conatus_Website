import { useTranslations } from "next-intl";
import { StepEyebrow } from "@/components/ui/StepEyebrow";

const levelOrderTopToBottom = [8, 7, 6, 5, 4, 3, 2, 1] as const;

function VerticalAxis({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="flex h-full min-w-[4.25rem] flex-col items-center sm:min-w-[4.75rem]">
      <StepEyebrow className="shrink-0 px-0.5 text-center text-[0.65rem] leading-tight sm:text-xs">
        {top}
      </StepEyebrow>

      <svg
        viewBox="0 0 24 240"
        className="my-1.5 h-full min-h-[10rem] w-5 flex-1 sm:min-h-[12rem]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line
          x1="12"
          y1="18"
          x2="12"
          y2="222"
          stroke="#000000"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <polygon points="12,8 8.5,17 15.5,17" fill="#000000" />
        <polygon points="12,232 8.5,223 15.5,223" fill="#000000" />
      </svg>

      <StepEyebrow className="shrink-0 px-0.5 text-center text-[0.65rem] leading-tight sm:text-xs">
        {bottom}
      </StepEyebrow>
    </div>
  );
}

function LevelRow({
  badge,
  description,
}: {
  badge: string;
  description: string;
}) {
  return (
    <div className="flex items-stretch gap-2 sm:gap-2.5">
      <div className="flex w-[4.5rem] shrink-0 items-center justify-center rounded-lg bg-accent px-1.5 py-2 text-center text-[0.6875rem] font-bold leading-tight text-white shadow-sm shadow-brand-600/15 sm:w-[5.25rem] sm:py-2.5 sm:text-xs">
        {badge}
      </div>
      <div className="flex min-w-0 flex-1 items-center rounded-lg bg-brand-50/40 px-2.5 py-2 text-[0.6875rem] leading-snug text-foreground sm:px-3 sm:py-2.5 sm:text-xs">
        {description}
      </div>
    </div>
  );
}

export function TrainingApproachLevels() {
  const t = useTranslations("training.approach.levels");

  return (
    <figure className="w-full" aria-label={t("figureLabel")}>
      <div className="flex items-stretch gap-3 sm:gap-4">
        <div className="grid shrink-0 grid-cols-2 gap-x-3 self-stretch sm:gap-x-4">
          <VerticalAxis top={t("axisPerformance")} bottom={t("axisEducation")} />
          <VerticalAxis top={t("axisProfitability")} bottom={t("axisInvestment")} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-2.5">
          {levelOrderTopToBottom.map((level) => (
            <div key={level}>
              {level === 4 ? (
                <div className="relative py-2 sm:py-2.5" aria-hidden>
                  <div className="border-t border-black" />
                </div>
              ) : null}
              <LevelRow
                badge={t(`items.${level}.badge`)}
                description={t(`items.${level}.description`)}
              />
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
