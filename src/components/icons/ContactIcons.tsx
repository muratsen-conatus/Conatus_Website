import { cn } from "@/lib/utils";

type IconProps = { className?: string };

/** fa-envelope (regular) */
export function EnvelopeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7 shrink-0", className)}
      aria-hidden
    >
      <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48v40.8c-22.4 18.3-58.2 47.4-135.3 102.2-17.5 12.5-51.5 12.5-69 0C130.2 199.8 94.4 170.7 72 152.4V112h384zM48 400V176.5l142.9 113.3c15.2 11.6 35.9 17.5 56.1 17.5s40.9-5.9 56.1-17.5L464 176.5V400H48z" />
    </svg>
  );
}

/** fa-phone-alt (solid) */
export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7 shrink-0", className)}
      aria-hidden
    >
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.1l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48C0 222.8 177.2 400 352 400a24.05 24.05 0 0 0 23.4-18.6l24-104a24.1 24.1 0 0 0-2.01-25.6z" />
    </svg>
  );
}
