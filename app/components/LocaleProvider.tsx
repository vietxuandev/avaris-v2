"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export default function LocaleProvider({
  locale,
  dict,
  children,
}: LocaleContextValue & { children: ReactNode }) {
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale phải được dùng bên trong <LocaleProvider>");
  }
  return context;
}

export function useDictionary(): Dictionary {
  return useLocale().dict;
}
