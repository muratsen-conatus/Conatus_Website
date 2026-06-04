export type ContactLocale = "tr" | "en";

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  message: string;
  subject: string;
  kvkkConsent: boolean;
  marketingConsent?: boolean;
  website?: string;
  locale?: string;
};

export function resolveContactLocale(raw?: string): ContactLocale {
  return raw === "en" ? "en" : "tr";
}
