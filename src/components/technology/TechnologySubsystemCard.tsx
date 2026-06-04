"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { productionSubsystemImages } from "@/data/technology/subsystem-images";
import { productionSubsystemModuleTags } from "@/data/technology/subsystem-module-tags";
import type { ProductionSubsystemId } from "@/data/technology/production-system";
import { getSubsystemSlug } from "@/lib/technology-catalog";
import { cn } from "@/lib/utils";

type TechnologySubsystemCardProps = {
  id: ProductionSubsystemId;
  className?: string;
};

export function TechnologySubsystemCard({
  id,
  className,
}: TechnologySubsystemCardProps) {
  const tSub = useTranslations("technology.cip.subsystems");
  const tModules = useTranslations("technology.cip.subsystems.modules");
  const tProduction = useTranslations("technology.cip.production");
  const moduleTagKeys = productionSubsystemModuleTags[id];

  return (
    <Link
      href={{
        pathname: "/teknoloji/[slug]",
        params: { slug: getSubsystemSlug(id) },
      }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-white">
        <span
          className={cn(
            "absolute right-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-bold tracking-wide shadow-sm",
            id === "operationsManagement"
              ? "bg-accent text-white"
              : "bg-surface/95 text-foreground-muted ring-1 ring-border/80 backdrop-blur-sm",
          )}
        >
          {id === "operationsManagement"
            ? tSub("badgeLive")
            : tSub("badgeComingSoon")}
        </span>
        <Image
          src={productionSubsystemImages[id]}
          alt={tSub(`${id}.imageAlt`)}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex min-h-[9.5rem] flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
          {tSub(`${id}.title`)}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-foreground-muted",
            id !== "productionManagement" && "line-clamp-3",
          )}
        >
          {tSub(`${id}.description`)}
        </p>
        {moduleTagKeys.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {moduleTagKeys.map((key) => (
              <li
                key={key}
                className="rounded-full border border-brand-200/70 bg-brand-50/60 px-2.5 py-0.5 text-xs text-foreground-muted"
              >
                {tModules(key)}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="border-t border-border/60 px-6 py-3.5 sm:px-7">
        <span className="inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-brand-700">
          {tProduction("learnMore")}
          <span
            className="ml-1 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
