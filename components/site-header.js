"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import logoGold from "../assets/images/logo.webp";
import logoWhite from "../assets/images/logo-white.webp";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.04C6.5 2.04 2.04 6.5 2.04 12c0 1.76.46 3.48 1.33 5l-1.37 5 5.12-1.34A9.88 9.88 0 0 0 12 21.96c5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04Zm0 18.13c-1.5 0-2.97-.4-4.26-1.14l-.3-.18-3.04.8.81-2.97-.2-.31a8.18 8.18 0 0 1-1.26-4.37A8.25 8.25 0 0 1 12 3.79 8.25 8.25 0 0 1 20.21 12 8.25 8.25 0 0 1 12 20.17Zm4.53-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.38-2-1.21-.74-.66-1.25-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.76 2.69 4.28 3.76.6.26 1.08.41 1.44.52.61.19 1.16.16 1.6.1.49-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function SiteHeader({
  services,
  whatsappLink,
  whatsappLabel
}) {
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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${isMenuOpen ? "is-menu-open" : ""}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#top">
          <Image alt="Erica Montarini Gaspani logo" priority src={isScrolled ? logoGold : logoWhite} />
        </a>

        <button className="hamburger" aria-label="Toggle menu" aria-expanded={isMenuOpen} onClick={toggleMenu} type="button">
          <span className={`hamburger__line ${isMenuOpen ? "hamburger__line--open" : ""}`} />
          <span className={`hamburger__line ${isMenuOpen ? "hamburger__line--open" : ""}`} />
          <span className={`hamburger__line ${isMenuOpen ? "hamburger__line--open" : ""}`} />
        </button>

        <div className={`site-header__group ${isMenuOpen ? "site-header__group--open" : ""}`}>
          <nav className="site-nav" aria-label="Primary navigation">
            <div className="site-nav__item site-nav__item--dropdown">
              <a href="#services" onClick={closeMenu}>Services</a>
              <div className="site-nav__dropdown" role="menu" aria-label="Services menu">
                {services.map((service) => (
                  <a href={`#${service.id}`} key={service.id} role="menuitem" onClick={closeMenu}>
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
            <a href="#who-we-are" onClick={closeMenu}>Who We Are</a>
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            <a href="#faq" onClick={closeMenu}>Questions</a>
            <a href="#reservation" onClick={closeMenu}>Free Consultation</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="site-header__actions">
            <a className="button button--nav-whatsapp" href={whatsappLink} rel="noreferrer" target="_blank" onClick={closeMenu}>
              <span className="button__icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span>{whatsappLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
