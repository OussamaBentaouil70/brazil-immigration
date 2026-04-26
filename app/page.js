import Image from "next/image";

import InquiryForm from "@/components/inquiry-form";
import SiteHeader from "@/components/site-header";
import ScrollReveal from "@/components/scroll-reveal";
import ServicesSection from "@/components/services-section";
import TestimonialsSlider from "@/components/testimonials-slider";

import attorneyImage from "../assets/images/image-5.webp";
import cityImage from "../assets/images/image-4-scaled.webp";
import documentsImage from "../assets/images/image-3.webp";
import flagsImage from "../assets/images/image-2.webp";
import heroImage from "../assets/images/download-1.webp";
import logoGold from "../assets/images/logo.webp";
import logoWhite from "../assets/images/logo-white.webp";

const whatsappLink = "https://wa.me/5544991065886";

const services = [
  {
    id: "service-visas-residency",
    title: "Brazilian Visas & Residency",
    description: "All types of visas and residence permits (tourist, work, family reunification, and more).",
    modalTitle: "Brazilian Visas & Residency",
    modalText:
      "We guide clients through the entire visa and residency process, from identifying the right legal route to preparing the paperwork and following the case through the Federal Police and other authorities.",
    bullets: [
      "Tourist, work, family reunification, and temporary residence support",
      "Document review and legal strategy before filing",
      "Application follow-up and guidance through every step"
    ]
  },
  {
    id: "service-citizenship",
    title: "Brazilian Citizenship",
    description: "Full assistance throughout the citizenship process.",
    modalTitle: "Brazilian Citizenship",
    modalText:
      "We support citizenship cases with careful case analysis, document preparation, and legal guidance for each stage of the process.",
    bullets: [
      "Eligibility review and legal assessment",
      "Document organization and filing support",
      "Follow-up until the process is resolved"
    ]
  },
  {
    id: "service-refuge-asylum",
    title: "Refuge, Asylum & Protection",
    description: "Legal support for asylum and temporary residence.",
    modalTitle: "Refuge, Asylum & Protection",
    modalText:
      "We provide careful legal support for humanitarian protection cases, including asylum-related analysis and temporary residence options.",
    bullets: [
      "Initial case evaluation and protection route analysis",
      "Assistance with supporting documents and submissions",
      "Confidential legal support throughout the process"
    ]
  },
  {
    id: "service-defense-procedures",
    title: "Legal Defense & Administrative Procedures",
    description: "Appeals, deportation defense, and legal status regularization.",
    modalTitle: "Legal Defense & Administrative Procedures",
    modalText:
      "We assist with administrative challenges and legal defense matters that affect your status in Brazil, aiming for clear and practical solutions.",
    bullets: [
      "Administrative appeals and procedural responses",
      "Deportation defense and status regularization",
      "Direct legal guidance focused on the safest path forward"
    ]
  }
];

const testimonials = [
  {
    title: "Ahmed, Iraq",
    quote: "Erica helped me obtain my residency quickly and without stress."
  },
  {
    title: "Mohammed, UAE",
    quote: "Very professional service and clear guidance throughout the process."
  },
  {
    title: "Fatima, Morocco",
    quote: "The process was clear from day one, and every document step was handled with precision."
  },
  {
    title: "Daniel, Canada",
    quote: "I felt supported at every stage, and my residency case moved forward faster than expected."
  },
  {
    title: "Nour, Lebanon",
    quote: "Professional, responsive, and genuinely caring legal support for my family reunification process."
  }
];

const careItems = [
  "CPF (Tax ID) registration",
  "RNM (Migration Registry)",
  "Driver's License (CNH)",
  "Federal Police registration",
  "Full document preparation"
];

const faqs = [
  {
    question: "I entered Brazil as a visitor. Can I extend my stay with the Federal Police?",
    paragraphs: [
      "It depends.",
      "For some nationalities, based on the principle of reciprocity, an extension is allowed. The Ministry of Foreign Affairs publishes a general visa chart where you can check if your nationality qualifies for an extension. Documents that may be requested by the Federal Police include: Proof of means of subsistence, an invitation letter (for business visits), airline ticket, application form, and service fee payment. While no prior appointment is needed, it is advisable to go a few weeks before your stay expires."
    ]
  },
  {
    question: "How to Change What is the time frame to use the visa? Password easily?",
    paragraphs: [
      "The visa validity period is the time frame during which the visa may be used for entry into Brazil. This period is specified on the visa and begins from the date of issuance. Once expired, the visa can no longer be used for entry.",
      "The validity period of the visa is as follows:",
      "Note: Visa validity is distinct from the residence authorization period, which is determined by the Federal Police upon registration according to each legal circumstance. For example, a work visa may have a 1-year validity (allowing entry within 1 year of issuance), but the residence authorization granted could be for 2 years, if so requested. Thus, for extensions or conversions to indefinite residency, renewing the visa itself will not be required, only updating the CRNM card and, if applicable, the work authorization."
    ],
    bullets: [
      "Visitor Visa: Valid for 1 year, allowing multiple entries while valid (in cases of reciprocal agreements, the validity may extend up to 10 years).",
      "Temporary Visa: Can be granted for up to 1 year and allows multiple entries while valid."
    ]
  },
  {
    question: "My Address has changed. What should I do?",
    paragraphs: [
      "Foreign residents in Brazil must keep their information updated with the Federal Police Migration Department to receive important notifications. If you change your address, you should complete the electronic form for address change and submit it to the Federal Police office in your new jurisdiction."
    ]
  },
  {
    question: "My passport is expiring, Can I still have the Brazilian visa issued in it?",
    paragraphs: [
      "To issue a visa in your passport, it must have a minimum validity of 6 months and at least two blank pages.",
      "It depends. For some nationalities, based on the principle of reciprocity, an extension is allowed. The Ministry of Foreign Affairs publishes a general visa chart where you can check if your nationality qualifies for an extension. Documents that may be requested by the Federal Police include: Proof of means of subsistence, an invitation letter (for business visits), airline ticket, application form, and service fee payment. While no prior appointment is needed, it is advisable to go a few weeks before your stay expires."
    ]
  },
  {
    question: "Who can I bring to Brazil through Family Reunification?",
    paragraphs: [
      "An immigrant who obtains a residency permit through family reunification may engage in any activity in Brazil, including paid work, under equal conditions with Brazilian nationals, in accordance with current legislation."
    ],
    bullets: [
      "Spouse or partner, without any discrimination, as per Brazilian law.",
      "Child of a Brazilian citizen or an immigrant with a residency permit.",
      "Stepchild of a Brazilian citizen or an immigrant with a residency permit, provided they are under 18 years old, up to 24 if a verified student, or of any age if economically dependent on the applicant.",
      "Individual with a Brazilian child.",
      "Individual with a child who is an immigrant with a residency permit.",
      "Ascendant up to the second degree of a Brazilian citizen or immigrant with a residency permit.",
      "Descendant up to the second degree of a Brazilian citizen or immigrant with a residency permit.",
      "Sibling of a Brazilian citizen or immigrant with a residency permit, provided they are under 18 years old, up to 24 if a verified student, or of any age if economically dependent on the applicant.",
      "Individual with a Brazilian citizen under their guardianship, curatorship, or custody."
    ]
  }
];

const heroFormFields = [
  { name: "fullName", label: "Full name", type: "text", placeholder: "Your full name", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us briefly about your situation.",
    required: true,
    full: true,
    rows: 4
  }
];

const footerFormFields = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "Phone", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "Email", required: true },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Message",
    required: true,
    full: true,
    rows: 5
  }
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12c0 1.76.46 3.48 1.33 5l-1.37 5 5.12-1.34A9.88 9.88 0 0 0 12 21.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04Zm0 18.13c-1.5 0-2.97-.4-4.26-1.14l-.3-.18-3.04.8.81-2.97-.2-.31a8.18 8.18 0 0 1-1.26-4.37A8.25 8.25 0 0 1 12 3.79 8.25 8.25 0 0 1 20.21 12 8.25 8.25 0 0 1 12 20.17Zm4.53-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.38-2-1.21-.74-.66-1.25-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.76 2.69 4.28 3.76.6.26 1.08.41 1.44.52.61.19 1.16.16 1.6.1.49-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function HomePage() {
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
        <SiteHeader services={services} whatsappLink={whatsappLink} whatsappLabel="WhatsApp" />

        <div className="container hero__container">
          <div className="hero__grid">
            <div className="hero__content">
              <div className="hero__brand-block">
                <Image alt="Erica Montarini Gaspani logo" className="hero__logo" priority src={logoWhite} />
              </div>
              <h1>Immigration Lawyer to Brazil - Visas, Residency & Citizenship</h1>
              <p className="hero__subtitle">
                We help you live legally and safely in Brazil - fast, secure, and without complications.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#final-cta">
                  Get Your Free Legal Consultation Now
                </a>
                <a className="button button--hero-whatsapp" href={whatsappLink} rel="noreferrer" target="_blank">
                  <span className="button__icon" aria-hidden="true">
                    <WhatsAppIcon />
                  </span>
                  <span>Chat With Us Instantly on WhatsApp</span>
                </a>
              </div>

              <ul className="hero__highlights">
                <li>Licensed Brazilian Attorney (OAB/PR 58.420)</li>
                <li>Specialized in Immigration & Foreign Nationals Law</li>
                <li>Multilingual support: English, Arabic, Portuguese</li>
                <li>Fast response within minutes - 100% confidential consultation</li>
              </ul>
            </div>

            <div className="hero__form-card">
              <InquiryForm
                buttonLabel="Get legal assistance"
                description="Share your case and open a WhatsApp conversation with your details already prepared."
                fields={heroFormFields}
                stackFields
                title="Request your free legal consultation"
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
            <p className="section-label">Meet Your Immigration Lawyer</p>
            <h2>Meet Your Immigration Lawyer</h2>
            <p className="section-copy__lead">
              Erica Montarini Gaspani is a licensed Brazilian attorney specialized in Immigration and Foreign
              Nationals Law.
            </p>
            <p>
              She provides full legal support to individuals, families, and companies in visa applications,
              residency permits, citizenship processes, and legal regularization before Brazilian federal
              authorities.
            </p>

            <ul className="check-list check-list--tight">
              <li>Direct communication with your lawyer</li>
              <li>Personalized case evaluation</li>
              <li>Full confidentiality and professionalism</li>
            </ul>

            <div className="identity-card">
              <strong>Erica Montarini Gaspani</strong>
              <span>Immigration Lawyer to Brazil</span>
            </div>

            <div className="section-copy__cta">
              <a className="button button--primary" href="#reservation">
                Speak With a Specialized Lawyer for Free
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light" id="services" data-reveal>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">How Can We Help You?</p>
            <h2>How Can We Help You?</h2>
          </div>

          <ServicesSection services={services} />

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">
              Get a Free Evaluation of Your Case
            </a>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="testimonials" data-reveal>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">What Our Clients Say</p>
            <h2>What Our Clients Say</h2>
          </div>

          <TestimonialsSlider testimonials={testimonials} />

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">
              Start Your Free Consultation Now
            </a>
          </div>
        </div>
      </section>

      <section className="section section--light" id="bureaucracy" data-reveal>
        <div className="container split-grid split-grid--reverse">
          <div className="section-copy">
            <p className="section-label">We take care of everything</p>
            <h2>Don't Worry About the Bureaucracy - We Take Care of Everything</h2>
            <p className="section-copy__lead">
              We guide you through every legal step so you can live and work in Brazil without stress.
            </p>

            <ul className="check-list">
              {careItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="section-copy__cta">
              <a className="button button--primary" href="#reservation">
                Start Your Legal Process Today - Free Consultation
              </a>
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
          <div className="section-heading section-heading--center">
            <p className="section-label">Questions/answers:</p>
            <h2>MORE THAN VISAS: COMPLETE LEGAL ADVISORY SERVICES IN BRAZIL WITH EXPERIENCED LAWYERS</h2>
            <p>
              We take care of everything for you, with the trust and experience of trilingual Brazilian lawyers.
            </p>
          </div>

          <div className="faq-list faq-list--center">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <div className="faq-item__content">
                  {(item.paragraphs || []).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {item.bullets ? (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>

          <div className="section-cta section-cta--center">
            <a className="button button--primary" href="#reservation">
              Ask About Your Case Now
            </a>
          </div>
        </div>
      </section>

      <section className="section reservation-section" id="final-cta" style={reservationStyle} data-reveal>
        <div className="container final-cta-shell">
          <div className="reservation-copy final-cta-copy">
            <p className="section-label section-label--light">Don't Delay Your Future - Start Today</p>
            <h2>Don't Delay Your Future - Start Today</h2>
            <p>Get trusted legal guidance and begin your life in Brazil with confidence.</p>

            <div className="hero__actions final-cta-actions">
              <a className="button button--primary" href="#reservation">
                Get Your Free Legal Consultation Now
              </a>
              <a className="button button--hero-whatsapp" href="#reservation">
                <span className="button__icon" aria-hidden="true">
                  <WhatsAppIcon />
                </span>
                <span>Chat With Us Instantly on WhatsApp</span>
              </a>
            </div>

            <ul className="hero__highlights final-cta-highlights">
              <li>No obligation</li>
              <li>Fast response</li>
              <li>100% confidential</li>
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
            buttonLabel="Get legal assistance"
            description="Share your case and open a WhatsApp conversation with your details already prepared."
            fields={heroFormFields}
            title="Request your free legal consultation"
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
            <p>
              Erica Montarini Gaspani ADVOGADOS ASSOCIADOS is a law firm operating in various areas of law, with a
              primary focus on IMMIGRATION LAW.
            </p>
            <a
              aria-label="Open WhatsApp"
              className="footer-mini-whatsapp"
              href={whatsappLink}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon />
            </a>
          </div>

          <div className="footer-contacts">
            <h3>Contacts</h3>
            <a className="footer-contact-item" href={whatsappLink} rel="noreferrer" target="_blank">
              <span className="footer-contact-icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span>+55 (44) 99106-5886</span>
            </a>
          </div>

          <div className="footer-form-panel">
            <InquiryForm
              buttonLabel="Book a consultation"
              fields={footerFormFields}
              hideLabels
              showNote={false}
              title="Contact us"
              tone="footer"
            />
          </div>
        </div>
      </footer>

      <a
        aria-label="Chat on WhatsApp"
        className="whatsapp-float"
        href={whatsappLink}
        rel="noreferrer"
        target="_blank"
      >
        <span className="whatsapp-float__icon" aria-hidden="true">
          <WhatsAppIcon />
        </span>
      </a>
    </main>
  );
}
