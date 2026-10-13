import "server-only";

import { hasLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Từ điển nạp theo yêu cầu: chỉ ngôn ngữ đang dùng được tải.
 * Kiểu trả về được ghi rõ là Dictionary nên bản tiếng Anh thiếu khoá so với
 * bản tiếng Việt sẽ báo lỗi ngay lúc biên dịch.
 *
 * Record<Locale, …> buộc phải có đủ từ điển cho mọi ngôn ngữ khai báo trong
 * i18n/config.ts.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  vi: () =>
    import("./dictionaries/vi.json").then(
      (module): Dictionary => module.default,
    ),
  en: () =>
    import("./dictionaries/en.json").then(
      (module): Dictionary => module.default,
    ),
};

export { hasLocale };
export type { Locale };

/** Chỉ gọi được ở Server Component — file này có import "server-only". */
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!hasLocale(locale)) {
    throw new Error(`Ngôn ngữ không được hỗ trợ: ${locale}`);
  }

  return dictionaries[locale]();
};
