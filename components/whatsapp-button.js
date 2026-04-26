"use client";

import { useTranslation } from "./translation-context";

const whatsappLink = "https://wa.me/5544991065886";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12c0 1.76.46 3.48 1.33 5l-1.37 5 5.12-1.34A9.88 9.88 0 0 0 12 21.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04Zm0 18.13c-1.5 0-2.97-.4-4.26-1.14l-.3-.18-3.04.8.81-2.97-.2-.31a8.18 8.18 0 0 1-1.26-4.37A8.25 8.25 0 0 1 12 3.79 8.25 8.25 0 0 1 20.21 12 8.25 8.25 0 0 1 12 20.17Zm4.53-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.38-2-1.21-.74-.66-1.25-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.76 2.69 4.28 3.76.6.26 1.08.41 1.44.52.61.19 1.16.16 1.6.1.49-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" fill="currentColor"/>
    </svg>
  );
}

export default function WhatsAppButton({ className = "" }) {
  const { t } = useTranslation();
  
  return (
    <a 
      className={`button button--hero-whatsapp ${className}`} 
      href={whatsappLink} 
      rel="noreferrer" 
      target="_blank"
    >
      <span className="button__icon" aria-hidden="true">
        <WhatsAppIcon />
      </span>
      <span>{t("hero.ctaWhatsapp")}</span>
    </a>
  );
}
