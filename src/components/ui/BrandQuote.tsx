import { cn } from "@/lib/utils";

type BrandQuoteProps = {
  children: React.ReactNode;
  className?: string;
  /** Kart grid'inde eşit yükseklik için */
  fillHeight?: boolean;
};

export function BrandQuote({ children, className, fillHeight }: BrandQuoteProps) {
  return (
    <blockquote
      className={cn(
        "relative border-l-[3px] border-[#0066cc] bg-brand-50/60 py-3 pl-4 pr-3",
        fillHeight ? "flex h-full min-h-[4.75rem] flex-col justify-center" : "mt-5",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute -top-1 left-3 font-serif text-3xl leading-none text-[#0066cc]/40"
        aria-hidden
      >
        “
      </span>
      <p className="text-sm font-medium italic leading-relaxed text-[#0052a3]">
        {children}
      </p>
    </blockquote>
  );
}
