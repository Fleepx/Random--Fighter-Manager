import { useState } from "react";

import EfectosSvg from "./components/EfectosSvg";
import Atmosfera from "./components/Atmosfera";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import BandaLema from "./components/BandaLema";
import SelectorFondo, { FONDOS } from "./components/SelectorFondo";
import TaglineReveal from "./components/TaglineReveal";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Planes from "./components/Planes";
import Faq from "./components/Faq";
import Contacto from "./components/Contacto";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  // TEMPORAL: cual fondo lleva la banda. Sale junto con el selector.
  const [fondo, setFondo] = useState(FONDOS[0].id);

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
        {/* TEMPORAL: una sola banda, con el fondo que diga el selector. La
            key lo fuerza a desmontar: cada fondo trae su propio contexto
            WebGL y hay que soltar el anterior, no superponerlo.
            El envoltorio existe porque la banda recorta lo que se sale, y
            el desplegable del selector se abre por debajo del borde. */}
        <div className="banda-envoltorio">
          <BandaLema key={fondo} efecto={fondo} />
          <SelectorFondo valor={fondo} alCambiar={setFondo} />
        </div>
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
