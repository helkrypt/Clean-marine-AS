"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Tjenester", href: "#services" },
  { label: "Om oss", href: "#expertise" },
  { label: "Prosess", href: "#process" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Dynamic island wrapper — always full-width, pill morphs inside */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          animate={scrolled ? "pill" : "bar"}
          variants={{
            bar: {
              marginTop: 0,
              borderRadius: 0,
              paddingLeft: 48,
              paddingRight: 48,
              paddingTop: 22,
              paddingBottom: 22,
              width: "100%",
              maxWidth: 9999,
              backgroundColor: "rgba(10, 22, 40, 0)",
              boxShadow: "none",
            },
            pill: {
              marginTop: 14,
              borderRadius: 9999,
              paddingLeft: 22,
              paddingRight: 22,
              paddingTop: 12,
              paddingBottom: 12,
              width: "calc(100vw - 2rem)",
              maxWidth: 660,
              backgroundColor: "rgba(28, 43, 58, 0.9)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)",
            },
          }}
          transition={{ type: "spring", stiffness: 220, damping: 32 }}
          className="pointer-events-auto flex items-center justify-between"
          style={{
            backdropFilter: scrolled ? "blur(14px)" : "none",
            border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="text-white no-underline flex-shrink-0"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontSize: scrolled ? "0.9375rem" : "1.0625rem",
              transition: "font-size 0.3s",
            }}
          >
            CLEAN MARINE AS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-mist hover:text-parchment transition-colors duration-200 text-sm no-underline"
                style={{ fontFamily: "var(--font-ibm-plex)" }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA pill in nav when scrolled */}
            <AnimatePresence>
              {scrolled && (
                <motion.a
                  key="nav-cta"
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                  initial={{ opacity: 0, scale: 0.88, x: 8 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.88, x: 8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="no-underline"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-parchment)",
                    background: "var(--color-rust)",
                    padding: "0.4rem 1rem",
                    borderRadius: "2px",
                  }}
                >
                  Ta kontakt
                </motion.a>
              )}
            </AnimatePresence>
          </nav>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                "block w-6 h-[1.5px] bg-parchment transition-transform duration-300 origin-center",
                menuOpen ? "translate-y-[6.5px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-[1.5px] bg-parchment transition-opacity duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-[1.5px] bg-parchment transition-transform duration-300 origin-center",
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </motion.div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-abyss flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 20 }}
                  className="text-parchment hover:text-rust transition-colors duration-200 no-underline"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 700,
                    fontSize: "2rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
