import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Landmark, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

const DecoRule = () => (
  <div className="flex items-center gap-4 mb-16">
    <div className="h-px flex-1 bg-primary/20" />
    <svg width="60" height="14" viewBox="0 0 60 14" fill="none">
      <rect x="26" y="3" width="8" height="8" transform="rotate(45 30 7)" stroke="hsl(39 46% 61%)" strokeWidth="0.8" fill="none"/>
      <line x1="0" y1="7" x2="22" y2="7" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
      <line x1="38" y1="7" x2="60" y2="7" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
    </svg>
    <div className="h-px flex-1 bg-primary/20" />
  </div>
);

const cards = [
  {
    icon: MapPin,
    title: "Ubicación Estratégica",
    desc: "En el corazón de la Colonia Tabacalera, una de las zonas más conectadas de la Ciudad de México, con acceso inmediato al Centro Histórico, Reforma y principales ejes urbanos.",
  },
  {
    icon: Landmark,
    title: "Diseño con Legado",
    desc: "Un edificio catalogado por el INBA e INAH, obra de los maestros Teodoro Kunhardt y Joaquín Capilla. Cada detalle arquitectónico es testimonio de una época dorada del diseño mexicano.",
  },
  {
    icon: TrendingUp,
    title: "Inversión Patrimonial",
    desc: "Adquirir en Edison 58 es posicionarse en un mercado con plusvalía sostenida, en una zona con alta demanda habitacional y un entorno urbano que se revaloriza año con año.",
  },
];

export default function ValorProyecto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valor" className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto" ref={ref}>
      <DecoRule />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        className="text-center mb-20"
      >
        <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">El Proyecto</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
          Un inmueble con historia.<br />
          <span className="text-primary">Una oportunidad con futuro.</span>
        </h2>
        <p className="font-sans text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
          Edison 58 no es únicamente un desarrollo inmobiliario. Es la recuperación y transformación de un edificio con valor arquitectónico, ubicado en una de las zonas más céntricas y conectadas de la Ciudad de México.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-px bg-primary/10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 1}
            className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-500"
          >
            <div className="mb-8">
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300">
                <card.icon size={20} className="text-primary" strokeWidth={1} />
              </div>
              <div className="h-px w-8 bg-primary/40 mb-6" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 tracking-wide">{card.title}</h3>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
