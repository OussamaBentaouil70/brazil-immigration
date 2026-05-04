import Link from "next/link";
import Image from "next/image";

import logoWhite from "../../../assets/images/logo-white.webp";
import heroImage from "../../../assets/images/download-1.webp";

const heroStyle = {
  backgroundImage: `linear-gradient(115deg, rgba(7, 38, 31, 0.92) 14%, rgba(7, 38, 31, 0.72) 48%, rgba(7, 38, 31, 0.45) 100%), url(${heroImage.src})`,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
};

export const metadata = {
  title: "Thank You - American Visa",
  description: "Your consultation request has been received."
};

export default function AmericanVisaThankYouPage() {
  return (
    <main className="page-shell">
      <section className="hero" style={heroStyle}>
        <div className="hero__overlay" />

        <div className="container hero__container" style={{ flex: 1, display: "grid", placeItems: "center", paddingTop: "120px" }}>
          <div className="hero__content" style={{ textAlign: "center", maxWidth: "800px" }}>
            <div className="hero__brand-block" style={{ margin: "0 auto 40px" }}>
              <Image alt="American Visa logo" className="hero__logo" priority src={logoWhite} />
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>Thank You!</h1>
            <p className="hero__subtitle" style={{ margin: "24px auto 40px" }}>
              Your request has been received. We will get back to you shortly via email or WhatsApp.
            </p>
            <div className="hero__actions" style={{ justifyContent: "center" }}>
              <Link className="button button--primary" href="/">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
