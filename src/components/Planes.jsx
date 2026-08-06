import { useState } from "react";
import { PERIODOS, PLANES, PRIMER_MES_GRATIS } from "../data/site";
import { useReveal } from "../hooks/useReveal";
import "./Planes.css";

const RASGADOS = ["", " rf-rasgado--2", " rf-rasgado--3"];

function Plan({ plan, periodo, indice }) {
  const ref = useReveal({ delay: indice * 90 });
  const precio = plan.precios[periodo];

  /* Platinum no se vende por mes. En vez de mostrar un precio inventado o
     un boton muerto, la tarjeta lo dice y manda al periodo que si existe. */
  const sinPrecio = !precio.monto;

  return (
    <article
      className={`plan rf-rasgado${RASGADOS[indice % 3]} rf-reveal ${
        plan.destacado ? "plan--destacado" : ""
      }`}
      ref={ref}
    >
      {plan.insignia && <p className="plan__insignia">{plan.insignia}</p>}

      <h3 className="plan__nombre">{plan.nombre}</h3>
      <p className="plan__descripcion">{plan.descripcion}</p>

      <p className="plan__precio">
        {sinPrecio ? (
          <span className="plan__sin-precio">{precio.periodo}</span>
        ) : (
          <>
            <span className="plan__monto">{precio.monto}</span>
            <span className="plan__periodo">{precio.periodo}</span>
          </>
        )}
      </p>

      <ul className="plan__incluye">
        {plan.incluye.map((linea) => (
          <li key={linea}>
            <span className="rf-cuchilla" aria-hidden="true" />
            {linea}
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className={`rf-btn ${
          plan.destacado ? "rf-btn--primario" : "rf-btn--secundario"
        } plan__cta`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

export default function Planes() {
  const cabecera = useReveal();
  const [periodo, setPeriodo] = useState("mensual");

  return (
    <section className="planes" id="planes">
      <div className="planes__inner">
        <header className="planes__cabecera rf-reveal" ref={cabecera}>
          <p className="rf-eyebrow">Planes</p>
          <h2 className="rf-section-title">
            Elige según el tamaño<br />
            de tu academia
          </h2>
          <p className="planes__nota">
            {PRIMER_MES_GRATIS} en cualquier plan. Sin permanencia mínima.
          </p>

          <div className="planes__periodos" role="group" aria-label="Período de facturación">
            {PERIODOS.map((p) => (
              <button
                key={p.clave}
                type="button"
                className={`periodo ${periodo === p.clave ? "is-activo" : ""}`}
                onClick={() => setPeriodo(p.clave)}
                aria-pressed={periodo === p.clave}
              >
                {p.etiqueta}
                {p.descuento && (
                  <span className="periodo__descuento">−{p.descuento}</span>
                )}
              </button>
            ))}
          </div>
        </header>

        <div className="planes__grid">
          {PLANES.map((plan, i) => (
            <Plan key={plan.id} plan={plan} periodo={periodo} indice={i} />
          ))}
        </div>

        <p className="planes__pie">
          Precios en pesos chilenos, sin IVA. ¿Necesitas algo distinto?{" "}
          <a href="#contacto">Escríbenos</a>.
        </p>
      </div>
    </section>
  );
}
