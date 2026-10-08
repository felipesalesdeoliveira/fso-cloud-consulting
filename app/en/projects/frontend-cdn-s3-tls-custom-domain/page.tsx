import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { publicAsset } from "@/lib/paths";
import { siteConfig, siteImage } from "@/lib/site";

const title = "Secure frontend delivery on AWS";
const description = "A deployed React SPA architecture using a private S3 origin, CloudFront, ACM, Route 53, and OAC.";
const pageUrl = `${siteConfig.url}/en/projects/frontend-cdn-s3-tls-custom-domain/`;
const liveProjectUrl = "https://residencia.fsocloudconsulting.com";

export const metadata: Metadata = {
  title: `${title} | ${siteConfig.name}`,
  description,
  alternates: {
    canonical: pageUrl,
    languages: {
      "pt-BR": `${siteConfig.url}/projetos/frontend-cdn-s3-tls-dominio/`,
      en: pageUrl,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: pageUrl,
    siteName: siteConfig.name,
    title,
    description,
    images: [{ url: siteImage, width: 1280, height: 640, alt: siteConfig.name }],
  },
};

const environment = [
  ["Application", "residencia.fsocloudconsulting.com"],
  ["Origin", "Private S3 bucket in us-east-1"],
  ["Delivery", "Deployed and enabled CloudFront distribution"],
  ["Origin access", "OAC with SigV4 signing"],
  ["Certificate", "ACM-issued certificate in us-east-1"],
  ["Caching", "Managed-CachingOptimized"],
];

const decisions = [
  ["Private origin", "The S3 website endpoint was not used. CloudFront reaches the private bucket through OAC and a distribution-scoped bucket policy."],
  ["Custom DNS", "A Route 53 Alias A record resolves residencia.fsocloudconsulting.com to the CloudFront distribution."],
  ["Managed TLS", "ACM provides the certificate for the application hostname from us-east-1, as required by CloudFront."],
  ["Distributed cache", "CachingOptimized reduces origin requests. index.html still requires invalidation or an explicit short-TTL strategy during releases."],
  ["SPA routing", "Custom 403 and 404 responses return index.html with status 200 so the client-side router can handle direct navigation."],
  ["HTTPS only", "Every HTTP request is redirected to HTTPS before content is delivered."],
];

const fundamentals = [
  ["DNS does not proxy content", "Route 53 resolves the hostname. The browser then establishes an HTTPS connection directly with the CloudFront network."],
  ["Edge is not a Region", "An edge location terminates TLS and serves cached objects. The S3 origin remains a regional resource."],
  ["Hit versus miss", "A cache hit avoids S3. A miss fetches the object from the origin and may store a copy at the edge."],
  ["One public entry point", "Keeping S3 private prevents users from bypassing the distribution's TLS, cache, logging, and security controls."],
  ["Authenticated origin access", "OAC signs requests with SigV4 while the bucket policy restricts GetObject to the authorized distribution."],
  ["Deployment includes cache", "Uploading files is not enough: the correct index and assets must be delivered by the CDN."],
];

const validations = [
  ["HTTP to HTTPS", "301 redirect to the HTTPS application URL"],
  ["Main page", "HTTPS 200 response"],
  ["SPA fallback", "An unknown route returns index.html with status 200"],
  ["Private origin", "Direct S3 access returns 403 AccessDenied"],
  ["Edge cache", "X-Cache: Hit from cloudfront"],
  ["S3 controls", "Block Public Access enabled, ACLs disabled, and a non-public bucket policy"],
];

export default function EnglishProjectPage() {
  return (
    <>
      <a href="#content" className="skip-link">Skip to main content</a>
      <Header locale="en" />
      <main id="content" tabIndex={-1} className="bg-[#F8FAFD] pt-24 text-slate-900">
        <section className="relative overflow-hidden border-b border-slate-200 px-6 py-20 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/35 blur-[110px]" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/35 blur-[110px]" />
          <div className="relative mx-auto max-w-6xl">
            <Link href="/en/#projects" className="text-sm font-bold text-blue-600">← Back to projects</Link>
            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">Completed</span>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">Cloud &amp; CDN</span>
            </div>
            <h1 className="mt-7 max-w-5xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={liveProjectUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700">Open live application ↗</a>
              <a href="#evidence" className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">View technical evidence</a>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Deployed environment</p>
            <h2 className="section-title">A real configuration validated on AWS</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">The facts below reflect the deployed environment and were checked using read-only AWS queries and post-deployment HTTP tests.</p>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {environment.map(([name, value]) => <div key={name} className="rounded-2xl border border-slate-200 bg-[#F8FAFD] p-6"><dt className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">{name}</dt><dd className="mt-3 break-words font-semibold leading-7 text-slate-800">{value}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Architecture</p>
            <h2 className="section-title">Request flow and security boundaries</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Route 53 resolves the hostname but does not carry application traffic. The browser connects to CloudFront over HTTPS, and the CDN reads the private S3 origin through OAC only when the object is not already cached.</p>
            <div className="mt-10 grid items-center gap-5 rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:grid-cols-4">
              {[["route-53.svg", "Route 53", "DNS resolution"], ["cloudfront.svg", "CloudFront", "Edge delivery and TLS"], ["acm.svg", "ACM", "Certificate in us-east-1"], ["s3.svg", "Private S3", "Static origin"]].map(([icon, name, detail], index) => (
                <div key={name} className="relative flex min-h-44 flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm">
                  <Image src={publicAsset(`/aws-icons/${icon}`)} alt="" width={64} height={64} />
                  <strong className="mt-4">{name}</strong><span className="mt-2 text-sm text-slate-500">{detail}</span>
                  {index < 3 && <span className="absolute -right-4 top-1/2 hidden text-blue-500 md:block">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Animated flow</p>
            <h2 className="section-title">The complete architecture in motion</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">The arrows follow DNS resolution, the HTTPS connection, and file retrieval from the private bucket, making the order in which each service participates in SPA delivery explicit.</p>
            <figure className="mt-10 overflow-hidden rounded-[32px] border border-slate-300 bg-white shadow-sm">
              <figcaption className="flex flex-wrap items-center justify-between gap-3 bg-[#232f3e] px-6 py-4 text-lg font-bold text-white">
                <span>Sprint 01 · Frontend</span>
                <a href={publicAsset("/diagrams/sprint-01-frontend.svg")} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-200 transition hover:text-white">Open at full size ↗</a>
              </figcaption>
              <div className="p-3 md:p-5">
                <Image src={publicAsset("/diagrams/sprint-01-frontend.svg")} alt="Animated Sprint 01 flow from the user and Route 53 to CloudFront and the private S3 bucket" width={2321} height={652} unoptimized className="h-auto w-full" />
              </div>
            </figure>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Foundations</p>
            <h2 className="section-title">Concepts demonstrated by the implementation</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {fundamentals.map(([name, text]) => <article key={name} className="rounded-3xl border border-slate-200 bg-[#F8FAFD] p-7"><h3 className="text-lg font-bold">{name}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F3F6FB] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Technical decisions</p>
            <h2 className="section-title">Choices behind the architecture</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {decisions.map(([name, text]) => <article key={name} className="rounded-3xl border border-slate-200 bg-white p-7"><h3 className="text-lg font-bold">{name}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="evidence" className="scroll-mt-24 bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Validation</p>
            <h2 className="section-title">Observed post-deployment evidence</h2>
            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
              <div className="grid grid-cols-[0.8fr_1.2fr] bg-slate-900 px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white"><span>Check</span><span>Observed result</span></div>
              {validations.map(([name, value]) => <div key={name} className="grid grid-cols-[0.8fr_1.2fr] gap-4 border-t border-slate-200 px-5 py-4 text-sm leading-6"><span className="font-semibold text-slate-800">{name}</span><span className="text-slate-600">{value}</span></div>)}
            </div>
            <p className="mt-4 text-sm text-slate-500">Checks repeated on September 27, 2026. Internal AWS account identifiers are intentionally omitted from this public page.</p>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#101C3C] p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Technical case study</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-[-0.035em] md:text-5xl">A simple-to-operate architecture with a protected origin and global delivery.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={liveProjectUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700 transition hover:bg-blue-50">Open live application ↗</a>
              <Link href="/en/#contact" className="rounded-xl border border-blue-300/40 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">Discuss a solution</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
