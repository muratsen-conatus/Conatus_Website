import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type LegalDocumentPageProps = {
  namespace: "legal.privacy";
};

export async function LegalDocumentPage({ namespace }: LegalDocumentPageProps) {
  const t = await getTranslations(namespace);
  const sections = t.raw("sections") as Array<{
    title: string;
    paragraphs: string[];
  }>;

  return (
    <article className="bg-surface page-start-padding">
      <div className="container-wide">
        <Link
          href="/iletisim"
          className="text-sm text-foreground-muted transition-colors hover:text-[#0066cc]"
        >
          ← {t("backToContact")}
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0066cc]">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />
          <p className="mt-4 text-sm text-foreground-muted">{t("lastUpdated")}</p>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted">
            {t("intro")}
          </p>
        </header>

        <div className="prose-conatus mt-12 max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-sm leading-relaxed text-foreground-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 max-w-3xl rounded-xl border border-border bg-surface-muted px-5 py-4 text-sm leading-relaxed text-foreground-muted">
          {t("disclaimer")}
        </p>
      </div>
    </article>
  );
}
