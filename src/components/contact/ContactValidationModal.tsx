"use client";

import { useEffect, useRef } from "react";

type ContactValidationModalProps = {
  open: boolean;
  title: string;
  message: string;
  closeLabel: string;
  onClose: () => void;
};

export function ContactValidationModal({
  open,
  title,
  message,
  closeLabel,
  onClose,
}: ContactValidationModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
        aria-label={closeLabel}
        onClick={onClose}
      />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="contact-validation-title"
        aria-describedby="contact-validation-desc"
        className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-xl"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2
          id="contact-validation-title"
          className="mt-4 text-lg font-bold text-foreground"
        >
          {title}
        </h2>
        <p
          id="contact-validation-desc"
          className="mt-2 text-sm leading-relaxed text-foreground-muted"
        >
          {message}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          {closeLabel}
        </button>
      </div>
    </div>
  );
}
