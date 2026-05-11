"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

/* ─── Count-up number ────────────────────────────────────────────────────── */

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1600;
    const start = Date.now();
    let frame: number;

    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <span
      style={{
        fontFamily: "var(--font-bebas)",
        fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)",
        lineHeight: 1,
        color: "var(--color-parchment)",
        display: "block",
        letterSpacing: "0.01em",
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

/* ─── Stats Bar ──────────────────────────────────────────────────────────── */

export default function Stats() {
  const t = useTranslations("Stats");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const metrics = [
    { value: 20, suffix: "+", label: t("experience"), sublabel: t("experienceSub") },
    { value: 100, suffix: "%", label: t("ecoFriendly"), sublabel: t("ecoFriendlySub") },
    { value: 48, suffix: "t", label: t("response"), sublabel: t("responseSub") },
  ];

  return (
    <section
      ref={ref}
      className="py-16 px-6 md:px-12"
      style={{
        background:
          "linear-gradient(90deg, var(--color-hull) 0%, #263748 50%, var(--color-hull) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: i * 0.1,
              }}
              className="text-center md:px-8 md:border-r md:border-white/[0.05] last:border-r-0"
            >
              <CountUp target={m.value} suffix={m.suffix} active={inView} />

              <p
                className="text-parchment uppercase mt-1"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                }}
              >
                {m.label}
              </p>

              <p
                className="text-mist mt-1"
                style={{
                  fontFamily: "var(--font-ibm-plex)",
                  fontSize: "0.75rem",
                  opacity: 0.75,
                }}
              >
                {m.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
