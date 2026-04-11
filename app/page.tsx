import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Expertise from "@/components/sections/Expertise";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Hopp til innhold</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Expertise />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
