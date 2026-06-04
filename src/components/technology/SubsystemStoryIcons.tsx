import { cn } from "@/lib/utils";

const iconClass = "h-6 w-6";

type IconProps = { className?: string };

export function ProblemStoryIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
    </svg>
  );
}

export function EaseStoryIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

export function ExperienceStoryIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function PremiumFeatureIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.5a.56.56 0 011.04 0l2.04 5.78a.56.56 0 00.53.38l5.78.42a.56.56 0 01.32 1.01l-4.4 3.58a.56.56 0 00-.2.62l1.34 5.6a.56.56 0 01-.84.6l-4.9-3.2a.56.56 0 00-.6 0l-4.9 3.2a.56.56 0 01-.84-.6l1.34-5.6a.56.56 0 00-.2-.62l-4.4-3.58a.56.56 0 01.32-1.01l5.78-.42a.56.56 0 00.53-.38l2.04-5.78z"
      />
    </svg>
  );
}

export function PerformanceFeatureIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path strokeLinecap="round" d="M4 19h16M6 16l4-5 4 3 5-8" />
    </svg>
  );
}

export function BasicFeatureIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={cn(iconClass, className)}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}
