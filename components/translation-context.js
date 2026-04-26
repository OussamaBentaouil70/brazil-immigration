"use client";

import { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations.json";

const TranslationContext = createContext(null);

export function TranslationProvider({ children, locale }) {
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLocale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value || key;
  };

  const getLocalePath = (path = "") => {
    if (currentLocale === "en") {
      return path;
    }
    return `/${currentLocale}${path ? `/${path}` : ""}`;
  };

  return (
    <TranslationContext.Provider
      value={{
        locale: currentLocale,
        t,
        getLocalePath,
        availableLocales: ["en", "ar", "fr"]
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}