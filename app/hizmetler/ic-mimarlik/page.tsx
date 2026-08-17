import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export default function IcMimarlikPage() {
  return <ServiceDetail service={services[2]} />;
}
