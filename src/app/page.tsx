import Header from "@/components/Header/Header";
import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About"
import Skills from "@/pages/Skills/Skills"
import Qualification from "@/pages/Qualification/Qualification";
import Services from "@/pages/Services/Services";
import Pricing from "@/pages/Pricing/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Pricing />
      </main>
    </>
  );
}
