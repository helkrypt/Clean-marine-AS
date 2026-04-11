"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Kartlegging",
    description:
      "Grundig inspeksjon og tilstandsvurdering av rørledningsnettet. Dokumentasjon av avleiringstype, plassering og omfang.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#C4511A" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="#C4511A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentColor: "#C4511A",
  },
  {
    number: "02",
    title: "Kjemisk analyse",
    description:
      "Identifisering av avleiringstype og valg av optimal kjemikalieblanding. Sikkerhetsvurdering for rørmateriale og miljø.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M10 5v8l-4 8h16l-4-8V5" stroke="#1A7A6E" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="9" y1="5" x2="19" y2="5" stroke="#1A7A6E" strokeWidth="1.5" />
        <circle cx="14" cy="17" r="2" fill="#1A7A6E" fillOpacity="0.4" />
      </svg>
    ),
    accentColor: "#1A7A6E",
  },
  {
    number: "03",
    title: "Renseprosess",
    description:
      "Kontrollert sirkulering av kjemikalier løser opp avleiringene. Kontinuerlig overvåking av trykk, temperatur og pH.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14 C5 8.5 8.5 5 14 5 C19.5 5 23 8.5 23 14" stroke="#C4511A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 14 C5 19.5 8.5 23 14 23 C19.5 23 23 19.5 23 14" stroke="#C4511A" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
        <path d="M18 5 L23 9 L18 13" stroke="#C4511A" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    accentColor: "#C4511A",
  },
  {
    number: "04",
    title: "Skylling",
    description:
      "Grundig skylling med rent vann fjerner kjemikalierester og løste avleiringer. Nøytralisering av pH.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M8 6 C8 6 12 12 12 16 C12 18.2 10.2 20 8 20 C5.8 20 4 18.2 4 16 C4 12 8 6 8 6Z" stroke="#8A99A8" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 4 C20 4 24 10 24 14 C24 16.2 22.2 18 20 18 C17.8 18 16 16.2 16 14 C16 10 20 4 20 4Z" stroke="#8A99A8" strokeWidth="1.2" strokeLinejoin="round" strokeOpacity="0.6" />
        <line x1="10" y1="24" x2="22" y2="24" stroke="#8A99A8" strokeWidth="1.2" strokeOpacity="0.5" />
      </svg>
    ),
    accentColor: "#8A99A8",
  },
  {
    number: "05",
    title: "Verifisering",
    description:
      "Dokumentasjon av resultat med before/after-målinger. Skriftlig rapport bekrefter at røret er tilbake til original tilstand.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#1A7A6E" strokeWidth="1.5" />
        <path d="M9 14 L12.5 17.5 L19 11" stroke="#1A7A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentColor: "#1A7A6E",
  },
];

/* ─── Single step card ───────────────────────────────────────────────────── */

function StepCard({
  step,
  index,
  total,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 18,
        delay: index * 0.1,
      }}
      className="relative flex gap-6 group"
    >
      {/* Vertical connector line */}
      {index < total - 1 && (
        <div
          className="absolute left-[21px] top-14 w-[1px] h-[calc(100%+1.5rem)]"
          style={{ background: "rgba(255,255,255,0.06)" }}
          aria-hidden="true"
        >
          <motion.div
            className="w-full"
            style={{ background: step.accentColor, opacity: 0.3 }}
            initial={{ height: "0%" }}
            animate={inView ? { height: "100%" } : { height: "0%" }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.4, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Number badge */}
      <div
        className="flex-shrink-0 w-11 h-11 flex items-center justify-center relative z-10"
        style={{
          border: `1.5px solid ${step.accentColor}`,
          background: "var(--color-abyss)",
          borderRadius: "2px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "1.0625rem",
            color: step.accentColor,
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}
        >
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        {/* Title row */}
        <div className="flex items-center gap-3 mb-3">
          {step.icon}
          <h3
            className="uppercase"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 700,
              fontSize: "1.125rem",
              color: "var(--color-parchment)",
              letterSpacing: "0.04em",
            }}
          >
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-mist leading-relaxed"
          style={{
            fontFamily: "var(--font-ibm-plex)",
            fontSize: "0.9rem",
            maxWidth: "48ch",
          }}
        >
          {step.description}
        </p>
      </div>

      {/* Background number (decorative) */}
      <span
        className="absolute right-0 top-0 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "7rem",
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {step.number}
      </span>
    </motion.div>
  );
}

/* ─── Process Section ────────────────────────────────────────────────────── */

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="process" className="bg-abyss bg-tech-grid py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

        {/* Left — sticky header */}
        <div ref={headerRef} className="lg:sticky lg:top-32 self-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          >
            <p
              style={{ fontFamily: "var(--font-barlow)" }}
              className="text-teal text-xs tracking-[0.28em] uppercase mb-3"
            >
              Fremgangsmåte
            </p>
            <h2
              className="text-parchment uppercase leading-none mb-6"
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 700,
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
              }}
            >
              Slik
              <br />
              jobber vi
            </h2>

            <div className="mb-6" style={{ width: "32px", height: "1.5px", backgroundColor: "var(--color-rust)" }} />

            <p
              style={{ fontFamily: "var(--font-ibm-plex)", maxWidth: "30ch" }}
              className="text-mist leading-relaxed text-sm"
            >
              Fem dokumenterte steg som sikrer at rørledningen er klar for
              produksjon — hver gang.
            </p>

            {/* Step counter */}
            <div className="mt-10 flex items-center gap-3">
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "3rem",
                  color: "var(--color-rust)",
                  lineHeight: 1,
                }}
              >
                5
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.2em",
                    color: "var(--color-mist)",
                    textTransform: "uppercase",
                  }}
                >
                  Trinn
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex)",
                    fontSize: "0.75rem",
                    color: "var(--color-mist)",
                    opacity: 0.7,
                  }}
                >
                  Dokumentert prosess
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — scrolling steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <hr className="rule-rust mt-8" />
      </div>
    </section>
  );
}
