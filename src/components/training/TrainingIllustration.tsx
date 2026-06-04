import type { TrainingIllustrationId } from "@/data/training/courses";
import { cn } from "@/lib/utils";

type TrainingIllustrationProps = {
  variant: TrainingIllustrationId;
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function LeanMindsetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <path
        {...strokeProps}
        d="M18 40c0-12 10-22 22-22s22 10 22 22-10 22-22 28-22-16-22-28zm44 0c0-12 10-22 22-22s22 10 22 22-10 22-22 28-22-16-22-28z"
      />
    </svg>
  );
}

function LeanSystemsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <rect {...strokeProps} x="14" y="48" width="92" height="18" rx="3" />
      <rect {...strokeProps} x="24" y="30" width="72" height="16" rx="3" />
      <rect {...strokeProps} x="34" y="12" width="52" height="16" rx="3" />
    </svg>
  );
}

function ProcessCycleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <circle {...strokeProps} cx="60" cy="40" r="26" />
      <path {...strokeProps} d="M60 14v8M60 58v8M86 40h-8M34 40h-8" />
      <path
        {...strokeProps}
        d="M72 24l6 6M48 56l-6-6M72 56l6-6M48 24l-6 6"
      />
    </svg>
  );
}

function AnalyticsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <rect {...strokeProps} x="18" y="14" width="84" height="52" rx="4" />
      <path {...strokeProps} d="M30 52V38M48 52V28M66 52V44M84 52V22" />
      <path {...strokeProps} d="M28 58h64" />
    </svg>
  );
}

function ImprovementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <path {...strokeProps} d="M60 14v12M44 26h32" />
      <path
        {...strokeProps}
        d="M36 58l12-20 12 12 16-24 8 32H28z"
      />
    </svg>
  );
}

function TeamLeadershipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <circle {...strokeProps} cx="60" cy="24" r="10" />
      <path
        {...strokeProps}
        d="M38 58c0-10 10-16 22-16s22 6 22 16"
      />
      <circle {...strokeProps} cx="28" cy="34" r="7" />
      <circle {...strokeProps} cx="92" cy="34" r="7" />
      <path {...strokeProps} d="M16 58c0-8 8-12 12-12M92 46c4 0 12 4 12 12" />
    </svg>
  );
}

function AwarenessIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <path
        {...strokeProps}
        d="M60 16c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"
      />
      <path {...strokeProps} d="M60 28v16l10 10" />
      <path {...strokeProps} d="M44 52h32" />
    </svg>
  );
}

const illustrationMap = {
  "lean-mindset": LeanMindsetIcon,
  "lean-systems": LeanSystemsIcon,
  "process-cycle": ProcessCycleIcon,
  analytics: AnalyticsIcon,
  improvement: ImprovementIcon,
  "team-leadership": TeamLeadershipIcon,
  awareness: AwarenessIcon,
} as const;

export function TrainingIllustration({
  variant,
  className,
}: TrainingIllustrationProps) {
  const Icon = illustrationMap[variant];
  return <Icon className={cn("text-accent opacity-90", className)} />;
}
