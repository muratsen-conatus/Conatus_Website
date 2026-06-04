import { cn } from "@/lib/utils";

type ConatusLogoMarkProps = {
  className?: string;
  variant?: "color" | "white";
};

/** Conatus sonsuzluk işareti — sertifika köşe ve mühürlerde */
export function ConatusLogoMark({
  className,
  variant = "color",
}: ConatusLogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-12", className)}
      aria-hidden
    >
      <path
        d="M8 16c0-4.4 3.6-8 8-8 2.2 0 4.2.9 5.8 2.4L24 16l1.4-1.4A7.96 7.96 0 0 1 32 12c4.4 0 8 3.6 8 8s-3.6 8-8 8a7.96 7.96 0 0 1-5.8-2.4L24 16l-1.4 1.4A7.96 7.96 0 0 1 16 24c-4.4 0-8-3.6-8-8Z"
        fill={variant === "white" ? "#ffffff" : "#0066cc"}
      />
      <path
        d="M14 16c0-1.1.9-2 2-2h2v4h-2a2 2 0 0 1-2-2Zm16 0c0-1.1-.9-2-2-2h-2v4h2a2 2 0 0 0 2-2Z"
        fill={variant === "white" ? "#ffffff" : "#0066cc"}
        opacity="0.35"
      />
    </svg>
  );
}
