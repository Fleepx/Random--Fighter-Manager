import PrismaticBurst from "./PrismaticBurst";
import LiquidEther from "./LiquidEther";
import MoltenMetal from "./MoltenMetal";
import { useReveal } from "../hooks/useReveal";
import { usePunteroFino } from "../hooks/usePunteroFino";
import "./BandaLema.css";

const LEMA = ["Administra", "Cobra", "Crece"];

/* Paleta del sitio. Ninguno de estos fondos usa los colores de su propia
   documentacion: los ejemplos vienen en rosa y violeta, que no existen en
   ninguna parte de esta pagina. */
const AZUL = "#1E90FF";
const AZUL_OSCURO = "#0268C2";
const AZUL_HONDO = "#0A2540";
const AZUL_CLARO = "#8FD0FF";
const CLARO = "#E9EEF4";

/**
 * Cada fondo recibe los colores de la paleta y viene calibrado para una
 * franja baja, no para el bloque de 600px de la documentacion. Donde el
 * ejemplo pedia mucha agitacion se bajo la velocidad: a esta altura el
 * movimiento rapido se lee como parpadeo.
 */
function Fondo({ efecto, conPuntero }) {
  switch (efecto) {
    case "prismatic":
      return (
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1.6}
          speed={0.35}
          distort={0.8}
          rayCount={20}
          mixBlendMode="lighten"
          hoverDampness={conPuntero ? 0.25 : 0}
          colors={[AZUL, AZUL_OSCURO, CLARO]}
        />
      );

    case "ether":
      return (
        <LiquidEther
          colors={[AZUL_HONDO, AZUL, AZUL_CLARO]}
          mouseForce={18}
          cursorSize={70}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      );

    case "molten":
      return (
        <MoltenMetal
          color1={AZUL_HONDO}
          color2={AZUL}
          color3={CLARO}
          speed={0.3}
          scale={2.4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="frost"
          grain
          grainIntensity={0.04}
          mouseInteraction={conPuntero}
          mouseStrength={0.3}
          opacity={1}
        />
      );

    default:
      return null;
  }
}

/**
 * efecto: cual fondo va detras del lema. Sin valor no lleva fondo.
 * etiqueta: rotulo de prueba. Existe solo mientras comparamos candidatos;
 *   sale junto con los fondos descartados.
 */
export default function BandaLema({ efecto, etiqueta }) {
  const ref = useReveal({ threshold: 0.3 });
  const conPuntero = usePunteroFino();

  return (
    <div className="banda rf-reveal" ref={ref}>
      {/* El fondo va en su propia capa, encima del azul y debajo del lema.
          aria-hidden: es ambiente, no contenido. */}
      {efecto && (
        <div className="banda__fondo" aria-hidden="true">
          <Fondo efecto={efecto} conPuntero={conPuntero} />
        </div>
      )}

      {etiqueta && <span className="banda__etiqueta">{etiqueta}</span>}

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


