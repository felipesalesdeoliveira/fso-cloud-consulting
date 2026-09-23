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
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo principal
      </a>
      <Header />
      <main
        id="conteudo"
        tabIndex={-1}
        className="overflow-x-hidden bg-[#F8FAFD] pt-24 text-[#101828]"
      >
        <Hero />
        <Services />
        <Process />
        <About />
        <Projects />
        <Articles />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
