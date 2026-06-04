type TechnologySubsystemKanoDiagramProps = {
  premiumTag: string;
  premiumSubtitle: string;
  performanceTag: string;
  performanceSubtitle: string;
  basicLabel: string;
};

/** Kano katmanları — dekoratif diyagram */
export function TechnologySubsystemKanoDiagram({
  premiumTag,
  premiumSubtitle,
  performanceTag,
  performanceSubtitle,
  basicLabel,
}: TechnologySubsystemKanoDiagramProps) {
  return (
    <div
      className="relative mx-auto flex w-full max-w-sm flex-col items-center justify-center py-4"
      aria-hidden
    >
      <div className="w-full rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-brand-50 to-brand-100/60 px-6 py-4 text-center shadow-md">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          {premiumTag}
        </p>
        <p className="mt-1 text-[11px] text-foreground-muted">{premiumSubtitle}</p>
      </div>
      <div className="mt-3 w-[88%] rounded-2xl border border-brand-200 bg-brand-50/80 px-6 py-4 text-center shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          {performanceTag}
        </p>
        <p className="mt-1 text-[11px] text-foreground-muted">{performanceSubtitle}</p>
      </div>
      <div className="mt-3 w-[76%] rounded-xl border border-border bg-surface px-5 py-3 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground-subtle">
          {basicLabel}
        </p>
      </div>
      <svg
        className="absolute -right-2 top-1/2 h-24 w-8 -translate-y-1/2 text-accent/25"
        viewBox="0 0 32 96"
        fill="none"
      >
        <path
          d="M4 4v88M4 48h20M24 12l4 4-4 4M24 44l4 4-4 4M24 76l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
