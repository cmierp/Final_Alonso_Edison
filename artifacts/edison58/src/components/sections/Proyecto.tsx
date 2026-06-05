import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const placeholders = [
  { label: "Fachada Principal", sub: "Vista exterior" },
  { label: "Renders Interiores", sub: "Espacios habitacionales" },
  { label: "Planos Arquitectónicos", sub: "Tipologías y distribución" },
  { label: "Áreas Comunes", sub: "Amenidades del proyecto" },
  { label: "Detalles Art Déco", sub: "Elementos de conservación" },
  { label: "Renders 3D", sub: "Vista general del desarrollo" },
];

export default function Proyecto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="proyecto"
      className="py-24 md:py-36 relative overflow-hidden"
      ref={ref}
      style={{ background: "hsl(30 15% 4%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Edison 58 · Tabacalera</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-lg">
              Una nueva etapa para<br />
              <span className="text-primary">un edificio con historia</span>
            </h2>
            <p className="font-sans text-sm text-foreground/50 max-w-sm leading-relaxed">
              La intervención en Edison 58 está orientada a renovar, preservar y comercializar espacios habitacionales de alto valor arquitectónico en una zona céntrica de la Ciudad de México.
            </p>
          </div>
        </motion.div>

        {/* Description block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-primary/20 p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-primary text-xs tracking-[0.3em] uppercase font-sans mb-3">Ubicación</p>
              <p className="font-serif text-lg text-foreground mb-2">Calle Edison 58</p>
              <p className="font-sans text-sm text-foreground/50">Colonia Tabacalera, Alcaldía Cuauhtémoc, Ciudad de México</p>
            </div>
            <div>
              <p className="text-primary text-xs tracking-[0.3em] uppercase font-sans mb-3">Tipo de Proyecto</p>
              <p className="font-serif text-lg text-foreground mb-2">Renovación y Conservación</p>
              <p className="font-sans text-sm text-foreground/50">Edificio histórico con valor arquitectónico intervenido para uso habitacional e inversión</p>
            </div>
            <div>
              <p className="text-primary text-xs tracking-[0.3em] uppercase font-sans mb-3">Clasificación</p>
              <p className="font-serif text-lg text-foreground mb-2">Patrimonio INBA / INAH</p>
              <p className="font-sans text-sm text-foreground/50">Catalogado como patrimonio histórico arquitectónico de la Ciudad de México</p>
            </div>
          </div>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-primary/10">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background aspect-[4/3] border border-primary/10 flex flex-col items-center justify-center gap-3 group hover:border-primary/30 hover:bg-card transition-all duration-500 cursor-pointer p-4"
            >
              <div className="w-10 h-px bg-primary/30 group-hover:w-16 transition-all duration-300" />
              <p className="font-serif text-sm md:text-base text-foreground/60 group-hover:text-foreground text-center transition-colors duration-300">{item.label}</p>
              <p className="font-sans text-xs text-foreground/30 tracking-widest uppercase group-hover:text-primary/60 transition-colors duration-300 text-center">{item.sub}</p>
              <div className="w-10 h-px bg-primary/30 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-sans text-xs text-foreground/25 text-center mt-6 tracking-wide"
        >
          Las imágenes y renders son de carácter ilustrativo. Material comercial en preparación.
        </motion.p>
      </div>
    </section>
  );
}
