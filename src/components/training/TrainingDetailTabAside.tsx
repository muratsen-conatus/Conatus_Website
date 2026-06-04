import type { TrainingDetailTabId } from "@/components/training/TrainingDetailTabPanels";
import { cn } from "@/lib/utils";

const asideConfig: Record<
  TrainingDetailTabId,
  { gradient: string; label: string; icon: React.ReactNode }
> = {
  content: {
    gradient: "from-brand-600/90 via-brand-500 to-brand-400",
    label: "Program",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-20 w-20" aria-hidden>
        <rect x="12" y="10" width="40" height="44" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M20 22h24M20 30h24M20 38h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  outcomes: {
    gradient: "from-brand-700/90 via-brand-600 to-brand-500",
    label: "Outcomes",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-20 w-20" aria-hidden>
        <path
          d="M14 44l12-14 10 8 14-18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="44" r="3" fill="currentColor" />
        <circle cx="26" cy="30" r="3" fill="currentColor" />
        <circle cx="36" cy="38" r="3" fill="currentColor" />
        <circle cx="50" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
  },
  audience: {
    gradient: "from-brand-800/90 via-brand-700 to-brand-600",
    label: "Audience",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-20 w-20" aria-hidden>
        <circle cx="24" cy="22" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="42" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 48c2-10 10-14 18-14s16 4 18 14M34 48c1.5-8 6-12 12-12s10.5 4 12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  certification: {
    gradient: "from-brand-600 via-brand-500 to-brand-300",
    label: "Certificate",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-20 w-20" aria-hidden>
        <circle cx="32" cy="28" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 44l8 10 8-10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M32 18v6M32 32v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
};

type TrainingDetailTabAsideProps = {
  tab: TrainingDetailTabId;
  className?: string;
};

export function TrainingDetailTabAside({ tab, className }: TrainingDetailTabAsideProps) {
  const config = asideConfig[tab];

  return (
    <div
      className={cn(
        "relative hidden min-h-0 overflow-hidden lg:flex lg:flex-col",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex h-full flex-col items-center justify-center bg-gradient-to-br p-8 text-white",
          config.gradient,
        )}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 12px)",
          }}
        />
        <div className="relative flex flex-col items-center text-center">
          {config.icon}
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-white/90">
            CONATUS
          </p>
        </div>
      </div>
    </div>
  );
}
