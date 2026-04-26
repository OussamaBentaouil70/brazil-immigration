"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "./translation-context";
import { useRouter, usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

const localeInfo = {
  en: { code: "EN", countryCode: "US", name: "English" },
  ar: { code: "AR", countryCode: "SA", name: "العربية" },
  fr: { code: "FR", countryCode: "FR", name: "Français" }
};

export default function LanguageSwitcher() {
  const { locale, availableLocales } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLocale = (newLocale) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    const newPath = segments.length > 0 ? `/${segments.join("/")}` : "/";
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      <button
        className="lang-dropdown__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        type="button"
      >
        <ReactCountryFlag
          countryCode={localeInfo[locale].countryCode}
          svg
          style={{
            width: '1.2em',
            height: '1.2em',
            borderRadius: '2px',
            objectFit: 'cover'
          }}
          title={localeInfo[locale].countryCode}
        />
        <span className="lang-dropdown__current-code">{localeInfo[locale].code}</span>
        <svg 
          className={`lang-dropdown__arrow ${isOpen ? 'lang-dropdown__arrow--open' : ''}`}
          width="10" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className="lang-dropdown__menu">
          {availableLocales.map((loc) => (
            <button
              key={loc}
              className={`lang-dropdown__option ${locale === loc ? "lang-dropdown__option--active" : ""}`}
              onClick={() => changeLocale(loc)}
              type="button"
            >
              <ReactCountryFlag
                countryCode={localeInfo[loc].countryCode}
                svg
                style={{
                  width: '1.2em',
                  height: '1.2em',
                  borderRadius: '2px',
                  objectFit: 'cover'
                }}
              />
              <span className="lang-dropdown__option-code">{localeInfo[loc].code}</span>
              <span className="lang-dropdown__option-name">{localeInfo[loc].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}