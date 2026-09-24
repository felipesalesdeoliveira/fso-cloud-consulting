"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/content";
import { publicAsset } from "@/lib/paths";

const englishNavItems = [
  { label: "Home", href: "/en/#home" },
  { label: "Services", href: "/en/#services" },
  { label: "Process", href: "/en/#process" },
  { label: "About", href: "/en/#about" },
  { label: "Projects", href: "/en/#projects" },
  { label: "Articles", href: "/en/#articles" },
  { label: "Technologies", href: "/en/#technologies" },
  { label: "Contact", href: "/en/#contact" },
];

export function Header({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = locale === "en" ? englishNavItems : navItems;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href={locale === "en" ? "/en/#home" : "/#inicio"} className="group" onClick={closeMenu}>
          <Image
            src={publicAsset("/logo-fso-cloud-consulting.png")}
            alt="FSO Cloud Consulting"
            width={276}
            height={100}
            priority
            className="h-14 w-auto transition duration-300 group-hover:opacity-85 sm:h-16"
          />
        </Link>

        <nav aria-label={locale === "en" ? "Main navigation" : "Navegação principal"} className="hidden items-center gap-4 text-sm font-medium text-slate-600 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-1 flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 text-xs font-bold">
            <Link href="/#inicio" hrefLang="pt-BR" className={`rounded-md px-2 py-1.5 ${locale === "pt" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-700"}`}>PT</Link>
            <Link href="/en/#home" hrefLang="en" className={`rounded-md px-2 py-1.5 ${locale === "en" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400 hover:text-slate-700"}`}>EN</Link>
          </div>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
        >
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <Link
          href={locale === "en" ? "/en/#contact" : "/#contato"}
          className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_32px_rgba(37,99,235,0.30)] lg:inline-flex"
        >
          {locale === "en" ? "Contact me" : "Fale comigo"}
        </Link>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navegação para dispositivos móveis"
        aria-hidden={!menuOpen}
        className={`border-t border-slate-200/80 bg-white/95 px-6 py-4 shadow-[0_20px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden ${menuOpen ? "grid" : "hidden"}`}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex w-fit items-center rounded-lg border border-slate-200 bg-slate-50 p-1 text-xs font-bold">
            <Link href="/#inicio" hrefLang="pt-BR" onClick={closeMenu} className={`rounded-md px-3 py-2 ${locale === "pt" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}>PT</Link>
            <Link href="/en/#home" hrefLang="en" onClick={closeMenu} className={`rounded-md px-3 py-2 ${locale === "en" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}>EN</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
