"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export type FilterTheme = "accent" | "navy";

const themeStyles: Record<
  FilterTheme,
  {
    triggerActive: string;
    triggerHover: string;
    checkbox: string;
    clearLink: string;
  }
> = {
  accent: {
    triggerActive: "border-brand-300 text-foreground",
    triggerHover: "hover:border-brand-200",
    checkbox: "text-accent focus:ring-accent/30",
    clearLink: "text-accent",
  },
  navy: {
    triggerActive: "border-brand-800 text-foreground",
    triggerHover: "hover:border-brand-800/60",
    checkbox: "text-brand-900 focus:ring-brand-900/30",
    clearLink: "text-brand-900",
  },
};

function FilterChevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={cn(
        "size-5 shrink-0 text-foreground-muted transition-transform duration-200",
        open && "rotate-180",
      )}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FilterCheckbox({
  checked,
  onChange,
  label,
  theme,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  theme: FilterTheme;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-surface-muted/80">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={cn(
          "size-4 shrink-0 rounded border-border",
          themeStyles[theme].checkbox,
        )}
      />
      <span>{label}</span>
    </label>
  );
}

type FilterDropdownProps = {
  groupId: string;
  options: readonly string[];
  selected: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onToggle: (optionKey: string) => void;
  onSelectAll: () => void;
  onClearGroup: () => void;
  theme: FilterTheme;
  /** örn. training.catalog veya training.developmentPrograms */
  messagesNamespace: string;
  getOptionLabel: (optionKey: string) => string;
  getGroupLabel: (groupId: string) => string;
};

export function FilterDropdown({
  groupId,
  options,
  selected,
  open,
  onOpenChange,
  onToggle,
  onSelectAll,
  onClearGroup,
  theme,
  messagesNamespace,
  getOptionLabel,
  getGroupLabel,
}: FilterDropdownProps) {
  const t = useTranslations(messagesNamespace);
  const rootRef = useRef<HTMLDivElement>(null);
  const styles = themeStyles[theme];
  const allSelected =
    options.length > 0 && options.every((key) => selected.includes(key));
  const someSelected = selected.length > 0;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) onOpenChange(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <div ref={rootRef} className="relative min-w-[10.5rem] flex-1 sm:max-w-[14rem]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => onOpenChange(!open)}
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-lg border bg-surface px-4 py-2.5 text-left text-sm font-medium transition-colors",
          open || someSelected
            ? styles.triggerActive
            : cn("border-border text-foreground", styles.triggerHover),
        )}
      >
        <span className="truncate">{getGroupLabel(groupId)}</span>
        <FilterChevron open={open} />
      </button>

      {open ? (
        <div className="absolute left-0 top-[calc(100%+0.375rem)] z-30 w-full min-w-[15rem] rounded-lg border border-border bg-surface py-2 shadow-lg shadow-black/8">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label={t("filters.close")}
            className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-md text-lg leading-none text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            ×
          </button>

          <ul className="mt-6 max-h-64 overflow-y-auto px-1">
            <li>
              <FilterCheckbox
                theme={theme}
                checked={allSelected}
                onChange={onSelectAll}
                label={t("filters.selectAll")}
              />
            </li>
            {options.map((optionKey) => (
              <li key={optionKey}>
                <FilterCheckbox
                  theme={theme}
                  checked={selected.includes(optionKey)}
                  onChange={() => onToggle(optionKey)}
                  label={getOptionLabel(optionKey)}
                />
              </li>
            ))}
          </ul>

          {someSelected ? (
            <div className="mt-1 border-t border-border/80 px-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  onClearGroup();
                  onOpenChange(false);
                }}
                className={cn(
                  "text-xs font-medium hover:underline",
                  styles.clearLink,
                )}
              >
                {t("filters.clearGroup")}
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
