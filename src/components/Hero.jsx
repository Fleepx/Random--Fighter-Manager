import { PRIMER_MES_GRATIS } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import logo from "../assets/imgs/LOGO-RFM.png";
import captura from "../assets/imgs/RFM-Screenshot.jpeg";
import "./Hero.css";

export default function Hero() {
  const visual = useReveal({ threshold: 0.1, delay: 200 });

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__texto">
          <img
            src={logo}
            alt="Random Fighter Manager"
            className="hero__logo"
          />

          <h1 className="hero__titulo">
            Cobra las mensualidades<br />
            a tiempo, sin perseguir<br />
            a nadie
          </h1>

          <p className="hero__sub">
            Alumnos, asistencia, pagos y torneos en un solo panel. Tus
            alumnos se matriculan y pagan desde su celular.
          </p>

          <div className="hero__acciones">
            <a href="#planes" className="rf-btn rf-btn--primario">
              Empezar gratis
            </a>
            <a href="#como-funciona" className="rf-btn rf-btn--secundario">
              Ver cómo funciona
            </a>
          </div>

          <p className="hero__prueba">
            <span className="hero__prueba-fuerte">{PRIMER_MES_GRATIS}</span>
            <span className="hero__prueba-sep" aria-hidden="true" />
            Sin permanencia mínima
          </p>
        </div>

        <div className="hero__visual rf-reveal" ref={visual}>
          <img
            src={captura}
            alt="Panel de Random Fighter Manager con el resumen del mes, los accesos a planificar clases, pasar asistencia y registrar pagos, y los torneos organizados"
            className="hero__captura"
          />
        </div>
      </div>
    </section>
  );
}
