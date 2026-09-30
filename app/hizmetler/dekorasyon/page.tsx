import type { Metadata } from "next";
import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export const metadata: Metadata = {
  title: "Dekorasyon Hizmetleri",
  description: "İstanbul ve Avcılar'da keşif, malzeme seçimi ve uygulama takibini kapsayan dekorasyon ve mekan yenileme hizmetleri.",
  alternates: { canonical: "/hizmetler/dekorasyon" },
  openGraph: { title: "Dekorasyon Hizmetleri | MAF Mühendislik", url: "/hizmetler/dekorasyon", images: [services[1].image] },
};

export default function DekorasyonPage() {
  return <ServiceDetail service={services[1]} />;
}
