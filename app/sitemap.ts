import type { MetadataRoute } from "next";
import { services } from "@/data/content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/servicos/${service.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/projetos/frontend-cdn-s3-tls-dominio/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages,
    ...projectPages,
  ];
}
