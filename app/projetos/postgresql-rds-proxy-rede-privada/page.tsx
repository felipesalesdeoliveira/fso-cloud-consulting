import type { Metadata } from "next";
import { PrivatePostgresCase } from "@/components/PrivatePostgresCase";
import { siteConfig } from "@/lib/site";

const title = "PostgreSQL com RDS Proxy e rede privada";
const description =
  "Estudo de caso de um marketplace serverless validado com PostgreSQL privado, RDS Proxy, VPC Endpoints e seleção explícita entre RDS e DynamoDB.";
const pageUrl = `${siteConfig.url}/projetos/postgresql-rds-proxy-rede-privada/`;
const imageUrl = `${siteConfig.url}/projects/sprint-03-postgresql-rds-proxy.png`;

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: {
    canonical: pageUrl,
    languages: {
      "pt-BR": pageUrl,
      en: `${siteConfig.url}/en/projects/private-postgresql-rds-proxy-vpc/`,
    },
  },
  openGraph: {
    type: "article",
    locale: siteConfig.locale,
    url: pageUrl,
    siteName: siteConfig.name,
    title,
    description,
    images: [{ url: imageUrl, width: 2055, height: 765, alt: title }],
  },
};

export default function Page() {
  return <PrivatePostgresCase locale="pt" />;
}
