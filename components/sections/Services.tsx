"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

/* ─── SVG Icons ─────────────────────────────────────────────────────────── */

function RustIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Jagged hexagonal shape suggesting rust flakes */}
      <polygon
        points="20,2 26,5 33,8 36,15 38,22 34,29 28,35 20,38 12,35 5,29 3,22 5,15 10,8 15,5"
        stroke="#C4511A"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner jagged layer */}
      <polygon
        points="20,8 24,11 29,13 31,18 30,23 26,28 20,30 14,28 10,23 10,18 12,13 16,11"
        stroke="#C4511A"
        strokeWidth="1"
        strokeOpacity="0.6"
        fill="none"
      />
      {/* Flake details */}
      <path d="M14 17 L18 15 L17 19" stroke="#C4511A" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M22 22 L26 20 L25 24" stroke="#C4511A" strokeWidth="1" strokeOpacity="0.8" />
      <circle cx="20" cy="20" r="2" fill="#C4511A" fillOpacity="0.4" />
    </svg>
  );
}

function LimeIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Overlapping diamond / crystal shapes */}
      <polygon
        points="20,4 30,14 20,24 10,14"
        stroke="#F2EDE4"
        strokeWidth="1.5"
        fill="none"
      />
      <polygon
        points="20,16 30,26 20,36 10,26"
        stroke="#F2EDE4"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Cross lines suggesting crystal lattice */}
      <line x1="10" y1="14" x2="30" y2="26" stroke="#F2EDE4" strokeWidth="0.75" strokeOpacity="0.5" />
      <line x1="30" y1="14" x2="10" y2="26" stroke="#F2EDE4" strokeWidth="0.75" strokeOpacity="0.5" />
      <circle cx="20" cy="20" r="2.5" stroke="#F2EDE4" strokeWidth="1" fill="none" />
    </svg>
  );
}

function BiofilmIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Organic blob shapes suggesting bacterial colonies */}
      <path
        d="M12 20 C10 14, 14 8, 20 10 C26 8, 32 14, 30 20 C32 26, 26 34, 20 32 C14 34, 8 28, 12 20Z"
        stroke="#1A7A6E"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner organic shape */}
      <path
        d="M15 20 C14 16, 16 12, 20 13 C24 12, 27 16, 26 20 C27 24, 24 28, 20 27 C16 28, 13 24, 15 20Z"
        stroke="#1A7A6E"
        strokeWidth="1"
        strokeOpacity="0.6"
        fill="none"
      />
      {/* Small colony dots */}
      <circle cx="13" cy="16" r="1.5" fill="#1A7A6E" fillOpacity="0.7" />
      <circle cx="27" cy="16" r="1.5" fill="#1A7A6E" fillOpacity="0.7" />
      <circle cx="20" cy="30" r="1.5" fill="#1A7A6E" fillOpacity="0.7" />
      <circle cx="20" cy="20" r="3" stroke="#1A7A6E" strokeWidth="1" fill="none" />
    </svg>
  );
}

function HumusIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Horizontal wavy sediment layers */}
      <path d="M6 12 C10 10, 14 14, 20 12 C26 10, 30 14, 34 12" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      <path d="M6 18 C10 16, 14 20, 20 18 C26 16, 30 20, 34 18" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      <path d="M6 24 C10 22, 14 26, 20 24 C26 22, 30 26, 34 24" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      <path d="M6 30 C10 28, 14 32, 20 30 C26 28, 30 32, 34 30" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      {/* Vertical lines suggesting stratification */}
      <line x1="6" y1="11" x2="6" y2="31" stroke="#8A99A8" strokeWidth="0.75" strokeOpacity="0.4" />
      <line x1="34" y1="11" x2="34" y2="31" stroke="#8A99A8" strokeWidth="0.75" strokeOpacity="0.4" />
    </svg>
  );
}

/* ─── Card data ──────────────────────────────────────────────────────────── */

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  sub: string;
  desc: string;
  delay: number;
}

const cards: ServiceCard[] = [
  {
    icon: <RustIcon />,
    title: "KORROSJON",
    sub: "(Rust og oksidavleiringer)",
    desc: "Jernoksid og rust bygger seg opp over tid og reduserer rørkapasiteten. Vi fjerner avleiringene ned til rent metall.",
    delay: 0,
  },
  {
    icon: <LimeIcon />,
    title: "KALKAVLEIRING",
    sub: "(Kalsiumkarbonat og mineraler)",
    desc: "Kalk og mineralavleiringer fra sjøvann og prosessvæsker. Kjemisk oppløsning gjenoppretter full rørkaliber.",
    delay: 0.1,
  },
  {
    icon: <BiofilmIcon />,
    title: "BIOFILM",
    sub: "(Biologiske avleiringer)",
    desc: "Mikrobiell vekst i rørledninger kan forårsake MIC-korrosjon. Vi fjerner biofilm og desinfiserer overflaten.",
    delay: 0.2,
  },
  {
    icon: <HumusIcon />,
    title: "HUMUS",
    sub: "(Organiske avleiringer)",
    desc: "Organisk materiale og humus akkumuleres i lavtliggende rørpartier. Kjemisk behandling løser opp og fjerner sedimentene.",
    delay: 0.3,
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function Services() {
  return (
    <section
      id="services"
      className="bg-steel bg-tech-grid py-24 px-6 md:px-12"
    >
      {/* Section header */}
      <AnimatedSection>
        <p
          className="text-teal uppercase mb-2"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "13px",
            letterSpacing: "0.3em",
          }}
        >
          Tjenester
        </p>
        <h2
          className="text-parchment text-4xl md:text-5xl uppercase mb-4"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 700,
          }}
        >
          Hva vi fjerner
        </h2>
        <p
          className="text-mist mb-16"
          style={{
            fontFamily: "var(--font-ibm-plex)",
            maxWidth: "32rem",
          }}
        >
          Vi spesialiserer oss på å fjerne alle typer avleiringer som hindrer
          effektiv drift av rørledninger offshore.
        </p>
      </AnimatedSection>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <AnimatedSection key={card.title} delay={card.delay}>
            <div
              className="
                bg-hull border-l-4 border-rust p-8
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg hover:border-rust-light
              "
              style={{ borderRadius: 0 }}
            >
              {/* Icon */}
              {card.icon}

              {/* Title */}
              <p
                className="text-parchment text-xl uppercase mt-4 mb-2"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 600,
                }}
              >
                {card.title}
              </p>

              {/* Norwegian subtitle */}
              <p
                className="text-mist mb-3"
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "12px",
                }}
              >
                {card.sub}
              </p>

              {/* Description */}
              <p
                className="text-mist text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-ibm-plex)" }}
              >
                {card.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Rust rule */}
      <hr className="rule-rust mt-16" />
    </section>
  );
}
