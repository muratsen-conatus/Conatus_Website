import { siteConfig } from "@/lib/constants";

type ContactLocale = "tr" | "en";

type ContactPayload = {
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

function resolveLocale(raw?: string): ContactLocale {
  return raw === "en" ? "en" : "tr";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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

function validate(body: ContactPayload, locale: ContactLocale) {
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

function buildEmailText(body: ContactPayload, locale: ContactLocale) {
  const yes = locale === "en" ? "Yes" : "Evet";
  const no = locale === "en" ? "No" : "Hayır";

  if (locale === "en") {
    return [
      `Subject: ${body.subject}`,
      `Name: ${body.firstName} ${body.lastName}`,
      body.company ? `Company: ${body.company}` : null,
      body.position ? `Position: ${body.position}` : null,
      `Email: ${body.email}`,
      `Phone: ${body.phone}`,
      `Privacy consent: ${yes}`,
      `Marketing consent: ${body.marketingConsent ? yes : no}`,
      "",
      body.message,
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    `Konu: ${body.subject}`,
    `Ad: ${body.firstName} ${body.lastName}`,
    body.company ? `Şirket: ${body.company}` : null,
    body.position ? `Pozisyon: ${body.position}` : null,
    `E-posta: ${body.email}`,
    `Telefon: ${body.phone}`,
    `KVKK onayı: ${yes}`,
    `Ticari iletişim izni: ${body.marketingConsent ? yes : no}`,
    "",
    body.message,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildEmailSubject(body: ContactPayload, locale: ContactLocale) {
  const prefix = locale === "en" ? "[CONATUS Contact]" : "[CONATUS İletişim]";
  return `${prefix} ${body.subject}`;
}

async function sendViaResend(body: ContactPayload, locale: ContactLocale) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  if (!apiKey) return false;

  const from =
    process.env.RESEND_FROM_EMAIL ?? "CONATUS Website <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: body.email,
      subject: buildEmailSubject(body, locale),
      text: buildEmailText(body, locale),
    }),
  });

  return res.ok;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const locale = resolveLocale(body.locale);
  const error = validate(body, locale);
  if (error) {
    return Response.json({ error }, { status: 400 });
  }

  const sent = await sendViaResend(body, locale);

  if (!sent) {
    console.info("[contact form]", {
      locale,
      ...body,
      message: body.message.slice(0, 80) + (body.message.length > 80 ? "…" : ""),
    });
  }

  return Response.json({ ok: true });
}
