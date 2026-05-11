import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, Bebas_Neue } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import StructuredData from "@/components/seo/StructuredData";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const keywords = messages.MetadataKeywords as string[];

  const htmlLang = locale === "no" ? "nb-NO" : "en-US";
  const ogLocale = locale === "no" ? "nb_NO" : "en_US";
  const altLocale = locale === "no" ? "en_US" : "nb_NO";

  return {
    metadataBase: new URL("https://cleanmarin.no"),
    title: t("title"),
    description: t("description"),
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "nb-NO": "/no",
        "en-US": "/en",
      },
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
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      locale: ogLocale,
      alternateLocale: altLocale,
      url: `https://cleanmarin.no/${locale}`,
      siteName: t("ogSiteName"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
    other: {
      "html-lang": htmlLang,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale as Locale);

  const htmlLang = locale === "no" ? "nb" : "en";

  return (
    <html
      lang={htmlLang}
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${ibmPlexSans.variable} ${bebasNeue.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <StructuredData locale={locale as Locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
