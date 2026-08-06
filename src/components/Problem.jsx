import { useReveal } from "../hooks/useReveal";
import "./Problem.css";

const ANTES = [
  "Persigues las mensualidades por WhatsApp",
  "La asistencia queda en un cuaderno que después hay que pasar",
  "Te enteras de que un plan venció cuando el alumno dejó de venir",
  "Los datos de tu academia viven en tu cabeza y en un Excel",
];

const DESPUES = [
  "El alumno paga desde su celular y queda registrado",
  "Marcas asistencia en la clase, en dos toques",
  "Ves quién está por vencer antes de que venza",
  "Todo en un panel que abres desde donde estés",
];

export default function Problem() {
  const bloque = useReveal();

  return (
    <section className="problema">
      <div className="problema__inner rf-reveal" ref={bloque}>
        <p className="rf-eyebrow">El cambio</p>
        <h2 className="rf-section-title">
          Enseñar es tu trabajo.<br />
          Administrar no debería comerse tu semana.
        </h2>

        <div className="problema__grid">
          <div className="problema__col rf-rasgado">
            <h3 className="problema__col-titulo problema__col-titulo--antes">
              Hoy
            </h3>
            <ul className="problema__lista">
              {ANTES.map((t) => (
                <li key={t}>
                  <span className="rf-cuchilla rf-cuchilla--apagada" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="problema__col rf-rasgado rf-rasgado--2">
            <h3 className="problema__col-titulo problema__col-titulo--despues">
              Con Manager
            </h3>
            <ul className="problema__lista">
              {DESPUES.map((t) => (
                <li key={t}>
                  <span className="rf-cuchilla" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
