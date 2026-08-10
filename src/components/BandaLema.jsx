import PrismaticBurst from "./PrismaticBurst";
import { useReveal } from "../hooks/useReveal";
import { usePunteroFino } from "../hooks/usePunteroFino";
import "./BandaLema.css";

const LEMA = ["Administra", "Cobra", "Crece"];

export default function BandaLema() {
  const ref = useReveal({ threshold: 0.3 });
  const conPuntero = usePunteroFino();

  return (
    <div className="banda rf-reveal" ref={ref}>
      {/* Rafaga prismatica sobre el azul. Va con aria-hidden y detras del
          lema: es ambiente, no contenido.
          Los colores salen de la paleta del sitio, no del ejemplo de la
          documentacion: azul de marca, azul oscuro y el claro del texto.
          Sin eso entraba rosa y violeta, que no existen en esta pagina. */}
      <div className="banda__fondo" aria-hidden="true">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1.6}
          speed={0.35}
          distort={0.8}
          rayCount={20}
          mixBlendMode="lighten"
          hoverDampness={conPuntero ? 0.25 : 0}
          colors={["#1E90FF", "#0268C2", "#E9EEF4"]}
        />
      </div>

      <p className="banda__lema">
        {LEMA.map((palabra, i) => (
          <span key={palabra}>
            {i > 0 && <span className="banda__punto" aria-hidden="true" />}
            {palabra}
          </span>
        ))}
      </p>
    </div>
  );
}
