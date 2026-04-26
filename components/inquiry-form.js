"use client";

import { useState, useTransition } from "react";
import PhoneInput from "react-phone-input-2";

const WHATSAPP_NUMBER = "5544991065886";

function buildMessage(formTitle, fieldValues) {
  const lines = [
    `Hello, I would like to request assistance regarding ${formTitle.toLowerCase()}.`,
    "",
    "Submitted details:"
  ];

  fieldValues.forEach(({ label, value }) => {
    if (value) {
      lines.push(`${label}: ${value}`);
    }
  });

  lines.push("", "Please contact me as soon as possible.");

  return lines.join("\n");
}

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

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fieldValues = fields.map((field) => {
      const rawValue = String(formData.get(field.name) || "").trim();
      const value = field.type === "tel" && rawValue && !rawValue.startsWith("+") ? `+${rawValue}` : rawValue;

      return {
        label: field.label,
        value
      };
    });

    const message = buildMessage(title, fieldValues);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    startTransition(() => {
      setFeedback("Opening WhatsApp with your information...");
    });

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
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
                  buttonStyle={{ width: "98px" }}
                  buttonClass="phone-input-lib__button"
                  containerStyle={{ width: "100%" }}
                  containerClass="phone-input-lib"
                  country="br"
                  countryCodeEditable={false}
                  dropdownClass="phone-input-lib__dropdown"
                  enableSearch={false}
                  inputStyle={{ width: "100%", height: "58px", paddingLeft: "114px" }}
                  inputClass="phone-input-lib__input"
                  inputProps={{ name: field.name, required: field.required }}
                  preferredCountries={["br", "us", "gb", "ae", "iq", "ca", "ma"]}
                  specialLabel=""
                  placeholder={field.placeholder}
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

      <button className="button button--primary inquiry-form__button" disabled={isPending} type="submit">
        {buttonLabel}
      </button>

      {showNote ? (
        <p className="inquiry-form__note">
          The message will be prepared for WhatsApp at +55 44 99106-5886.
        </p>
      ) : null}

      {feedback ? <p className="inquiry-form__feedback">{feedback}</p> : null}
    </form>
  );
}
