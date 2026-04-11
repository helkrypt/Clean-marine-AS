"use client";

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

export default function Contact() {
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
              KONTAKT
            </p>

            {/* Heading */}
            <h2
              style={{ fontFamily: "var(--font-barlow)" }}
              className="text-parchment font-bold text-4xl md:text-5xl uppercase mb-6 leading-tight"
            >
              Ta kontakt
              <br />
              med oss
            </h2>

            {/* Body */}
            <p
              style={{ fontFamily: "var(--font-ibm-plex)" }}
              className="text-mist mb-10"
            >
              Har du spørsmål om rørehabilitering, priser eller
              tilgjengelighet? Vi svarer raskt.
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
                <span
                  style={{ fontFamily: "var(--font-ibm-plex)" }}
                  className="text-mist"
                >
                  +47 000 00 000
                </span>
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
                <span
                  style={{ fontFamily: "var(--font-ibm-plex)" }}
                  className="text-mist"
                >
                  post@cleanmarine.no
                </span>
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
                  Stavanger, Norge
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right column — form */}
        <AnimatedSection delay={0.2}>
          <form
            action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"
            method="POST"
          >
            {/* NAVN */}
            <div className="mb-6">
              <label
                htmlFor="navn"
                style={{ fontFamily: "var(--font-barlow)" }}
                className={labelClass}
              >
                NAVN
              </label>
              <input
                id="navn"
                type="text"
                name="navn"
                required
                placeholder="Ditt navn"
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
                BEDRIFT
              </label>
              <input
                id="bedrift"
                type="text"
                name="bedrift"
                placeholder="Din bedrift"
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
                E-POST
              </label>
              <input
                id="epost"
                type="email"
                name="email"
                required
                placeholder="din@epost.no"
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
                TELEFON
              </label>
              <input
                id="telefon"
                type="tel"
                name="telefon"
                placeholder="+47 000 00 000"
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
                MELDING
              </label>
              <textarea
                id="melding"
                name="melding"
                rows={4}
                required
                placeholder="Beskriv ditt behov..."
                style={{ fontFamily: "var(--font-ibm-plex)" }}
                className={[inputClass, "resize-none"].join(" ")}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              style={{ fontFamily: "var(--font-barlow)" }}
              className="w-full bg-rust hover:bg-rust-light text-parchment font-bold uppercase tracking-widest py-4 transition-colors duration-200"
            >
              SEND MELDING
            </button>

            {/* Disclaimer */}
            <p
              style={{ fontFamily: "var(--font-ibm-plex)" }}
              className="text-mist text-xs mt-3"
            >
              Vi behandler dine opplysninger i henhold til personvernreglene.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
