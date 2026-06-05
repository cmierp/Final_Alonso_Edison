import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

export default function QuienesSomos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        className="mb-20 text-center"
      >
        <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Nuestra Empresa</p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">Quiénes Somos</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-px bg-primary/10">
        {/* Grupo Inmobiliario */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="bg-background p-10 md:p-14"
        >
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">Grupo Inmobiliario</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Más de tres décadas transformando la ciudad
            </h3>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-6">
              Somos un grupo inmobiliario con más de 30 años de trayectoria en el sector. Nuestra especialidad es identificar y transformar edificios en las zonas más céntricas y singulares de la Ciudad de México, desarrollando proyectos que generan valor real para sus habitantes e inversionistas.
            </p>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed">
              Somos conscientes de la urgente necesidad de vivienda en el país. Por eso cada proyecto que emprendemos está orientado a transformar espacios existentes, mejorar el entorno urbano y crear patrimonio duradero.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-primary/15">
            <div className="bg-background p-6">
              <p className="font-serif text-4xl text-primary mb-1">30+</p>
              <p className="font-sans text-xs text-foreground/40 tracking-wide uppercase">Años de experiencia</p>
            </div>
            <div className="bg-background p-6">
              <p className="font-serif text-4xl text-primary mb-1">CDMX</p>
              <p className="font-sans text-xs text-foreground/40 tracking-wide uppercase">Zonas céntricas</p>
            </div>
          </div>
        </motion.div>

        {/* BFC Arquitectos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="bg-card p-10 md:p-14"
        >
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">BFC Arquitectos</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Ingeniería de obra con visión estratégica
            </h3>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-6">
              BFC Arquitectos es un equipo de profesionales de la construcción con experiencia nacional e internacional. Nos especializamos en coordinar, supervisar y administrar obras de edificación medianas y grandes dentro del territorio nacional.
            </p>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed">
              Ofrecemos a clientes públicos y privados nuestro conocimiento, herramientas propias y experiencia en gerencia de obras para ejecutar proyectos con objetivos claros de tiempo, costo y calidad. Nuestras plataformas de control han redefinido los estándares de gestión en la construcción.
            </p>
          </div>

          <div className="border border-primary/20 p-6">
            <p className="font-sans text-xs text-foreground/40 tracking-[0.2em] uppercase mb-3">Especialidad</p>
            <div className="space-y-2">
              {["Coordinación y supervisión de obra", "Gerencia de proyectos de edificación", "Herramientas informáticas propias", "Control de tiempo, costo y calidad"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary flex-shrink-0" />
                  <p className="font-sans text-sm text-foreground/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
