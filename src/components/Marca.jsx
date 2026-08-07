import logo from "../assets/imgs/LOGO-RFM.png";
import "./Marca.css";

/**
 * Simbolo mas nombre escrito. Hasta ahora la marca solo aparecia como
 * logo, asi que quien no la conocia no sabia como se llama el producto.
 *
 * Sigue el bloqueo de la propia app: RANDOM FIGHTER en blanco y MANAGER
 * en azul al lado, para que se lea como el mismo producto que Fighter
 * pero en su version para propietarios.
 *
 * tamano: "nav" para la barra, "hero" para la portada, "pie" para el pie.
 */
export default function Marca({ tamano = "nav" }) {
  return (
    <span className={`marca marca--${tamano}`}>
      <img src={logo} alt="" className="marca__simbolo" aria-hidden="true" />

      <span className="marca__nombre">
        <span className="marca__linea1">Random Fighter</span>
        <span className="marca__linea2">Manager</span>
      </span>

      {/* El nombre accesible va aparte: el bloque visual lo parte en dos
          lineas y un lector de pantalla no debe leerlo entrecortado. */}
      <span className="marca__sr">Random Fighter Manager</span>
    </span>
  );
}
