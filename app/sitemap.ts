import type { MetadataRoute } from "next";
import { services } from "./hizmetler/services-data";
import { SITE_URL } from "./lib/site";
import { projects } from "./portfolyo/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/hizmetler`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/portfolyo`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/hizmetler/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/portfolyo/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    images: project.images.map((image) => `${SITE_URL}${image}`),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
