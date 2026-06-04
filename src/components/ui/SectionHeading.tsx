import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Açıklama paragrafı için ek sınıflar (ör. tam genişlik) */
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {eyebrow ? (
        <div
          className={cn(
            "mt-4 h-1 w-16 rounded-full bg-accent",
            align === "center" && "mx-auto",
          )}
          aria-hidden
        />
      ) : null}
      {description ? (
        <p
          className={cn(
            "text-lg leading-relaxed text-foreground-muted",
            eyebrow ? "mt-6" : "mt-4",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
