import type viJson from "@/app/[lang]/dictionaries/vi.json";

/**
 * JSON import cho ra literal type ("Đẳng cấp của sự tinh khiết"), nên phải
 * nới rộng thành string thì bản tiếng Anh mới gán được vào cùng kiểu.
 */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? Widen<Item>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

/**
 * Hình dạng từ điển suy ra từ bản tiếng Việt. Bản tiếng Anh được kiểm tra
 * theo kiểu này trong app/[lang]/dictionaries.ts — thiếu khoá là lỗi biên dịch.
 */
export type Dictionary = Widen<typeof viJson>;

export type NavLink = Dictionary["nav"]["links"][number];
export type JourneyStep = Dictionary["journey"]["steps"][number];
export type ProductSpec = Dictionary["products"]["specs"][number];
export type FeatureCard = Dictionary["whyChoose"]["cards"][number];
export type ContactChannel = Dictionary["contact"]["channels"][number];
