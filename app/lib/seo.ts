import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

export function pageMetadata({ title, description, path, image = "/stokfotro.webp" }: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const shareTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName: SITE_NAME,
      title: shareTitle,
      description,
      url: path,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}

export function breadcrumbData(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).href,
    })),
  };
}
