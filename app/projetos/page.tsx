import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Projects } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Projetos | FSO Cloud Consulting",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <Projects />
    </PageShell>
  );
}
