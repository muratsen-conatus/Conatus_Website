import {
  type ContactPayload,
  resolveContactLocale,
} from "@/lib/contact-types";
import { sendContactViaResend } from "@/lib/contact-resend";
import { saveContactSubmission } from "@/lib/contact-submissions";
import {
  getContactSubmitError,
  validateContactPayload,
} from "@/lib/contact-validation";

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const locale = resolveContactLocale(body.locale);
  const error = validateContactPayload(body, locale);
  if (error) {
    return Response.json({ error }, { status: 400 });
  }

  const [dbResult, emailSent] = await Promise.all([
    saveContactSubmission(body, locale),
    sendContactViaResend(body, locale),
  ]);

  if (!dbResult.ok && dbResult.reason === "db_error") {
    console.error("[contact form] database save failed");
  }

  if (!emailSent) {
    console.info("[contact form] email not sent", {
      locale,
      email: body.email,
      subject: body.subject,
    });
  }

  if (!dbResult.ok && !emailSent) {
    return Response.json(
      { error: getContactSubmitError(locale) },
      { status: 503 },
    );
  }

  return Response.json({ ok: true });
}
