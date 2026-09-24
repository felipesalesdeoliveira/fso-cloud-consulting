import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { publicAsset } from "@/lib/paths";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Secure frontend delivery on AWS | FSO Cloud Consulting",
  description: "A production-ready React SPA architecture using a private S3 origin, CloudFront, ACM, Route 53, and OAC.",
  alternates: {
    canonical: `${siteConfig.url}/en/projects/frontend-cdn-s3-tls-custom-domain/`,
    languages: { "pt-BR": `${siteConfig.url}/projetos/frontend-cdn-s3-tls-dominio/`, en: `${siteConfig.url}/en/projects/frontend-cdn-s3-tls-custom-domain/` },
  },
};

const items = {
  decisions: [
    ["Private origin", "The public S3 website endpoint was not used. CloudFront reaches the private bucket through OAC and a restrictive bucket policy."],
    ["Managed TLS", "ACM provides the certificate for the apex domain and www from us-east-1, as required by CloudFront."],
    ["Efficient caching", "CachingOptimized reduces origin requests while index.html receives specific treatment during releases."],
  ],
  validation: ["HTTP requests redirect to HTTPS with a 301 response.", "Unknown SPA routes return index.html instead of an S3 error.", "Direct access to the S3 origin is denied."],
  results: ["Global delivery through CloudFront edge locations.", "Private origin protected from direct public access.", "TLS on the apex and www domains.", "Reliable client-side routing for the SPA.", "Serverless frontend hosting with low operational overhead."],
};

export default function EnglishProjectPage() {
  return <><Header locale="en" /><main className="bg-[#F8FAFD] pt-24 text-slate-900"><section className="border-b border-slate-200 px-6 py-20"><div className="mx-auto max-w-6xl"><Link href="/en/#projects" className="text-sm font-bold text-blue-600">← Back to projects</Link><div className="mt-9 flex gap-3"><span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-700">COMPLETED</span><span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">CLOUD & CDN</span></div><h1 className="mt-7 max-w-5xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">Secure frontend delivery on AWS</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">A secure, scalable React SPA architecture with a private origin, global content delivery, managed HTTPS, and custom DNS on AWS.</p></div></section>
  <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">Architecture</p><h2 className="section-title">Request flow and security boundaries</h2><div className="mt-10 grid items-center gap-5 rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:grid-cols-4">{[["route-53.svg","Route 53"],["cloudfront.svg","CloudFront"],["acm.svg","ACM / TLS"],["s3.svg","Private S3"]].map(([icon,name], index) => <div key={name} className="relative flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm"><Image src={publicAsset(`/aws-icons/${icon}`)} alt="" width={64} height={64}/><strong className="mt-4">{name}</strong>{index < 3 && <span className="absolute -right-4 top-1/2 hidden text-blue-500 md:block">→</span>}</div>)}</div></div></section>
  <section className="bg-[#F3F6FB] px-6 py-20"><div className="mx-auto max-w-6xl"><p className="section-label">Technical decisions</p><h2 className="section-title">Choices behind the architecture</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{items.decisions.map(([title,text]) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7"><h3 className="font-bold">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
  <section className="bg-white px-6 py-20"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2"><div><p className="section-label">Validation</p><h2 className="section-title">Post-deployment checks</h2><ul className="mt-8 grid gap-4">{items.validation.map(text => <li key={text} className="rounded-2xl border border-emerald-200 p-5 text-slate-700">✓ {text}</li>)}</ul></div><div><p className="section-label">Outcomes</p><h2 className="section-title">Delivered outcomes</h2><ul className="mt-8 grid gap-4">{items.results.map(text => <li key={text} className="rounded-2xl bg-blue-50 p-5 text-slate-700">{text}</li>)}</ul></div></div></section></main><Footer locale="en" /></>;
}
