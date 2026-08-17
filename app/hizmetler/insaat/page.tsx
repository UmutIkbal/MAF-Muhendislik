import ServiceDetail from "../ServiceDetail";
import { services } from "../services-data";

export default function InsaatPage() {
  return <ServiceDetail service={services[0]} />;
}
