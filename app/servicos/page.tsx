import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Services } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Serviços | FSO Cloud Consulting",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
