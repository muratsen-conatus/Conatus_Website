export type PhoneCountryCode = {
  code: string;
  dial: string;
};

/** Sık kullanılan ülke kodları — Türkiye varsayılan */
export const phoneCountryCodes: PhoneCountryCode[] = [
  { code: "TR", dial: "+90" },
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "DE", dial: "+49" },
  { code: "FR", dial: "+33" },
  { code: "NL", dial: "+31" },
  { code: "IT", dial: "+39" },
  { code: "ES", dial: "+34" },
  { code: "AE", dial: "+971" },
  { code: "SA", dial: "+966" },
  { code: "QA", dial: "+974" },
  { code: "AZ", dial: "+994" },
  { code: "RU", dial: "+7" },
  { code: "CN", dial: "+86" },
  { code: "IN", dial: "+91" },
];

export const defaultPhoneDial = "+90";

const phoneCountryLabels = {
  tr: {
    TR: "Türkiye",
    US: "ABD / Kanada",
    GB: "Birleşik Krallık",
    DE: "Almanya",
    FR: "Fransa",
    NL: "Hollanda",
    IT: "İtalya",
    ES: "İspanya",
    AE: "BAE",
    SA: "Suudi Arabistan",
    QA: "Katar",
    AZ: "Azerbaycan",
    RU: "Rusya",
    CN: "Çin",
    IN: "Hindistan",
  },
  en: {
    TR: "Turkey",
    US: "US / Canada",
    GB: "United Kingdom",
    DE: "Germany",
    FR: "France",
    NL: "Netherlands",
    IT: "Italy",
    ES: "Spain",
    AE: "UAE",
    SA: "Saudi Arabia",
    QA: "Qatar",
    AZ: "Azerbaijan",
    RU: "Russia",
    CN: "China",
    IN: "India",
  },
} as const;

export function getPhoneCountryLabel(code: string, locale: string) {
  const labels = locale === "tr" ? phoneCountryLabels.tr : phoneCountryLabels.en;
  return labels[code as keyof typeof labels] ?? code;
}

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function formatNationalPhone(digits: string) {
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  if (digits.length <= 8) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`;
}

export function buildFullPhone(dial: string, nationalDigits: string) {
  const digits = digitsOnly(nationalDigits);
  if (!digits) return "";
  return `${dial} ${formatNationalPhone(digits)}`.trim();
}

export function isValidPhone(dial: string, nationalDigits: string) {
  const digits = digitsOnly(nationalDigits);
  return digits.length >= 7 && digits.length <= 15;
}
