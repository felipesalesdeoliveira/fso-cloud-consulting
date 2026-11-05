import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer, Projects } from "@/components/Sections";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Projects and technical case studies";
const description = "All FSO Cloud Consulting projects, ordered from newest to oldest.";
const pageUrl = `${siteConfig.url}/en/projects/`;

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl, languages: { "pt-BR": `${siteConfig.url}/projetos/`, en: pageUrl } },
  openGraph: { type: "website", locale: "en_US", url: pageUrl, siteName: siteConfig.name, title, description, images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }] },
};

export default function ProjectsPage() {
  return <>
    <a href="#content" className="skip-link">Skip to main content</a>
    <Header locale="en" />
    <main id="content" tabIndex={-1} className="bg-[#F8FAFD] pt-24 text-[#101828]">
      <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Link href="/en/#projects" className="text-sm font-semibold text-blue-600 hover:text-blue-700">← Back to the home page</Link>
          <p className="section-label mt-10">Technical portfolio</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl">All projects and technical case studies</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">Implementations, architecture decisions, and outcomes presented from the newest work to the oldest.</p>
        </div>
      </section>
      <Projects locale="en" showIntro={false} />
    </main>
    <Footer locale="en" />
  </>;
}
