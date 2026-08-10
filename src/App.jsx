import EfectosSvg from "./components/EfectosSvg";
import Atmosfera from "./components/Atmosfera";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import BandaLema from "./components/BandaLema";
import TaglineReveal from "./components/TaglineReveal";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Planes from "./components/Planes";
import Faq from "./components/Faq";
import Contacto from "./components/Contacto";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#contenido" className="rf-skip-link">
        Saltar al contenido
      </a>

      <EfectosSvg />
      <Atmosfera />
      <Navbar />

      <main id="contenido">
        <Hero />
        <Problem />
        {/* TEMPORAL: las candidatas que siguen en pie para comparar fondos de un
            vistazo. Al elegir uno queda una sola, sin etiqueta. */}
        <BandaLema key="r3-prismatic" efecto="prismatic" etiqueta="1 · Prismatic Burst" />
        <BandaLema key="r3-ether" efecto="ether" etiqueta="6 · Liquid Ether" />
        <BandaLema key="r3-molten" efecto="molten" etiqueta="8 · Molten Metal" />
        <TaglineReveal />
        <Benefits />
        <HowItWorks />
        <Planes />
        {/* La FAQ va antes del contacto: en una oferta de pago las dudas
            hay que resolverlas antes de pedir los datos. */}
        <Faq />
        <Contacto />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
