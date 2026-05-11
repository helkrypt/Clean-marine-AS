import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://cleanmarin.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l === "no" ? "nb-NO" : "en-US", `${BASE_URL}/${l}`])
  );

  return routing.locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1.0 : 0.9,
    alternates: { languages },
  }));
}
