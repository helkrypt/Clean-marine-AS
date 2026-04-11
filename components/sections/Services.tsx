"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* ─── SVG Icons ─────────────────────────────────────────────────────────── */

function RustIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <polygon
        points="22,2 28,5 35,8 38,15 40,22 36,30 30,37 22,40 14,37 7,30 4,22 6,15 11,8 16,5"
        stroke="#C4511A" strokeWidth="1.5" fill="none"
      />
      <polygon
        points="22,9 26,12 31,14 33,19 32,24 28,29 22,32 16,29 12,24 12,19 14,14 18,12"
        stroke="#C4511A" strokeWidth="1" strokeOpacity="0.5" fill="none"
      />
      <path d="M16 18 L20 16 L19 20" stroke="#C4511A" strokeWidth="1" strokeOpacity="0.8" />
      <path d="M24 24 L28 22 L27 26" stroke="#C4511A" strokeWidth="1" strokeOpacity="0.8" />
      <circle cx="22" cy="22" r="2.5" fill="#C4511A" fillOpacity="0.35" />
    </svg>
  );
}

function LimeIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <polygon points="22,4 32,14 22,24 12,14" stroke="#F2EDE4" strokeWidth="1.5" fill="none" />
      <polygon points="22,18 32,28 22,38 12,28" stroke="#F2EDE4" strokeWidth="1.5" fill="none" />
      <line x1="12" y1="14" x2="32" y2="28" stroke="#F2EDE4" strokeWidth="0.75" strokeOpacity="0.4" />
      <line x1="32" y1="14" x2="12" y2="28" stroke="#F2EDE4" strokeWidth="0.75" strokeOpacity="0.4" />
      <circle cx="22" cy="21" r="3" stroke="#F2EDE4" strokeWidth="1" fill="none" />
    </svg>
  );
}

function BiofilmIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path
        d="M14 22 C12 15, 15 8, 22 10 C29 8, 34 15, 32 22 C34 29, 29 37, 22 35 C15 37, 10 30, 14 22Z"
        stroke="#1A7A6E" strokeWidth="1.5" fill="none"
      />
      <path
        d="M17 22 C16 18, 18 13, 22 14 C26 13, 29 18, 28 22 C29 26, 26 31, 22 30 C18 31, 15 27, 17 22Z"
        stroke="#1A7A6E" strokeWidth="1" strokeOpacity="0.5" fill="none"
      />
      <circle cx="15" cy="17" r="1.5" fill="#1A7A6E" fillOpacity="0.7" />
      <circle cx="29" cy="17" r="1.5" fill="#1A7A6E" fillOpacity="0.7" />
      <circle cx="22" cy="33" r="1.5" fill="#1A7A6E" fillOpacity="0.7" />
      <circle cx="22" cy="22" r="3" stroke="#1A7A6E" strokeWidth="1" fill="none" />
    </svg>
  );
}

function HumusIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M6 13 C10 11, 15 15, 22 13 C29 11, 33 15, 38 13" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      <path d="M6 20 C10 18, 15 22, 22 20 C29 18, 33 22, 38 20" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      <path d="M6 27 C10 25, 15 29, 22 27 C29 25, 33 29, 38 27" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      <path d="M6 34 C10 32, 15 36, 22 34 C29 32, 33 36, 38 34" stroke="#8A99A8" strokeWidth="1.5" fill="none" />
      <line x1="6" y1="12" x2="6" y2="35" stroke="#8A99A8" strokeWidth="0.75" strokeOpacity="0.35" />
      <line x1="38" y1="12" x2="38" y2="35" stroke="#8A99A8" strokeWidth="0.75" strokeOpacity="0.35" />
    </svg>
  );
}

/* ─── Spotlight Card ─────────────────────────────────────────────────────── */

interface CardProps {
  icon: React.ReactNode;
  title: string;
  sub: string;
  desc: string;
  stat?: { value: string; label: string };
  featured?: boolean;
  accentColor?: string;
  delay?: number;
}

function SpotlightCard({ icon, title, sub, desc, stat, featured, accentColor = "#C4511A", delay = 0 }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <AnimatedSection delay={delay} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative h-full overflow-hidden group"
        style={{
          background: "var(--color-hull)",
          borderLeft: `3px solid ${accentColor}`,
          padding: featured ? "2.5rem" : "2rem",
        }}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {/* Spotlight gradient following cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(196,81,26,0.08) 0%, transparent 70%)`,
          }}
        />

        {/* Border highlight on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(180px circle at ${mouseX}px ${mouseY}px, ${accentColor}18 0%, transparent 65%)`,
            borderRadius: "inherit",
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          {icon}

          {/* Title */}
          <p
            className="uppercase mt-5 mb-1 leading-tight"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 700,
              fontSize: featured ? "1.375rem" : "1.125rem",
              color: "var(--color-parchment)",
              letterSpacing: "0.04em",
            }}
          >
            {title}
          </p>

          {/* Subtitle */}
          <p
            className="text-mist mb-4"
            style={{
              fontFamily: "var(--font-ibm-plex)",
              fontSize: "0.75rem",
            }}
          >
            {sub}
          </p>

          {/* Description */}
          <p
            className="text-mist leading-relaxed flex-1"
            style={{
              fontFamily: "var(--font-ibm-plex)",
              fontSize: "0.875rem",
              maxWidth: featured ? "44ch" : "36ch",
            }}
          >
            {desc}
          </p>

          {/* Stat callout — featured cards */}
          {stat && (
            <div
              className="mt-6 pt-5 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "2.5rem",
                  color: accentColor,
                  lineHeight: 1,
                  display: "block",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-mist"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

/* ─── Services ───────────────────────────────────────────────────────────── */

export default function Services() {
  return (
    <section
      id="services"
      className="bg-steel bg-tech-grid py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <AnimatedSection>
          <div className="flex flex-col mb-10 gap-3">
            <div>
              <p
                className="text-teal uppercase mb-3"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: "12px",
                  letterSpacing: "0.32em",
                }}
              >
                Tjenester
              </p>
              <h2
                className="text-parchment uppercase leading-none"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 700,
                  fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                Hva vi fjerner
              </h2>
            </div>
            <p
              className="text-mist"
              style={{
                fontFamily: "var(--font-ibm-plex)",
                maxWidth: "52ch",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
              }}
            >
              Vi spesialiserer oss på kjemisk fjerning av alle avleiringstyper
              som hemmer effektiv offshore-drift.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-auto">

          {/* Row 1: Korrosjon (featured, 2 cols) + Kalkavleiring (1 col) */}
          <div className="lg:col-span-2 h-full">
            <SpotlightCard
              icon={<RustIcon size={52} />}
              title="Korrosjon"
              sub="(Rust og oksidavleiringer)"
              desc="Jernoksid og rust bygger seg opp over tid og reduserer rørkapasiteten betraktelig. Vi fjerner avleiringene ned til rent metall ved hjelp av selektive kjemikalier som ikke angriper rørveggen."
              stat={{ value: "98.3%", label: "Renhetsnivå etter behandling" }}
              accentColor="#C4511A"
              featured
              delay={0}
            />
          </div>
          <div className="h-full">
            <SpotlightCard
              icon={<LimeIcon size={44} />}
              title="Kalkavleiring"
              sub="(Kalsiumkarbonat og mineraler)"
              desc="Kalk og mineralavleiringer fra sjøvann og prosessvæsker blokkerer røret gradvis. Kjemisk oppløsning gjenoppretter full rørkaliber."
              stat={{ value: "24t", label: "Gjennomsnittlig behandlingstid" }}
              accentColor="#F2EDE4"
              delay={0.08}
            />
          </div>

          {/* Row 2: Biofilm (1 col) + Humus (featured, 2 cols) */}
          <div className="h-full">
            <SpotlightCard
              icon={<BiofilmIcon size={44} />}
              title="Biofilm"
              sub="(Biologiske avleiringer)"
              desc="Mikrobiell vekst forårsaker MIC-korrosjon. Vi fjerner biofilm og desinfiserer overflaten permanent."
              stat={{ value: "100%", label: "Desinfeksjon bekreftet" }}
              accentColor="#1A7A6E"
              delay={0.12}
            />
          </div>
          <div className="lg:col-span-2 h-full">
            <SpotlightCard
              icon={<HumusIcon size={52} />}
              title="Humus"
              sub="(Organiske sedimenter)"
              desc="Organisk materiale og humus akkumuleres i lavtliggende rørpartier og skaper blokkering. Kjemisk behandling løser opp og fjerner sedimentene fullstendig uten mekanisk inngrep — kritisk for rør med begrenset tilgang på offshore-installasjoner."
              stat={{ value: "0", label: "Mekaniske inngrep nødvendig" }}
              accentColor="#8A99A8"
              featured
              delay={0.16}
            />
          </div>
        </div>

        <hr className="rule-rust mt-12" />
      </div>
    </section>
  );
}
