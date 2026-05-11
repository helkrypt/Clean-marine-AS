"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Expertise() {
  const t = useTranslations("Expertise");
  return (
    <section
      id="expertise"
      className="bg-abyss bg-tech-grid py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left column — stats + pull quote */}
        <AnimatedSection delay={0}>
          <div>
            {/* Big decorative stat */}
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "120px",
                lineHeight: 1,
                color: "var(--color-rust)",
              }}
            >
              20+
            </div>

            {/* Stat label */}
            <div
              style={{ fontFamily: "var(--font-barlow)" }}
              className="text-parchment font-semibold text-sm tracking-widest uppercase mt-1"
            >
              {t("bigStatLabel")}
            </div>

            {/* Rust separator */}
            <div
              className="my-6"
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "var(--color-rust)",
              }}
            />

            {/* Pull quote */}
            <p
              style={{ fontFamily: "var(--font-barlow)", fontSize: "28px" }}
              className="text-parchment font-bold italic leading-snug"
            >
              {t("quote")}
            </p>
          </div>
        </AnimatedSection>

        {/* Right column — body text */}
        <AnimatedSection delay={0.2}>
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

            {/* Body paragraphs */}
            <p
              style={{ fontFamily: "var(--font-ibm-plex)" }}
              className="text-mist leading-relaxed mb-4"
            >
              {t("para1")}
            </p>
            <p
              style={{ fontFamily: "var(--font-ibm-plex)" }}
              className="text-mist leading-relaxed mb-4"
            >
              {t("para2")}
            </p>
            <p
              style={{ fontFamily: "var(--font-ibm-plex)" }}
              className="text-mist leading-relaxed mb-4"
            >
              {t("para3")}
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[t("badge1"), t("badge2"), t("badge3")].map((badge) => (
                <span
                  key={badge}
                  style={{ fontFamily: "var(--font-barlow)" }}
                  className="border border-hull text-mist text-xs px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
