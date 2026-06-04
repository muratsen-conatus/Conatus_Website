import { cn } from "@/lib/utils";

type CtaSectionBackdropProps = {
  variant?: "light" | "dark";
};

export function CtaSectionBackdrop({ variant = "light" }: CtaSectionBackdropProps) {
  const isDark = variant === "dark";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={cn(
          "absolute inset-0",
          isDark ? "cta-section-dark-gradient" : "cta-section-light-gradient",
        )}
      />

      <div
        className={cn(
          "absolute inset-0",
          isDark ? "cta-section-grid-dark opacity-30" : "cta-section-grid opacity-45",
        )}
      />

      <div
        className={cn(
          "cta-section-orb-a absolute rounded-full blur-3xl",
          isDark
            ? "-left-[10%] top-[15%] h-[50%] w-[45%] bg-brand-700/30"
            : "-left-[8%] top-[10%] h-[55%] w-[45%] bg-brand-200/50",
        )}
      />
      <div
        className={cn(
          "cta-section-orb-b absolute rounded-full blur-3xl",
          isDark
            ? "-right-[8%] bottom-[10%] h-[55%] w-[48%] bg-brand-600/20"
            : "-right-[6%] bottom-[5%] h-[60%] w-[50%] bg-brand-300/35",
        )}
      />

      <svg
        className={cn(
          "absolute inset-0 h-full w-full",
          isDark ? "opacity-25" : "opacity-35",
        )}
        viewBox="0 0 1440 280"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          className="cta-section-path"
          d="M0 140 Q360 70 720 140 T1440 140"
          stroke={isDark ? "white" : "#0066cc"}
          strokeWidth="1.25"
          strokeOpacity={isDark ? 0.15 : 0.18}
        />
        <path
          className="cta-section-path cta-section-path-delayed"
          d="M0 200 Q480 110 960 200 T1440 100"
          stroke={isDark ? "white" : "#0066cc"}
          strokeWidth="1"
          strokeOpacity={isDark ? 0.1 : 0.12}
        />
      </svg>

      <div
        className={cn(
          "cta-section-shimmer absolute inset-0",
          isDark ? "opacity-40" : "opacity-55",
        )}
      />
    </div>
  );
}
