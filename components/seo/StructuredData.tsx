const SITE_URL = "https://cleanmarin.no";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Clean Marine AS",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Spesialister på kjemisk rehabilitering av rørledninger i offshore og maritim sektor.",
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
      jobTitle: "Daglig leder",
      email: "robin@cleanmarin.no",
    },
  ],
  employee: [
    {
      "@type": "Person",
      name: "Daniel Modalen",
      jobTitle: "Prosjektleder",
      email: "daniel@cleanmarin.no",
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Nordsjøen" },
    { "@type": "Country", name: "Norge" },
  ],
  knowsAbout: [
    "Kjemisk rørrehabilitering",
    "Korrosjon",
    "Biofilm",
    "Kalkavleiring",
    "Humus",
    "MIC-korrosjon",
    "Offshore",
    "Maritim sektor",
  ],
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Rørehabilitering",
  provider: { "@id": `${SITE_URL}#organization` },
  areaServed: "Norge",
  description:
    "Kjemisk rehabilitering av rørledninger offshore og maritim sektor — fjerner korrosjon, kalk, biofilm og humus uten skade på rørmaterialet.",
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva er rørehabilitering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rørehabilitering er kjemisk fjerning av avleiringer som korrosjon, kalk, biofilm og humus fra innsiden av rørledninger. Clean Marine AS gjenoppretter rør til original tilstand med opptil 98,3 % renhetsnivå uten å skade rørmaterialet.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor lang tid tar kjemisk rensing av et rør?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gjennomsnittlig behandlingstid er 24 timer per rørledning. Eksakt tid avhenger av avleiringstype, rørdimensjon og lengde.",
      },
    },
    {
      "@type": "Question",
      name: "Skader kjemikaliene rørmaterialet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nei. Vi bruker selektive, godkjente kjemikalier som løser opp avleiringer uten å angripe rørveggen. Alle kjemikalier er miljøsikre og dokumenterte.",
      },
    },
    {
      "@type": "Question",
      name: "Hvilke avleiringer kan dere fjerne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Korrosjon (rust og oksidavleiringer), kalkavleiring (kalsiumkarbonat og mineraler), biofilm (mikrobielle avleiringer som forårsaker MIC-korrosjon), og humus (organiske sedimenter).",
      },
    },
    {
      "@type": "Question",
      name: "Hva er MIC-korrosjon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MIC står for Microbiologically Influenced Corrosion — korrosjon som forårsakes av mikrobiell aktivitet i biofilm. Vi fjerner biofilm og desinfiserer overflaten permanent for å hindre videre korrosjonsangrep.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor opererer Clean Marine AS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clean Marine AS opererer i Norge, Nordsjøen og internasjonalt — primært på rigger og skip i offshore og maritim sektor.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor raskt responderer dere på henvendelser?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "48 timer fra henvendelse til tilbud. Kontakt oss på post@cleanmarin.no eller +47 991 17 437.",
      },
    },
  ],
};

export default function StructuredData() {
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
