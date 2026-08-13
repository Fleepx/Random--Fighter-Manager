import { useState } from "react";
import {
  PERIODOS,
  PLANES,
  PRIMER_MES_GRATIS,
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
  const montoSede = formatearPrecio(plan.precioSede[periodo]);

  return (
    <article
      className={`plan rf-rasgado${RASGADOS[indice % 3]} rf-reveal ${
        plan.destacado ? "plan--destacado" : ""
      }`}
      ref={ref}
    >
      {/* La insignia va en la misma linea que el nombre y pegada al borde
          derecho. Encima ocupaba un renglon propio, y solo en esta tarjeta:
          empujaba su contenido y descalzaba los titulos de las tres. */}
      <div className="plan__encabezado">
        <h3 className="plan__nombre">{plan.nombre}</h3>
        {plan.insignia && <p className="plan__insignia">{plan.insignia}</p>}
      </div>
      <p className="plan__descripcion">{plan.descripcion}</p>

      <p className="plan__precio" key={`precio-${periodo}`}>
        <span className="plan__monto">{monto}</span>
        <span className="plan__periodo">{SUFIJO[periodo]}, IVA incluido</span>
      </p>

      {/* El ahorro se calcula por plan y no sale del selector de periodo:
          no es parejo. El anual de Pro descuenta 32% y el de Plus 20%, asi
          que una sola cifra arriba mentiria en dos de las tres tarjetas. */}
      <p className="plan__ahorro" key={`ahorro-${periodo}`}>
        {ahorro ? `Ahorras ${ahorro}% frente al mensual` : " "}
      </p>

      {/* El precio de la sede extra vive en la tarjeta de su nivel y no en
          un bloque aparte al pie. Abajo quedaba lejos del selector de
          periodo: se cambiaba de periodo arriba sin ver que esas cifras
          tambien se movian, o se leian sin saber a que periodo eran. */}
      <p className="plan__sede" key={`sede-${periodo}`}>
        <span className="plan__sede-etiqueta">Sede adicional</span>
        {/* Sin precio va con la misma estructura que con precio, cifra
            grande arriba y aclaracion chica abajo, para que las dos midan
            igual solas. Con marcado distinto la fila cambiaba de alto al
            pasar de mensual a semestral y la tarjeta daba un salto. */}
        <span className="plan__sede-monto">
          {montoSede ? `+ ${montoSede}` : "—"}
          <span className="plan__sede-periodo">
            {montoSede ? SUFIJO[periodo] : "Solo semestral o anual"}
          </span>
        </span>
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

        <p className="planes__sedes-nota">
          Cada sede adicional se suma a tu plan como una suscripción aparte,
          al mismo nivel que contrataste.
        </p>

        <p className="planes__pie">
          Precios en pesos chilenos, IVA incluido. ¿Necesitas algo distinto?{" "}
          <a href="#contacto">Escríbenos</a>.
        </p>
      </div>
    </section>
  );
}
