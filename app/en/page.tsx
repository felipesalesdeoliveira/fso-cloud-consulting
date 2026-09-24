import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { EnglishSections } from "@/components/EnglishSections";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Sections";
import { siteConfig, siteImage } from "@/lib/site";

const title = "FSO Cloud Consulting | DevOps & Reliability Engineering";
const description = "DevOps, SRE, Cloud, Observability, Kubernetes and reliability consulting for production environments.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/en/`, languages: { "pt-BR": `${siteConfig.url}/`, en: `${siteConfig.url}/en/` } },
  openGraph: { type: "website", locale: "en_US", url: `${siteConfig.url}/en/`, siteName: siteConfig.name, title, description, images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }] },
};

export default function EnglishHome() {
  return <><a href="#content" className="skip-link">Skip to main content</a><Header locale="en" /><main id="content" tabIndex={-1} className="overflow-x-hidden bg-[#F8FAFD] pt-24 text-[#101828]"><Hero locale="en" /><EnglishSections /><Contact locale="en" /></main><Footer locale="en" /></>;
}
