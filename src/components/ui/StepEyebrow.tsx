import { cn } from "@/lib/utils";

type StepEyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/** DEGER bölüm başlığı ile aynı stil (uppercase, tracking-widest, #0066cc) */
export function StepEyebrow({ children, className }: StepEyebrowProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-widest text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}
