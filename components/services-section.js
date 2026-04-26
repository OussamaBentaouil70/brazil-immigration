"use client";

import { useEffect, useState } from "react";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.88 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.88a1 1 0 0 0 1.41-1.41L13.41 12l4.88-4.89a1 1 0 0 0 0-1.4Z" />
    </svg>
  );
}

export default function ServicesSection({ services }) {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    }

    if (activeService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeService]);

  return (
    <>
      <div className="services-grid">
        {services.map((service, index) => (
          <button
            className="service-card service-card--interactive"
            key={service.title}
            onClick={() => setActiveService(service)}
            type="button"
          >
            <span className="service-card__index">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-card__link">View Details</span>
          </button>
        ))}
      </div>

      {activeService ? (
        <div className="service-modal" role="presentation" onClick={() => setActiveService(null)}>
          <div
            aria-modal="true"
            className="service-modal__panel"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            tabIndex={-1}
          >
            <button
              aria-label="Close"
              className="service-modal__close"
              onClick={() => setActiveService(null)}
              type="button"
            >
              <CloseIcon />
            </button>

            <p className="service-modal__eyebrow">Details</p>
            <h3>{activeService.modalTitle}</h3>
            <p className="service-modal__text">{activeService.modalText}</p>

            <ul className="service-modal__list">
              {activeService.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <a className="button button--primary service-modal__cta" href="#reservation" onClick={() => setActiveService(null)}>
              Book Now
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
