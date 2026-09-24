import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons/CustomIcons";
import { articles, highlights, processSteps, projects, services } from "@/data/content";
import { technologyCategories, type Technology } from "@/data/technologies";
import { publicAsset } from "@/lib/paths";

function TechnologyItem({ technology }: { technology: Technology }) {
  const Icon = technology.icon;

  return (
    <div
      className="technology-item group flex min-h-[112px] flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white/85 px-3 py-4 text-center shadow-[0_6px_18px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:bg-white hover:shadow-[0_16px_32px_rgba(37,99,235,0.10)]"
      style={{ "--technology-color": technology.color } as CSSProperties}
    >
      <div className="technology-icon-container flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition duration-300 group-hover:scale-110 group-hover:bg-white">
        <Icon className="technology-icon h-6 w-6 text-slate-500 transition duration-300" />
      </div>
      <span className="mt-3 text-[13px] font-semibold leading-4 text-slate-600 transition duration-300 group-hover:text-slate-950">
        {technology.name}
      </span>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 border-y border-slate-200/80 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-label">Serviços</p>
          <h2 className="section-title">Soluções para ambientes mais confiáveis e eficientes</h2>
          <p className="section-description">
            Atuação técnica direcionada aos principais desafios de infraestrutura, confiabilidade, automação e operação em nuvem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}/`}
              aria-label={`Saiba mais sobre ${service.title}`}
              className="group rounded-3xl"
            >
              <article className="light-card relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7">
                <div className="absolute -right-12 -top-14 h-36 w-36 rounded-full bg-blue-50 transition duration-500 group-hover:scale-125 group-hover:bg-blue-100/70" />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    0{index + 1}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                </div>
                <h3 className="relative mt-8 text-lg font-bold uppercase leading-7 tracking-[0.015em] text-slate-900">{service.title}</h3>
                <p className="relative mt-4 leading-7 text-slate-600">{service.description}</p>
                <div className="relative mt-7 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-100 transition duration-300 group-hover:translate-x-1 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                  Saiba mais
                  <ArrowIcon />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="processo" className="relative scroll-mt-24 overflow-hidden bg-[#EEF4FF] px-6 py-24">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-violet-200/35 blur-[110px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-200/30 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-label">Como funciona</p>
          <h2 className="section-title">Um processo claro do diagnóstico à evolução</h2>
          <p className="section-description">
            Cada projeto começa com a compreensão do cenário atual e evolui com prioridades claras, acompanhamento técnico e entregas alinhadas às necessidades da empresa.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-[2px] bg-gradient-to-r from-blue-200 via-blue-500/50 to-violet-200 lg:block" />
          {processSteps.map((item, index) => (
            <article key={item.step} className="light-card relative z-10 rounded-3xl border border-white/90 bg-white/80 p-7 backdrop-blur-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)]">
                {item.step}
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">Etapa {index + 1}</p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 border-y border-slate-200/80 bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="section-label">Sobre</p>
          <h2 className="section-title">DevOps e SRE aplicados a ambientes de produção.</h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Sou DevOps Engineer/SRE com mais de 3 anos de experiência em infraestrutura cloud, automação, Kubernetes, CI/CD e observabilidade, atuando na construção, operação e evolução de ambientes de produção.
            </p>
            <p>
              Tenho experiência prática com AWS, Terraform, Docker, Kubernetes, Helm, GitHub Actions, Jenkins e Argo CD, além da implementação de soluções de observabilidade com Prometheus, Grafana, Loki, Elastic Stack e OpenTelemetry. Minha atuação também envolve troubleshooting, investigação de incidentes e colaboração com equipes de desenvolvimento e infraestrutura.
            </p>
            <p>
              Minha formação anterior em Engenharia Civil contribuiu para uma visão estruturada de planejamento, riscos, custos e resolução de problemas. À frente da FSO Cloud Consulting, aplico essa experiência para desenvolver soluções confiáveis, automatizadas e alinhadas às necessidades de cada ambiente.
            </p>
          </div>
          <a
            href={publicAsset("/felipe-sales-devops-engineer.pdf")}
            download="felipe-sales-devops-engineer.pdf"
            className="mt-9 inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg"
          >
            Baixar currículo
            <ArrowIcon />
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-12 rounded-full bg-blue-200/40 blur-[75px]" />
          <div className="relative grid gap-4">
            {highlights.map((item, index) => (
              <div key={item} className="light-card group flex items-center gap-5 rounded-3xl border border-slate-200 bg-[#F8FAFD] p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white font-bold text-blue-600 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white">
                  0{index + 1}
                </span>
                <p className="font-semibold leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectMiniArchitecture() {
  const nodes = [
    { icon: "route-53.svg", label: "Route 53" },
    { icon: "cloudfront.svg", label: "CloudFront" },
    { icon: "s3.svg", label: "S3" },
  ];

  return (
    <div className="absolute inset-x-5 bottom-5 top-[4.25rem] flex items-center justify-center" aria-hidden="true">
      <div className="relative flex items-center gap-2 rounded-2xl border border-white/80 bg-white/65 px-4 py-3 shadow-[0_12px_35px_rgba(37,99,235,0.10)] backdrop-blur-sm">
        {nodes.map((node, nodeIndex) => (
          <div key={node.label} className="contents">
            {nodeIndex > 0 && <span className="text-lg font-bold text-blue-400/70">→</span>}
            <div className="flex w-16 flex-col items-center gap-1.5">
              <Image src={publicAsset(`/aws-icons/${node.icon}`)} alt="" width={40} height={40} className="h-10 w-10 rounded-lg shadow-sm transition duration-500 group-hover:-translate-y-1" />
              <span className="text-[10px] font-bold text-slate-600">{node.label}</span>
            </div>
          </div>
        ))}
        <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-rose-100 bg-white px-2 py-1 shadow-sm">
          <Image src={publicAsset("/aws-icons/acm.svg")} alt="" width={20} height={20} className="h-5 w-5 rounded" />
          <span className="text-[9px] font-bold text-rose-700">TLS</span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 bg-[#F3F6FB] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-label">Projetos e casos técnicos</p>
          <h2 className="section-title">Experiência aplicada a desafios reais</h2>
          <p className="section-description">
            Casos técnicos que demonstram uma abordagem prática para confiabilidade, observabilidade, automação e infraestrutura.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="light-card group overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-violet-100">
                <div
                  className="absolute -right-8 -top-12 h-44 w-44 border border-blue-300/50 bg-white/45 transition duration-700 group-hover:rotate-12 group-hover:scale-110"
                  style={{ clipPath: "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)" }}
                />
                <div
                  className="absolute bottom-[-35px] left-[-10px] h-36 w-36 border border-violet-300/40 bg-violet-100/30 transition duration-700 group-hover:-rotate-12 group-hover:scale-110"
                  style={{ clipPath: "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)" }}
                />
                <span className="absolute left-7 top-7 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-xs font-bold text-blue-600 shadow-sm backdrop-blur">
                  {project.category}
                </span>
                {project.slug && <ProjectMiniArchitecture />}
                {!project.slug && <span className="absolute bottom-6 right-7 text-5xl font-bold text-blue-950/[0.08]">0{index + 1}</span>}
              </div>
              <div className="flex h-[calc(100%-12rem)] flex-col p-7">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
                {project.slug ? (
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:gap-3 hover:bg-blue-700"
                  >
                    Ver projeto
                    <ArrowIcon />
                  </Link>
                ) : (
                  <span className="mt-7 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                    {project.status}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Articles() {
  return (
    <section id="artigos" className="scroll-mt-24 border-y border-slate-200/80 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="section-label">Artigos e conhecimento</p>
            <h2 className="section-title">Conteúdo técnico para decisões mais conscientes</h2>
            <p className="section-description">
              Reflexões, guias e experiências práticas sobre DevOps, SRE, Cloud, Observabilidade e os desafios reais da operação de ambientes modernos.
            </p>
          </div>
          <a href="#artigos" className="inline-flex w-fit items-center gap-3 text-sm font-bold text-blue-600 transition hover:gap-4 hover:text-blue-700">
            Ver todos os artigos
            <ArrowIcon />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.title} className="light-card group relative flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 transition duration-700 group-hover:scale-125" />
              <div className="relative flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">{article.category}</span>
                <span className="text-xs font-bold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="relative mt-9 text-2xl font-bold leading-8 text-slate-900 transition group-hover:text-blue-700">{article.title}</h3>
              <p className="relative mt-5 leading-7 text-slate-600">{article.description}</p>
              <div className="relative mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                <span className="text-sm text-slate-500">{article.readingTime}</span>
                <span className="flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3">
                  {article.status}
                  <ArrowIcon />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Technologies() {
  return (
    <section id="tecnologias" className="relative scroll-mt-24 overflow-hidden bg-[#EDF4FF] px-6 py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-200/35 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/35 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-label">Tecnologias e competências</p>
            <h2 className="section-title">Ferramentas aplicadas de acordo com o desafio</h2>
            <p className="section-description">
              Cada tecnologia é escolhida conforme o contexto, os objetivos, a arquitetura e o nível de maturidade de cada ambiente.
            </p>
          </div>
          <div className="rounded-3xl border border-white/90 bg-white/60 p-6 shadow-[0_18px_50px_rgba(37,99,235,0.08)] backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Abordagem</p>
            <p className="mt-3 leading-7 text-slate-600">
              A ferramenta não é o objetivo. Ela é aplicada para aumentar confiabilidade, eficiência operacional e capacidade de evolução.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {technologyCategories.map((category) => (
            <article
              key={category.title}
              className={`technology-category light-card group relative overflow-hidden rounded-[28px] border border-white/90 bg-white/78 p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl ${category.featured ? "lg:col-span-2" : "lg:col-span-1"}`}
            >
              <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-gradient-to-br from-blue-100/80 to-violet-100/70 opacity-60 transition duration-700 group-hover:scale-125" />
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-1 rounded-full bg-gradient-to-b from-blue-600 via-cyan-500 to-violet-500" />
                      <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-950">{category.title}</h3>
                    </div>
                    <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500">{category.description}</p>
                  </div>
                  {category.featured && (
                    <span className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                      Foco principal
                    </span>
                  )}
                </div>
                <div className={`mt-7 grid gap-3 ${category.featured ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}>
                  {category.technologies.map((technology) => (
                    <TechnologyItem key={`${category.title}-${technology.name}`} technology={technology} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-600 to-violet-600 p-7 text-white shadow-[0_20px_55px_rgba(37,99,235,0.18)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Mais do que ferramentas</p>
            <p className="mt-2 max-w-3xl text-lg font-semibold leading-7">
              Arquitetura, automação e observabilidade conectadas para sustentar ambientes mais confiáveis.
            </p>
          </div>
          <a href="#contato" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50">
            Conversar sobre o ambiente
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src={publicAsset("/logo-fso-cloud-consulting.png")}
            alt="FSO Cloud Consulting"
            width={249}
            height={90}
            className="h-14 w-auto"
          />
          <p className="mt-1">DevOps & Reliability Engineering</p>
        </div>
        <p>© 2026 FSO Cloud Consulting. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
