import type { ReactNode } from "react";
import { TrainingCardMediaBackdrop } from "@/components/training/TrainingCardMediaBackdrop";
import { cn } from "@/lib/utils";

type TrainingCardMediaProps = {
  children: ReactNode;
  compact?: boolean;
};

export function TrainingCardMedia({ children, compact = false }: TrainingCardMediaProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border-b border-brand-200/50 text-accent",
        compact ? "aspect-[3/2] px-4 py-5" : "aspect-[5/3] px-6 py-8",
      )}
    >
      <TrainingCardMediaBackdrop />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
