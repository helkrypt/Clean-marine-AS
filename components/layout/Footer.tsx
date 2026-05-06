const navLinks = [
  { label: "Tjenester", href: "#services" },
  { label: "Om oss", href: "#expertise" },
  { label: "Prosess", href: "#process" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-abyss border-t border-hull py-12 px-6 md:px-12">
      {/* Main two-column grid */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left: brand + tagline */}
        <div className="flex flex-col gap-2">
          <span
            className="text-white"
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontSize: "1.125rem",
            }}
          >
            CLEAN MARINE AS
          </span>
          <span
            className="text-mist text-sm"
            style={{ fontFamily: "var(--font-ibm-plex)" }}
          >
            Vi gjenoppretter rør til original tilstand
          </span>
        </div>

        {/* Right: nav links grid */}
        <nav
          className="grid grid-cols-2 gap-x-10 gap-y-3"
          style={{ fontFamily: "var(--font-ibm-plex)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-mist hover:text-rust transition-colors duration-200 text-sm no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom strip */}
      <div
        className="mt-8 pt-6 border-t border-hull flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        style={{ fontFamily: "var(--font-ibm-plex)" }}
      >
        <span className="text-mist text-xs">© {new Date().getFullYear()} Clean Marine AS</span>
        <span className="text-mist text-xs">Org.nr: 937 548 834</span>
      </div>
    </footer>
  );
}
