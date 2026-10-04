import { pageMetadata } from "../../lib/seo";
import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export const metadata = pageMetadata({
  title: "Dekorasyon Hizmetleri",
  description: "İstanbul ve Avcılar'da keşif, malzeme seçimi ve uygulama takibini kapsayan dekorasyon ve mekan yenileme hizmetleri.",
  path: "/hizmetler/dekorasyon",
  image: services[1].image,
});

export default function DekorasyonPage() {
  return <ServiceDetail service={services[1]} />;
}
