import Inclina3D from "./Inclina3D";
import ShinyText from "./ShinyText";
import { usePunteroFino } from "../hooks/usePunteroFino";
import logo from "../assets/imgs/LOGO-RFM.png";
import "./Marca.css";

/**
 * Simbolo mas nombre escrito.
 *
 * "Random Fighter" va en una sola linea y con el mismo tratamiento que en
 * la pagina roja: mismo cuerpo, mismo peso, misma caja. Aca va entero en
 * claro, sin rojo: el unico color de producto de este sitio es el azul, y
 * se reserva para "Manager", que cuelga debajo como linea propia.
 *
 * tamano: "nav" para la barra, "hero" para la portada, "pie" para el pie.
 *
 * En la barra el nombre se retira al armarse la isla. El envoltorio existe
 * para eso: Navbar.css lo colapsa con una grilla, sin poner tope al ancho
 * desplegado. Ver el comentario alla.
 */
export default function Marca({ tamano = "nav" }) {
  const conPuntero = usePunteroFino();
  const esHero = tamano === "hero";

  const simbolo = (
    <img src={logo} alt="" className="marca__simbolo" aria-hidden="true" />
  );

  return (
    <span className={`marca marca--${tamano}`}>
      {/* Solo en la portada: en la barra o el pie el giro no se nota. */}
      {esHero ? (
        <Inclina3D activo={conPuntero} grados={16}>
          {simbolo}
        </Inclina3D>
      ) : (
        simbolo
      )}

      <span className="marca__envoltorio">
        <span className="marca__nombre">
          {/* El brillo solo en la portada. En la barra y el pie un destello
              permanente distrae, y cada instancia se suscribe al bucle de
              animacion. */}
          {esHero ? (
            <>
              <span className="marca__titulo">
                <ShinyText
                  className="marca__palabra1"
                  text="Random"
                  color="#E9EEF4"
                  shineColor="#FFFFFF"
                  speed={3.2}
                  delay={1.6}
                  spread={100}
                />{" "}
                <ShinyText
                  className="marca__palabra2"
                  text="Fighter"
                  color="#E9EEF4"
                  shineColor="#FFFFFF"
                  speed={3.2}
                  delay={1.6}
                  spread={100}
                />
              </span>
              <ShinyText
                className="marca__producto"
                text="Manager"
                color="#1E90FF"
                shineColor="#8FD0FF"
                speed={3.2}
                delay={1.6}
                spread={100}
              />
            </>
          ) : (
            <>
              <span className="marca__titulo">
                <span className="marca__palabra1">Random</span>{" "}
                <span className="marca__palabra2">Fighter</span>
              </span>
              <span className="marca__producto">Manager</span>
            </>
          )}
        </span>
      </span>

      {/* El nombre accesible va aparte: el visual son spans sueltos y un
          lector de pantalla no debe leerlo entrecortado. */}
      <span className="marca__sr">Random Fighter Manager</span>
    </span>
  );
}
