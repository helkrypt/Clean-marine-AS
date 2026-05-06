import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, Bebas_Neue } from "next/font/google";
import StructuredData from "@/components/seo/StructuredData";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanmarin.no"),
  title: "Clean Marine AS — Kjemisk Rørehabilitering Offshore & Maritim",
  description:
    "Spesialister på kjemisk rehabilitering av rørledninger i offshore og maritim sektor. 20+ års erfaring. Fjerner korrosjon, kalk, biofilm og humus uten å skade rørmaterialet.",
  keywords: [
    "rørehabilitering",
    "kjemisk rensing",
    "kjemisk rørrensing",
    "rørledning rehabilitering",
    "offshore",
    "maritim sektor",
    "biofilm",
    "kalkavleiring",
    "korrosjon",
    "MIC-korrosjon",
    "humus avleiring",
    "rigg",
    "skip",
    "Nordsjøen",
    "Høvåg",
    "Clean Marine",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Clean Marine AS — Kjemisk Rørehabilitering Offshore & Maritim",
    description:
      "Kjemisk rehabilitering av rørledninger i offshore og maritim sektor. Faglært personell med erfaring fra rigg og skip.",
    type: "website",
    locale: "nb_NO",
    url: "https://cleanmarin.no",
    siteName: "Clean Marine AS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Marine AS — Kjemisk Rørehabilitering",
    description:
      "Kjemisk rehabilitering av rørledninger i offshore og maritim sektor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${barlowCondensed.variable} ${ibmPlexSans.variable} ${bebasNeue.variable}`}
    >
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
