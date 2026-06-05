import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    value: "80%+",
    label: "Obras terminadas en tiempo o antes",
    detail: "Nuestra metodología de planeación garantiza entregas puntuales",
  },
  {
    value: "80%+",
    label: "Proyectos finalizados bajo presupuesto",
    detail: "Control riguroso de costos mediante herramientas propias de supervisión",
  },
  {
    value: "0",
    label: "Accidentes graves que lamentar",
    detail: "Seguridad de obra como principio irrenunciable en cada proyecto",
  },
];

export default function Resultados() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, hsl(39 46% 61%) 0px, hsl(39 46% 61%) 1px, transparent 1px, transparent 60px)"
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Trayectoria</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Experiencia que se mide<br />
            <span className="text-primary">en resultados</span>
          </h2>
          <p className="font-sans text-sm text-foreground/50 max-w-lg mx-auto leading-relaxed">
            Resultados respaldados por una metodología propia de planeación, control y supervisión de obra.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-primary/10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-background p-10 md:p-14 text-center group hover:bg-card transition-colors duration-500"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                className="font-serif text-6xl md:text-7xl text-primary mb-6 leading-none"
                style={{ textShadow: "0 0 40px hsl(39 46% 61% / 0.2)" }}
              >
                {m.value}
              </motion.p>
              <div className="w-8 h-px bg-primary/40 mx-auto mb-6" />
              <p className="font-sans text-sm text-foreground/80 font-medium tracking-wide mb-4 leading-snug">
                {m.label}
              </p>
              <p className="font-sans text-xs text-foreground/40 leading-relaxed">
                {m.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
