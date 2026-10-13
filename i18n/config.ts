export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

/** Nhãn ngắn hiển thị trên nút chuyển ngôn ngữ */
export const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

/** Tên đầy đủ của từng ngôn ngữ */
export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
};

/** Mã locale cho OpenGraph */
export const openGraphLocales: Record<Locale, string> = {
  vi: "vi_VN",
  en: "en_US",
};

/** Giá trị cho thuộc tính lang của thẻ <html> */
export const htmlLangTags: Record<Locale, string> = {
  vi: "vi",
  en: "en",
};

/** Mỗi ngôn ngữ có tiền tố riêng: /vi và /en */
export const localePath = (locale: Locale): string => `/${locale}`;

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Tên cookie ghi nhớ lựa chọn ngôn ngữ của người dùng */
export const LOCALE_COOKIE = "avaris_locale";
