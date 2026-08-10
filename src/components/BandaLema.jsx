import PrismaticBurst from "./PrismaticBurst";
import LiquidEther from "./LiquidEther";
import MoltenMetal from "./MoltenMetal";
import Scanner from "./Scanner";
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

    case "scanner":
      return (
        <Scanner
          color1={AZUL_HONDO}
          color2={AZUL}
          color3={CLARO}
          speed={0.4}
          sweepSpeed={0.2}
          sweepWidth={1.6}
          sweepFalloff={6}
          /* Horizontal y no vertical: el barrido vertical apila lineas a lo
             largo del alto, y aca sobran 138px. Cruzando a lo ancho entran
             todas y el recorrido se lee. */
          scanDirection="horizontal"
          scale={1.2}
          frequency={2}
          ripple={0.22}
          bandDensity={9}
          lineSharpness={5.5}
          glow={0.22}
          colorSpread={0.7}
          brightness={1}
          contrast={1.15}
          softness={1.4}
          /* La viñeta se mide con length(uv0), normalizado contra el ALTO.
             En una franja de 9:1 ese largo pasa de 8 en los extremos, muy
             por encima del tope de 1.65 del smoothstep, asi que el 0.45 del
             ejemplo apagaba todo menos la parte del medio. En 0 porque la
             banda ya tiene sus propios bordes rasgados. */
          vignette={0}
          scanline
          grain
          grainIntensity={0.03}
          opacity={1}
          mouseInteraction={conPuntero}
          mouseRadius={0.5}
          mouseStrength={0.5}
        />
      );

    default:
      return null;
  }
}

/**
 * efecto: cual fondo va detras del lema. Sin valor no lleva fondo. Es
 *   temporal, mientras se compara: al decidir queda uno fijo y la prop sale.
 */
export default function BandaLema({ efecto }) {
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


