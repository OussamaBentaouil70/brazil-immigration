"use client";

import { useState, useTransition } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import { useTranslation } from "./translation-context";

import WhatsAppButton from "./whatsapp-button";

const WHATSAPP_NUMBER = "5544991065886";
const PHP_BACKEND_URL = "http://localhost/brazil-immigration/send-mail.php";

export default function InquiryForm({
  title,
  description,
  buttonLabel,
  fields,
  tone = "light",
  compact = false,
  stackFields = false,
  hideLabels = false,
  showNote = true
}) {
  const [feedback, setFeedback] = useState("");
  const [isPending, startTransition] = useTransition();
  const [phoneValues, setPhoneValues] = useState({});
  const router = useRouter();
  const { locale } = useTranslation();

  function handlePhoneChange(name, value) {
    setPhoneValues(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {};
    
    fields.forEach((field) => {
      if (field.type === "tel") {
        const rawPhone = phoneValues[field.name] || "";
        payload[field.name] = rawPhone ? (rawPhone.startsWith("+") ? rawPhone : `+${rawPhone}`) : "";
      } else {
        payload[field.name] = String(formData.get(field.name) || "").trim();
      }
    });

    payload["formTitle"] = title;
    payload["locale"] = locale;

    startTransition(async () => {
      setFeedback("Sending your request...");
      try {
        const response = await fetch(PHP_BACKEND_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const thankYouUrl = locale === "en" ? "/thank-you" : `/${locale}/thank-you`;
          router.push(thankYouUrl);
        } else {
          setFeedback("Something went wrong. Please try again or contact us via WhatsApp.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setFeedback("Network error. Please try again or contact us via WhatsApp.");
      }
    });
  }

  return (
    <form
      className={[
        "inquiry-form",
        `inquiry-form--${tone}`,
        compact ? "inquiry-form--compact" : ""
      ]
        .filter(Boolean)
        .join(" ")}
      onSubmit={handleSubmit}
    >
      <div className="inquiry-form__header">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>

      <div className={stackFields ? "inquiry-form__grid inquiry-form__grid--stacked" : "inquiry-form__grid"}>
        {fields.map((field) => {
          const fieldClassName = [
            "field",
            field.type === "tel" ? "field--phone" : "",
            field.full ? "field--full" : ""
          ]
            .filter(Boolean)
            .join(" ");

          if (field.type === "textarea") {
            return (
              <label className={fieldClassName} key={field.name}>
                {hideLabels ? null : <span>{field.label}</span>}
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={field.rows || 5}
                />
              </label>
            );
          }

          if (field.type === "select") {
            return (
              <label className={fieldClassName} key={field.name}>
                {hideLabels ? null : <span>{field.label}</span>}
                <select defaultValue="" name={field.name} required={field.required}>
                  <option disabled value="">
                    {field.placeholder || "Select an option"}
                  </option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            );
          }

          return (
            <label className={fieldClassName} key={field.name}>
              {hideLabels ? null : <span>{field.label}</span>}
              {field.type === "tel" ? (
                <PhoneInput
                  buttonClass="phone-input-lib__button"
                  containerClass="phone-input-lib"
                  country="br"
                  countryCodeEditable={false}
                  dropdownClass="phone-input-lib__dropdown"
                  enableSearch={false}
                  inputClass="phone-input-lib__input"
                  inputProps={{ name: field.name, required: field.required }}
                  preferredCountries={["br", "us", "gb", "ae", "iq", "ca", "ma"]}
                  specialLabel=""
                  placeholder={field.placeholder}
                  value={phoneValues[field.name] || ""}
                  onChange={(val) => handlePhoneChange(field.name, val)}
                />
              ) : (
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
            </label>
          );
        })}
      </div>

      <div className="inquiry-form__actions" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button className="button button--primary inquiry-form__button" disabled={isPending} type="submit">
          {buttonLabel}
        </button>
        <WhatsAppButton />
      </div>

      {showNote ? (
        <p className="inquiry-form__note">
          The message will be prepared for WhatsApp at +55 44 99106-5886.
        </p>
      ) : null}

      {feedback ? <p className="inquiry-form__feedback">{feedback}</p> : null}
    </form>
  );
}
