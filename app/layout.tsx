import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Noto_Serif_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
  title: "MAF MÜHENDİSLİK",
  description: "MAF Mühendislik resmi web sitesi",
  icons: {
    icon: "/maf-symbol.webp",
    shortcut: "/maf-symbol.webp",
    apple: "/maf-symbol.webp",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${notoSerifDisplay.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
