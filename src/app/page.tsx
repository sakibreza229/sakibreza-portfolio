import Header from "@/components/Header/Header";
import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About"
import Skills from "@/pages/Skills/Skills"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
