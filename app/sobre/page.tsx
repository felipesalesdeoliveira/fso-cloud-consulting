import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { About } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Sobre | FSO Cloud Consulting",
};

export default function AboutPage() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
