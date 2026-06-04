import { defineRouting } from "next-intl/routing";
import { pathnames } from "./pathnames";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
  pathnames,
});

export type Locale = (typeof routing.locales)[number];
