import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

const SITE_URL = "https://cleanmarin.no";

export default async function StructuredData({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "FAQ" });

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: t("orgName"),
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: t("orgDescription"),
    email: "post@cleanmarin.no",
    telephone: "+47 991 17 437",
    address: {
      "@type": "PostalAddress",
      postalCode: "4770",
      addressLocality: "Høvåg",
      addressCountry: "NO",
    },
    vatID: "NO937548834",
    taxID: "937548834",
    founder: [
      {
        "@type": "Person",
        name: "Robin Ribe",
        jobTitle: locale === "no" ? "Daglig leder" : "Managing Director",
        email: "robin@cleanmarin.no",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Daniel Modalen",
        jobTitle: locale === "no" ? "Prosjektleder" : "Project Manager",
        email: "daniel@cleanmarin.no",
      },
    ],
    areaServed: [
      { "@type": "Place", name: t("areaServedNorth") },
      { "@type": "Country", name: t("areaServedCountry") },
    ],
    knowsAbout: [
      t("knowsAbout1"),
      t("knowsAbout2"),
      t("knowsAbout3"),
      t("knowsAbout4"),
      t("knowsAbout5"),
      t("knowsAbout6"),
      t("knowsAbout7"),
      t("knowsAbout8"),
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: t("serviceType"),
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: t("serviceArea"),
    description: t("serviceDescription"),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "no" ? "nb-NO" : "en-US",
    mainEntity: [1, 2, 3, 4, 5, 6, 7].map((i) => ({
      "@type": "Question",
      name: t(`q${i}` as "q1"),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`a${i}` as "a1"),
      },
    })),
  };

  const schemas = [organization, service, faqPage];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
