"use client";

import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { cn } from "@/lib/utils";

export const subjectKeys = [
  "consulting",
  "training",
  "technology",
  "other",
] as const;

export type SubjectKey = (typeof subjectKeys)[number];

type ServiceSubjectKey = "consulting" | "training" | "technology";

function OtherSubjectIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 94 56.1 128.7-6.7 35.2-25.3 66.4-25.8 67.3-1.1 1.9-1.3 4.2-.6 6.3s2.3 3.8 4.5 4.5c1.1.3 2.3.4 3.4.4 2.2 0 4.3-.9 5.8-2.5 1.1-1.1 27.1-27.1 40.5-52.4C152.5 365.2 202.8 368 256 368c141.4 0 256-93.1 256-208S397.4 32 256 32zm-48 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    </svg>
  );
}

function SubjectOptionIcon({
  subjectKey,
  className,
}: {
  subjectKey: SubjectKey;
  className?: string;
}) {
  if (subjectKey === "other") {
    return <OtherSubjectIcon className={className} />;
  }
  return (
    <ServiceIcon
      type={subjectKey as ServiceSubjectKey}
      className={className}
    />
  );
}

type ContactSubjectSelectProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  hasError?: boolean;
};

export function ContactSubjectSelect({
  id,
  value,
  onChange,
  disabled,
  hasError,
}: ContactSubjectSelectProps) {
  const t = useTranslations("contact.form");
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const selectedKey = subjectKeys.find(
    (key) => value === t(`subjectOptions.${key}`),
  );

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function selectOption(key: SubjectKey) {
    onChange(t(`subjectOptions.${key}`));
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name="subject" value={value} />

      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center gap-3 rounded-lg border bg-surface px-4 py-3 text-left text-sm transition-colors focus:outline-none focus:ring-2 disabled:opacity-60",
          hasError
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-border focus:border-brand-300 focus:ring-brand-100",
          open && "border-brand-300 ring-2 ring-brand-100",
        )}
      >
        {selectedKey ? (
          <>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-accent">
              <SubjectOptionIcon
                subjectKey={selectedKey}
                className="h-5 w-5"
              />
            </span>
            <span className="flex-1 font-medium text-foreground">
              {t(`subjectOptions.${selectedKey}`)}
            </span>
          </>
        ) : (
          <span className="flex-1 text-foreground-muted">
            {t("subjectPlaceholder")}
          </span>
        )}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn(
            "h-5 w-5 shrink-0 text-foreground-muted transition-transform",
            open && "rotate-180",
          )}
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-border bg-surface py-1 shadow-lg"
        >
          {subjectKeys.map((key) => {
            const label = t(`subjectOptions.${key}`);
            const isSelected = value === label;
            return (
              <li key={key} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => selectOption(key)}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors",
                    isSelected
                      ? "bg-brand-50 text-foreground"
                      : "text-foreground hover:bg-surface-muted",
                  )}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-accent">
                    <SubjectOptionIcon subjectKey={key} className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
