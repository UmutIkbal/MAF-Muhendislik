import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export const metadata: Metadata = {
  title: "İç Mimarlık Hizmetleri",
  description: "İstanbul ve Avcılar'da konut ve ticari mekanlar için işlevsel, estetik iç mimarlık tasarım ve uygulama hizmetleri.",
  alternates: { canonical: "/hizmetler/ic-mimarlik" },
  openGraph: { title: "İç Mimarlık Hizmetleri | MAF Mühendislik", url: "/hizmetler/ic-mimarlik", images: [services[2].image] },
};

export default function IcMimarlikPage() {
  return <ServiceDetail service={services[2]} />;
}
