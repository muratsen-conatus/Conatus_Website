import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: ComponentProps<typeof Link>["href"];
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-brand-700 shadow-sm shadow-brand-600/20",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:bg-surface-muted",
  ghost: "text-foreground-muted hover:text-accent hover:bg-brand-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066cc]",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
