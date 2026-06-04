import { useTranslations } from "next-intl";
import { corporateAssets } from "@/lib/constants";

export function AboutSection() {
  const t = useTranslations("corporate.about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section className="bg-surface page-start-padding">
      <div className="container-wide">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />
            <div className="mt-6 space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-foreground-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="hero-media-aspect relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <video
                className="absolute inset-0 h-full w-full bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label={t("videoLabel")}
              >
                <source src={corporateAssets.aboutVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
