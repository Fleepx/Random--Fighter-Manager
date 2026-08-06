import "./Atmosfera.css";

/**
 * Ambiente de la pagina, en dos capas fijas detras de todo.
 *
 * Es la contraparte clara de la de Fighter: misma idea de textura y luz
 * ambiente, pero en positivo. Aca no hay tatami: el producto no se usa en
 * el tatami sino en la oficina del gimnasio, asi que la textura de fondo
 * es solo el muro, muy tenue.
 *
 * Van con position fixed y no background-attachment fixed, que iOS ignora
 * y que en Android repinta en cada scroll.
 */
export default function Atmosfera() {
  return (
    <div className="atm" aria-hidden="true">
      <div className="atm__muro" />
      <div className="atm__luz" />
      <div className="atm__grano" />
    </div>
  );
}
