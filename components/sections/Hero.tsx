"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1.0] as const;
const duration = 0.7;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, ease, delay },
  };
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-abyss flex flex-col justify-center px-6 md:px-20 lg:px-32"
    >
      {/* Decorative pipe cross-section SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <svg
          viewBox="0 0 420 420"
          width={420}
          height={420}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer circle */}
          <circle cx="210" cy="210" r="200" stroke="#F2EDE4" strokeWidth="2" />
          {/* Ring 1 */}
          <circle cx="210" cy="210" r="170" stroke="#F2EDE4" strokeWidth="1.5" />
          {/* Ring 2 */}
          <circle cx="210" cy="210" r="130" stroke="#F2EDE4" strokeWidth="1" />
          {/* Inner pipe wall */}
          <circle cx="210" cy="210" r="90" stroke="#C4511A" strokeWidth="2" />
          {/* Center fill */}
          <circle cx="210" cy="210" r="80" fill="#C4511A" fillOpacity="0.15" />
          {/* Radial spokes */}
          <line
            x1="210" y1="210" x2="410" y2="210"
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
          <line
            x1="210" y1="210"
            x2={210 + 200 * Math.cos((45 * Math.PI) / 180)}
            y2={210 - 200 * Math.sin((45 * Math.PI) / 180)}
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
          <line
            x1="210" y1="210" x2="210" y2="10"
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
          <line
            x1="210" y1="210"
            x2={210 - 200 * Math.cos((45 * Math.PI) / 180)}
            y2={210 - 200 * Math.sin((45 * Math.PI) / 180)}
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
          <line
            x1="210" y1="210" x2="10" y2="210"
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
          <line
            x1="210" y1="210"
            x2={210 - 200 * Math.cos((45 * Math.PI) / 180)}
            y2={210 + 200 * Math.sin((45 * Math.PI) / 180)}
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
          <line
            x1="210" y1="210" x2="210" y2="410"
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
          <line
            x1="210" y1="210"
            x2={210 + 200 * Math.cos((45 * Math.PI) / 180)}
            y2={210 + 200 * Math.sin((45 * Math.PI) / 180)}
            stroke="#F2EDE4" strokeOpacity="0.5" strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
          className="text-teal uppercase mb-4"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "14px",
            letterSpacing: "0.3em",
          }}
        >
          Clean Marine AS
        </motion.p>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-parchment text-5xl md:text-7xl lg:text-8xl uppercase leading-none mb-6 whitespace-pre-line"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 700,
          }}
        >
          {"Vi gjenoppretter rør\ntil original tilstand"}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-mist text-base md:text-lg mb-10"
          style={{
            fontFamily: "var(--font-ibm-plex)",
            maxWidth: "480px",
          }}
        >
          Kjemisk rehabilitering av rørledninger offshore — skip og rigger
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.45)}>
          <a
            href="#contact"
            className="inline-block text-rust border border-rust px-8 py-3 uppercase transition-colors duration-300 hover:bg-rust hover:text-parchment"
            style={{
              fontFamily: "var(--font-barlow)",
              letterSpacing: "0.1em",
              borderWidth: "1.5px",
              borderRadius: 0,
            }}
          >
            Ta kontakt
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist opacity-50 select-none">
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block text-xl"
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </div>
    </section>
  );
}
