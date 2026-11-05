import type { Metadata } from "next";
import { PrivatePostgresCase } from "@/components/PrivatePostgresCase";
import { siteConfig, siteImage } from "@/lib/site";

const title = "PostgreSQL com RDS Proxy e rede privada";
const description =
  "Estudo de caso de um marketplace serverless validado com PostgreSQL privado, RDS Proxy, VPC Endpoints e seleção explícita entre RDS e DynamoDB.";
const pageUrl = `${siteConfig.url}/projetos/postgresql-rds-proxy-rede-privada/`;

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
    images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }],
  },
};

export default function Page() {
  return <PrivatePostgresCase locale="pt" />;
}
