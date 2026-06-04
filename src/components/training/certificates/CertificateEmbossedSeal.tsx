import { ConatusLogoMark } from "@/components/training/certificates/ConatusLogoMark";
import { cn } from "@/lib/utils";

type CertificateEmbossedSealProps = {
  className?: string;
};

export function CertificateEmbossedSeal({ className }: CertificateEmbossedSealProps) {
  const scallops = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    const rad = (angle * Math.PI) / 180;
    return {
      cx: 32 + Math.cos(rad) * 28,
      cy: 32 + Math.sin(rad) * 28,
    };
  });

  return (
    <div
      className={cn(
        "relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="certSealGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="55%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#certSealGrad)" />
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
        {scallops.map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r="2.2" fill="#cbd5e1" />
        ))}
      </svg>
      <ConatusLogoMark className="relative h-6 w-9" />
    </div>
  );
}
