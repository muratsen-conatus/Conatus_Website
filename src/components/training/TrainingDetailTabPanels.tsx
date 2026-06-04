"use client";

import { useCallback, useMemo, useState } from "react";
import { TrainingCertificationPanel } from "@/components/training/TrainingCertificationPanel";
import { TrainingDetailTabPanelLayout } from "@/components/training/TrainingDetailTabPanelLayout";
import { cn } from "@/lib/utils";

export const TRAINING_DETAIL_TAB_IDS = [
  "content",
  "outcomes",
  "audience",
  "certification",
] as const;

export type TrainingDetailTabId = (typeof TRAINING_DETAIL_TAB_IDS)[number];

export const TRAINING_PANEL_HEIGHT_CLASS =
  "h-[28rem] min-h-[28rem] max-h-[28rem]";

const panelTone: Record<TrainingDetailTabId, string> = {
  content: "border-border bg-surface",
  outcomes: "border-brand-200/80 bg-brand-50/35",
  audience: "border-border bg-surface",
  certification: "border-brand-200/80 bg-brand-50/35",
};

export type TrainingDetailSections = Record<TrainingDetailTabId, string[]>;

type TrainingDetailTabPanelsProps = {
  courseId: string;
  courseTitle: string;
  tabListLabel: string;
  labels: Record<TrainingDetailTabId, string>;
  sections: TrainingDetailSections;
};

export function TrainingDetailTabPanels({
  courseId,
  courseTitle,
  tabListLabel,
  labels,
  sections,
}: TrainingDetailTabPanelsProps) {
  const baseId = `training-detail-${courseId}`;

  const visibleTabs = useMemo(
    () => TRAINING_DETAIL_TAB_IDS.filter((id) => sections[id]?.length > 0),
    [sections],
  );

  const [activeTab, setActiveTab] = useState<TrainingDetailTabId>(
    visibleTabs[0] ?? "content",
  );

  const safeActiveTab = visibleTabs.includes(activeTab)
    ? activeTab
    : (visibleTabs[0] ?? "content");

  const focusTab = useCallback(
    (id: TrainingDetailTabId) => {
      setActiveTab(id);
      requestAnimationFrame(() => {
        document.getElementById(`${baseId}-tab-${id}`)?.focus();
      });
    },
    [baseId],
  );

  const onTabListKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const i = visibleTabs.indexOf(safeActiveTab);
      if (i < 0) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        focusTab(visibleTabs[(i + 1) % visibleTabs.length]);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        focusTab(visibleTabs[(i - 1 + visibleTabs.length) % visibleTabs.length]);
      } else if (e.key === "Home") {
        e.preventDefault();
        focusTab(visibleTabs[0]);
      } else if (e.key === "End") {
        e.preventDefault();
        focusTab(visibleTabs[visibleTabs.length - 1]);
      }
    },
    [focusTab, safeActiveTab, visibleTabs],
  );

  if (visibleTabs.length === 0) {
    return null;
  }

  const activeItems = sections[safeActiveTab] ?? [];

  return (
    <div>
      <div
        role="tablist"
        aria-label={tabListLabel}
        className={cn(
          "flex gap-1.5 overflow-x-auto rounded-2xl border border-border bg-surface-muted p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible sm:gap-2 [&::-webkit-scrollbar]:hidden",
          visibleTabs.length === 4 && "sm:grid sm:grid-cols-4",
          visibleTabs.length === 3 && "sm:grid sm:grid-cols-3",
          visibleTabs.length === 2 && "sm:grid sm:grid-cols-2",
        )}
        onKeyDown={onTabListKeyDown}
      >
        {visibleTabs.map((id) => {
          const isActive = safeActiveTab === id;
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
                "min-h-[44px] min-w-0 flex-1 shrink-0 rounded-xl px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc] sm:min-h-0 sm:px-4 sm:py-3 sm:text-sm sm:normal-case sm:tracking-normal",
                isActive
                  ? "bg-surface text-accent shadow-sm ring-1 ring-border"
                  : "text-foreground-muted hover:bg-surface/60 hover:text-foreground",
              )}
            >
              {labels[id]}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${safeActiveTab}`}
        className={cn(
          "mt-6 overflow-hidden rounded-2xl border outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          TRAINING_PANEL_HEIGHT_CLASS,
          panelTone[safeActiveTab],
        )}
      >
        {safeActiveTab === "certification" ? (
          <TrainingCertificationPanel
            items={activeItems}
            listTitle={labels.certification}
          />
        ) : (
          <TrainingDetailTabPanelLayout
            tab={safeActiveTab}
            title={labels[safeActiveTab]}
            items={activeItems}
          />
        )}
      </div>
    </div>
  );
}
