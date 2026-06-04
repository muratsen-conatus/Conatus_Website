import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const framesDir = join(root, ".tmp/hardware-robot-frames");
const outputGif = join(root, "public/technology/hardware-robot-arm.gif");
const ffmpeg = join(root, "node_modules/ffmpeg-static/ffmpeg");

const FRAME_COUNT = 48;
const FPS = 12;
const WIDTH = 720;
const HEIGHT = 450;

const STROKE = "#0066cc";

/** Omuz ve dirsek açıları — pick & place döngüsü (derece) */
function getJointAngles(frame) {
  const t = frame / FRAME_COUNT;
  const phase = t * Math.PI * 2;
  const reach = (Math.sin(phase - Math.PI / 2) + 1) / 2;

  const shoulder = -10 + reach * 34;
  const elbow = 22 - reach * 52;

  return { shoulder, elbow };
}

function buildRobotSvg(shoulderDeg, elbowDeg) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 160 100">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0f7ff"/>
      <stop offset="45%" stop-color="#e3effc"/>
      <stop offset="100%" stop-color="#f0f7ff"/>
    </linearGradient>
  </defs>
  <rect width="160" height="100" fill="url(#bg)" rx="0"/>
  <g fill="none" stroke="${STROKE}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 78h94"/>
    <circle cx="26" cy="78" r="3"/>
    <circle cx="78" cy="78" r="3"/>
    <rect x="22" y="54" width="20" height="24" rx="2"/>
    <rect x="50" y="50" width="24" height="28" rx="2"/>
    <rect x="82" y="56" width="18" height="22" rx="2"/>
    <rect x="34" y="70" width="8" height="8" rx="1"/>
    <rect x="62" y="70" width="8" height="8" rx="1"/>
    <path d="M50 50V38h8M82 56V42h4"/>
    <rect x="114" y="60" width="28" height="18" rx="2"/>
    <path d="M128 60V44"/>
    <g transform="translate(128 44)">
      <g transform="rotate(${shoulderDeg.toFixed(2)})">
        <path d="M0 0 L-28 -14"/>
        <g transform="translate(-28 -14) rotate(${elbowDeg.toFixed(2)})">
          <path d="M0 0 l-6 10"/>
          <circle cx="-6" cy="10" r="4"/>
          <path d="M-6 14 v8 M-9 22 h6"/>
        </g>
      </g>
    </g>
  </g>
</svg>`;
}

mkdirSync(framesDir, { recursive: true });

for (let i = 0; i < FRAME_COUNT; i++) {
  const { shoulder, elbow } = getJointAngles(i);
  const svg = buildRobotSvg(shoulder, elbow);
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: WIDTH },
    background: "#f0f7ff",
  });
  const png = resvg.render().asPng();
  writeFileSync(join(framesDir, `frame-${String(i).padStart(3, "0")}.png`), png);
}

execFileSync(
  ffmpeg,
  [
    "-y",
    "-framerate",
    String(FPS),
    "-i",
    join(framesDir, "frame-%03d.png"),
    "-vf",
    `fps=${FPS},scale=${WIDTH}:${HEIGHT}:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3`,
    "-loop",
    "0",
    outputGif,
  ],
  { stdio: "inherit" },
);

rmSync(framesDir, { recursive: true, force: true });

const size = readdirSync(join(root, "public/technology")).includes(
  "hardware-robot-arm.gif",
)
  ? "ok"
  : "missing";

console.log(`Generated ${outputGif} (${size})`);
