"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import { useTranslation } from "@/components/translation-context";
import heroImage from "@/assets/images/download-1.webp";
import logoWhite from "@/assets/images/logo-white.webp";

export default function ThankYouPage({ params }) {
  const { t, locale } = useTranslation();

  const heroStyle = {
    backgroundImage: `linear-gradient(115deg, rgba(7, 38, 31, 0.92) 14%, rgba(7, 38, 31, 0.72) 48%, rgba(7, 38, 31, 0.45) 100%), url(${heroImage.src})`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  return (
    <main className="page-shell">
      <section className="hero" style={heroStyle}>
        <div className="hero__overlay" />
        <SiteHeader services={[]} whatsappLink="#" whatsappLabel={t("nav.whatsapp")} />

        <div className="container hero__container" style={{ flex: 1, display: "grid", placeItems: "center", paddingTop: "120px" }}>
          <div className="hero__content" style={{ textAlign: "center", maxWidth: "800px" }}>
            <div className="hero__brand-block" style={{ margin: "0 auto 40px" }}>
              <Image alt="Logo" className="hero__logo" priority src={logoWhite} />
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>{t("thankYou.title")}</h1>
            <p className="hero__subtitle" style={{ margin: "24px auto 40px" }}>
              {t("thankYou.message")}
            </p>
            <div className="hero__actions" style={{ justifyContent: "center" }}>
              <Link className="button button--primary" href={locale === "en" ? "/" : `/${locale}`}>
                {t("thankYou.backHome")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
