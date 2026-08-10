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
        {/* TEMPORAL: ocho copias de la banda para comparar fondos de un
            vistazo. Al elegir uno queda una sola, sin etiqueta. */}
        <BandaLema key="r1-prismatic" efecto="prismatic" etiqueta="1 · Prismatic Burst" />
        <BandaLema key="r1-particles" efecto="particles" etiqueta="2 · Particles" />
        <BandaLema key="r1-blinds" efecto="blinds" etiqueta="3 · Gradient Blinds" />
        <BandaLema key="r1-plasma" efecto="plasma" etiqueta="4 · Plasma Wave" />
        <BandaLema key="r1-aurora" efecto="aurora" etiqueta="5 · Soft Aurora" />
        <BandaLema key="r1-ether" efecto="ether" etiqueta="6 · Liquid Ether" />
        <BandaLema key="r1-ferro" efecto="ferro" etiqueta="7 · Ferrofluid" />
        <BandaLema key="r1-molten" efecto="molten" etiqueta="8 · Molten Metal" />
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
