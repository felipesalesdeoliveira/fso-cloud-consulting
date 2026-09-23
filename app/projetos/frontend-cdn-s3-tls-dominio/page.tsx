import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Sections";
import { Header } from "@/components/Header";
import { publicAsset } from "@/lib/paths";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Frontend com CDN, S3, TLS e domínio customizado";
const description =
  "Implementação manual de uma SPA React na AWS com S3 privado, CloudFront, certificado TLS do ACM e domínio gerenciado pelo Route 53.";
const pageUrl = `${siteConfig.url}/projetos/frontend-cdn-s3-tls-dominio/`;

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl },
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

const resources = [
  ["Amazon S3", "Armazena o build da SPA em um bucket privado, com o bloqueio de acesso público ativado."],
  ["Amazon CloudFront", "Distribui o conteúdo pela CDN, redireciona HTTP para HTTPS e utiliza cache otimizado."],
  ["AWS Certificate Manager", "Fornece o certificado TLS para o domínio raiz e o www, emitido obrigatoriamente em us-east-1."],
  ["Amazon Route 53", "Gerencia a zona DNS e os registros Alias que apontam o domínio para a distribuição."],
  ["Origin Access Control", "Autoriza somente o CloudFront a ler os objetos do bucket, mantendo a origem fechada."],
  ["Custom error responses", "Converte respostas 403 e 404 em /index.html com status 200 para preservar o roteamento da SPA."],
];

const execution = [
  "Fork e clone do repositório da Residência, com o projeto original cadastrado como upstream.",
  "Instalação das dependências, execução local e geração do build de produção da SPA React.",
  "Criação do bucket S3 em us-east-1 com Block all public access habilitado e upload do conteúdo de site/dist.",
  "Solicitação e validação DNS do certificado ACM para o domínio raiz e o www, na região us-east-1.",
  "Criação da distribuição CloudFront usando a origem S3, OAC, HTTPS obrigatório, GET/HEAD e CachingOptimized.",
  "Configuração do index.html como objeto raiz e fallback da SPA para erros 403 e 404.",
  "Criação dos registros Alias no Route 53 para o domínio raiz e o www.",
];

const validations = [
  ["HTTPS", "Uma requisição por HTTP é redirecionada para HTTPS com resposta 301."],
  ["Roteamento da SPA", "Um caminho que não corresponde a um arquivo retorna o index.html, sem expor um erro do S3."],
  ["Origem privada", "O acesso direto à URL do bucket é negado; o conteúdo é servido exclusivamente pelo CloudFront."],
];

export default function AwsFrontendProjectPage() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo principal</a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="bg-[#F8FAFD] pt-24 text-[#101828]">
        <section className="relative overflow-hidden border-b border-slate-200 px-6 py-20 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/35 blur-[110px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/35 blur-[110px]" />
          <div className="relative mx-auto max-w-6xl">
            <Link href="/#projetos" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              <span aria-hidden="true">←</span> Voltar para projetos
            </Link>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Projeto concluído</span>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Sprint 01 · Residência</span>
            </div>
            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">{description}</p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              {["React", "Amazon S3", "CloudFront", "ACM", "Route 53", "OAC"].map((technology) => (
                <span key={technology} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Arquitetura</p>
            <h2 className="section-title">Como os recursos se conectam</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">O usuário resolve o domínio no Route 53 e acessa a distribuição CloudFront por HTTPS. A CDN utiliza o certificado do ACM e busca os arquivos no S3 por meio do OAC, sem tornar o bucket público.</p>
            <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-3 shadow-sm md:p-6">
              <Image src={publicAsset("/diagrams/frontend-cdn-s3-tls.svg")} alt="Diagrama da arquitetura com Route 53, CloudFront, ACM, OAC e S3 privado" width={1440} height={760} className="h-auto w-full" priority />
            </div>
            <p className="mt-4 text-sm text-slate-500">O arquivo-fonte editável do desenho também é mantido no repositório em <code>docs/diagrams</code>.</p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Componentes</p>
            <h2 className="section-title">Responsabilidade de cada recurso</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {resources.map(([name, text]) => (
                <article key={name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-lg font-bold text-slate-900">{name}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-label">Implementação</p>
              <h2 className="section-title">Execução manual pelo Console da AWS</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Nesta sprint, todos os recursos foram configurados manualmente para compreender as relações entre origem, CDN, certificado e DNS. A automação com Terraform está prevista a partir da Sprint 05.</p>
              <ol className="mt-9 grid gap-4">
                {execution.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-5 leading-7 text-slate-700"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">{index + 1}</span>{step}</li>
                ))}
              </ol>
            </div>
            <aside className="h-fit rounded-[32px] bg-[#101C3C] p-8 text-white lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Decisões técnicas</p>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em]">Segurança e comportamento de cache</h2>
              <ul className="mt-7 grid gap-5 leading-7 text-slate-300">
                <li>• O endpoint de website do S3 não foi usado, pois não oferece HTTPS para essa arquitetura e contornaria o OAC.</li>
                <li>• O bucket permanece privado; a policy autoriza somente a distribuição CloudFront.</li>
                <li>• Os assets com hash podem permanecer em cache por mais tempo. O index.html exige tratamento cuidadoso porque mantém o mesmo nome entre deploys.</li>
                <li>• Invalidar somente o index.html preserva o cache válido dos assets e evita requisições desnecessárias à origem.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Validação</p>
            <h2 className="section-title">Critérios verificados após o deploy</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {validations.map(([name, text]) => (
                <article key={name} className="rounded-3xl border border-emerald-200 bg-white p-7"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700" aria-hidden="true">✓</span><h3 className="mt-5 text-lg font-bold text-slate-900">{name}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>
              ))}
            </div>
            <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Resultado</p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">SPA publicada com distribuição global, tráfego protegido por TLS, domínio customizado, fallback de rotas e origem inacessível diretamente pela internet. A implementação consolidou o entendimento prático do fluxo DNS → CDN → origem privada.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
