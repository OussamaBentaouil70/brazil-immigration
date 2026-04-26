"use client";

import { TranslationProvider } from "../../components/translation-context";

export default function LocaleLayoutClient({ children, locale }) {
  return (
    <TranslationProvider locale={locale}>
      {children}
    </TranslationProvider>
  );
}