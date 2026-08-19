"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/content";
import { publicAsset } from "@/lib/paths";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(pageHref: string) {
    return pathname === pageHref;
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group" onClick={closeMenu}>
          <Image
            src={publicAsset("/logo-fso-cloud-consulting.png")}
            alt="FSO Cloud Consulting"
            width={276}
            height={100}
            priority
            className="h-14 w-auto transition duration-300 group-hover:opacity-85 sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-blue-600 ${isActive(item.pageHref) ? "text-blue-600" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
        >
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <a
          href="#contato"
          className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_32px_rgba(37,99,235,0.30)] lg:inline-flex"
        >
          Vamos conversar
        </a>
      </div>

      <nav
        className={`border-t border-slate-200/80 bg-white/95 px-6 py-4 shadow-[0_20px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:hidden ${menuOpen ? "grid" : "hidden"}`}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-2">
          {navItems.map((item) => (
            <Link
              key={item.pageHref}
              href={item.pageHref}
              onClick={closeMenu}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive(item.pageHref) ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
