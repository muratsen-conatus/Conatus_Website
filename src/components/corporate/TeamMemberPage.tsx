import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { corporateAssets, type TeamMemberSlug } from "@/lib/constants";

type TeamMemberPageProps = {
  slug: TeamMemberSlug;
};

export async function TeamMemberPage({ slug }: TeamMemberPageProps) {
  const member = corporateAssets.team.find((m) => m.slug === slug);
  if (!member) return null;

  const t = await getTranslations("corporate.team");
  const tMember = await getTranslations(
    `corporate.team.members.${member.memberKey}`,
  );
  const bio = tMember.raw("bio") as string[];

  return (
    <section className="bg-surface page-start-padding">
      <div className="container-wide">
        <Link
          href="/kurumsal"
          className="text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          ← {t("backToCorporate")}
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-sm">
              <Image
                src={member.photo}
                alt={tMember("name")}
                fill
                className="object-cover object-top"
                sizes="280px"
                priority
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {tMember("name")}
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />
            <p className="mt-4 text-lg font-medium text-accent">{tMember("role")}</p>
            <div className="mt-8 space-y-4">
              {bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-foreground-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
