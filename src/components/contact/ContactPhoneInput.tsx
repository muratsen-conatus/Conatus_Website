"use client";

import { useLocale, useTranslations } from "next-intl";
import { useId, useMemo, useState } from "react";
import {
  buildFullPhone,
  defaultPhoneDial,
  digitsOnly,
  formatNationalPhone,
  getPhoneCountryLabel,
  phoneCountryCodes,
} from "@/lib/contactPhoneCountries";
import { cn } from "@/lib/utils";

type ContactPhoneInputProps = {
  id: string;
  hasError?: boolean;
  disabled?: boolean;
  inputClassName: string;
  onChange?: () => void;
};

export function ContactPhoneInput({
  id,
  hasError = false,
  disabled = false,
  inputClassName,
  onChange,
}: ContactPhoneInputProps) {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const hintId = useId();
  const [dial, setDial] = useState(defaultPhoneDial);
  const [nationalDigits, setNationalDigits] = useState("");

  const displayNational = formatNationalPhone(nationalDigits);
  const phone = buildFullPhone(dial, nationalDigits);

  const countryOptions = useMemo(() => {
    const collator = new Intl.Collator(locale === "tr" ? "tr" : "en");
    const label = (code: string) => getPhoneCountryLabel(code, locale);
    const tr = phoneCountryCodes.find((c) => c.code === "TR");
    const others = phoneCountryCodes.filter((c) => c.code !== "TR");
    others.sort((a, b) => collator.compare(label(a.code), label(b.code)));
    return tr ? [tr, ...others] : others;
  }, [locale]);

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <select
          id={`${id}-country`}
          value={dial}
          aria-label={t("phoneCountryLabel")}
          aria-invalid={hasError}
          className={cn(inputClassName, "w-full shrink-0 sm:w-36")}
          disabled={disabled}
          onChange={(e) => {
            setDial(e.target.value);
            onChange?.();
          }}
        >
          {countryOptions.map((c) => (
            <option key={c.code} value={c.dial}>
              {c.dial} {getPhoneCountryLabel(c.code, locale)}
            </option>
          ))}
        </select>
        <input
          id={`${id}-number`}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={displayNational}
          placeholder={t("phonePlaceholder")}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : hintId}
          className={cn(inputClassName, "min-w-0 flex-1")}
          disabled={disabled}
          onChange={(e) => {
            setNationalDigits(digitsOnly(e.target.value).slice(0, 15));
            onChange?.();
          }}
        />
      </div>
      <input type="hidden" name="phone" value={phone} />
      <p id={hintId} className="mt-1.5 text-xs text-foreground-subtle">
        {t("phoneHint")}
      </p>
    </div>
  );
}
