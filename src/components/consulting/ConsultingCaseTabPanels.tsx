"use client";

import { useCallback, useMemo, useState } from "react";
import { BrandQuote } from "@/components/ui/BrandQuote";
import {
  ConsultingTabCarousel,
  type ConsultingTabSlide,
} from "@/components/consulting/ConsultingTabCarousel";
import type {
  ConsultingCaseData,
  ConsultingCaseKey,
  ConsultingOutcomeBlock,
  ConsultingSolutionBlock,
} from "@/components/consulting/consulting-case-data";
import {
  getConsultingTabImage,
  type ConsultingTabKind,
} from "@/data/consulting/consulting-tab-images";
import { cn } from "@/lib/utils";

const TAB_IDS = ["problem", "solution", "outcome"] as const;

export type ConsultingCaseTabId = (typeof TAB_IDS)[number];

const PANEL_HEIGHT_CLASS = "h-[28rem] min-h-[28rem] max-h-[28rem]";

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

function SolutionPanel({ solution }: { solution: ConsultingCaseData["solution"] }) {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-foreground-muted">
        {solution.intro}
      </p>
      {solution.blocks?.map((block: ConsultingSolutionBlock) => (
        <div key={block.title} className="rounded-lg px-2 py-1">
          <h4 className="text-sm font-bold text-foreground">{block.title}</h4>
          <ul className="mt-2 space-y-1.5">
            {block.items.map((entry) => (
              <li
                key={entry.slice(0, 48)}
                className="flex gap-2.5 text-sm leading-relaxed text-foreground-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066cc]"
                  aria-hidden
                />
                {entry}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {solution.quote ? (
        <BrandQuote className="mt-2 text-sm">{solution.quote}</BrandQuote>
      ) : null}
    </div>
  );
}

function OutcomePanel({ outcomes }: { outcomes: ConsultingCaseData["outcomes"] }) {
  return (
    <div className="space-y-4">
      {outcomes.intro ? (
        <p className="text-sm leading-relaxed text-foreground-muted">
          {outcomes.intro}
        </p>
      ) : null}
      {outcomes.items ? <BulletList items={outcomes.items} /> : null}
      {outcomes.blocks?.map((block: ConsultingOutcomeBlock) => (
        <div key={block.title} className="rounded-lg px-2 py-1">
          <h4 className="text-sm font-bold text-foreground">{block.title}</h4>
          <BulletList items={block.items} />
        </div>
      ))}
      {outcomes.quote ? (
        <BrandQuote className="mt-2 text-sm">{outcomes.quote}</BrandQuote>
      ) : null}
      {outcomes.footer ? (
        <p className="text-sm font-semibold text-foreground">{outcomes.footer}</p>
      ) : null}
    </div>
  );
}

function attachTabImage(
  caseKey: ConsultingCaseKey,
  tab: ConsultingTabKind,
  index: number,
  slide: Omit<ConsultingTabSlide, "imageSrc" | "imageAlt" | "imageContain">,
): ConsultingTabSlide {
  const imageSrc = getConsultingTabImage(caseKey, tab, index);
  return {
    ...slide,
    imageSrc,
    imageAlt: slide.title,
    imageContain: imageSrc.includes("value-stream-mapping"),
  };
}

function buildProblemSlides(
  caseKey: ConsultingCaseKey,
  problems: string[],
): ConsultingTabSlide[] {
  return problems.map((title, index) =>
    attachTabImage(caseKey, "problem", index, {
      id: `problem-${index}`,
      label: String(index + 1).padStart(2, "0"),
      title,
    }),
  );
}

function buildSolutionSlides(
  caseKey: ConsultingCaseKey,
  solution: ConsultingCaseData["solution"],
  fallbackLabel: string,
): ConsultingTabSlide[] {
  if (solution.blocks?.length) {
    return solution.blocks.map((block, index) =>
      attachTabImage(caseKey, "solution", index, {
        id: `solution-${index}`,
        label: block.title,
        title: block.title,
        description: block.items[0],
      }),
    );
  }

  return [
    attachTabImage(caseKey, "solution", 0, {
      id: "solution-intro",
      label: fallbackLabel,
      title: solution.intro,
    }),
  ];
}

function buildOutcomeSlides(
  caseKey: ConsultingCaseKey,
  outcomes: ConsultingCaseData["outcomes"],
  fallbackLabel: string,
): ConsultingTabSlide[] {
  if (outcomes.items?.length) {
    return outcomes.items.map((title, index) =>
      attachTabImage(caseKey, "outcome", index, {
        id: `outcome-${index}`,
        label: String(index + 1).padStart(2, "0"),
        title,
      }),
    );
  }

  if (outcomes.blocks?.length) {
    return outcomes.blocks.map((block, index) =>
      attachTabImage(caseKey, "outcome", index, {
        id: `outcome-block-${index}`,
        label: block.title,
        title: block.title,
        description: block.items[0],
      }),
    );
  }

  return [
    attachTabImage(caseKey, "outcome", 0, {
      id: "outcome-intro",
      label: fallbackLabel,
      title: outcomes.intro ?? outcomes.quote ?? "",
    }),
  ];
}

type ConsultingCaseTabPanelsProps = {
  caseKey: ConsultingCaseKey;
  tabListLabel: string;
  labels: Record<ConsultingCaseTabId, string>;
  problems: string[];
  solution: ConsultingCaseData["solution"];
  outcomes: ConsultingCaseData["outcomes"];
};

export function ConsultingCaseTabPanels({
  caseKey,
  tabListLabel,
  labels,
  problems,
  solution,
  outcomes,
}: ConsultingCaseTabPanelsProps) {
  const baseId = `consulting-case-${caseKey}`;

  const [activeTab, setActiveTab] = useState<ConsultingCaseTabId>("problem");

  const slidesByTab = useMemo(
    () => ({
      problem: buildProblemSlides(caseKey, problems),
      solution: buildSolutionSlides(caseKey, solution, labels.solution),
      outcome: buildOutcomeSlides(caseKey, outcomes, labels.outcome),
    }),
    [caseKey, problems, solution, outcomes, labels.solution, labels.outcome],
  );

  const activeSlides = slidesByTab[activeTab];

  const focusTab = useCallback(
    (id: ConsultingCaseTabId) => {
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

  const panelTone: Record<ConsultingCaseTabId, string> = {
    problem: "border-border bg-surface",
    solution: "border-brand-200/80 bg-brand-50/35",
    outcome: "border-accent/25 bg-surface shadow-sm",
  };

  const rightContent: Record<ConsultingCaseTabId, React.ReactNode> = {
    problem: <BulletList items={problems} />,
    solution: <SolutionPanel solution={solution} />,
    outcome: <OutcomePanel outcomes={outcomes} />,
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
            {rightContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
}
