import { PLAY_STORE_URL, FIGHTER_URL } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import BotonTienda from "./BotonTienda";
import "./FinalCta.css";

export default function FinalCta() {
  const bloque = useReveal();

  return (
    <section className="cta-final">
      <div className="cta-final__inner rf-reveal" ref={bloque}>
        <h2 className="cta-final__titulo">
          Prueba un mes completo<br />
          antes de pagar nada
        </h2>

        <p className="cta-final__sub">
          Creas tu academia, cargas tus planes y la usas entera. Si no te
          sirve, no sigues. Sin permanencia mínima.
        </p>

        <div className="tiendas cta-final__tiendas">
          <BotonTienda tienda="google" href={PLAY_STORE_URL} />
          <BotonTienda tienda="apple" disponible={false} />
        </div>

        <p className="cta-final__cruzado">
          ¿Eres alumno? <a href={FIGHTER_URL}>Conoce Random Fighter</a>
        </p>
      </div>
    </section>
  );
}
