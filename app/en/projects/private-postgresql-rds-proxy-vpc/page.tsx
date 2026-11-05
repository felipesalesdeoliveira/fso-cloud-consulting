import type { Metadata } from "next";
import { PrivatePostgresCase } from "@/components/PrivatePostgresCase";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Private PostgreSQL with RDS Proxy and Amazon VPC";
const description =
  "Case study of a serverless marketplace validated with private PostgreSQL, RDS Proxy, VPC Endpoints, and an explicit choice between RDS and DynamoDB.";
const pageUrl = `${siteConfig.url}/en/projects/private-postgresql-rds-proxy-vpc/`;

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: {
    canonical: pageUrl,
    languages: {
      "pt-BR": `${siteConfig.url}/projetos/postgresql-rds-proxy-rede-privada/`,
      en: pageUrl,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: pageUrl,
    siteName: siteConfig.name,
    title,
    description,
    images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }],
  },
};

export default function Page() {
  return <PrivatePostgresCase locale="en" />;
}
