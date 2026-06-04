import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { TechnologySubsystemMediaPlayer } from "@/components/technology/TechnologySubsystemMediaPlayer";
import { TechnologyVisualFrame } from "@/components/technology/TechnologyVisualFrame";
import {
  productionSubsystemImages,
  subsystemDetailMedia,
} from "@/data/technology/subsystem-images";
import type { ProductionSubsystemId } from "@/data/technology/production-system";

type TechnologySubsystemMediaSectionProps = {
  subsystemId: ProductionSubsystemId;
};

export async function TechnologySubsystemMediaSection({
  subsystemId,
}: TechnologySubsystemMediaSectionProps) {
  const t = await getTranslations("technology.subsystemDetail.showcase");
  const tSub = await getTranslations("technology.cip.subsystems");
  const media = subsystemDetailMedia[subsystemId];
  const primaryImage = productionSubsystemImages[subsystemId];

  return (
    <section className="section-padding border-y border-border/60 bg-surface-muted">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            {media.demoVideo ? (
              <TechnologySubsystemMediaPlayer
                videoSrc={media.demoVideo}
                posterSrc={primaryImage}
                label={t("videoLabel", {
                  system: tSub(`${subsystemId}.title`),
                })}
              />
            ) : (
              <div className="overflow-hidden rounded-2xl border border-brand-200/60 shadow-lg">
                <div className="relative aspect-video w-full bg-white">
                  <Image
                    src={primaryImage}
                    alt={tSub(`${subsystemId}.imageAlt`)}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="border-t border-border/60 bg-surface px-4 py-3 text-center text-sm text-foreground-muted">
                  {t("screenshotCaption", {
                    system: tSub(`${subsystemId}.title`),
                  })}
                </p>
              </div>
            )}
          </div>

          {media.secondaryImage ? (
            <div className="min-w-0 space-y-4">
              <TechnologyVisualFrame compact className="w-full overflow-hidden p-0">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={media.secondaryImage}
                    alt={t("architectureAlt")}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </TechnologyVisualFrame>
              <p className="text-center text-sm leading-relaxed text-foreground-muted lg:text-left">
                {t("secondaryNote")}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
