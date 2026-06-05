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

const obras = [
  {
    name: "Palacio Frontón México",
    subtitle: "Cesta Punta Jai Alai",
    desc: "Una de las obras más representativas del Art Déco en la Ciudad de México, declarada patrimonio arquitectónico de la nación.",
    year: "1929",
  },
  {
    name: "Casa O'Hea",
    subtitle: "Av. Paseo de la Reforma 346",
    desc: "Residencia neogótica civil que ejemplifica la maestría de Kunhardt & Capilla en la fusión de estilos para la burguesía mexicana del siglo XX.",
    year: "c. 1930",
  },
  {
    name: "Edificio Edison 58",
    subtitle: "Colonia Tabacalera, CDMX",
    desc: "Joya arquitectónica en el corazón de la Tabacalera, ahora transformada con visión contemporánea preservando su esencia histórica.",
    year: "Catalogado",
    highlight: true,
  },
];

export default function Historia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="historia"
      className="py-24 md:py-36 relative overflow-hidden"
      ref={ref}
      style={{ background: "hsl(30 15% 4%)" }}
    >
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="mb-20"
        >
          <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Arquitectura e Historia</p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-lg leading-tight">
              El legado detrás<br />
              <span className="text-primary">de Edison 58</span>
            </h2>
            <div className="max-w-sm">
              <p className="font-sans text-sm text-foreground/50 leading-relaxed">
                Obras de los maestros Teodoro Kunhardt & Joaquín Capilla, reconocidos por sus creaciones Art Déco y Neogótico Civil durante los siglos XIX y XX en México.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Architect banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="border border-primary/20 p-8 md:p-12 mb-16 relative"
        >
          <div className="absolute top-0 left-8 -translate-y-1/2">
            <span className="bg-background px-4 text-primary text-xs tracking-[0.3em] uppercase font-sans">Arquitectos</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Teodoro Kunhardt</h3>
              <div className="h-px w-16 bg-primary/40 mb-4" />
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">& Joaquín Capilla</h3>
            </div>
            <div className="flex-1">
              <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-6">
                Reconocidos maestros de la arquitectura mexicana, sus obras definen el carácter visual e histórico del México urbano del siglo XX. Sus edificios son documentos arquitectónicos vivos.
              </p>
              <div className="inline-flex items-center gap-3 border border-primary/30 px-5 py-3">
                <div className="w-1.5 h-1.5 bg-primary" />
                <span className="font-sans text-xs tracking-[0.2em] text-primary uppercase">Catalogados por INBA / INAH — Patrimonio Histórico Arquitectónico</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Obras */}
        <div className="space-y-px">
          {obras.map((obra, i) => (
            <motion.div
              key={obra.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 2}
              className={`flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-10 border-l-2 transition-colors duration-500 ${obra.highlight ? "border-primary bg-primary/5" : "border-primary/20 bg-card hover:bg-card/80"}`}
            >
              {/* Year */}
              <div className="md:w-32 flex-shrink-0">
                <span className={`font-serif text-3xl md:text-4xl font-light ${obra.highlight ? "text-primary" : "text-primary/50"}`}>
                  {obra.year}
                </span>
              </div>

              {/* Image placeholder */}
              <div className="md:w-48 flex-shrink-0">
                <div
                  className={`h-28 md:h-full border flex items-center justify-center ${obra.highlight ? "border-primary/40 bg-primary/5" : "border-primary/15 bg-primary/3"}`}
                >
                  <div className="text-center p-4">
                    <div className="text-primary/30 text-xs tracking-widest uppercase font-sans mb-1">Imagen</div>
                    <div className="text-primary/20 text-xs font-sans">Archivo Histórico</div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">{obra.name}</h3>
                <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-4">{obra.subtitle}</p>
                <p className="font-sans text-sm text-foreground/55 leading-relaxed">{obra.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
