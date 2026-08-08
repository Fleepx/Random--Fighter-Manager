import Inclina3D from "./Inclina3D";
import ShinyText from "./ShinyText";
import { usePunteroFino } from "../hooks/usePunteroFino";
import logo from "../assets/imgs/LOGO-RFM.png";
import "./Marca.css";

/**
 * Simbolo mas nombre escrito.
 *
 * El bloque "Random Fighter" es identico al de la pagina roja, incluido el
 * rojo de la primera linea: es la marca madre y tiene que leerse igual en
 * los dos sitios. "Manager" se suma como tercera linea y es lo unico que
 * lleva el azul de este producto.
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
              <ShinyText
                className="marca__linea1"
                text="Random"
                color="#C0392B"
                shineColor="#FF7A6B"
                speed={3.2}
                delay={1.6}
                spread={100}
              />
              <ShinyText
                className="marca__linea2"
                text="Fighter"
                color="#E9EEF4"
                shineColor="#FFFFFF"
                speed={3.2}
                delay={1.6}
                spread={100}
              />
              <ShinyText
                className="marca__linea3"
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
              <span className="marca__linea1">Random</span>
              <span className="marca__linea2">Fighter</span>
              <span className="marca__linea3">Manager</span>
            </>
          )}
        </span>
      </span>

      {/* El nombre accesible va aparte: el bloque visual lo parte en lineas
          y un lector de pantalla no debe leerlo entrecortado. */}
      <span className="marca__sr">Random Fighter Manager</span>
    </span>
  );
}
