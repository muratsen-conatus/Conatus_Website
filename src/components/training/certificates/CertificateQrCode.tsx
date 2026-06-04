import { cn } from "@/lib/utils";

type CertificateQrCodeProps = {
  className?: string;
  label?: string;
};

/** Statik doğrulama QR görünümü (şablon) */
export function CertificateQrCode({ className, label }: CertificateQrCodeProps) {
  return (
    <div className={cn("flex flex-col items-center gap-0.5", className)}>
      <svg
        viewBox="0 0 21 21"
        className="h-11 w-11 border border-foreground/10 bg-white p-0.5 sm:h-12 sm:w-12"
        aria-hidden={!label}
        role={label ? "img" : undefined}
        aria-label={label}
      >
        <rect width="21" height="21" fill="#fff" />
        <path
          fill="#0f172a"
          d="M0 0h7v7H0zm9 0h3v3H9zm12 0h3v3h-3zM0 9h3v3H0zm6 0h3v3H6zm12 0h3v3h-3zM18 9h3v3h-3zM0 18h7v3H0zm9 0h3v3H9zm12 0h3v3h-3zM6 6h3v3H6zm12 6h3v3h-3zM3 12h3v3H3zm15 0h3v3h-3zM9 15h3v3H9z"
        />
      </svg>
    </div>
  );
}
