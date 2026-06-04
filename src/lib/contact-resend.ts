import { siteConfig } from "@/lib/constants";
import type { ContactLocale, ContactPayload } from "@/lib/contact-types";

function buildEmailText(body: ContactPayload, locale: ContactLocale) {
  const yes = locale === "en" ? "Yes" : "Evet";
  const no = locale === "en" ? "No" : "Hayır";

  if (locale === "en") {
    return [
      `Subject: ${body.subject}`,
      `Name: ${body.firstName} ${body.lastName}`,
      `Company: ${body.company}`,
      `Position: ${body.position}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone}`,
      `Privacy consent: ${yes}`,
      `Marketing consent: ${body.marketingConsent ? yes : no}`,
      "",
      body.message,
    ].join("\n");
  }

  return [
    `Konu: ${body.subject}`,
    `Ad: ${body.firstName} ${body.lastName}`,
    `Şirket: ${body.company}`,
    `Pozisyon: ${body.position}`,
    `E-posta: ${body.email}`,
    `Telefon: ${body.phone}`,
    `KVKK onayı: ${yes}`,
    `Ticari iletişim izni: ${body.marketingConsent ? yes : no}`,
    "",
    body.message,
  ].join("\n");
}

function buildEmailSubject(body: ContactPayload, locale: ContactLocale) {
  const prefix = locale === "en" ? "[CONATUS Contact]" : "[CONATUS İletişim]";
  return `${prefix} ${body.subject}`;
}

export async function sendContactViaResend(
  body: ContactPayload,
  locale: ContactLocale,
): Promise<boolean> {
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
