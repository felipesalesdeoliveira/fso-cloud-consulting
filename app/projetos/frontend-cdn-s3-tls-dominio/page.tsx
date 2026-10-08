import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Sections";
import { Header } from "@/components/Header";
import { publicAsset } from "@/lib/paths";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Frontend com CDN, S3, TLS e domínio customizado";
const description =
  "Arquitetura segura e escalável para publicação de uma SPA React, com origem privada, distribuição global, HTTPS e domínio customizado na AWS.";
const pageUrl = `${siteConfig.url}/projetos/frontend-cdn-s3-tls-dominio/`;
const liveProjectUrl = "https://residencia.fsocloudconsulting.com";

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: { canonical: pageUrl, languages: { "pt-BR": pageUrl, en: `${siteConfig.url}/en/projects/frontend-cdn-s3-tls-custom-domain/` } },
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

const challenges = [
  "Publicar uma SPA com baixa latência e alcance global, sem manter servidores de aplicação.",
  "Proteger os arquivos da origem e impedir que o bucket fosse acessado diretamente pela internet.",
  "Disponibilizar domínio próprio, HTTPS obrigatório e suporte às rotas internas da aplicação.",
];

const execution = [
  "Preparação da aplicação React e geração dos artefatos otimizados para produção.",
  "Criação do bucket S3 com Block all public access habilitado e publicação do build da SPA.",
  "Solicitação e validação DNS do certificado ACM para residencia.fsocloudconsulting.com, na região us-east-1.",
  "Criação da distribuição CloudFront usando a origem S3, OAC, HTTPS obrigatório, GET/HEAD e CachingOptimized.",
  "Configuração do index.html como objeto raiz e fallback da SPA para erros 403 e 404.",
  "Criação do registro Alias A no Route 53, apontando o subdomínio da aplicação para a distribuição.",
];

const decisions = [
  ["Origem privada", "O endpoint público de website do S3 foi descartado. O CloudFront acessa o bucket privado por OAC e uma policy restritiva."],
  ["DNS direto para a CDN", "Um registro Alias A no Route 53 resolve residencia.fsocloudconsulting.com para a distribuição CloudFront."],
  ["TLS gerenciado", "O certificado do hostname da aplicação foi emitido pelo ACM em us-east-1, região exigida pelo CloudFront."],
  ["Cache distribuído", "A política gerenciada CachingOptimized reduz acessos à origem. A atualização do index.html exige invalidação ou uma política de TTL específica."],
  ["Compatibilidade com SPA", "Respostas 403 e 404 retornam o index.html com status 200, preservando o roteamento do lado do cliente."],
  ["HTTPS obrigatório", "Toda requisição HTTP é redirecionada para HTTPS antes da entrega do conteúdo."],
];

const security = [
  "Bloqueio integral de acesso público no bucket S3.",
  "Bucket policy limitada à distribuição CloudFront por OAC.",
  "Criptografia em trânsito com TLS e certificado gerenciado pelo ACM.",
  "Exposição pública concentrada no CloudFront, sem acesso direto à origem.",
];

const validations = [
  ["HTTPS", "Uma requisição por HTTP é redirecionada para HTTPS com resposta 301."],
  ["Roteamento da SPA", "Um caminho que não corresponde a um arquivo retorna o index.html, sem expor um erro do S3."],
  ["Origem privada", "O acesso direto à URL do bucket é negado; o conteúdo é servido exclusivamente pelo CloudFront."],
  ["Cache na borda", "Uma segunda consulta ao conteúdo retornou Hit from cloudfront em uma edge location de São Paulo."],
];

const results = [
  "Distribuição global do frontend por meio da rede de borda do CloudFront.",
  "Origem privada e protegida contra acesso público direto.",
  "Comunicação HTTPS em residencia.fsocloudconsulting.com com TLS 1.2 ou superior.",
  "Rotas da SPA funcionando mesmo em acessos diretos e atualizações de página.",
  "Arquitetura sem servidores, com menor esforço operacional para hospedar o frontend.",
];

const environment = [
  ["Aplicação", "residencia.fsocloudconsulting.com"],
  ["Origem", "Bucket S3 privado em us-east-1"],
  ["Distribuição", "CloudFront implantado e habilitado"],
  ["Acesso à origem", "OAC com assinatura SigV4"],
  ["Certificado", "ACM emitido em us-east-1"],
  ["Cache", "Managed-CachingOptimized"],
];

const fundamentals = [
  ["DNS não transporta o conteúdo", "O Route 53 resolve o hostname. Depois disso, o navegador estabelece a conexão HTTPS diretamente com a rede do CloudFront."],
  ["Edge location não é Região", "A borda termina TLS, consulta o cache e busca a origem quando necessário. O bucket continua provisionado em uma Região AWS."],
  ["Cache hit e cache miss", "Em um hit, a borda responde sem consultar o S3. Em um miss, busca o objeto na origem e pode armazenar uma cópia."],
  ["Uma única porta pública", "O bucket permanece privado para impedir que domínio, TLS, cache e controles da distribuição sejam contornados."],
  ["OAC autentica a CDN", "O CloudFront assina a requisição com SigV4, e a bucket policy limita GetObject ao ARN da distribuição autorizada."],
  ["Deploy inclui o cache", "Enviar arquivos ao S3 não basta: a versão correta precisa estar sendo entregue pela CDN, especialmente o index.html da SPA."],
];

const evidence = [
  ["Redirecionamento", "HTTP 301 para HTTPS"],
  ["Página principal", "HTTPS 200"],
  ["Fallback da SPA", "Rota inexistente retorna index.html com status 200"],
  ["Proteção da origem", "Acesso direto ao S3 retorna 403 AccessDenied"],
  ["Cache", "X-Cache: Hit from cloudfront"],
  ["Segurança do bucket", "Block Public Access ativo, ACLs desabilitadas e policy não pública"],
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
              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Cloud &amp; CDN</span>
            </div>
            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={liveProjectUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-700">
                Acessar aplicação publicada ↗
              </a>
              <a href="#evidencias" className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
                Ver evidências técnicas
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              {["React", "Amazon S3", "CloudFront", "ACM", "Route 53", "OAC"].map((technology) => (
                <span key={technology} className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#F8FAFD] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Ambiente implementado</p>
            <h2 className="section-title">Configuração real validada na AWS</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Os dados abaixo representam o ambiente implantado e foram conferidos por consultas de leitura e testes HTTP após o deploy.</p>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {environment.map(([name, value]) => (
                <div key={name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">{name}</dt>
                  <dd className="mt-3 break-words font-semibold leading-7 text-slate-800">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-label">Visão geral</p>
              <h2 className="section-title">Entrega segura e global de uma aplicação frontend</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">A solução disponibiliza uma aplicação React sem servidores web dedicados. Os arquivos estáticos permanecem em uma origem privada e são entregues pelo CloudFront com cache distribuído, domínio próprio e criptografia TLS.</p>
            </div>
            <div>
              <p className="section-label">Desafio</p>
              <h2 className="section-title">Requisitos que orientaram a solução</h2>
              <ul className="mt-7 grid gap-4">
                {challenges.map((challenge, index) => (
                  <li key={challenge} className="flex gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFD] p-5 leading-7 text-slate-700"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">0{index + 1}</span>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Arquitetura</p>
            <h2 className="section-title">Como os recursos se conectam</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">O Route 53 resolve o hostname, mas não transporta o conteúdo. Depois da resolução DNS, o navegador acessa a rede do CloudFront por HTTPS. A CDN utiliza o certificado do ACM e busca os arquivos no S3 por meio do OAC, sem tornar o bucket público.</p>
            <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-300 bg-slate-50 shadow-sm">
              <div className="bg-[#232f3e] px-6 py-4 text-lg font-bold text-white">AWS Cloud</div>
              <div className="p-5 md:p-10">
                <div className="grid items-center gap-5 lg:grid-cols-[0.75fr_auto_1fr_auto_1fr_auto_1fr]">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-24 w-20" aria-hidden="true">
                      <span className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full border-[5px] border-slate-600 bg-white" />
                      <span className="absolute bottom-0 left-1/2 h-14 w-20 -translate-x-1/2 rounded-t-full border-[5px] border-b-0 border-slate-600 bg-white" />
                    </div>
                    <p className="mt-3 font-bold text-slate-900">Usuário</p>
                    <p className="text-sm text-slate-500">Navegador</p>
                  </div>
                  <div className="text-center text-sm font-bold text-slate-500"><span className="block lg:hidden">↓</span><span className="hidden lg:block">1. DNS →</span></div>
                  <ArchitectureNode icon="route-53.svg" name="Amazon Route 53" detail="DNS público · Alias" />
                  <div className="text-center text-sm font-bold text-violet-600"><span className="block lg:hidden">↓</span><span className="hidden lg:block">2. HTTPS →</span></div>
                  <div className="relative">
                    <ArchitectureNode icon="cloudfront.svg" name="Amazon CloudFront" detail="CDN global · HTTPS" />
                    <div className="mx-auto mt-4 w-fit rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-center text-xs font-bold text-rose-700">ACM · TLS · us-east-1</div>
                  </div>
                  <div className="text-center text-sm font-bold text-slate-500"><span className="block lg:hidden">↓</span><span className="hidden lg:block">3. OAC →</span></div>
                  <div className="rounded-3xl border-2 border-rose-300 bg-rose-50/60 p-3">
                    <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-rose-700">Bucket privado</p>
                    <ArchitectureNode icon="s3.svg" name="Amazon S3" detail="index.html + assets" />
                  </div>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5"><p className="font-bold text-violet-800">Cache HIT</p><p className="mt-2 text-sm leading-6 text-slate-600">O CloudFront responde diretamente da edge, sem consultar o S3.</p></div>
                  <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5"><p className="font-bold text-orange-800">Fallback da SPA</p><p className="mt-2 text-sm leading-6 text-slate-600">Erros 403 e 404 retornam /index.html com status 200.</p></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">O diagrama representa o caminho da requisição, as fronteiras de acesso e o comportamento de cache da solução.</p>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Fluxo animado</p>
            <h2 className="section-title">A arquitetura completa em movimento</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">As setas percorrem a resolução DNS, a conexão HTTPS e a busca dos arquivos no bucket privado, deixando visível a ordem em que cada serviço participa da entrega da SPA.</p>
            <figure className="mt-10 overflow-hidden rounded-[32px] border border-slate-300 bg-white shadow-sm">
              <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-[#232f3e] px-6 py-4 text-lg font-bold text-white">
                <span>Sprint 01 · Frontend</span>
                <a href={publicAsset("/diagrams/sprint-01-frontend.svg")} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-200 transition hover:text-white">Abrir em tamanho real ↗</a>
              </figcaption>
              <div className="p-3 md:p-5">
                <Image src={publicAsset("/diagrams/sprint-01-frontend.svg")} alt="Fluxo animado da Sprint 01, do usuário e Route 53 ao CloudFront e ao bucket S3 privado" width={2321} height={652} unoptimized className="h-auto w-full" />
              </div>
            </figure>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Fundamentos</p>
            <h2 className="section-title">Conceitos demonstrados pela implementação</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Além da criação dos recursos, o projeto foi usado para compreender o caminho da requisição, as fronteiras de segurança e o comportamento do cache.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {fundamentals.map(([name, text]) => (
                <article key={name} className="rounded-3xl border border-slate-200 bg-[#F8FAFD] p-7">
                  <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Decisões técnicas</p>
            <h2 className="section-title">Escolhas que sustentam a arquitetura</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {decisions.map(([name, text]) => (
                <article key={name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><h3 className="text-lg font-bold text-slate-900">{name}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-label">Implementação</p>
              <h2 className="section-title">Construção e configuração da solução</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">A implementação conectou a geração do build da aplicação à configuração da origem, distribuição, certificado e DNS, mantendo cada responsabilidade isolada e verificável.</p>
              <ol className="mt-9 grid gap-4">
                {execution.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-5 leading-7 text-slate-700"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">{index + 1}</span>{step}</li>
                ))}
              </ol>
            </div>
            <aside className="h-fit rounded-[32px] bg-[#101C3C] p-8 text-white lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Segurança e confiabilidade</p>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em]">Origem protegida e entrega controlada</h2>
              <ul className="mt-7 grid gap-5 leading-7 text-slate-300">
                {security.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <section id="evidencias" className="scroll-mt-24 bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Validação</p>
            <h2 className="section-title">Critérios verificados após o deploy</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {validations.map(([name, text]) => (
                <article key={name} className="rounded-3xl border border-emerald-200 bg-white p-7"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700" aria-hidden="true">✓</span><h3 className="mt-5 text-lg font-bold text-slate-900">{name}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>
              ))}
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
              <div className="grid grid-cols-[0.8fr_1.2fr] bg-slate-900 px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white"><span>Teste</span><span>Resultado observado</span></div>
              {evidence.map(([name, value]) => (
                <div key={name} className="grid grid-cols-[0.8fr_1.2fr] gap-4 border-t border-slate-200 bg-white px-5 py-4 text-sm leading-6 first:border-t-0">
                  <span className="font-semibold text-slate-800">{name}</span><span className="text-slate-600">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">Validações repetidas em 27/09/2026. Identificadores internos da conta AWS foram omitidos desta página pública.</p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label">Resultados</p>
              <h2 className="section-title">Uma entrega completa dentro do escopo definido</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {results.map((result) => <li key={result} className="flex gap-3 rounded-2xl border border-emerald-200 bg-white p-5 leading-7 text-slate-700"><span className="font-bold text-emerald-600">✓</span>{result}</li>)}
              </ul>
            </div>
            <aside className="h-fit rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="section-label">Tecnologias</p>
              <h2 className="text-2xl font-bold text-slate-950">Stack utilizada</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {["React", "Amazon S3", "Amazon CloudFront", "AWS Certificate Manager", "Amazon Route 53", "Origin Access Control", "DNS", "TLS", "CDN"].map((technology) => <span key={technology} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">{technology}</span>)}
              </div>
              <p className="mt-7 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">Arquitetura documentada em Draw.io com os componentes e fluxos da solução.</p>
            </aside>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#101C3C] p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Case técnico</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-[-0.035em] md:text-5xl">Arquitetura simples de operar, segura na origem e preparada para distribuição global.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#projetos" className="rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50">Ver outros projetos</Link>
              <a href={liveProjectUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-emerald-300/50 bg-emerald-400/10 px-6 py-4 text-sm font-bold text-emerald-100 transition hover:bg-emerald-400/20">Abrir aplicação ao vivo ↗</a>
              <Link href="/#contato" className="rounded-xl border border-blue-300/40 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">Conversar sobre uma solução</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ArchitectureNode({ icon, name, detail }: { icon: string; name: string; detail: string }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <Image src={publicAsset(`/aws-icons/${icon}`)} alt="" width={80} height={80} className="h-20 w-20" />
      <p className="mt-4 font-bold text-slate-900">{name}</p>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </div>
  );
}
