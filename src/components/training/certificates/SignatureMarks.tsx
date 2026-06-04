import { cn } from "@/lib/utils";

type SignatureMarkProps = {
  className?: string;
};

/** Dekoratif el yazısı imza — kurucu */
export function FounderSignatureMark({ className }: SignatureMarkProps) {
  return (
    <svg
      viewBox="0 0 200 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-11 w-36 text-brand-950", className)}
      aria-hidden
    >
      <path
        d="M14 38 C22 14, 38 12, 48 26 S 58 42, 72 28 S 88 18, 102 32 S 118 44, 138 24 S 158 16, 178 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 42 C38 36, 52 38, 68 44 M92 20 C96 30, 94 40, 88 48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

/** Dekoratif el yazısı imza — eğitmen */
export function TrainerSignatureMark({ className }: SignatureMarkProps) {
  return (
    <svg
      viewBox="0 0 200 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-11 w-36 text-brand-950", className)}
      aria-hidden
    >
      <path
        d="M12 32 C20 18, 36 16, 50 28 C58 36, 62 44, 78 40 C92 36, 98 22, 112 26 C126 30, 132 42, 148 38 C162 34, 172 24, 186 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 14 C52 24, 50 34, 44 42 M118 16 L128 28 M156 44 C168 40, 176 32, 180 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
