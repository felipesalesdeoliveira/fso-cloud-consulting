import type { Metadata } from "next";
import { ServerlessMarketplaceCase } from "@/components/ServerlessMarketplaceCase";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Serverless marketplace with identity and events";
const description = "An in-progress architecture using Cognito, API Gateway, Lambda, DynamoDB, S3, and SQS for identity, catalog, and asynchronous order processing.";
const pageUrl = `${siteConfig.url}/en/projects/serverless-marketplace-identity-events/`;

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`, description,
  alternates: { canonical: pageUrl, languages: { "pt-BR": `${siteConfig.url}/projetos/marketplace-serverless-identidade-eventos/`, en: pageUrl } },
  openGraph: { type: "article", locale: "en_US", url: pageUrl, siteName: siteConfig.name, title, description, images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }] },
};

export default function Page() { return <ServerlessMarketplaceCase locale="en" />; }
