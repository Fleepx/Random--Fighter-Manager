import PrismaticBurst from "./PrismaticBurst";
import LiquidEther from "./LiquidEther";
import MoltenMetal from "./MoltenMetal";
import Scanner from "./Scanner";
import LineWaves from "./LineWaves";
import Silk from "./Silk";
import Topography from "./Topography";
import PlasmaWave from "./PlasmaWave";
import Grainient from "./Grainient";
import Beams from "./Beams";
import Galaxy from "./Galaxy";
import LiquidChrome from "./LiquidChrome";
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
          /* "vertical" nombra el eje del BARRIDO, no la orientacion de las
             lineas: pone axis = p.y, las bandas varian a lo alto y salen
             acostadas, recorriendo la franja de arriba abajo. "horizontal"
             hace lo contrario y deja lineas paradas, que es lo que no
             queriamos. El nombre de la prop invita al error. */
          scanDirection="vertical"
          scale={1.2}
          frequency={2}
          ripple={0.22}
          /* Contra el alto, no contra el ancho: p.y va de -0.83 a 0.83, asi
             que la densidad se reparte en 138px. Con 9 salian bandas de 9px
             que titilaban; 4 las deja en unos 21px. */
          bandDensity={4}
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

    case "lineas":
      return (
        <LineWaves
          speed={0.25}
          innerLineCount={22}
          outerLineCount={26}
          warpIntensity={0.9}
          rotation={-20}
          edgeFadeWidth={0}
          colorCycleSpeed={0.7}
          brightness={0.28}
          color1={CLARO}
          color2={AZUL_CLARO}
          color3={AZUL}
          enableMouseInteraction={conPuntero}
          mouseInfluence={1.4}
        />
      );

    /* OPACO: tapa el azul de la banda en vez de sumarse. Se ve el efecto
       entero, no la franja con el efecto encima. */
    case "silk":
      return <Silk speed={4} scale={1.6} color={AZUL_OSCURO} noiseIntensity={1.2} rotation={0.3} />;

    case "topo":
      return (
        <Topography
          lowColor={AZUL_HONDO}
          midColor={AZUL}
          highColor={CLARO}
          speed={0.3}
          morphAmount={2.4}
          morphSpeed={0.05}
          bands={2}
          thickness={0.012}
          scale={1}
          pixelSize={1}
          glow={0.4}
          colorMode="elevation"
          contrast={3}
          brightness={1}
          fillBands={false}
          opacity={1}
          grain
          grainIntensity={0.03}
          mouseInteraction={conPuntero}
          mouseRadius={0.3}
          mouseStrength={0.4}
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

    /* OPACO, igual que Silk. */
    case "grain":
      return (
        <Grainient
          color1={AZUL_CLARO}
          color2={AZUL_OSCURO}
          color3={AZUL_HONDO}
          timeSpeed={0.2}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={1.4}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={220}
          noiseScale={2}
          grainAmount={0.08}
          grainScale={2}
          grainAnimated={false}
          contrast={1.4}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      );

    /* OPACO: monta su propio fondo negro dentro del lienzo. */
    case "beams":
      return (
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor={AZUL_CLARO}
          speed={1.6}
          noiseIntensity={1.4}
          scale={0.2}
          rotation={20}
        />
      );

    case "galaxia":
      return (
        <Galaxy
          density={1.1}
          starSpeed={0.4}
          speed={0.8}
          /* 210 grados cae en el azul; el 140 del ejemplo es verde. */
          hueShift={210}
          saturation={0.55}
          glowIntensity={0.35}
          twinkleIntensity={0.3}
          rotationSpeed={0.06}
          mouseInteraction={conPuntero}
          mouseRepulsion={conPuntero}
          repulsionStrength={1.6}
          transparent
        />
      );

    /* OPACO: su propio clearColor es blanco y el shader devuelve alfa 1. */
    case "cromo":
      return (
        <LiquidChrome
          baseColor={[0.02, 0.24, 0.45]}
          speed={0.25}
          amplitude={0.35}
          frequencyX={3}
          frequencyY={3}
          interactive={conPuntero}
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


