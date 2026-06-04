import type { ProductionSubsystemId } from "@/data/technology/production-system";
import { cn } from "@/lib/utils";

export type TechnologyIllustrationId =
  | "cip-platform"
  | "hardware-line"
  | "karakuri"
  | "robotic-arm"
  | "production-line-robot"
  | "cloud"
  | "on-prem"
  | "integration-internal"
  | "integration-external"
  | "integration-flexible"
  | ProductionSubsystemId;

type TechnologyIllustrationProps = {
  variant: TechnologyIllustrationId;
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function CipPlatformIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden>
      <rect {...stroke} x="12" y="16" width="136" height="68" rx="6" />
      <path {...stroke} d="M12 32h136" />
      <circle {...stroke} cx="24" cy="24" r="3" />
      <circle {...stroke} cx="34" cy="24" r="3" />
      <rect {...stroke} x="24" y="42" width="48" height="32" rx="3" />
      <rect {...stroke} x="80" y="42" width="56" height="14" rx="2" />
      <rect {...stroke} x="80" y="60" width="56" height="14" rx="2" />
      <path {...stroke} d="M36 58h24M36 66h16" />
    </svg>
  );
}

function HardwareLineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden>
      <path {...stroke} d="M20 72h120" />
      <rect {...stroke} x="28" y="48" width="24" height="24" rx="2" />
      <rect {...stroke} x="68" y="40" width="32" height="32" rx="2" />
      <rect {...stroke} x="116" y="52" width="20" height="20" rx="2" />
      <path {...stroke} d="M40 48V36h8M80 40V28h8M126 52V44h4" />
      <circle {...stroke} cx="52" cy="72" r="4" />
      <circle {...stroke} cx="104" cy="72" r="4" />
    </svg>
  );
}

/** Yalın karakuri — eğimli raf ve yerçekimi akışı */
function KarakuriIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden>
      <path {...stroke} d="M24 78h112M24 78V28l56-12 56 12v50" />
      <path {...stroke} d="M52 66l12-28 12 28M92 62l10-22 10 22" />
      <circle {...stroke} cx="64" cy="58" r="5" />
      <circle {...stroke} cx="102" cy="54" r="4" />
      <path {...stroke} d="M58 58l6 8M96 54l6 8" />
      <path {...stroke} d="M80 40v8M80 48l-8 6" />
    </svg>
  );
}

/** Otomasyona elverişli endüstriyel robot kolu */
function RoboticArmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden>
      <rect {...stroke} x="48" y="72" width="64" height="8" rx="2" />
      <path {...stroke} d="M72 72V56" />
      <path {...stroke} d="M72 56l28-20 12 8-20 28" />
      <path {...stroke} d="M92 44l16-8" />
      <circle {...stroke} cx="108" cy="36" r="5" />
      <path {...stroke} d="M108 41v6M105 47h6" />
      <circle {...stroke} cx="72" cy="56" r="4" />
      <circle {...stroke} cx="92" cy="44" r="3" />
      <path {...stroke} d="M56 56h8" />
    </svg>
  );
}

/** Seri üretim hattı ve robot — donanım teknolojisi */
function ProductionLineRobotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden>
      <path {...stroke} d="M14 78h94" />
      <circle {...stroke} cx="26" cy="78" r="3" />
      <circle {...stroke} cx="78" cy="78" r="3" />
      <rect {...stroke} x="22" y="54" width="20" height="24" rx="2" />
      <rect {...stroke} x="50" y="50" width="24" height="28" rx="2" />
      <rect {...stroke} x="82" y="56" width="18" height="22" rx="2" />
      <rect {...stroke} x="34" y="70" width="8" height="8" rx="1" />
      <rect {...stroke} x="62" y="70" width="8" height="8" rx="1" />
      <rect {...stroke} x="114" y="60" width="28" height="18" rx="2" />
      <path {...stroke} d="M128 60V44" />
      <path {...stroke} d="M128 44L100 30" />
      <path {...stroke} d="M100 30l-6 10" />
      <circle {...stroke} cx="94" cy="40" r="4" />
      <path {...stroke} d="M94 44v8M91 52h6" />
      <path {...stroke} d="M50 50V38h8M82 56V42h4" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 -6 80 62"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden
    >
      <path
        {...stroke}
        d="M20 40h40a14 14 0 000-28 18 18 0 00-35-6 15 15 0 00-5 34z"
      />
      <path {...stroke} d="M32 28v16M40 24v20M48 30v14" />
    </svg>
  );
}

function OnPremIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 56" className={className} aria-hidden>
      <rect {...stroke} x="16" y="12" width="48" height="36" rx="3" />
      <path {...stroke} d="M16 24h48M28 36h8M44 36h8" />
      <path {...stroke} d="M40 48v6M32 54h16" />
      <rect {...stroke} x="34" y="30" width="12" height="4" rx="1" />
    </svg>
  );
}

function ToolManagementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden>
      <path {...stroke} d="M20 36l8-20 8 20M32 16v8" />
      <circle {...stroke} cx="32" cy="12" r="4" />
    </svg>
  );
}

function FieldManagementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden>
      <rect {...stroke} x="10" y="14" width="20" height="24" rx="2" />
      <path {...stroke} d="M30 26h24M30 32h18" />
      <circle {...stroke} cx="48" cy="20" r="6" />
    </svg>
  );
}

function OperationsManagementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden>
      <circle {...stroke} cx="32" cy="24" r="14" />
      <path {...stroke} d="M32 14v4M32 30v4M42 24h-4M26 24h-4" />
      <path {...stroke} d="M38 18l3 3M27 33l-3-3" />
    </svg>
  );
}

function ProductionManagementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden>
      <rect {...stroke} x="12" y="28" width="40" height="10" rx="2" />
      <path {...stroke} d="M18 28V18h8v10M30 28V14h8v14M42 28V20h6v8" />
    </svg>
  );
}

function MaintenanceManagementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden>
      <path {...stroke} d="M22 34h20" />
      <circle {...stroke} cx="32" cy="22" r="10" />
      <path {...stroke} d="M38 16l6-6M42 28l4 4" />
    </svg>
  );
}

function QualityManagementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden>
      <path {...stroke} d="M18 26l10 14 18-28" />
      <circle {...stroke} cx="32" cy="38" r="4" />
    </svg>
  );
}

function IntegrationInternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 48" className={className} aria-hidden>
      <rect {...stroke} x="8" y="10" width="18" height="14" rx="2" />
      <rect {...stroke} x="30" y="10" width="18" height="14" rx="2" />
      <rect {...stroke} x="19" y="28" width="18" height="14" rx="2" />
      <path {...stroke} d="M17 24v4h22M28 24V28" />
    </svg>
  );
}

function IntegrationExternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 48" className={className} aria-hidden>
      <circle {...stroke} cx="28" cy="24" r="10" />
      <circle {...stroke} cx="10" cy="12" r="5" />
      <circle {...stroke} cx="46" cy="12" r="5" />
      <circle {...stroke} cx="46" cy="36" r="5" />
      <path {...stroke} d="M18 18l8 4M38 18l-8 4M38 30l-8-4" />
    </svg>
  );
}

function IntegrationFlexibleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 48" className={className} aria-hidden>
      <path {...stroke} d="M10 24h36" />
      <path {...stroke} d="M28 10v28" />
      <circle {...stroke} cx="28" cy="24" r="6" />
      <circle {...stroke} cx="10" cy="24" r="3" />
      <circle {...stroke} cx="46" cy="24" r="3" />
    </svg>
  );
}

const illustrationMap = {
  "cip-platform": CipPlatformIcon,
  "hardware-line": HardwareLineIcon,
  karakuri: KarakuriIcon,
  "robotic-arm": RoboticArmIcon,
  "production-line-robot": ProductionLineRobotIcon,
  cloud: CloudIcon,
  "on-prem": OnPremIcon,
  "integration-internal": IntegrationInternalIcon,
  "integration-external": IntegrationExternalIcon,
  "integration-flexible": IntegrationFlexibleIcon,
  toolManagement: ToolManagementIcon,
  fieldManagement: FieldManagementIcon,
  operationsManagement: OperationsManagementIcon,
  productionManagement: ProductionManagementIcon,
  maintenanceManagement: MaintenanceManagementIcon,
  qualityManagement: QualityManagementIcon,
} as const;

export function TechnologyIllustration({
  variant,
  className,
}: TechnologyIllustrationProps) {
  const Icon = illustrationMap[variant];
  return <Icon className={cn("h-full w-full max-h-full max-w-full", className)} />;
}
