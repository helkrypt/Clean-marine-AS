import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const navLinks = [
    { label: t("navServices"), href: "#services" },
    { label: t("navAbout"), href: "#expertise" },
    { label: t("navProcess"), href: "#process" },
    { label: t("navContact"), href: "#contact" },
  ];

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
            {t("brand")}
          </span>
          <span
            className="text-mist text-sm"
            style={{ fontFamily: "var(--font-ibm-plex)" }}
          >
            {t("tagline")}
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
        <span className="text-mist text-xs">
          {t("copyright", { year: new Date().getFullYear() })}
        </span>
        <span className="text-mist text-xs">{t("orgNr")}</span>
      </div>

      {/* Credit line */}
      <div
        className="mt-4 text-center"
        style={{ fontFamily: "var(--font-ibm-plex)" }}
      >
        <span className="text-mist text-xs">
          {t("creditPrefix")}{" "}
          <a
            href="https://helkrypt.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-rust transition-colors duration-200 underline underline-offset-2"
          >
            Helkrypt AI
          </a>
        </span>
      </div>
    </footer>
  );
}
