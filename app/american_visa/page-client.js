"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

import ScrollReveal from "@/components/scroll-reveal";

import attorneyImage from "../../assets/images/image-5.webp";
import cityImage from "../../assets/images/image-4-scaled.webp";
import documentsImage from "../../assets/images/image-3.webp";
import flagsImage from "../../assets/images/image-2.webp";
import heroImage from "../../assets/images/download-1.webp";
import logoGold from "../../assets/images/logo.webp";
import logoWhite from "../../assets/images/logo-white.webp";

import { americanVisaContentEn, whatsappLink } from "./content";

const PHP_BACKEND_URL = process.env.NEXT_PUBLIC_PHP_BACKEND_URL || "/send-mail.php";

const localeInfo = {
  en: { code: "EN", countryCode: "US", name: "English", path: "/" },
  pt: { code: "PT", countryCode: "BR", name: "Português", path: "/pt" }
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12c0 1.76.46 3.48 1.33 5l-1.37 5 5.12-1.34A9.88 9.88 0 0 0 12 21.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04Zm0 18.13c-1.5 0-2.97-.4-4.26-1.14l-.3-.18-3.04.8.81-2.97-.2-.31a8.18 8.18 0 0 1-1.26-4.37A8.25 8.25 0 0 1 12 3.79 8.25 8.25 0 0 1 20.21 12 8.25 8.25 0 0 1 12 20.17Zm4.53-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.38-2-1.21-.74-.66-1.25-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.76 2.69 4.28 3.76.6.26 1.08.41 1.44.52.61.19 1.16.16 1.6.1.49-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function AmericanVisaButton({ className = "", href = whatsappLink, children }) {
  return (
    <a className={`button button--hero-whatsapp ${className}`.trim()} href={href} rel="noreferrer" target={href.startsWith("#") ? undefined : "_blank"}>
      <span className="button__icon" aria-hidden="true">
        <WhatsAppIcon />
      </span>
      <span>{children}</span>
    </a>
  );
}

function AmericanVisaLanguageDropdown({ copy }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLocale = copy.language;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function changeLocale(nextLocale) {
    if (nextLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    router.push(localeInfo[nextLocale].path);
    setIsOpen(false);
  }

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      <button
        aria-expanded={isOpen}
        className="lang-dropdown__trigger"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <ReactCountryFlag
          countryCode={localeInfo[currentLocale].countryCode}
          svg
          style={{
            width: "1.2em",
            height: "1.2em",
            borderRadius: "2px",
            objectFit: "cover"
          }}
          title={localeInfo[currentLocale].countryCode}
        />
        <span className="lang-dropdown__current-code">{localeInfo[currentLocale].code}</span>
        <svg
          className={`lang-dropdown__arrow ${isOpen ? "lang-dropdown__arrow--open" : ""}`}
          height="6"
          viewBox="0 0 10 6"
          width="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </button>

      {isOpen ? (
        <div className="lang-dropdown__menu">
          {Object.entries(localeInfo).map(([locale, info]) => (
            <button
              key={locale}
              className={`lang-dropdown__option ${currentLocale === locale ? "lang-dropdown__option--active" : ""}`}
              onClick={() => changeLocale(locale)}
              type="button"
            >
              <ReactCountryFlag
                countryCode={info.countryCode}
                svg
                style={{
                  width: "1.2em",
                  height: "1.2em",
                  borderRadius: "2px",
                  objectFit: "cover"
                }}
              />
              <span className="lang-dropdown__option-code">{info.code}</span>
              <span className="lang-dropdown__option-name">{info.name}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function AmericanVisaHeader({ copy }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${isMenuOpen ? "is-menu-open" : ""}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#top">
          <Image alt="American Visa logo" priority src={isScrolled ? logoGold : logoWhite} />
        </a>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className="hamburger"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className={`hamburger__line ${isMenuOpen ? "hamburger__line--open" : ""}`} />
          <span className={`hamburger__line ${isMenuOpen ? "hamburger__line--open" : ""}`} />
          <span className={`hamburger__line ${isMenuOpen ? "hamburger__line--open" : ""}`} />
        </button>

        <div className={`site-header__group ${isMenuOpen ? "site-header__group--open" : ""}`}>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services" onClick={closeMenu}>{copy.labels.services}</a>
            <a href="#who-we-are" onClick={closeMenu}>{copy.labels.lawyer}</a>
            <a href="#testimonials" onClick={closeMenu}>{copy.labels.testimonials}</a>
            <a href="#faq" onClick={closeMenu}>{copy.labels.faq}</a>
            <a href="#reservation" onClick={closeMenu}>{copy.labels.freeConsultation}</a>
            <a href="#contact" onClick={closeMenu}>{copy.labels.contact}</a>
            <AmericanVisaLanguageDropdown copy={copy} />
            <a className="button button--nav-whatsapp" href={whatsappLink} rel="noreferrer" target="_blank">
              <span className="button__icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              {copy.labels.whatsapp}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function ServicesSection({ copy }) {
  const [activeService, setActiveService] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (activeService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      const timer = window.setTimeout(() => setIsVisible(true), 10);

      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("keydown", onKeyDown);
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [activeService]);

  function handleClose() {
    setIsVisible(false);
    window.setTimeout(() => setActiveService(null), 300);
  }

  return (
    <>
      <div className="services-grid">
        {copy.services.map((service, index) => (
          <button
            className="service-card service-card--interactive"
            key={service.id}
            onClick={() => setActiveService(service)}
            type="button"
          >
            <span className="service-card__index">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-card__link">{copy.labels.viewDetails}</span>
          </button>
        ))}
      </div>

      {isMounted && activeService ? (
        <div className={`service-modal ${isVisible ? "is-visible" : ""}`} onClick={handleClose} role="presentation">
          <div aria-modal="true" className="service-modal__panel" onClick={(event) => event.stopPropagation()} role="dialog" tabIndex={-1}>
            <button aria-label="Close" className="service-modal__close" onClick={handleClose} type="button">
              <span aria-hidden="true">×</span>
            </button>

            <p className="service-modal__eyebrow">{copy.labels.details}</p>
            <h3>{activeService.modalTitle}</h3>
            <p className="service-modal__text">{activeService.modalText}</p>

            <ul className="service-modal__list">
              {activeService.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

              <a className="button button--primary service-modal__cta" href="#reservation" onClick={handleClose}>
              {copy.labels.bookNow}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

function TestimonialsSlider({ copy }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const groupedTestimonials = [];

  for (let index = 0; index < copy.testimonials.length; index += 2) {
    groupedTestimonials.push(copy.testimonials.slice(index, index + 2));
  }

  const total = groupedTestimonials.length;

  useEffect(() => {
    if (!total) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1 > total - 1 ? 0 : current + 1));
    }, 4200);

    return () => window.clearInterval(interval);
  }, [total]);

  if (!total) {
    return null;
  }

  const translateX = -activeIndex * 100;

  return (
    <div className="testimonial-slider" aria-label={copy.labels.testimonials}>
      <div className="testimonial-slider__viewport">
        <div className="testimonial-slider__track" style={{ transform: `translateX(${translateX}%)` }}>
          {groupedTestimonials.map((group, groupIndex) => (
            <div className="testimonial-slide" key={group.map((item) => item.title).join("-") + groupIndex}>
              <div className="testimonial-slide__pair">
                {group.map((item) => (
                  <article className="testimonial-card testimonial-slide__card" key={item.quote}>
                    <p className="testimonial-slide__quote">{item.quote}</p>
                    <div className="testimonial-slide__author">
                      <div>
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-slider__controls">
          <button className="testimonial-slider__button" onClick={() => setActiveIndex((current) => (current - 1 < 0 ? total - 1 : current - 1))} type="button">
          {copy.labels.previous}
        </button>
        <button className="testimonial-slider__button" onClick={() => setActiveIndex((current) => (current + 1 > total - 1 ? 0 : current + 1))} type="button">
          {copy.labels.next}
        </button>
      </div>
    </div>
  );
}

function AmericanVisaForm({ copy, title, description, buttonLabel, fields, tone = "light", hideLabels = false, showNote = true, stackFields = false }) {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({});
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {};

    fields.forEach((field) => {
      payload[field.name] = String(formData.get(field.name) || values[field.name] || "").trim();
    });

    payload.formTitle = title;
    payload.locale = copy.language;

    setFeedback(copy.forms.sendingRequest);
    setIsSubmitting(true);

    try {
      const response = await fetch(PHP_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        router.push(copy.thankYouPath);
        return;
      }

      setFeedback(copy.forms.submitFailed);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Submission error:", error);
      setFeedback(copy.forms.networkError);
      setIsSubmitting(false);
    }
  }

  return (
    <form className={["inquiry-form", `inquiry-form--${tone}`].join(" ")} onSubmit={handleSubmit}>
      {isSubmitting ? (
        <div className="form-submit-overlay" role="status" aria-live="polite" aria-label={copy.forms.submittingAria}>
          <div className="form-submit-overlay__spinner" aria-hidden="true">
            <span className="form-submit-overlay__ring" />
            <span className="form-submit-overlay__logo-wrap">
              <Image alt="Logo" className="form-submit-overlay__logo" src={logoWhite} />
            </span>
          </div>
        </div>
      ) : null}

      <div className="inquiry-form__header">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>

      <div className={stackFields ? "inquiry-form__grid inquiry-form__grid--stacked" : "inquiry-form__grid"}>
        {fields.map((field) => {
          const fieldClassName = ["field", field.full ? "field--full" : ""].filter(Boolean).join(" ");

          if (field.type === "textarea") {
            return (
              <label className={fieldClassName} key={field.name}>
                {hideLabels ? null : <span>{field.label}</span>}
                <textarea
                  name={field.name}
                  onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={field.rows || 5}
                />
              </label>
            );
          }

          return (
            <label className={fieldClassName} key={field.name}>
              {hideLabels ? null : <span>{field.label}</span>}
              <input
                name={field.name}
                onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                placeholder={field.placeholder}
                required={field.required}
                type={field.type}
              />
            </label>
          );
        })}
      </div>

      <div className="inquiry-form__actions" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button className="button button--primary inquiry-form__button" disabled={isSubmitting} type="submit">
          {buttonLabel}
        </button>
        <AmericanVisaButton>Chat With Us Instantly on WhatsApp</AmericanVisaButton>
      </div>

      {showNote ? <p className="inquiry-form__note">{copy.forms.note}</p> : null}
      {feedback ? <p className="inquiry-form__feedback">{feedback}</p> : null}
    </form>
  );
}

export default function AmericanVisaPageClient({ copy = americanVisaContentEn }) {
  const heroStyle = {
    backgroundImage: `linear-gradient(115deg, rgba(7, 38, 31, 0.92) 14%, rgba(7, 38, 31, 0.72) 48%, rgba(7, 38, 31, 0.45) 100%), url(${heroImage.src})`
  };

  const reservationStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(5, 31, 26, 0.92), rgba(27, 77, 55, 0.82)), url(${cityImage.src})`
  };

  const heroFormFields = [
    { name: "fullName", label: "Full name", type: "text", placeholder: "Your full name", required: true },
    { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell us briefly about your situation.", required: true, full: true, rows: 4 }
  ];

  const footerFormFields = [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
    { name: "phone", label: "Phone", type: "tel", placeholder: "Phone", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "Email", required: true },
    { name: "message", label: "Message", type: "textarea", placeholder: "Message", required: true, full: true, rows: 5 }
  ];

  return (
    <main className="page-shell">
      <ScrollReveal />

      <section className="hero" id="top" style={heroStyle}>
        <div className="hero__overlay" />
        <AmericanVisaHeader copy={copy} />

        <div className="container hero__container">
          <div className="hero__grid">
            <div className="hero__content">
              <div className="hero__brand-block">
                <Image alt="American Visa logo" className="hero__logo" priority src={logoWhite} />
              </div>
              <h1>{copy.hero.title}</h1>
              <p className="hero__subtitle">{copy.hero.subtitle}</p>

              <div className="hero__actions">
                <a className="button button--primary" href="#final-cta">{copy.hero.primaryCta}</a>
                <AmericanVisaButton>{copy.hero.whatsappCta}</AmericanVisaButton>
              </div>

              <ul className="hero__highlights">
                {copy.hero.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero__form-card">
              <AmericanVisaForm
                copy={copy}
                buttonLabel={copy.hero.formButton}
                description={copy.hero.formDescription}
                fields={heroFormFields}
                stackFields
                title={copy.hero.formTitle}
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--split" id="who-we-are" data-reveal>
        <div className="container split-grid">
          <div className="media-card media-card--portrait">
            <Image alt="Immigration lawyer consultation" className="media-card__image" src={attorneyImage} />
          </div>

          <div className="section-copy">
            <p className="section-label">{copy.who.label}</p>
            <h2>{copy.who.title}</h2>
            <p className="section-copy__lead">{copy.who.lead}</p>
            <p>{copy.who.paragraph}</p>

            <ul className="check-list check-list--tight">
              {copy.who.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="identity-card">
              <strong>{copy.who.identityTitle}</strong>
              <span>{copy.who.identitySubtitle}</span>
            </div>

            <div className="section-copy__cta cta-group">
              <a className="button button--primary" href="#reservation">{copy.who.cta}</a>
              <AmericanVisaButton>{copy.hero.whatsappCta}</AmericanVisaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light" id="services" data-reveal>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">{copy.servicesSection.label}</p>
            <h2>{copy.servicesSection.title}</h2>
          </div>

          <ServicesSection copy={copy} />

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">{copy.servicesSection.cta}</a>
            <AmericanVisaButton>{copy.hero.whatsappCta}</AmericanVisaButton>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="testimonials" data-reveal>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">{copy.testimonialsSection.label}</p>
            <h2>{copy.testimonialsSection.title}</h2>
          </div>

          <TestimonialsSlider copy={copy} />

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">{copy.testimonialsSection.cta}</a>
            <AmericanVisaButton>{copy.hero.whatsappCta}</AmericanVisaButton>
          </div>
        </div>
      </section>

      <section className="section section--light" id="bureaucracy" data-reveal>
        <div className="container split-grid split-grid--reverse">
          <div className="section-copy">
            <p className="section-label">{copy.bureaucracy.label}</p>
            <h2>{copy.bureaucracy.title}</h2>
            <p className="section-copy__lead">{copy.bureaucracy.lead}</p>

            <ul className="check-list">
              {copy.bureaucracy.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="section-copy__cta cta-group">
              <a className="button button--primary" href="#reservation">{copy.bureaucracy.cta}</a>
              <AmericanVisaButton>{copy.hero.whatsappCta}</AmericanVisaButton>
            </div>
          </div>

          <div className="media-stack">
            <div className="media-card media-card--wide">
              <Image alt="Immigration consultation" className="media-card__image" src={cityImage} />
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
            <p className="section-label">{copy.faqSection.label}</p>
            <h2>{copy.faqSection.title}</h2>
            <p>{copy.faqSection.subtitle}</p>
          </div>

          <div className="faq-list faq-list--center">
            {copy.faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <div className="faq-item__content">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">{copy.faqSection.cta}</a>
            <AmericanVisaButton>{copy.hero.whatsappCta}</AmericanVisaButton>
          </div>
        </div>
      </section>

      <section className="section reservation-section" id="final-cta" style={reservationStyle} data-reveal>
        <div className="container final-cta-shell">
          <div className="reservation-copy final-cta-copy">
            <p className="section-label section-label--light">{copy.finalCta.label}</p>
            <h2>{copy.finalCta.title}</h2>
            <p>{copy.finalCta.text}</p>

            <div className="hero__actions final-cta-actions">
              <a className="button button--primary" href="#reservation">{copy.finalCta.primaryCta}</a>
              <AmericanVisaButton href="#reservation">{copy.finalCta.whatsappCta}</AmericanVisaButton>
            </div>

            <ul className="hero__highlights final-cta-highlights">
              {copy.finalCta.highlights.map((item) => (
                <li key={item}>{item}</li>
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

          <AmericanVisaForm
            copy={copy}
            buttonLabel={copy.reservation.formButton}
            description={copy.reservation.formDescription}
            fields={heroFormFields}
            title={copy.reservation.formTitle}
            stackFields
            tone="dark"
          />
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-layout">
          <div className="footer-brand-panel">
            <div className="footer-brand">
              <Image alt="American Visa logo" src={logoGold} />
            </div>
            <p>{copy.footer.about}</p>
            <a aria-label="Open WhatsApp" className="footer-mini-whatsapp" href={whatsappLink} rel="noreferrer" target="_blank">
              <WhatsAppIcon />
            </a>
          </div>

          <div className="footer-contacts">
            <h3>{copy.footer.contactsTitle}</h3>
            <a className="footer-contact-item" href={whatsappLink} rel="noreferrer" target="_blank">
              <span className="footer-contact-icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span>+55 (44) 99106-5886</span>
            </a>
          </div>

          <div className="footer-form-panel">
            <AmericanVisaForm
              copy={copy}
              buttonLabel={copy.footer.formButton}
              fields={footerFormFields}
              hideLabels
              showNote={false}
              title={copy.footer.formTitle}
              tone="footer"
            />
          </div>
        </div>
      </footer>

      <a aria-label="Chat on WhatsApp" className="whatsapp-float" href={whatsappLink} rel="noreferrer" target="_blank">
        <span className="whatsapp-float__label">{copy.labels.whatsapp}</span>
        <span className="whatsapp-float__icon" aria-hidden="true">
          <WhatsAppIcon />
        </span>
      </a>
    </main>
  );
}
