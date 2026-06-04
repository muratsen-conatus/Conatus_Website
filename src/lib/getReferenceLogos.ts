import fs from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";

export type ReferenceLogo = {
  src: string;
  name: string;
  filename: string;
};

const REFERENCES_DIR = path.join(process.cwd(), "public/references");
const IMAGE_EXT = /\.(png|jpe?g|webp|svg)$/i;

function formatLogoName(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  const spaced = base
    .replace(/([a-zığüşöç])([A-ZİĞÜŞÖÇ])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-zığüşöç])/g, "$1 $2")
    .replace(/[-_]+/g, " ");

  return spaced
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/** public/references/ klasöründeki logo dosyalarını okur (yeni PNG eklenince listeye girer) */
export function getReferenceLogos(): ReferenceLogo[] {
  noStore();

  if (!fs.existsSync(REFERENCES_DIR)) {
    return [];
  }

  return fs
    .readdirSync(REFERENCES_DIR)
    .filter(
      (file) =>
        IMAGE_EXT.test(file) &&
        !file.startsWith(".") &&
        file.toLowerCase() !== "readme.md",
    )
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .map((filename) => ({
      filename,
      src: `/references/${filename}`,
      name: formatLogoName(filename),
    }));
}
