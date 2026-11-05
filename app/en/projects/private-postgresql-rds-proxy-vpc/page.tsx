import type { Metadata } from "next";
import { PrivatePostgresCase } from "@/components/PrivatePostgresCase";
import { siteConfig } from "@/lib/site";

const title = "Private PostgreSQL with RDS Proxy and Amazon VPC";
const description =
  "Case study of a serverless marketplace validated with private PostgreSQL, RDS Proxy, VPC Endpoints, and an explicit choice between RDS and DynamoDB.";
const pageUrl = `${siteConfig.url}/en/projects/private-postgresql-rds-proxy-vpc/`;
const imageUrl = `${siteConfig.url}/projects/sprint-03-postgresql-rds-proxy.png`;

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
    images: [{ url: imageUrl, width: 2055, height: 765, alt: title }],
  },
};

export default function Page() {
  return <PrivatePostgresCase locale="en" />;
}
