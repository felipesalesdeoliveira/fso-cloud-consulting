import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Articles, Footer, Process, Projects, Services, Technologies } from "@/components/Sections";
import { siteConfig, siteImage } from "@/lib/site";

const title = "FSO Cloud Consulting | DevOps & Reliability Engineering";
const description = "DevOps and SRE consulting for reliable cloud infrastructure, automation, Kubernetes, observability, and production operations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/en/`, languages: { "pt-BR": `${siteConfig.url}/`, en: `${siteConfig.url}/en/` } },
  openGraph: { type: "website", locale: "en_US", url: `${siteConfig.url}/en/`, siteName: siteConfig.name, title, description, images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }] },
};

export default function EnglishHome() {
  return <><a href="#content" className="skip-link">Skip to main content</a><Header locale="en" /><main id="content" tabIndex={-1} className="overflow-x-hidden bg-[#F8FAFD] pt-24 text-[#101828]"><Hero locale="en" /><Services locale="en" /><Process locale="en" /><About locale="en" /><Projects locale="en" /><Articles locale="en" /><Technologies locale="en" /><Contact locale="en" /></main><Footer locale="en" /></>;
}
