"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: 1,
    title: "Kartlegging",
    description:
      "Grundig inspeksjon og tilstandsvurdering av rørledningsnettet.",
  },
  {
    number: 2,
    title: "Kjemisk analyse",
    description:
      "Identifisering av avleiringstype og valg av optimal kjemikalieblanding.",
  },
  {
    number: 3,
    title: "Renseprosess",
    description:
      "Kontrollert sirkulering av kjemikalier løser opp avleiringene.",
  },
  {
    number: 4,
    title: "Skylling",
    description:
      "Grundig skylling med rent vann fjerner kjemikalierester og løste avleiringer.",
  },
  {
    number: 5,
    title: "Verifisering",
    description:
      "Dokumentasjon av resultat og bekreftelse på at røret er tilbake til original tilstand.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-steel py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection delay={0}>
          <p
            style={{ fontFamily: "var(--font-barlow)" }}
            className="text-teal text-sm tracking-widest uppercase mb-2"
          >
            FREMGANGSMÅTE
          </p>
          <h2
            style={{ fontFamily: "var(--font-barlow)" }}
            className="text-parchment font-bold text-4xl md:text-5xl uppercase mb-16 leading-tight"
          >
            Slik jobber vi
          </h2>
        </AnimatedSection>

        {/* Steps grid */}
        <AnimatedSection delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={[
                  "relative p-6 md:p-8",
                  index < steps.length - 1
                    ? "border-b md:border-b-0 md:border-r border-hull"
                    : "",
                ].join(" ")}
              >
                {/* Decorative faded background number */}
                <span
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "96px",
                    color: "var(--color-hull)",
                    lineHeight: 1,
                  }}
                  className="absolute top-4 right-4 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Step number badge */}
                <p
                  style={{ fontFamily: "var(--font-barlow)" }}
                  className="text-rust font-bold text-sm mb-2 relative z-10"
                >
                  {String(step.number).padStart(2, "0")}
                </p>

                {/* Title */}
                <h3
                  style={{ fontFamily: "var(--font-barlow)" }}
                  className="text-parchment font-bold text-lg md:text-xl uppercase mb-2 relative z-10"
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{ fontFamily: "var(--font-ibm-plex)" }}
                  className="text-mist text-sm leading-relaxed relative z-10"
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <hr className="rule-rust mt-12" />
      </div>
    </section>
  );
}
