import { TechnologyVisualFrame } from "@/components/technology/TechnologyVisualFrame";
import {
  technologyDemoFrameInnerClass,
  technologyDemoFrameInnerCompactClass,
  technologyDemoMediaClass,
  technologyDemoMediaCompactClass,
} from "@/components/technology/technology-demo-frame";
import { cn } from "@/lib/utils";

type TechnologyCipDemoAnimationProps = {
  label: string;
  className?: string;
  compact?: boolean;
};

function getStroke(compact: boolean) {
  return {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: compact ? 2.35 : 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

/** Sağ üst kart — viewBox 0 0 160 100 */
const CLICK = { x: 80, y: 42, w: 56, h: 14, cx: 108, cy: 49 };

/** CIP tanıtımı — tek SVG içinde illüstrasyon, imleç, tıklama ve onay tiki */
export function TechnologyCipDemoAnimation({
  label,
  className,
  compact = false,
}: TechnologyCipDemoAnimationProps) {
  const stroke = getStroke(compact);

  return (
    <TechnologyVisualFrame
      compact={compact}
      className={cn("w-full p-0", className)}
    >
      <div
        className={
          compact
            ? technologyDemoFrameInnerCompactClass
            : technologyDemoFrameInnerClass
        }
        role="img"
        aria-label={label}
      >
        <svg
          viewBox="0 0 160 100"
          className={cn(
            "cip-demo-svg text-accent",
            compact && "cip-demo-svg--compact",
            compact ? technologyDemoMediaCompactClass : technologyDemoMediaClass,
          )}
          aria-hidden
        >
          <rect {...stroke} x="12" y="16" width="136" height="68" rx="6" />
          <path {...stroke} d="M12 32h136" />
          <circle {...stroke} cx="24" cy="24" r="3" />
          <circle {...stroke} cx="34" cy="24" r="3" />
          <rect {...stroke} x="24" y="42" width="48" height="32" rx="3" />
          <rect {...stroke} x="80" y="42" width="56" height="14" rx="2" />
          <rect {...stroke} x="80" y="60" width="56" height="14" rx="2" />
          <path {...stroke} d="M36 58h24M36 66h16" />

          <rect
            className="cip-demo-target"
            x={CLICK.x}
            y={CLICK.y}
            width={CLICK.w}
            height={CLICK.h}
            rx="2"
          />

          <g transform={`translate(${CLICK.cx} ${CLICK.cy})`}>
            <circle className="cip-demo-ripple" cx="0" cy="0" r="6" />
          </g>

          <g className="cip-demo-cursor">
            <path
              fill="currentColor"
              stroke="#fff"
              strokeWidth={compact ? 1 : 0.75}
              d="M0 0 L1.5 11 L4.5 8.5 L7 12 L9 9.5 L0 0 Z"
            />
          </g>

          <g className="cip-demo-tick">
            <circle
              r="9"
              fill="currentColor"
              fillOpacity="0.12"
              stroke="currentColor"
              strokeWidth={compact ? 2 : 1.5}
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={compact ? 2.5 : 2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M-5 0l3 3 7-8"
            />
          </g>
        </svg>
      </div>
    </TechnologyVisualFrame>
  );
}
