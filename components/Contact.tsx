"use client";

import type { FormEvent } from "react";
import { ArrowIcon } from "@/components/icons/CustomIcons";

const whatsappNumber = "5548996297388";

export function Contact({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const english = locale === "en";
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const whatsappMessage = [
      english ? "Hello! I found FSO Cloud Consulting through the website." : "Olá! Conheci a FSO Cloud Consulting pelo site.",
      "",
      `Nome: ${name}`,
      company ? `${english ? "Company" : "Empresa"}: ${company}` : null,
      `${english ? "Email" : "E-mail"}: ${email}`,
      "",
      english ? "Challenge:" : "Desafio:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id={english ? "contact" : "contato"} className="scroll-mt-24 bg-white px-6 py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#101C3C] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] md:p-14">
        <div className="pointer-events-none absolute -right-36 -top-36 h-96 w-96 rounded-full bg-blue-500/25 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-44 left-[32%] h-96 w-96 rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">{english ? "Contact" : "Contato"}</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.1] tracking-[-0.035em] md:text-5xl">
              {english ? "Let's build a more reliable platform." : "Sua infraestrutura está preparada para crescer com confiabilidade?"}
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              {english ? "Tell me about your environment and the challenges you are facing. I can help identify practical ways to improve automation, observability, reliability, and cloud efficiency." : "Quero conhecer os desafios do seu ambiente e ajudar a identificar oportunidades de automação, observabilidade, estabilidade e redução de custos."}
            </p>
            <a
              href="https://wa.me/5548996297388?text=Ol%C3%A1%21%20Conheci%20a%20FSO%20Cloud%20Consulting%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              {english ? "Chat on WhatsApp" : "Falar pelo WhatsApp"}
              <ArrowIcon />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">{english ? "Name" : "Nome"}</label>
                <input id="name" name="name" type="text" autoComplete="name" required className="w-full rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3.5 text-white outline-none transition focus:border-blue-300 focus:bg-white/[0.12]" />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">{english ? "Company" : "Empresa"}</label>
                <input id="company" name="company" type="text" autoComplete="organization" className="w-full rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3.5 text-white outline-none transition focus:border-blue-300 focus:bg-white/[0.12]" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">E-mail</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="w-full rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3.5 text-white outline-none transition focus:border-blue-300 focus:bg-white/[0.12]" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">{english ? "What challenge do you need to solve?" : "Qual desafio você precisa resolver?"}</label>
              <textarea id="message" name="message" required className="min-h-36 w-full resize-none rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3.5 text-white outline-none transition focus:border-blue-300 focus:bg-white/[0.12]" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500">
              {english ? "Send via WhatsApp" : "Enviar pelo WhatsApp"}
              <ArrowIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
