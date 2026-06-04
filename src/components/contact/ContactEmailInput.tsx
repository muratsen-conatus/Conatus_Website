"use client";

import { useTranslations } from "next-intl";
import { useCallback, useId, useState } from "react";
import { buildEmail, parseEmailPaste } from "@/lib/contactEmail";
import { cn } from "@/lib/utils";

type ContactEmailInputProps = {
  id: string;
  hasError?: boolean;
  disabled?: boolean;
  inputClassName: string;
  onChange?: () => void;
};

export function ContactEmailInput({
  id,
  hasError = false,
  disabled = false,
  inputClassName,
  onChange,
}: ContactEmailInputProps) {
  const t = useTranslations("contact.form");
  const hintId = useId();
  const [local, setLocal] = useState("");
  const [domain, setDomain] = useState("");

  const email = buildEmail(local, domain);

  const handleLocalChange = useCallback(
    (value: string) => {
      const parsed = parseEmailPaste(value);
      if (parsed) {
        setLocal(parsed.local);
        setDomain(parsed.domain);
      } else {
        setLocal(value.replace(/@/g, ""));
      }
      onChange?.();
    },
    [onChange],
  );

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          id={`${id}-local`}
          type="text"
          inputMode="email"
          autoComplete="username"
          value={local}
          placeholder={t("emailLocalPlaceholder")}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : hintId}
          className={cn(inputClassName, "min-w-0 w-full sm:flex-1")}
          disabled={disabled}
          onChange={(e) => handleLocalChange(e.target.value)}
        />
        <span
          className="shrink-0 select-none text-center text-base font-medium text-foreground-muted sm:px-0.5"
          aria-hidden
        >
          @
        </span>
        <input
          id={`${id}-domain`}
          type="text"
          inputMode="email"
          autoComplete="organization"
          value={domain}
          placeholder={t("emailDomainPlaceholder")}
          aria-invalid={hasError}
          className={cn(inputClassName, "min-w-0 w-full sm:flex-1")}
          disabled={disabled}
          onChange={(e) => {
            setDomain(e.target.value.replace(/@/g, ""));
            onChange?.();
          }}
        />
      </div>
      <input type="hidden" name="email" value={email} />
      <p id={hintId} className="mt-1.5 text-xs text-foreground-subtle">
        {t("emailHint")}
      </p>
    </div>
  );
}
