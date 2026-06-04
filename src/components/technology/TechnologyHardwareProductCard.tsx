"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  hardwareProductImageClass,
  hardwareProductImages,
  type HardwareProductId,
} from "@/data/technology/hardware-product-images";
import { getHardwareProductSlug } from "@/lib/technology-catalog";
import { cn } from "@/lib/utils";

type TechnologyHardwareProductCardProps = {
  id: HardwareProductId;
  className?: string;
  /** Sol GIF sütunu yüksekliğine eşit dağılım için 4 kartta kullanılır */
  fillHeight?: boolean;
};

function imageColumnClass(id: HardwareProductId, fillHeight: boolean) {
  const isWide =
    id === "lines" || id === "fixtures" || id === "karakuri" || id === "custom";

  if (fillHeight) {
    return cn(
      "relative shrink-0 self-stretch overflow-hidden bg-brand-900/5",
      isWide
        ? "w-[42%] max-w-[10.5rem] min-h-0"
        : "w-[38%] max-w-[9rem] min-h-0",
    );
  }

  return cn(
    "relative shrink-0 self-stretch overflow-hidden bg-brand-900/5",
    isWide
      ? "aspect-[21/9] w-full sm:aspect-auto sm:w-[44%] sm:min-h-[9.5rem]"
      : "aspect-[2/1] w-full sm:aspect-auto sm:w-[40%] sm:min-h-[9.5rem]",
  );
}

export function TechnologyHardwareProductCard({
  id,
  className,
  fillHeight = false,
}: TechnologyHardwareProductCardProps) {
  const t = useTranslations("technology.hardware.items");

  return (
    <Link
      href={{
        pathname: "/teknoloji/[slug]",
        params: { slug: getHardwareProductSlug(id) },
      }}
      className={cn(
        "group flex w-full overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-sm transition-colors",
        "hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        fillHeight
          ? "h-full min-h-0 flex-row items-stretch"
          : "flex flex-col sm:flex-row sm:items-stretch",
        className,
      )}
    >
      <div className={imageColumnClass(id, fillHeight)}>
        <Image
          src={hardwareProductImages[id]}
          alt={t(`${id}.imageAlt`)}
          fill
          className={hardwareProductImageClass[id]}
          sizes={fillHeight ? "22vw" : "(max-width: 640px) 100vw, 44vw"}
          priority={id === "lines"}
        />
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col justify-center text-left",
            fillHeight ? "px-3 py-2 sm:px-3.5 sm:py-2.5" : "p-5 sm:p-6",
          )}
        >
          <h3
            className={cn(
              "font-bold text-foreground transition-colors group-hover:text-accent",
              fillHeight ? "text-sm leading-snug" : "text-base sm:text-lg",
            )}
          >
            {t(`${id}.title`)}
          </h3>
          <p
            className={cn(
              "leading-relaxed text-foreground-muted",
              fillHeight ? "mt-1 line-clamp-2 text-xs" : "mt-2 text-sm",
            )}
          >
            {t(`${id}.description`)}
          </p>
        </div>

        <div
          className={cn(
            "shrink-0 border-t border-border/60",
            fillHeight ? "px-3 py-2 sm:px-3.5 sm:py-2.5" : "px-5 py-3.5 sm:px-6",
          )}
        >
          <span className="inline-flex items-center text-xs font-semibold text-accent transition-colors group-hover:text-brand-700 sm:text-sm">
            {t("learnMore")}
            <span
              className="ml-1 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
