import { useState } from "react";
import {
  PERIODOS,
  PLANES,
  PRIMER_MES_GRATIS,
  SEDES_ADICIONALES,
  calcularAhorro,
  formatearPrecio,
} from "../data/site";
import { useReveal } from "../hooks/useReveal";
import "./Planes.css";

const RASGADOS = ["", " rf-rasgado--2", " rf-rasgado--3"];

const SUFIJO = {
  mensual: "al mes",
  semestral: "al semestre",
  anual: "al año",
};

function Plan({ plan, periodo, indice }) {
  const ref = useReveal({ delay: indice * 90 });
  const monto = formatearPrecio(plan.precios[periodo]);
  const ahorro = calcularAhorro(plan.precios, periodo);

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
        <span className="plan__monto">{monto}</span>
        <span className="plan__periodo">{SUFIJO[periodo]}, IVA incluido</span>
      </p>

      {/* El ahorro se calcula por plan y no sale del selector de periodo:
          no es parejo. El anual de Pro descuenta 32% y el de Plus 20%, asi
          que una sola cifra arriba mentiria en dos de las tres tarjetas. */}
      <p className="plan__ahorro">
        {ahorro ? `Ahorras ${ahorro}% frente al mensual` : " "}
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

/* Las sedes extra no son un cuarto plan sino un agregado sobre el
   contratado, asi que van en una tabla y no en una tarjeta: compiten por
   atencion con la decision principal y no deberian ganarla. */
function Sedes({ periodo }) {
  const ref = useReveal();

  return (
    <div className="sedes rf-reveal" ref={ref}>
      <h3 className="sedes__titulo">¿Tienes más de una sede?</h3>
      <p className="sedes__bajada">
        Cada sede adicional se suma a tu plan como una suscripción aparte,
        al mismo nivel que contrataste.
      </p>

      <ul className="sedes__lista">
        {SEDES_ADICIONALES.map((sede) => {
          const monto = formatearPrecio(sede.precios[periodo]);
          return (
            <li key={sede.id} className="sede">
              <span className="sede__nombre">{sede.nombre}</span>
              {monto ? (
                <span className="sede__precio">
                  {monto} <span className="sede__periodo">{SUFIJO[periodo]}</span>
                </span>
              ) : (
                /* Pro no se vende por mes en sedes extra. Antes que inventar
                   una cifra o dejar el hueco, la fila lo dice. */
                <span className="sede__sin-precio">Solo semestral o anual</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
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
              </button>
            ))}
          </div>

          <p className="planes__iva">Todos los precios incluyen IVA</p>
        </header>

        <div className="planes__grid">
          {PLANES.map((plan, i) => (
            <Plan key={plan.id} plan={plan} periodo={periodo} indice={i} />
          ))}
        </div>

        <Sedes periodo={periodo} />

        <p className="planes__pie">
          Precios en pesos chilenos, IVA incluido. ¿Necesitas algo distinto?{" "}
          <a href="#contacto">Escríbenos</a>.
        </p>
      </div>
    </section>
  );
}
