"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Tjenester", href: "#services" },
  { label: "Om oss", href: "#expertise" },
  { label: "Prosess", href: "#process" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "px-6 md:px-12 py-4 flex items-center justify-between",
          scrolled
            ? "bg-steel/90 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="text-white no-underline"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            fontSize: "1.125rem",
          }}
        >
          CLEAN MARINE AS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-mist hover:text-parchment transition-colors duration-200 text-sm no-underline"
              style={{ fontFamily: "var(--font-ibm-plex)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={menuOpen}
        >
          <span
            className={[
              "block w-6 h-[2px] bg-parchment transition-transform duration-300 origin-center",
              menuOpen ? "translate-y-[7px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-6 h-[2px] bg-parchment transition-opacity duration-300",
              menuOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block w-6 h-[2px] bg-parchment transition-transform duration-300 origin-center",
              menuOpen ? "-translate-y-[7px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={[
          "fixed inset-0 z-40 bg-abyss flex flex-col items-center justify-center",
          "transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-parchment hover:text-rust transition-colors duration-200 no-underline"
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 700,
                fontSize: "2rem",
                letterSpacing: "0.06em",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
