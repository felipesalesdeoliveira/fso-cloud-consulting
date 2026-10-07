import type { Metadata } from "next";
import { ServerlessMarketplaceCase } from "@/components/ServerlessMarketplaceCase";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Marketplace serverless com identidade e eventos";
const description = "Arquitetura em implementação com Cognito, API Gateway, Lambda, DynamoDB, S3 e SQS para identidade, catálogo e processamento assíncrono de pedidos.";
const pageUrl = `${siteConfig.url}/projetos/marketplace-serverless-identidade-eventos/`;

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`, description,
  alternates: { canonical: pageUrl, languages: { "pt-BR": pageUrl, en: `${siteConfig.url}/en/projects/serverless-marketplace-identity-events/` } },
  openGraph: { type: "article", locale: siteConfig.locale, url: pageUrl, siteName: siteConfig.name, title, description, images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }] },
};

export default function Page() { return <ServerlessMarketplaceCase locale="pt" />; }
