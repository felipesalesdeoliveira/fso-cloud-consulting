import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contato | FSO Cloud Consulting",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
