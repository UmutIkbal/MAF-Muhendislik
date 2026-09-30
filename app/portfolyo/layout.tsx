import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolyo",
  description:
    "MAF Mühendislik'in İstanbul'da tamamladığı inşaat, dekorasyon ve iç mimarlık projelerini inceleyin.",
  alternates: { canonical: "/portfolyo" },
  openGraph: {
    title: "Portfolyo | MAF Mühendislik",
    description: "İnşaat, dekorasyon ve iç mimarlık projelerimiz.",
    url: "/portfolyo",
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children;
}
