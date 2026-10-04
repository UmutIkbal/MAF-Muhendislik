import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { BUSINESS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MAF Mühendislik | İnşaat, Dekorasyon ve İç Mimarlık",
    template: "%s | MAF Mühendislik",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "İstanbul inşaat",
    "Avcılar inşaat",
    "İstanbul dekorasyon",
    "İstanbul iç mimarlık",
    "anahtar teslim tadilat",
    "MAF Mühendislik",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: "MAF Mühendislik | İnşaat, Dekorasyon ve İç Mimarlık",
    description: SITE_DESCRIPTION,
    images: [{ url: "/stokfotro.webp", alt: "MAF Mühendislik" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAF Mühendislik | İnşaat, Dekorasyon ve İç Mimarlık",
    description: SITE_DESCRIPTION,
    images: ["/stokfotro.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48 96x96" },
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/maf-logo.png`,
    image: `${SITE_URL}/stokfotro.webp`,
    description: SITE_DESCRIPTION,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: ["İstanbul", "Avcılar"],
    priceRange: "₺₺",
  };

  return (
    <html lang="tr">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
