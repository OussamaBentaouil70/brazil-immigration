"use client";

import { useEffect } from "react";

import { TranslationProvider } from "../../components/translation-context";

export default function LocaleLayoutClient({ children, locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <TranslationProvider locale={locale}>
      {children}
    </TranslationProvider>
  );
}