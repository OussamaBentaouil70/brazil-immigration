"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import InquiryForm from "@/components/inquiry-form";
import SiteHeader from "@/components/site-header";
import ScrollReveal from "@/components/scroll-reveal";
import ServicesSection from "@/components/services-section";
import TestimonialsSlider from "@/components/testimonials-slider";
import { useTranslation } from "@/components/translation-context";
import WhatsAppButton from "@/components/whatsapp-button";

import attorneyImage from "../../assets/images/image-5.webp";
import cityImage from "../../assets/images/image-4-scaled.webp";
import documentsImage from "../../assets/images/image-3.webp";
import flagsImage from "../../assets/images/image-2.webp";
import heroImage from "../../assets/images/download-1.webp";
import logoGold from "../../assets/images/logo.webp";
import logoWhite from "../../assets/images/logo-white.webp";

const whatsappLink = "https://wa.me/5544991065886";
const instagramLink = "https://www.instagram.com/erica.caspani/";
const linkedinLink = "https://www.linkedin.com/in/erica-montarini-caspani-386399150/";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12c0 1.76.46 3.48 1.33 5l-1.37 5 5.12-1.34A9.88 9.88 0 0 0 12 21.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04Zm0 18.13c-1.5 0-2.97-.4-4.26-1.14l-.3-.18-3.04.8.81-2.97-.2-.31a8.18 8.18 0 0 1-1.26-4.37A8.25 8.25 0 0 1 12 3.79 8.25 8.25 0 0 1 20.21 12 8.25 8.25 0 0 1 12 20.17Zm4.53-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.38-2-1.21-.74-.66-1.25-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.76 2.69 4.28 3.76.6.26 1.08.41 1.44.52.61.19 1.16.16 1.6.1.49-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function LocalePageContent({ params }) {
  const { t } = useTranslation();
  const locale = params.locale;

  const services = [
    {
      id: "service-visas-residency",
      title: t("services.0.title"),
      description: t("services.0.description"),
      modalTitle: t("services.0.modalTitle"),
      modalText: t("services.0.modalText"),
      bullets: t("services.0.bullets")
    },
    {
      id: "service-citizenship",
      title: t("services.1.title"),
      description: t("services.1.description"),
      modalTitle: t("services.1.modalTitle"),
      modalText: t("services.1.modalText"),
      bullets: t("services.1.bullets")
    },
    {
      id: "service-refuge-asylum",
      title: t("services.2.title"),
      description: t("services.2.description"),
      modalTitle: t("services.2.modalTitle"),
      modalText: t("services.2.modalText"),
      bullets: t("services.2.bullets")
    },
    {
      id: "service-defense-procedures",
      title: t("services.3.title"),
      description: t("services.3.description"),
      modalTitle: t("services.3.modalTitle"),
      modalText: t("services.3.modalText"),
      bullets: t("services.3.bullets")
    }
  ];

  const testimonials = t("testimonials");
  const careItems = t("bureaucracy.items");
  const faqs = t("faqs");

  const heroFormFields = [
    { name: "fullName", label: t("forms.fullName"), type: "text", placeholder: t("forms.fullNamePlaceholder"), required: true },
    { name: "phone", label: t("forms.phone"), type: "tel", placeholder: t("forms.phonePlaceholder"), required: true },
    { name: "email", label: t("forms.email"), type: "email", placeholder: t("forms.emailPlaceholder"), required: true },
    { name: "message", label: t("forms.message"), type: "textarea", placeholder: t("forms.messagePlaceholder"), required: true, full: true, rows: 4 }
  ];

  const footerFormFields = [
    { name: "fullName", label: t("forms.footerName"), type: "text", placeholder: t("forms.footerName"), required: true },
    { name: "phone", label: t("forms.footerPhone"), type: "tel", placeholder: t("forms.footerPhone"), required: true },
    { name: "email", label: t("forms.footerEmail"), type: "email", placeholder: t("forms.footerEmail"), required: true },
    { name: "message", label: t("forms.footerMessage"), type: "textarea", placeholder: t("forms.footerMessage"), required: true, full: true, rows: 5 }
  ];

  const heroStyle = {
    backgroundImage: `linear-gradient(115deg, rgba(7, 38, 31, 0.92) 14%, rgba(7, 38, 31, 0.72) 48%, rgba(7, 38, 31, 0.45) 100%), url(${heroImage.src})`
  };

  const reservationStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(5, 31, 26, 0.92), rgba(27, 77, 55, 0.82)), url(${cityImage.src})`
  };

  return (
    <main className="page-shell">
      <ScrollReveal />
      <section className="hero" id="top" style={heroStyle}>
        <div className="hero__overlay" />
        <SiteHeader services={services} whatsappLink={whatsappLink} whatsappLabel={t("nav.whatsapp")} />

        <div className="container hero__container">
          <div className="hero__grid">
            <div className="hero__content">
              <div className="hero__brand-block">
                <Image alt="Erica Montarini Gaspani logo" className="hero__logo" priority src={logoWhite} />
              </div>
              <h1>{t("hero.title")}</h1>
              <p className="hero__subtitle">{t("hero.subtitle")}</p>

              <div className="hero__actions">
                <a className="button button--primary" href="#final-cta">
                  {t("hero.ctaPrimary")}
                </a>
                <a className="button button--hero-whatsapp" href={whatsappLink} rel="noreferrer" target="_blank">
                  <span className="button__icon" aria-hidden="true">
                    <WhatsAppIcon />
                  </span>
                  <span>{t("hero.ctaWhatsapp")}</span>
                </a>
              </div>

              <ul className="hero__highlights">
                {t("hero.highlights").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero__form-card">
              <InquiryForm
                buttonLabel={t("hero.formButton")}
                description={t("hero.formDescription")}
                fields={heroFormFields}
                stackFields
                title={t("hero.formTitle")}
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--split" id="who-we-are" data-reveal>
        <div className="container split-grid">
          <div className="media-card media-card--portrait">
            <Image alt="Attorney Erica Montarini Gaspani" className="media-card__image" src={attorneyImage} />
          </div>

          <div className="section-copy">
            <p className="section-label">{t("who.label")}</p>
            <h2>{t("who.title")}</h2>
            <p className="section-copy__lead">{t("who.lead")}</p>
            <p>{t("who.paragraph")}</p>

            <ul className="check-list check-list--tight">
              {t("who.items").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="identity-card">
              <strong>{t("who.name")}</strong>
              <span>{t("who.role")}</span>
            </div>

            <div className="section-copy__cta cta-group">
              <a className="button button--primary" href="#reservation">
                {t("who.cta")}
              </a>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light" id="services" data-reveal>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">{t("servicesSection.label")}</p>
            <h2>{t("servicesSection.title")}</h2>
          </div>

          <ServicesSection services={services} />

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">
              {t("servicesSection.cta")}
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="section section--soft" id="testimonials" data-reveal>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">{t("testimonialsSection.label")}</p>
            <h2>{t("testimonialsSection.title")}</h2>
          </div>

          <TestimonialsSlider testimonials={testimonials} prevLabel={t("testimonialsSection.prev")} nextLabel={t("testimonialsSection.next")} />

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">
              {t("testimonialsSection.cta")}
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="section section--light" id="bureaucracy" data-reveal>
        <div className="container split-grid split-grid--reverse">
          <div className="section-copy">
            <p className="section-label">{t("bureaucracy.label")}</p>
            <h2>{t("bureaucracy.title")}</h2>
            <p className="section-copy__lead">{t("bureaucracy.lead")}</p>

            <ul className="check-list">
              {careItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="section-copy__cta cta-group">
              <a className="button button--primary" href="#reservation">
                {t("bureaucracy.cta")}
              </a>
              <WhatsAppButton />
            </div>
          </div>

          <div className="media-stack">
            <div className="media-card media-card--wide">
              <Image alt="Brazil skyline" className="media-card__image" src={cityImage} />
            </div>
            <div className="media-stack__row">
              <div className="media-card">
                <Image alt="Immigration documents" className="media-card__image" src={documentsImage} />
              </div>
              <div className="media-card">
                <Image alt="International flags" className="media-card__image" src={flagsImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--faq" id="faq" data-reveal>
        <div className="container faq-shell">
          <div className="section-heading section-heading--center section-heading--small">
            <p className="section-label">{t("faqSection.label")}</p>
            <h2>{t("faqSection.title")}</h2>
            <p>{t("faqSection.subtitle")}</p>
          </div>

          <div className="faq-list faq-list--center">
            {faqs.map((item, index) => (
              <details className="faq-item" key={index}>
                <summary>{item.question}</summary>
                <div className="faq-item__content">
                  {(item.paragraphs || []).map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}

                  {item.bullets ? (
                    <ul>
                      {item.bullets.map((bullet, bIndex) => (
                        <li key={bIndex}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">
              {t("faqSection.cta")}
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="section reservation-section" id="final-cta" style={reservationStyle} data-reveal>
        <div className="container final-cta-shell">
          <div className="reservation-copy final-cta-copy">
            <p className="section-label section-label--light">{t("finalCta.label")}</p>
            <h2>{t("finalCta.title")}</h2>
            <p>{t("finalCta.text")}</p>

            <div className="hero__actions final-cta-actions">
              <a className="button button--primary" href="#reservation">
                {t("finalCta.primary")}
              </a>
              <a className="button button--hero-whatsapp" href="#reservation">
                <span className="button__icon" aria-hidden="true">
                  <WhatsAppIcon />
                </span>
                <span>{t("finalCta.whatsapp")}</span>
              </a>
            </div>

            <ul className="hero__highlights final-cta-highlights">
              {t("finalCta.highlights").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--light reservation-section reservation-section--form" id="reservation" data-reveal>
        <div className="container reservation-grid reservation-grid--form">
          <div className="media-card media-card--reservation">
            <Image alt="Immigration lawyer consultation" className="media-card__image" src={cityImage} />
          </div>

          <InquiryForm
            buttonLabel={t("reservation.formButton")}
            description={t("reservation.formDescription")}
            fields={heroFormFields}
            title={t("reservation.formTitle")}
            stackFields
            tone="dark"
          />
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-layout">
          <div className="footer-brand-panel">
            <div className="footer-brand">
              <Image alt="Erica Montarini Gaspani logo" src={logoGold} />
            </div>
            <p>{t("footer.about")}</p>
            <a aria-label="Open WhatsApp" className="footer-mini-whatsapp" href={whatsappLink} rel="noreferrer" target="_blank">
              <WhatsAppIcon />
            </a>
          </div>

          <div className="footer-contacts">
            <h3>{t("footer.contactsTitle")}</h3>
            <a className="footer-contact-item" href={whatsappLink} rel="noreferrer" target="_blank">
              <span className="footer-contact-icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span>+55 (44) 99106-5886</span>
            </a>

            <div className="footer-social-links" aria-label="Social media">
              <a aria-label="Instagram" className="footer-contact-icon" href={instagramLink} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a aria-label="LinkedIn" className="footer-contact-icon" href={linkedinLink} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          <div className="footer-form-panel">
            <InquiryForm
              buttonLabel={t("footer.formButton")}
              fields={footerFormFields}
              hideLabels
              showNote={false}
              title={t("footer.formTitle")}
              tone="footer"
            />
          </div>
        </div>
      </footer>

      <a aria-label="Chat on WhatsApp" className="whatsapp-float" href={whatsappLink} rel="noreferrer" target="_blank">
        <span className="whatsapp-float__label">{t("nav.whatsapp")}</span>
        <span className="whatsapp-float__icon" aria-hidden="true">
          <WhatsAppIcon />
        </span>
      </a>
    </main>
  );
}