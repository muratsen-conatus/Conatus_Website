import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** CTA veya ek aksiyonlar — başlık altına yerleşir */
  actions?: React.ReactNode;
  /** Sağ sütun (carousel, ikon vb.) */
  aside?: React.ReactNode;
  /**
   * start: büyük carousel (anasayfa) — metin üstten hizalanır
   * center: kompakt medya (eğitim) — önceki eğitim sayfası hizası
   */
  asideAlign?: "start" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  asideAlign = "center",
  className,
}: PageHeroProps) {
  const hasAside = Boolean(aside);

  return (
    <section className={cn("bg-surface", className)}>
      <div className="container-wide page-start-padding">
        <div
          className={cn(
            hasAside &&
              "grid gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20",
            hasAside && asideAlign === "center" && "items-center",
            hasAside && asideAlign === "start" && "items-start",
          )}
        >
          <div className={cn(hasAside ? "max-w-xl" : "max-w-3xl")}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {title}
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-foreground-muted sm:text-lg">
              {description}
            </p>
            {actions ? <div className="mt-8">{actions}</div> : null}
          </div>
          {aside ? (
            <div className="flex justify-center lg:justify-end">{aside}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
