import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export default function DekorasyonPage() {
  return <ServiceDetail service={services[1]} />;
}
