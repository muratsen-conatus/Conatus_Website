import { cn } from "@/lib/utils";

type TechnologyVisualFrameProps = {
  children: React.ReactNode;
  className?: string;
  /** Daha düşük, banner tarzı görsel alanı */
  compact?: boolean;
};

export function TechnologyVisualFrame({
  children,
  className,
  compact = false,
}: TechnologyVisualFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-brand-200/60 shadow-sm",
        "flex items-center justify-center bg-gradient-to-br from-brand-50/90 via-brand-100/45 to-brand-50/80 text-accent",
        compact
          ? "aspect-[5/2] px-4 py-3 sm:aspect-[3/1]"
          : "aspect-[4/3] px-6 py-6 sm:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
