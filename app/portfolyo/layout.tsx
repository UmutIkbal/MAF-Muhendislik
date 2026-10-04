import { pageMetadata } from "../lib/seo";
import type { ReactNode } from "react";

export const metadata = pageMetadata({
  title: "Portfolyo",
  description: "MAF Mühendislik'in İstanbul'da tamamladığı inşaat, dekorasyon ve iç mimarlık projelerini inceleyin.",
  path: "/portfolyo",
});

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children;
}
