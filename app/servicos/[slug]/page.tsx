import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { ArrowIcon } from "@/components/icons/CustomIcons";
import { services } from "@/data/content";
import { siteConfig, siteImage } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const url = `${siteConfig.url}/servicos/${service.slug}/`;

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: service.title,
      description: service.description,
      images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="bg-[#F8FAFD] pt-24 text-[#101828]">
        <section className="relative overflow-hidden border-b border-slate-200 px-6 py-20 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-[110px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/30 blur-[110px]" />
          <div className="relative mx-auto max-w-5xl">
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              <span aria-hidden="true">←</span>
              Voltar para serviços
            </Link>
            <p className="section-label mt-10">Serviço especializado</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">
              {service.description}
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-label">Visão geral</p>
              <h2 className="section-title">Como este serviço ajuda sua operação</h2>
              <p className="mt-7 text-lg leading-8 text-slate-600">{service.introduction}</p>
            </div>
            <aside className="rounded-3xl border border-blue-100 bg-blue-50/70 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Indicado para
              </p>
              <p className="mt-4 leading-7 text-slate-700">{service.idealFor}</p>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label">Entregas possíveis</p>
              <h2 className="section-title">O que pode fazer parte do trabalho</h2>
              <ul className="mt-8 grid gap-4">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 leading-7 text-slate-700">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label">Resultados esperados</p>
              <h2 className="section-title">Benefícios para o ambiente</h2>
              <ul className="mt-8 grid gap-4">
                {service.benefits.map((benefit, index) => (
                  <li key={benefit} className="flex gap-4 rounded-2xl border border-white bg-white/80 p-5 leading-7 text-slate-700 shadow-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-600">
                      0{index + 1}
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[36px] bg-[#101C3C] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Próximo passo
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-[-0.035em] md:text-5xl">
              Posso ajudar a definir a solução adequada para o seu cenário.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              O escopo é adaptado ao ambiente, à maturidade técnica e às prioridades da empresa.
            </p>
            <Link
              href="/#contato"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Falar comigo sobre este serviço
              <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
