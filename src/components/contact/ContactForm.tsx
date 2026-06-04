"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useRef, useState } from "react";
import { ContactEmailInput } from "@/components/contact/ContactEmailInput";
import { ContactPhoneInput } from "@/components/contact/ContactPhoneInput";
import { ContactSubjectSelect } from "@/components/contact/ContactSubjectSelect";
import { ContactValidationModal } from "@/components/contact/ContactValidationModal";
import { isValidEmail } from "@/lib/contactEmail";
import { digitsOnly } from "@/lib/contactPhoneCountries";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-lg border bg-surface px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 disabled:opacity-60";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldKey =
  | "firstName"
  | "lastName"
  | "company"
  | "position"
  | "email"
  | "phone"
  | "kvkkConsent";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span className="ml-0.5 text-red-600" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    inputBase,
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-border focus:border-brand-300 focus:ring-brand-100",
  );
}

type ContactFormProps = {
  embedded?: boolean;
};

export function ContactForm({ embedded = false }: ContactFormProps) {
  const locale = useLocale();
  const t = useTranslations("contact.form");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState("");
  const [fieldResetKey, setFieldResetKey] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const focusTargetByField: Partial<Record<FieldKey, string>> = {
    email: "#email-local",
    phone: "#phone-number",
  };

  const requiredFields: FieldKey[] = [
    "firstName",
    "lastName",
    "company",
    "position",
    "email",
    "phone",
    "kvkkConsent",
  ];

  function validateForm(form: HTMLFormElement): Partial<Record<FieldKey, string>> {
    const data = new FormData(form);
    const next: Partial<Record<FieldKey, string>> = {};

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const position = String(data.get("position") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const kvkk = data.get("kvkkConsent") === "on";

    if (!firstName) next.firstName = t("errors.firstName");
    if (!lastName) next.lastName = t("errors.lastName");
    if (!company) next.company = t("errors.company");
    if (!position) next.position = t("errors.position");
    if (!email) next.email = t("errors.email");
    else if (!isValidEmail(email)) next.email = t("errors.emailInvalid");
    if (!phone) next.phone = t("errors.phone");
    else if (digitsOnly(phone).length < 10) next.phone = t("errors.phoneInvalid");
    if (!kvkk) next.kvkkConsent = t("errors.kvkk");

    return next;
  }

  function scrollToFirstError(fieldErrors: Partial<Record<FieldKey, string>>) {
    const first = requiredFields.find((key) => fieldErrors[key]);
    if (!first || !formRef.current) return;

    const selector = focusTargetByField[first] ?? `[name="${first}"]`;
    const el =
      first === "kvkkConsent"
        ? formRef.current.querySelector<HTMLElement>('[name="kvkkConsent"]')
        : formRef.current.querySelector<HTMLElement>(selector);

    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const fieldErrors = validateForm(form);

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setShowModal(true);
      scrollToFirstError(fieldErrors);
      return;
    }

    setErrors({});
    setShowModal(false);
    setState("submitting");

    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      position: String(data.get("position") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      kvkkConsent: true,
      marketingConsent: data.get("marketingConsent") === "on",
      website: String(data.get("website") ?? ""),
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("submit failed");
      setState("success");
      form.reset();
      setSubject("");
      setFieldResetKey((k) => k + 1);
    } catch {
      setState("error");
    }
  }

  function clearFieldError(key: FieldKey) {
    if (!errors[key]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  if (state === "success") {
    return (
      <div
        className={cn(
          "w-full text-center",
          embedded ? "py-8 sm:py-10" : "rounded-2xl border border-brand-200 bg-brand-50 p-8 shadow-sm sm:p-10",
        )}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-white">
          ✓
        </div>
        <h2 className="mt-5 text-xl font-bold text-foreground">{t("successTitle")}</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("w-full", !embedded && "flex h-full flex-1 flex-col")}>
      <ContactValidationModal
        open={showModal}
        title={t("validationModalTitle")}
        message={t("validationModalMessage")}
        closeLabel={t("validationModalClose")}
        onClose={() => setShowModal(false)}
      />

      <div className={cn(!embedded && "h-full rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10")}>
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">{t("title")}</h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          {t("subtitle")}
        </p>

        {state === "error" ? (
          <p
            role="alert"
            className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {t("error")}
          </p>
        ) : null}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
          noValidate
        >
          <div
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            aria-hidden
          >
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="firstName"
              label={t("firstName")}
              required
              error={errors.firstName}
            >
              <input
                id="firstName"
                type="text"
                name="firstName"
                autoComplete="given-name"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                className={inputClass(!!errors.firstName)}
                disabled={state === "submitting"}
                onInput={() => clearFieldError("firstName")}
              />
            </Field>
            <Field
              id="lastName"
              label={t("lastName")}
              required
              error={errors.lastName}
            >
              <input
                id="lastName"
                type="text"
                name="lastName"
                autoComplete="family-name"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                className={inputClass(!!errors.lastName)}
                disabled={state === "submitting"}
                onInput={() => clearFieldError("lastName")}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="company" label={t("company")} required error={errors.company}>
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "company-error" : undefined}
                className={inputClass(!!errors.company)}
                disabled={state === "submitting"}
                onInput={() => clearFieldError("company")}
              />
            </Field>
            <Field id="position" label={t("position")} required error={errors.position}>
              <input
                id="position"
                type="text"
                name="position"
                autoComplete="organization-title"
                aria-invalid={!!errors.position}
                aria-describedby={errors.position ? "position-error" : undefined}
                className={inputClass(!!errors.position)}
                disabled={state === "submitting"}
                onInput={() => clearFieldError("position")}
              />
            </Field>
          </div>

          <Field id="email" label={t("email")} required error={errors.email}>
            <ContactEmailInput
              key={`email-${fieldResetKey}`}
              id="email"
              hasError={!!errors.email}
              disabled={state === "submitting"}
              inputClassName={inputClass(!!errors.email)}
              onChange={() => clearFieldError("email")}
            />
          </Field>

          <Field id="phone" label={t("phone")} required error={errors.phone}>
            <ContactPhoneInput
              key={`phone-${fieldResetKey}`}
              id="phone"
              hasError={!!errors.phone}
              disabled={state === "submitting"}
              inputClassName={inputClass(!!errors.phone)}
              onChange={() => clearFieldError("phone")}
            />
          </Field>

          <Field id="subject" label={t("subject")}>
            <ContactSubjectSelect
              id="subject"
              value={subject}
              onChange={setSubject}
              disabled={state === "submitting"}
            />
          </Field>

          <Field id="message" label={t("message")}>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={cn(inputClass(false), "min-h-[8rem] resize-y")}
              disabled={state === "submitting"}
            />
          </Field>

          <div
            className={cn(
              "space-y-3 rounded-xl px-4 py-4",
              errors.kvkkConsent
                ? "border border-red-300 bg-red-50/50"
                : "border border-border/60 bg-white",
            )}
          >
            <label className="flex cursor-pointer gap-3 text-sm leading-relaxed text-foreground-muted">
              <input
                type="checkbox"
                name="kvkkConsent"
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-accent focus:ring-brand-300"
                disabled={state === "submitting"}
                aria-invalid={!!errors.kvkkConsent}
                onChange={() => clearFieldError("kvkkConsent")}
              />
              <span>
                {t("kvkkPrefix")}{" "}
                <Link
                  href="/gizlilik-kvkk"
                  className="font-medium text-accent hover:underline"
                  target="_blank"
                >
                  {t("kvkkLink")}
                </Link>{" "}
                {t("kvkkSuffix")}
                <span className="text-red-600" aria-hidden>
                  {" "}
                  *
                </span>
              </span>
            </label>
            {errors.kvkkConsent ? (
              <p className="text-sm text-red-600" role="alert">
                {errors.kvkkConsent}
              </p>
            ) : null}

            <label className="flex cursor-pointer gap-3 text-sm leading-relaxed text-foreground-muted">
              <input
                type="checkbox"
                name="marketingConsent"
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-accent focus:ring-brand-300"
                disabled={state === "submitting"}
              />
              <span>{t("marketingConsent")}</span>
            </label>
          </div>

          <p className="text-xs leading-relaxed text-foreground-subtle">
            {t("requiredNote")}
          </p>

          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-700 disabled:opacity-60 sm:w-auto sm:min-w-[12rem]"
          >
            {state === "submitting" ? t("submitting") : t("submit")}
        </button>
      </form>
      </div>
    </div>
  );
}
