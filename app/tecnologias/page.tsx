import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Technologies } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Tecnologias | FSO Cloud Consulting",
};

export default function TechnologiesPage() {
  return (
    <PageShell>
      <Technologies />
    </PageShell>
  );
}
