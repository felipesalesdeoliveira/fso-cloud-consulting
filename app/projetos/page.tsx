import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer, Projects } from "@/components/Sections";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Projetos e casos técnicos";
const description = "Todos os projetos da FSO Cloud Consulting, organizados do mais recente para o mais antigo.";
const pageUrl = `${siteConfig.url}/projetos/`;

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl, languages: { "pt-BR": pageUrl, en: `${siteConfig.url}/en/projects/` } },
  openGraph: { type: "website", locale: siteConfig.locale, url: pageUrl, siteName: siteConfig.name, title, description, images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }] },
};

export default function ProjectsPage() {
  return <>
    <a href="#conteudo" className="skip-link">Ir para o conteúdo principal</a>
    <Header />
    <main id="conteudo" tabIndex={-1} className="bg-[#F8FAFD] pt-24 text-[#101828]">
      <section className="border-b border-slate-200 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Link href="/#projetos" className="text-sm font-semibold text-blue-600 hover:text-blue-700">← Voltar para a página inicial</Link>
          <p className="section-label mt-10">Portfólio técnico</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl">Todos os projetos e casos técnicos</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">Implementações, decisões de arquitetura e resultados apresentados do trabalho mais recente para o mais antigo.</p>
        </div>
      </section>
      <Projects showIntro={false} />
    </main>
    <Footer />
  </>;
}
