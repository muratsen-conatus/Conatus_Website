"use client";

import type { ComponentType } from "react";
import { useCallback, useMemo, useState } from "react";
import {
  ConsultingTabCarousel,
  type ConsultingTabSlide,
} from "@/components/consulting/ConsultingTabCarousel";
import {
  BasicFeatureIcon,
  PerformanceFeatureIcon,
  PremiumFeatureIcon,
} from "@/components/technology/SubsystemStoryIcons";
import type { ProductionSubsystemId } from "@/data/technology/production-system";
import { cn } from "@/lib/utils";

const TAB_IDS = ["basic", "performance", "premium"] as const;

export type FeatureTabId = (typeof TAB_IDS)[number];

const PANEL_HEIGHT_CLASS = "h-[28rem] min-h-[28rem] max-h-[28rem]";

const tabIcons: Record<FeatureTabId, ComponentType<{ className?: string }>> = {
  basic: BasicFeatureIcon,
  performance: PerformanceFeatureIcon,
  premium: PremiumFeatureIcon,
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item.slice(0, 56)}
          className="flex gap-2.5 rounded-lg px-2 py-1.5 text-sm leading-relaxed text-foreground-muted"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066cc]"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function buildFeatureSlides(tabId: FeatureTabId, items: string[]): ConsultingTabSlide[] {
  return items.map((title, index) => ({
    id: `${tabId}-${index}`,
    label: String(index + 1).padStart(2, "0"),
    title,
  }));
}

type TechnologySubsystemFeatureTabPanelsProps = {
  subsystemId: ProductionSubsystemId;
  tabListLabel: string;
  labels: Record<FeatureTabId, string>;
  notes: Record<FeatureTabId, string>;
  features: {
    basic: string[];
    performance: string[];
    premium: string[];
  };
};

export function TechnologySubsystemFeatureTabPanels({
  subsystemId,
  tabListLabel,
  labels,
  notes,
  features,
}: TechnologySubsystemFeatureTabPanelsProps) {
  const baseId = `tech-features-${subsystemId}`;

  const [activeTab, setActiveTab] = useState<FeatureTabId>("basic");

  const slidesByTab = useMemo(
    () => ({
      basic: buildFeatureSlides("basic", features.basic),
      performance: buildFeatureSlides("performance", features.performance),
      premium: buildFeatureSlides("premium", features.premium),
    }),
    [features.basic, features.performance, features.premium],
  );

  const activeSlides = slidesByTab[activeTab];
  const activeItems = features[activeTab];
  const ActiveIcon = tabIcons[activeTab];

  const focusTab = useCallback(
    (id: FeatureTabId) => {
      setActiveTab(id);
      requestAnimationFrame(() => {
        document.getElementById(`${baseId}-tab-${id}`)?.focus();
      });
    },
    [baseId],
  );

  const onTabListKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const i = TAB_IDS.indexOf(activeTab);
      if (i < 0) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        focusTab(TAB_IDS[(i + 1) % TAB_IDS.length]);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        focusTab(TAB_IDS[(i - 1 + TAB_IDS.length) % TAB_IDS.length]);
      } else if (e.key === "Home") {
        e.preventDefault();
        focusTab(TAB_IDS[0]);
      } else if (e.key === "End") {
        e.preventDefault();
        focusTab(TAB_IDS[TAB_IDS.length - 1]);
      }
    },
    [activeTab, focusTab],
  );

  const panelTone: Record<FeatureTabId, string> = {
    basic: "border-border bg-surface",
    performance: "border-brand-200/80 bg-brand-50/35",
    premium: "border-accent/25 bg-surface shadow-sm",
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={tabListLabel}
        className="flex gap-1.5 overflow-x-auto rounded-2xl border border-border bg-surface-muted p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible sm:gap-2 [&::-webkit-scrollbar]:hidden"
        onKeyDown={onTabListKeyDown}
      >
        {TAB_IDS.map((id) => {
          const isActive = activeTab === id;
          const Icon = tabIcons[id];
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${id}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(id)}
              className={cn(
                "flex min-h-[44px] min-w-0 flex-1 shrink-0 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc] sm:min-h-0 sm:px-4 sm:py-3 sm:text-sm sm:normal-case sm:tracking-normal",
                isActive
                  ? "bg-surface text-accent shadow-sm ring-1 ring-border"
                  : "text-foreground-muted hover:bg-surface/60 hover:text-foreground",
              )}
            >
              <Icon className="hidden h-4 w-4 shrink-0 sm:block" aria-hidden />
              {labels[id]}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${activeTab}`}
        className={cn(
          "mt-6 overflow-hidden rounded-2xl border outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          PANEL_HEIGHT_CLASS,
          panelTone[activeTab],
        )}
      >
        <div
          className={cn(
            "grid h-full grid-cols-1 lg:grid-cols-2",
            PANEL_HEIGHT_CLASS,
          )}
        >
          <div className="flex min-h-0 flex-col border-b border-border/60 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:py-6 lg:pr-5">
            <ConsultingTabCarousel
              key={activeTab}
              slides={activeSlides}
              className="h-full"
            />
          </div>

          <div className="min-h-0 overflow-y-auto p-5 sm:p-6 lg:py-6 lg:pl-5">
            <div className="mb-5 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ActiveIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  {labels[activeTab]}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                  {notes[activeTab]}
                </p>
              </div>
            </div>
            <BulletList items={activeItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
