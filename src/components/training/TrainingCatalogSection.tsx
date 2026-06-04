"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { DevelopmentProgramCard } from "@/components/training/DevelopmentProgramCard";
import { TrainingCard } from "@/components/training/TrainingCard";
import { FilterDropdown } from "@/components/training/TrainingFilters";
import {
  TRAINING_PAGE_SIZE,
  catalogItemMatchesFilters,
  catalogItems,
  unifiedFilterGroups,
  unifiedFilterOptionKeys,
  type UnifiedFilterGroupId,
  type UnifiedFilters,
} from "@/lib/training-catalog";

export function TrainingCatalogSection() {
  const t = useTranslations("training.catalog");
  const [filters, setFilters] = useState<UnifiedFilters>({});
  const [openFilter, setOpenFilter] = useState<UnifiedFilterGroupId | null>(
    null,
  );
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(
    () => catalogItems.filter((item) => catalogItemMatchesFilters(item, filters)),
    [filters],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / TRAINING_PAGE_SIZE),
  );

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * TRAINING_PAGE_SIZE;
    return filteredItems.slice(start, start + TRAINING_PAGE_SIZE);
  }, [filteredItems, page]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  function handlePageChange(nextPage: number) {
    setPage(nextPage);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const activeCount = useMemo(
    () =>
      unifiedFilterGroups.reduce(
        (sum, group) => sum + (filters[group.id]?.length ?? 0),
        0,
      ),
    [filters],
  );

  function toggleFilter(groupId: UnifiedFilterGroupId, optionKey: string) {
    setFilters((prev) => {
      const current = prev[groupId] ?? [];
      const next = current.includes(optionKey)
        ? current.filter((k) => k !== optionKey)
        : [...current, optionKey];
      const updated = { ...prev };
      if (next.length) updated[groupId] = next;
      else delete updated[groupId];
      return updated;
    });
  }

  function clearGroup(groupId: UnifiedFilterGroupId) {
    setFilters((prev) => {
      const next = { ...prev };
      delete next[groupId];
      return next;
    });
  }

  function clearAllFilters() {
    setFilters({});
    setOpenFilter(null);
  }

  function selectAllInGroup(groupId: UnifiedFilterGroupId) {
    const all = [...unifiedFilterOptionKeys[groupId]];
    const current = filters[groupId] ?? [];
    const everySelected = all.every((key) => current.includes(key));
    setFilters((prev) => {
      const next = { ...prev };
      if (everySelected) delete next[groupId];
      else next[groupId] = all;
      return next;
    });
  }

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("section.eyebrow")}
          title={t("section.title")}
          description={t("section.description")}
        />

        <div className="mt-12">
          <div className="flex flex-wrap gap-3">
            {unifiedFilterGroups.map((group) => (
              <FilterDropdown
                key={group.id}
                groupId={group.id}
                options={unifiedFilterOptionKeys[group.id]}
                selected={filters[group.id] ?? []}
                open={openFilter === group.id}
                onOpenChange={(next) =>
                  setOpenFilter(next ? group.id : null)
                }
                onToggle={(key) => toggleFilter(group.id, key)}
                onSelectAll={() => selectAllInGroup(group.id)}
                onClearGroup={() => clearGroup(group.id)}
                theme="accent"
                messagesNamespace="training.catalog"
                getOptionLabel={(key) => t(`options.${key}`)}
                getGroupLabel={(id) => t(`filters.${id}`)}
              />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm text-foreground-muted">
              {t("results", { count: filteredItems.length })}
            </p>
            {activeCount > 0 ? (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-sm font-medium text-accent hover:underline"
              >
                {t("filters.clearAll")}
              </button>
            ) : null}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div ref={gridRef} className="mt-6 scroll-mt-28">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedItems.map((item) => (
                <li key={`${item.kind}-${item.id}`}>
                  {item.kind === "course" ? (
                    <TrainingCard courseId={item.id} />
                  ) : (
                    <DevelopmentProgramCard programId={item.id} />
                  )}
                </li>
              ))}
            </ul>
            <Pagination
              className="mt-10"
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              labels={{
                previous: t("pagination.previous"),
                next: t("pagination.next"),
                page: t("pagination.label"),
              }}
            />
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-surface-muted/40 px-6 py-16 text-center">
            <p className="text-base font-medium text-foreground">
              {t("filters.noResults")}
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-4 text-sm font-semibold text-accent hover:underline"
            >
              {t("filters.clearAll")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
