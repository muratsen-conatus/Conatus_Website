import { cn } from "@/lib/utils";

type CertificateGuillocheFrameProps = {
  children: React.ReactNode;
  className?: string;
};

const FRAME_IMAGE = "/training/certificate-frame-template.png";

/**
 * Referans katılım belgesindeki guilloche çerçeve — arka plan görseli + iç beyaz alan.
 */
export function CertificateGuillocheFrame({
  children,
  className,
}: CertificateGuillocheFrameProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-white shadow-lg", className)}
      style={{ aspectRatio: "842 / 595" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${FRAME_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-[7.5%] flex flex-col bg-white">
        {children}
      </div>
    </div>
  );
}
