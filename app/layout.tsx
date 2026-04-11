import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, Bebas_Neue } from "next/font/google";
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
  title: "Clean Marine AS — Rørehabilitering Offshore",
  description:
    "Spesialister innen kjemisk rehabilitering av rørledninger offshore. Vi gjenoppretter igjengrodde rør til original tilstand på skip og rigger.",
  keywords: [
    "rørehabilitering",
    "offshore",
    "kjemisk rensing",
    "rørledning",
    "biofilm",
    "kalkavleiring",
    "korrosjon",
    "rigg",
    "skip",
    "Clean Marine",
  ],
  openGraph: {
    title: "Clean Marine AS — Rørehabilitering Offshore",
    description:
      "Kjemisk rehabilitering av rørledninger offshore. Faglært personell med erfaring fra rigg og skip.",
    type: "website",
    locale: "nb_NO",
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
      <body>{children}</body>
    </html>
  );
}
