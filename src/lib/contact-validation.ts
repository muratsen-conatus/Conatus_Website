import type { ContactLocale, ContactPayload } from "@/lib/contact-types";
import { isValidEmail } from "@/lib/contactEmail";

const validationErrors: Record<ContactLocale, Record<string, string>> = {
  tr: {
    spam: "Spam algılandı",
    kvkk: "KVKK onayı gerekli",
    name: "Ad soyad gerekli",
    company: "Şirket gerekli",
    position: "Pozisyon gerekli",
    email: "Geçersiz e-posta",
    phone: "Telefon gerekli",
  },
  en: {
    spam: "Spam detected",
    kvkk: "Privacy consent required",
    name: "Name required",
    company: "Company required",
    position: "Position required",
    email: "Invalid email",
    phone: "Phone required",
  },
};

const submitErrors: Record<ContactLocale, string> = {
  tr: "Gönderim başarısız. Lütfen daha sonra tekrar deneyin.",
  en: "Submission failed. Please try again later.",
};

export function validateContactPayload(
  body: ContactPayload,
  locale: ContactLocale,
): string | null {
  const e = validationErrors[locale];
  if (body.website?.trim()) return e.spam;
  if (!body.kvkkConsent) return e.kvkk;
  if (!body.firstName.trim() || !body.lastName.trim()) return e.name;
  if (!body.company.trim()) return e.company;
  if (!body.position.trim()) return e.position;
  if (!isValidEmail(body.email)) return e.email;
  if (!body.phone.trim()) return e.phone;
  return null;
}

export function getContactSubmitError(locale: ContactLocale): string {
  return submitErrors[locale];
}
