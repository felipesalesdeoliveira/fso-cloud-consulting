import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Process } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Como Funciona | FSO Cloud Consulting",
};

export default function ProcessPage() {
  return (
    <PageShell>
      <Process />
    </PageShell>
  );
}
