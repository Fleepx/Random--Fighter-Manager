import Particles from "./Particles";
import { useReveal } from "../hooks/useReveal";
import { usePunteroFino } from "../hooks/usePunteroFino";
import "./BandaLema.css";

const LEMA = ["Administra", "Cobra", "Crece"];

export default function BandaLema() {
  const ref = useReveal({ threshold: 0.3 });
  const conPuntero = usePunteroFino();

  return (
    <div className="banda rf-reveal" ref={ref}>
      {/* Particulas sobre el azul. Van con aria-hidden y detras del lema:
          son ambiente, no contenido.
          El seguimiento del cursor se apaga sin puntero fino, donde no
          aporta nada y el bucle de render igual seguiria corriendo. */}
      <div className="banda__particulas" aria-hidden="true">
        <Particles
          particleColors={["#ffffff", "#BBDDFF"]}
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
