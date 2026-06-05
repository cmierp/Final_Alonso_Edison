import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const objetivos = [
  "Mejorar el entorno urbano",
  "Generar plusvalía en las zonas de intervención",
  "Crear vivienda en zonas urbanas estratégicas",
  "Cubrir la demanda de vivienda en la república",
  "Generar fuentes de empleo formal",
  "Fomentar la inversión patrimonial inmobiliaria",
  "Eficientar y dignificar espacios existentes",
];

export default function Objetivos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="objetivos"
      className="py-24 md:py-36 relative overflow-hidden"
      ref={ref}
      style={{ background: "hsl(30 15% 4%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Nuestra Misión</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Transformar<br />edificios.<br />
              <span className="text-primary">Mejorar ciudades.</span><br />
              Crear valor.
            </h2>
            <p className="font-sans text-sm text-foreground/50 leading-relaxed">
              Cada proyecto que emprendemos es una oportunidad de devolver a la ciudad un espacio con dignidad, función y belleza. Nuestros objetivos no son solo empresariales — son urbanos y sociales.
            </p>
          </motion.div>

          {/* Right: list */}
          <div className="space-y-px">
            {objetivos.map((obj, i) => (
              <motion.div
                key={obj}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-center gap-6 p-6 bg-background border-b border-primary/10 group hover:bg-card transition-colors duration-300"
              >
                <span className="font-serif text-2xl text-primary/30 group-hover:text-primary/60 transition-colors duration-300 w-8 text-right flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-px h-6 bg-primary/20 flex-shrink-0" />
                <p className="font-sans text-sm md:text-base text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                  {obj}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
