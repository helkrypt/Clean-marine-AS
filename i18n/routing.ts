import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["no", "en"],
  defaultLocale: "no",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
