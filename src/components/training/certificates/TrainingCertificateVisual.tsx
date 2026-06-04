import { CertificateEmbossedSeal } from "@/components/training/certificates/CertificateEmbossedSeal";
import { CertificateGuillocheFrame } from "@/components/training/certificates/CertificateGuillocheFrame";
import { CertificateQrCode } from "@/components/training/certificates/CertificateQrCode";
import { ConatusLogoMark } from "@/components/training/certificates/ConatusLogoMark";
import {
  FounderSignatureMark,
  TrainerSignatureMark,
} from "@/components/training/certificates/SignatureMarks";
import { cn } from "@/lib/utils";

export type TrainingCertificateVariant =
  | "participation"
  | "achievement"
  | "instructor";

export type TrainingCertificateLabels = {
  documentTitle: string;
  salutation: string;
  participantPlaceholder: string;
  bodyIntro: string;
  courseLabel: string;
  certificateNoLabel: string;
  dateLabel: string;
  founderRole: string;
  founderName: string;
  trainerRole: string;
  trainerName: string;
  qrLabel: string;
};

type TrainingCertificateVisualProps = {
  variant: TrainingCertificateVariant;
  courseTitle: string;
  certificateNumber: string;
  labels: TrainingCertificateLabels;
  className?: string;
};

export function TrainingCertificateVisual({
  courseTitle,
  certificateNumber,
  labels,
  className,
}: TrainingCertificateVisualProps) {
  return (
    <CertificateGuillocheFrame className={className}>
      <div className="relative flex h-full min-h-0 flex-col px-3 py-2 sm:px-4 sm:py-2.5">
        {/* Marka + belge tipi */}
        <header className="shrink-0 text-center">
          <div className="flex flex-col items-center gap-0.5">
            <ConatusLogoMark className="h-5 w-8 sm:h-6 sm:w-10" />
            <p className="text-[10px] font-bold tracking-[0.2em] text-foreground sm:text-[11px]">
              CONATUS
            </p>
          </div>
          <h3 className="mt-1.5 text-[10px] font-bold uppercase tracking-wide text-foreground sm:text-[11px]">
            {labels.documentTitle}
          </h3>
        </header>

        {/* Katılımcı */}
        <section className="mt-2 shrink-0 text-center">
          <p className="text-[9px] font-bold text-accent sm:text-[10px]">
            {labels.salutation}
          </p>
          <p className="mt-0.5 text-sm font-bold uppercase leading-tight text-foreground sm:text-[15px]">
            {labels.participantPlaceholder}
          </p>
          <div
            className="mx-auto mt-1.5 h-px w-[70%] bg-foreground/25"
            aria-hidden
          />
        </section>

        {/* Sertifika metni + vurgulu eğitim */}
        <section className="mt-1.5 min-h-0 flex-1 px-0.5 text-center">
          <p className="text-[8.5px] leading-snug text-foreground sm:text-[9.5px]">
            {labels.bodyIntro}
          </p>
          <p
            className={cn(
              "mx-auto mt-1.5 max-w-[92%] rounded-sm bg-brand-50/80 px-1.5 py-1",
              "text-[9.5px] font-bold leading-snug text-foreground sm:text-[10.5px]",
            )}
          >
            {courseTitle}
          </p>
          <p className="mt-0.5 text-[7.5px] font-medium uppercase tracking-wide text-foreground-subtle">
            {labels.courseLabel}
          </p>
        </section>

        {/* Sertifika no, QR, mühür */}
        <section className="relative mt-1 shrink-0">
          <div className="flex items-end justify-between gap-2 pr-1">
            <div className="min-w-0 text-left text-[7.5px] text-foreground sm:text-[8.5px]">
              <p>
                <span className="font-semibold">{labels.certificateNoLabel}</span>{" "}
                <span className="font-mono text-[7px] sm:text-[8px]">
                  {certificateNumber}
                </span>
              </p>
              <p className="mt-0.5">
                <span className="font-semibold">{labels.dateLabel}:</span>{" "}
                <span className="inline-block min-w-[3.5rem] border-b border-foreground/30" />
              </p>
            </div>
            <CertificateQrCode label={labels.qrLabel} />
          </div>
          <CertificateEmbossedSeal className="pointer-events-none absolute -right-0.5 bottom-6 hidden opacity-90 sm:flex" />
        </section>

        {/* Kurucu (sol) · Eğitmen (sağ) */}
        <footer className="mt-1.5 grid shrink-0 grid-cols-2 gap-2 border-t border-foreground/15 pt-2">
          <div className="text-left">
            <FounderSignatureMark className="h-6 w-full max-w-[5.5rem]" />
            <div className="mt-0.5 h-px w-full max-w-[5rem] bg-foreground/25" />
            <p className="mt-0.5 text-[8.5px] font-bold text-foreground">
              {labels.founderName}
            </p>
            <p className="text-[7.5px] text-foreground-muted">{labels.founderRole}</p>
          </div>
          <div className="text-right">
            <TrainerSignatureMark className="ml-auto h-6 w-full max-w-[5.5rem]" />
            <div className="ml-auto mt-0.5 h-px w-full max-w-[5rem] bg-foreground/25" />
            <p className="mt-0.5 text-[8.5px] font-bold text-foreground">
              {labels.trainerName}
            </p>
            <p className="text-[7.5px] text-foreground-muted">{labels.trainerRole}</p>
          </div>
        </footer>
      </div>
    </CertificateGuillocheFrame>
  );
}

export function buildCertificateNumber(
  courseId: string,
  variant: TrainingCertificateVariant,
): string {
  const prefix =
    variant === "achievement" ? "BSR" : variant === "instructor" ? "EGT" : "KTL";
  const slug = courseId
    .replace(/[^a-z0-9]/gi, "")
    .slice(0, 6)
    .toUpperCase();
  return `SN-${prefix}-${slug || "GEN"}-2026`;
}
