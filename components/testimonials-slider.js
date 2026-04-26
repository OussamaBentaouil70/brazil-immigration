"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "./translation-context";

export default function TestimonialsSlider({ testimonials, prevLabel = "Previous", nextLabel = "Next" }) {
  const { locale } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const groupedTestimonials = [];

  for (let index = 0; index < testimonials.length; index += 2) {
    groupedTestimonials.push(testimonials.slice(index, index + 2));
  }

  const total = groupedTestimonials.length;

  if (!total) {
    return null;
  }

  const maxIndex = total - 1;

  function goPrevious() {
    setActiveIndex((current) => (current - 1 < 0 ? maxIndex : current - 1));
  }

  function goNext() {
    setActiveIndex((current) => (current + 1 > maxIndex ? 0 : current + 1));
  }

  useEffect(() => {
    const interval = window.setInterval(goNext, 4200);

    return () => window.clearInterval(interval);
  }, [total]);

  const translateX = locale === "ar" ? activeIndex * 100 : -activeIndex * 100;

  return (
    <div className="testimonial-slider" aria-label="Client testimonials slider">
      <div className="testimonial-slider__viewport">
        <div
          className="testimonial-slider__track"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {groupedTestimonials.map((group, groupIndex) => (
            <div className="testimonial-slide" key={group.map((item) => item.title).join("-") + groupIndex}>
              <div className="testimonial-slide__pair">
                {group.map((item) => (
                  <article className="testimonial-card testimonial-slide__card" key={item.title}>
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
        <button
          aria-label="Previous testimonial"
          className="testimonial-slider__button"
          onClick={goPrevious}
          type="button"
        >
          {prevLabel}
        </button>

        <button
          aria-label="Next testimonial"
          className="testimonial-slider__button"
          onClick={goNext}
          type="button"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
