"use client";

import Link from "next/link";
import {
  LOCALE_COOKIE,
  localeLabels,
  localeNames,
  localePath,
  locales,
  type Locale,
} from "@/i18n/config";
import { useLocale } from "./LocaleProvider";

/** Ghi nhớ lựa chọn của người dùng để lần sau không bị tự chuyển theo hệ thống */
const rememberChoice = (locale: Locale) => {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${
    60 * 60 * 24 * 365
  }; samesite=lax`;
};

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, dict } = useLocale();

  return (
    <div
      role="group"
      aria-label={dict.nav.languageLabel}
      className={`inline-flex items-center rounded-full border border-navy/15 bg-white/70 p-0.5 backdrop-blur-md ${className}`}
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={localePath(item)}
            onClick={() => rememberChoice(item)}
            title={localeNames[item]}
            aria-current={isActive ? "true" : undefined}
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider transition-colors duration-300 ${
              isActive
                ? "bg-navy text-white shadow-sm"
                : "text-navy/60 hover:text-teal"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
