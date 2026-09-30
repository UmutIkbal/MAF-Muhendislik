import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export const metadata: Metadata = {
  title: "İnşaat Hizmetleri",
  description: "İstanbul ve Avcılar'da proje planlama, teknik koordinasyon, kalite kontrol ve anahtar teslim inşaat uygulamaları.",
  alternates: { canonical: "/hizmetler/insaat" },
  openGraph: { title: "İnşaat Hizmetleri | MAF Mühendislik", url: "/hizmetler/insaat", images: [services[0].image] },
};

export default function InsaatPage() {
  return <ServiceDetail service={services[0]} />;
}
