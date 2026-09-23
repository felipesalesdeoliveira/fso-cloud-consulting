import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import {
  About,
  Articles,
  Footer,
  Process,
  Projects,
  Services,
  Technologies,
} from "@/components/Sections";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F8FAFD] pt-24 text-[#101828]">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <Projects />
      <Articles />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
