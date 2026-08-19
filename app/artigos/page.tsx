import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Articles } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Artigos | FSO Cloud Consulting",
};

export default function ArticlesPage() {
  return (
    <PageShell>
      <Articles />
    </PageShell>
  );
}
