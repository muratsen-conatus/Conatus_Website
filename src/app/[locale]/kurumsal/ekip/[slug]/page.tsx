import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { TeamMemberPage } from "@/components/corporate/TeamMemberPage";
import { routing } from "@/i18n/routing";
import { corporateAssets, teamMemberSlugs, type TeamMemberSlug } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    teamMemberSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const member = corporateAssets.team.find((m) => m.slug === slug);
  if (!member) return {};

  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const info = messages.corporate.team.members[member.memberKey];

  return {
    title: `${info.name} | CONATUS`,
    description: info.role,
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;

  if (!teamMemberSlugs.includes(slug as TeamMemberSlug)) {
    notFound();
  }

  setRequestLocale(locale);

  return <TeamMemberPage slug={slug as TeamMemberSlug} />;
}
