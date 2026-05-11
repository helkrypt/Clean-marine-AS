"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";

const inputClass = [
  "w-full bg-transparent text-parchment",
  "border-b border-hull",
  "py-3 outline-none",
  "placeholder:text-mist",
  "transition-colors duration-200",
  "focus:border-rust",
].join(" ");

const labelClass = [
  "block text-mist text-xs uppercase tracking-widest mb-1",
].join(" ");

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ??
  "https://n8n-tm8p.srv1557843.hstgr.cloud/webhook/b7d372bf-a975-4fb4-b40f-76e68df7cb84";

type SubmitStatus = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const people = [
    {
      name: "Robin Ribe",
      role: t("roleDirector"),
      email: "robin@cleanmarin.no",
    },
    {
      name: "Daniel Modalen",
      role: t("roleProjectManager"),
      email: "daniel@cleanmarin.no",
    },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-abyss py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left column — info */}
        <AnimatedSection delay={0}>
          <div>
            {/* Eyebrow */}
            <p
              style={{ fontFamily: "var(--font-barlow)" }}
              className="text-teal text-sm tracking-widest uppercase mb-2"
            >
              {t("eyebrow")}
            </p>

            {/* Heading */}
            <h2
              style={{ fontFamily: "var(--font-barlow)" }}
              className="text-parchment font-bold text-4xl md:text-5xl uppercase mb-6 leading-tight"
            >
              {t("headingLine1")}
              <br />
              {t("headingLine2")}
            </h2>

            {/* Body */}
            <p
              style={{ fontFamily: "var(--font-ibm-plex)" }}
              className="text-mist mb-10"
            >
              {t("body")}
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4511A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.08 6.08l1.98-1.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+4799117437"
                  style={{ fontFamily: "var(--font-ibm-plex)" }}
                  className="text-mist hover:text-parchment transition-colors no-underline"
                >
                  +47 991 17 437
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4511A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <rect x="2" y="4" width="20" height="16" rx="0" ry="0" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                <a
                  href="mailto:post@cleanmarin.no"
                  style={{ fontFamily: "var(--font-ibm-plex)" }}
                  className="text-mist hover:text-parchment transition-colors no-underline"
                >
                  post@cleanmarin.no
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C4511A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span
                  style={{ fontFamily: "var(--font-ibm-plex)" }}
                  className="text-mist"
                >
                  {t("location")}
                </span>
              </div>
            </div>

            {/* People */}
            <div className="mt-10 pt-8 border-t border-hull flex flex-col gap-5">
              {people.map((p) => (
                <div key={p.email} className="flex items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4511A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0 mt-1"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" />
                  </svg>
                  <div
                    className="flex flex-col"
                    style={{ fontFamily: "var(--font-ibm-plex)" }}
                  >
                    <span className="text-parchment font-semibold">
                      {p.name}
                    </span>
                    <span className="text-mist text-sm">{p.role}</span>
                    <a
                      href={`mailto:${p.email}`}
                      className="text-mist text-sm hover:text-rust transition-colors no-underline"
                    >
                      {p.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Right column — form */}
        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} noValidate={false}>
            {/* NAVN */}
            <div className="mb-6">
              <label
                htmlFor="navn"
                style={{ fontFamily: "var(--font-barlow)" }}
                className={labelClass}
              >
                {t("labelName")}
              </label>
              <input
                id="navn"
                type="text"
                name="navn"
                required
                placeholder={t("placeholderName")}
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className={inputClass}
              />
            </div>

            {/* BEDRIFT */}
            <div className="mb-6">
              <label
                htmlFor="bedrift"
                style={{ fontFamily: "var(--font-barlow)" }}
                className={labelClass}
              >
                {t("labelCompany")}
              </label>
              <input
                id="bedrift"
                type="text"
                name="bedrift"
                placeholder={t("placeholderCompany")}
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className={inputClass}
              />
            </div>

            {/* E-POST */}
            <div className="mb-6">
              <label
                htmlFor="epost"
                style={{ fontFamily: "var(--font-barlow)" }}
                className={labelClass}
              >
                {t("labelEmail")}
              </label>
              <input
                id="epost"
                type="email"
                name="email"
                required
                placeholder={t("placeholderEmail")}
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className={inputClass}
              />
            </div>

            {/* TELEFON */}
            <div className="mb-6">
              <label
                htmlFor="telefon"
                style={{ fontFamily: "var(--font-barlow)" }}
                className={labelClass}
              >
                {t("labelPhone")}
              </label>
              <input
                id="telefon"
                type="tel"
                name="telefon"
                placeholder={t("placeholderPhone")}
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className={inputClass}
              />
            </div>

            {/* MELDING */}
            <div className="mb-6">
              <label
                htmlFor="melding"
                style={{ fontFamily: "var(--font-barlow)" }}
                className={labelClass}
              >
                {t("labelMessage")}
              </label>
              <textarea
                id="melding"
                name="melding"
                rows={4}
                required
                placeholder={t("placeholderMessage")}
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className={[inputClass, "resize-none"].join(" ")}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              style={{ fontFamily: "var(--font-barlow)" }}
              className="w-full bg-rust hover:bg-rust-light disabled:opacity-60 disabled:cursor-not-allowed text-parchment font-bold uppercase tracking-widest py-4 transition-colors duration-200"
            >
              {status === "sending" ? t("sending") : t("submit")}
            </button>

            {/* Status message */}
            {status === "ok" && (
              <p
                role="status"
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className="text-teal text-sm mt-3"
              >
                {t("success")}
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className="text-rust text-sm mt-3"
              >
                {t("errorPrefix")}{" "}
                <a href="mailto:post@cleanmarin.no" className="underline">
                  post@cleanmarin.no
                </a>
                .
              </p>
            )}

            {/* Disclaimer */}
            <p
              style={{ fontFamily: "var(--font-ibm-plex)" }}
              className="text-mist text-xs mt-3"
            >
              {t("disclaimer")}
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
