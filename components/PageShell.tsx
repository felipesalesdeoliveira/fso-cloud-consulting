import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="overflow-x-hidden bg-[#F8FAFD] pt-24 text-[#101828]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
