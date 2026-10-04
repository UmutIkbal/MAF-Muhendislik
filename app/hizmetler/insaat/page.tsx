import { pageMetadata } from "../../lib/seo";
import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export const metadata = pageMetadata({
  title: "İnşaat Hizmetleri",
  description: "İstanbul ve Avcılar'da proje planlama, teknik koordinasyon, kalite kontrol ve anahtar teslim inşaat uygulamaları.",
  path: "/hizmetler/insaat",
  image: services[0].image,
});

export default function InsaatPage() {
  return <ServiceDetail service={services[0]} />;
}
