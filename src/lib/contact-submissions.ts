import type { ContactLocale, ContactPayload } from "@/lib/contact-types";
import { createSupabaseAdmin } from "@/lib/supabase-admin";

export async function saveContactSubmission(
  body: ContactPayload,
  locale: ContactLocale,
): Promise<{ ok: true } | { ok: false; reason: "not_configured" | "db_error" }> {
  const supabase = createSupabaseAdmin();
  if (!supabase) return { ok: false, reason: "not_configured" };

  const { error } = await supabase.from("contact_submissions").insert({
    locale,
    first_name: body.firstName.trim(),
    last_name: body.lastName.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone.trim(),
    company: body.company.trim(),
    position: body.position.trim(),
    subject: body.subject.trim(),
    message: body.message.trim(),
    kvkk_consent: body.kvkkConsent,
    marketing_consent: Boolean(body.marketingConsent),
  });

  if (error) {
    console.error("[contact submission]", error.message);
    return { ok: false, reason: "db_error" };
  }

  return { ok: true };
}
