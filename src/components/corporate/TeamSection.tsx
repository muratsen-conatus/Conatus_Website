import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { corporateAssets } from "@/lib/constants";

export function TeamSection() {
  const t = useTranslations("corporate.team");

  return (
    <section className="section-padding bg-surface-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:mx-auto lg:max-w-3xl">
          {corporateAssets.team.map(({ photo, memberKey, linkedin }) => (
            <article
              key={memberKey}
              className="flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-brand-100 bg-surface-muted sm:h-48 sm:w-48">
                <Image
                  src={photo}
                  alt={t(`members.${memberKey}.name`)}
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">
                {t(`members.${memberKey}.name`)}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {t(`members.${memberKey}.role`)}
              </p>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm text-foreground-muted transition-colors hover:text-accent"
              >
                {t("viewProfile")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
