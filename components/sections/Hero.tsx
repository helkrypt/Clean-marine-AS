"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

/* ─── Animated Technical Pipe Cross-Section ─────────────────────────────── */

function PipeVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.4 }}
      className="relative w-full flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 480"
        fill="none"
        className="w-full max-w-[480px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer dashed ring — slow rotation */}
        <motion.circle
          cx="240" cy="240" r="215"
          stroke="#F2EDE4"
          strokeWidth="0.75"
          strokeOpacity="0.08"
          strokeDasharray="8 5"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "240px 240px" }}
        />

        {/* Outer structural ring */}
        <motion.circle
          cx="240" cy="240" r="196"
          stroke="#F2EDE4"
          strokeWidth="1"
          strokeOpacity="0.12"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Mid ring */}
        <motion.circle
          cx="240" cy="240" r="165"
          stroke="#F2EDE4"
          strokeWidth="0.5"
          strokeOpacity="0.07"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.65 }}
        />

        {/* Radial measurement spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 240 + 150 * Math.cos(rad);
          const y1 = 240 + 150 * Math.sin(rad);
          const x2 = 240 + 196 * Math.cos(rad);
          const y2 = 240 + 196 * Math.sin(rad);
          return (
            <motion.line
              key={angle}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#F2EDE4"
              strokeWidth="0.5"
              strokeOpacity="0.18"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.04, ease: "easeOut" }}
            />
          );
        })}

        {/* Pipe outer wall — rust accent */}
        <motion.circle
          cx="240" cy="240" r="150"
          stroke="#C4511A"
          strokeWidth="2.5"
          strokeOpacity="0.75"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.7 }}
        />

        {/* Pipe inner wall */}
        <motion.circle
          cx="240" cy="240" r="132"
          stroke="#C4511A"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Deposit layer — fills pipe bore when clogged */}
        <motion.circle
          cx="240" cy="240" r="130"
          fill="#3D1A08"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.8, 0.8, 0.8, 0, 0] }}
          transition={{ duration: 8, times: [0, 0.08, 0.18, 0.45, 0.55, 0.78, 1], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bore opening — animates from clogged (r=80) to clean (r=120) */}
        <motion.circle
          cx="240" cy="240"
          fill="#0A1628"
          initial={{ r: 80 }}
          animate={{ r: [80, 80, 120, 120, 80] }}
          transition={{ duration: 8, times: [0, 0.18, 0.62, 0.78, 1], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dissolving particles — drift outward during cleaning */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const startX = 240 + 88 * Math.cos(rad);
          const startY = 240 + 88 * Math.sin(rad);
          const endX = 240 + 135 * Math.cos(rad);
          const endY = 240 + 135 * Math.sin(rad);
          return (
            <motion.circle
              key={angle}
              r="2.5"
              fill="#C4511A"
              animate={{
                cx: [startX, startX, endX, endX],
                cy: [startY, startY, endY, endY],
                opacity: [0, 0, 0.7, 0],
              }}
              transition={{
                duration: 8,
                times: [0, 0.2 + i * 0.02, 0.58 + i * 0.02, 0.72],
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.15,
              }}
            />
          );
        })}

        {/* Pulse ring — active when pipe is clean */}
        <motion.circle
          cx="240" cy="240" r="150"
          stroke="#C4511A"
          strokeWidth="1"
          animate={{
            r: [150, 185],
            strokeOpacity: [0, 0, 0, 0.45, 0],
          }}
          transition={{ duration: 8, times: [0, 0.55, 0.6, 0.68, 0.78], repeat: Infinity, ease: "easeOut" }}
        />

        {/* Center crosshair */}
        <motion.line x1="230" y1="240" x2="250" y2="240"
          stroke="#C4511A" strokeWidth="1" strokeOpacity="0.6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        />
        <motion.line x1="240" y1="230" x2="240" y2="250"
          stroke="#C4511A" strokeWidth="1" strokeOpacity="0.6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        />
        <circle cx="240" cy="240" r="3" fill="#C4511A" fillOpacity="0.8" />

        {/* Status label */}
        {[
          { text: "AVLEIRING AKTIV", times: [0, 0.15, 0.2, 1] },
          { text: "RENSING PÅGÅR", times: [0, 0.18, 0.62, 0.68] },
          { text: "RØRKAPASITET 100%", times: [0, 0.62, 0.78, 0.84] },
        ].map(({ text, times }) => (
          <motion.text
            key={text}
            x="60" y="415"
            fill="#8A99A8"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="1.2"
            animate={{ opacity: [0, 0, 0.55, 0] }}
            transition={{ duration: 8, times, repeat: Infinity }}
          >
            {text}
          </motion.text>
        ))}
      </svg>
    </motion.div>
  );
}

/* ─── Magnetic CTA Button ────────────────────────────────────────────────── */

function MagneticCTA() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.28);
    y.set((e.clientY - cy) * 0.28);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href="#contact"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      style={{
        x: springX,
        y: springY,
        fontFamily: "var(--font-barlow)",
        letterSpacing: "0.15em",
        borderRadius: 0,
        borderWidth: "1.5px",
        display: "inline-block",
      }}
      className="border border-rust text-rust px-10 py-4 uppercase text-sm hover:bg-rust hover:text-parchment transition-colors duration-300"
    >
      Ta kontakt
    </motion.a>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-abyss flex items-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 65% 50%, rgba(196, 81, 26, 0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 60%, rgba(26, 122, 110, 0.05) 0%, transparent 55%), #0A1628",
      }}
    >
      {/* Layout grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-0 items-center py-24 lg:py-0">

        {/* Left column — content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-0"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-teal uppercase mb-5"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "20px",
              letterSpacing: "0.28em",
            }}
          >
            Clean Marine AS — Offshore Rørrehabilitering
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-parchment uppercase mb-7 leading-none"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3.8vw, 3.5rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.95,
            }}
          >
            Vi gjenoppretter rør
            <br />
            <span style={{ color: "var(--color-rust)" }}>Til original tilstand</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-mist mb-10 leading-relaxed"
            style={{
              fontFamily: "var(--font-ibm-plex)",
              maxWidth: "42ch",
              fontSize: "1.0625rem",
            }}
          >
            <span className="text-parchment">Kjemisk rehabilitering av rørledninger offshore.</span>
            <br />
            Vi fjerner korrosjon, kalk, biofilm og humus — uten å skade rørmaterialet.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="flex items-center gap-8">
            <MagneticCTA />
            <a
              href="#services"
              className="text-mist hover:text-parchment transition-colors duration-200 text-sm no-underline"
              style={{
                fontFamily: "var(--font-ibm-plex)",
                letterSpacing: "0.02em",
              }}
            >
              Se tjenester →
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — technical visualization */}
        <div className="hidden lg:flex items-center justify-center pr-8">
          <PipeVisualization />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 select-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="text-mist opacity-40"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "10px",
              letterSpacing: "0.25em",
            }}
          >
            SCROLL
          </span>
          <svg width="1" height="32" viewBox="0 0 1 32" aria-hidden="true">
            <line x1="0.5" y1="0" x2="0.5" y2="32" stroke="#8A99A8" strokeOpacity="0.35" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
