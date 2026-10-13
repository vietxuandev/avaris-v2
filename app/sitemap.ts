import type { MetadataRoute } from "next";
import { localePath, locales } from "@/i18n/config";

const BASE_URL = "https://avariswater.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    vi: `${BASE_URL}${localePath("vi")}`,
    en: `${BASE_URL}${localePath("en")}`,
  };

  return locales.map((locale) => ({
    url: `${BASE_URL}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "vi" ? 1 : 0.9,
    alternates: { languages },
  }));
}
