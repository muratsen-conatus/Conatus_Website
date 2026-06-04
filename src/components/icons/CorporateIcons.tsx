import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

/**
 * Misyon — paylaşılan referanstaki hedef ikonu:
 * kalın dış halka, boşluk, ortada dolu nokta (üç dolu halka değil).
 */
export function MissionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-11 w-11 shrink-0", className)}
      aria-hidden
    >
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="currentColor"
        strokeWidth="5.5"
      />
      <circle cx="24" cy="24" r="5.5" fill="currentColor" />
    </svg>
  );
}

/** Font Awesome 6 solid fa-eye — vizyon */
export function VisionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 576 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-11 w-11 shrink-0", className)}
      aria-hidden
    >
      <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.59 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 1 0 95.31 95.31A95.31 95.31 0 0 0 288 160z" />
    </svg>
  );
}
