import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type TechnologyIntegrationDiagramProps = {
  className?: string;
};

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  dashed?: boolean;
};

function Node({ x, y, w, h, label, dashed }: NodeProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill="white"
        fillOpacity="0.95"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray={dashed ? "5 4" : undefined}
        strokeOpacity={dashed ? 0.5 : 0.4}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  );
}

function PathHeader({
  cx,
  n,
  label,
}: {
  cx: number;
  n: number;
  label: string;
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={24}
        r="13"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <text
        x={cx}
        y={28}
        textAnchor="middle"
        fill="currentColor"
        fontSize="12"
        fontWeight="700"
      >
        {n}
      </text>
      <text
        x={cx}
        y={46}
        textAnchor="middle"
        fill="currentColor"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        {label}
      </text>
    </g>
  );
}

function Connector({
  x1,
  y1,
  x2,
  y2,
  dashed,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth="1.35"
      strokeOpacity={dashed ? 0.45 : 0.38}
      strokeDasharray={dashed ? "5 4" : undefined}
      markerEnd="url(#integration-arrow)"
    />
  );
}

/** Üç veri yolu → CIP — sade dikey akış */
export function TechnologyIntegrationDiagram({
  className,
}: TechnologyIntegrationDiagramProps) {
  const t = useTranslations("technology.cip.integration.diagram");

  const mergeY = 162;
  const mergeX = 200;
  const cip = { x: 118, y: 192, w: 164, h: 58 };
  const cipCx = cip.x + cip.w / 2;
  const cipTop = cip.y;

  const col1 = 72;
  const col2 = 200;
  const col3 = 328;

  return (
    <figure
      className={cn("min-w-0", className)}
      aria-label={t("figureLabel")}
    >
      <svg
        viewBox="0 0 400 268"
        className="mx-auto h-auto w-full text-[#0066cc]"
        aria-hidden
      >
        <defs>
          <marker
            id="integration-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path
              d="M0 0 L6 3 L0 6 Z"
              fill="currentColor"
              fillOpacity="0.5"
            />
          </marker>
        </defs>

        {/* Sütun alanları */}
        <rect
          x="6"
          y="52"
          width="132"
          height="108"
          rx="10"
          fill="currentColor"
          fillOpacity="0.05"
        />
        <rect
          x="134"
          y="52"
          width="132"
          height="108"
          rx="10"
          fill="currentColor"
          fillOpacity="0.05"
        />
        <rect
          x="262"
          y="52"
          width="132"
          height="108"
          rx="10"
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 3"
          strokeOpacity="0.2"
        />

        <PathHeader cx={col1} n={1} label={t("path1Label")} />
        <PathHeader cx={col2} n={2} label={t("path2Label")} />
        <PathHeader cx={col3} n={3} label={t("path3Label")} />

        <Node x={24} y={62} w={96} h={36} label={t("moduleA")} />
        <Node x={24} y={106} w={96} h={36} label={t("moduleB")} />
        <Connector x1={col1} y1={142} x2={mergeX} y2={mergeY} />

        <Node x={148} y={62} w={40} h={36} label={t("erp")} />
        <Node x={196} y={62} w={40} h={36} label={t("mes")} />
        <Node x={244} y={62} w={40} h={36} label={t("bi")} />
        <Connector x1={col2} y1={98} x2={mergeX} y2={mergeY} />

        <Node x={280} y={62} w={96} h={36} label={t("legacy")} dashed />
        <Node x={280} y={106} w={96} h={36} label={t("bridge")} dashed />
        <Connector x1={col3} y1={142} x2={mergeX} y2={mergeY} dashed />

        <circle
          cx={mergeX}
          cy={mergeY}
          r="4"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <Connector x1={mergeX} y1={mergeY} x2={cipCx} y2={cipTop} />

        <rect
          x={cip.x}
          y={cip.y}
          width={cip.w}
          height={cip.h}
          rx="12"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <text
          x={cipCx}
          y={cip.y + cip.h / 2 + 5}
          textAnchor="middle"
          fill="currentColor"
          fontSize="17"
          fontWeight="700"
        >
          {t("centerTitle")}
        </text>
      </svg>
      <figcaption className="mt-4 text-center text-xs text-foreground-muted sm:text-sm">
        {t("caption")}
      </figcaption>
    </figure>
  );
}
