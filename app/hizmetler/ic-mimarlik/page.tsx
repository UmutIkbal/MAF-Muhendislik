import { pageMetadata } from "../../lib/seo";
import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export const metadata = pageMetadata({
  title: "İç Mimarlık Hizmetleri",
  description: "İstanbul ve Avcılar'da konut ve ticari mekanlar için işlevsel, estetik iç mimarlık tasarım ve uygulama hizmetleri.",
  path: "/hizmetler/ic-mimarlik",
  image: services[2].image,
});

export default function IcMimarlikPage() {
  return <ServiceDetail service={services[2]} />;
}
