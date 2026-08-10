import PrismaticBurst from "./PrismaticBurst";
import Particles from "./Particles";
import GradientBlinds from "./GradientBlinds";
import PlasmaWave from "./PlasmaWave";
import SoftAurora from "./SoftAurora";
import LiquidEther from "./LiquidEther";
import Ferrofluid from "./Ferrofluid";
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

    case "particles":
      return (
        <Particles
          particleColors={["#ffffff", AZUL_CLARO]}
          particleCount={160}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={90}
          sizeRandomness={1}
          alphaParticles
          moveParticlesOnHover={conPuntero}
          particleHoverFactor={0.8}
          disableRotation={false}
        />
      );

    case "blinds":
      return (
        <GradientBlinds
          gradientColors={[AZUL_CLARO, AZUL_HONDO]}
          angle={20}
          noise={0.12}
          blindCount={14}
          blindMinWidth={48}
          spotlightRadius={0.6}
          spotlightSoftness={1.2}
          spotlightOpacity={0.9}
          mouseDampening={conPuntero ? 0.15 : 0}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      );

    case "plasma":
      return (
        <PlasmaWave
          colors={[AZUL, AZUL_CLARO]}
          speed1={0.05}
          speed2={0.05}
          focalLength={0.55}
          bend1={1}
          bend2={0.5}
          dir2={-1}
          rotationDeg={0}
        />
      );

    case "aurora":
      return (
        <SoftAurora
          speed={0.45}
          scale={1.1}
          brightness={1.1}
          color1={CLARO}
          color2={AZUL}
          noiseFrequency={2.2}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1.2}
          octaveDecay={0.1}
          layerOffset={0.4}
          colorSpeed={0.8}
          enableMouseInteraction={conPuntero}
          mouseInfluence={0.2}
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

    case "ferro":
      return (
        <Ferrofluid
          colors={[AZUL_CLARO, AZUL, CLARO]}
          speed={0.4}
          scale={0.7}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={3}
          shimmer={1}
          glow={2}
          flowDirection="right"
          opacity={1}
          mouseInteraction={conPuntero}
          mouseStrength={1}
          mouseRadius={0.3}
          mixBlendMode="lighten"
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


