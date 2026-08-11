import { useEffect, useRef, useState } from "react";
import "./SelectorFondo.css";

/* TEMPORAL: andamio para elegir el fondo de la banda. Sale entero cuando
   quede decidido, junto con la prop "efecto" y los fondos descartados.
   Los numeros son los de la comparacion anterior, no correlativos: los tres
   ya se vienen nombrando asi. */
/* Los numeros no son correlativos a proposito: son los de la comparacion
   original y varios candidatos ya quedaron descartados por el camino.
   PlasmaWave conserva su 4 de entonces aunque haya vuelto ahora.
   "opaco" marca los que tapan el azul de la banda en lugar de sumarse;
   con esos no se ve la franja con un efecto encima, se ve el efecto. */
export const FONDOS = [
  { id: "prismatic", numero: "1", nombre: "Prismatic Burst" },
  { id: "plasma", numero: "4", nombre: "Plasma Wave" },
  { id: "ether", numero: "6", nombre: "Liquid Ether", nota: "+three" },
  { id: "molten", numero: "8", nombre: "Molten Metal" },
  { id: "scanner", numero: "9", nombre: "Scanner" },
  { id: "lineas", numero: "10", nombre: "Line Waves" },
  { id: "silk", numero: "11", nombre: "Silk", nota: "opaco · +fiber" },
  { id: "topo", numero: "12", nombre: "Topography" },
  { id: "grain", numero: "13", nombre: "Grainient", nota: "opaco" },
  { id: "beams", numero: "14", nombre: "Beams", nota: "opaco · +drei" },
  { id: "galaxia", numero: "15", nombre: "Galaxy" },
  { id: "cromo", numero: "16", nombre: "Liquid Chrome", nota: "opaco" },
];

export default function SelectorFondo({ valor, alCambiar }) {
  const [abierto, setAbierto] = useState(false);
  const cajaRef = useRef(null);
  const botonRef = useRef(null);
  const actual = FONDOS.find((f) => f.id === valor) ?? FONDOS[0];

  // Cerrar con Escape o al tocar fuera. El foco vuelve al boton solo con
  // Escape: si el clic fue afuera, el usuario ya eligio adonde ir.
  useEffect(() => {
    if (!abierto) return;

    const alTeclear = (e) => {
      if (e.key === "Escape") {
        setAbierto(false);
        botonRef.current?.focus();
      }
    };
    const alTocar = (e) => {
      if (!cajaRef.current?.contains(e.target)) setAbierto(false);
    };

    document.addEventListener("keydown", alTeclear);
    document.addEventListener("pointerdown", alTocar);
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.removeEventListener("pointerdown", alTocar);
    };
  }, [abierto]);

  return (
    <div className="selfondo" ref={cajaRef}>
      <button
        ref={botonRef}
        type="button"
        className="selfondo__boton"
        aria-expanded={abierto}
        aria-haspopup="listbox"
        onClick={() => setAbierto((v) => !v)}
      >
        <span className="selfondo__numero">{actual.numero}</span>
        {/* El nombre se despliega al acercar el puntero. El envoltorio es
            una grilla que va de 0fr a 1fr: asi la animacion la calcula el
            navegador con el ancho real del texto, sin numeros inventados
            que despues recortan la ultima letra. */}
        <span className="selfondo__envoltorio">
          <span className="selfondo__texto">{actual.nombre}</span>
        </span>
      </button>

      {abierto && (
        <ul className="selfondo__lista" role="listbox" aria-label="Fondo de la banda">
          {FONDOS.map((f) => (
            <li key={f.id} role="none">
              <button
                type="button"
                role="option"
                aria-selected={f.id === valor}
                className="selfondo__opcion"
                onClick={() => {
                  alCambiar(f.id);
                  setAbierto(false);
                }}
              >
                <span className="selfondo__numero">{f.numero}</span>
                <span className="selfondo__texto">{f.nombre}</span>
                {f.nota && <span className="selfondo__nota">{f.nota}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
