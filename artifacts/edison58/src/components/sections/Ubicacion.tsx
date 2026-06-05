import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Train, Building2, Trees, ShoppingBag } from "lucide-react";

const puntosInteres = [
  { icon: Train, label: "Metro Revolución", dist: "5 min caminando" },
  { icon: Building2, label: "Centro Histórico CDMX", dist: "10 min en transporte" },
  { icon: Building2, label: "Av. Paseo de la Reforma", dist: "8 min caminando" },
  { icon: Trees, label: "Parque Sullivan", dist: "4 min caminando" },
  { icon: ShoppingBag, label: "Plaza Garibaldi", dist: "6 min en transporte" },
  { icon: Building2, label: "Palacio Bellas Artes", dist: "12 min en transporte" },
];

export default function Ubicacion() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ubicacion" className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Localización</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-lg">
            Tabacalera: historia,<br />
            <span className="text-primary">conectividad y valor urbano</span>
          </h2>
          <p className="font-sans text-sm text-foreground/50 max-w-sm leading-relaxed">
            La Colonia Tabacalera es una de las zonas más céntricas, conectadas e históricamente ricas de la Ciudad de México. Una ubicación que combina el valor del pasado con las oportunidades del presente.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-px">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background"
        >
          <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
            <iframe
              title="Ubicación Edison 58"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1) brightness(0.7)" }}
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-99.1598!3d19.4355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f85b60e0c6d5%3A0x12c34!2sEdison%2058%2C%20Tabacalera%2C%20Cuauht%C3%A9moc%2C%2006030%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1"
              data-testid="map-ubicacion"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
          <div className="p-8 border-t border-primary/10">
            <p className="font-serif text-lg text-foreground mb-1">Calle Edison 58</p>
            <p className="font-sans text-sm text-foreground/50">Colonia Tabacalera, Alcaldía Cuauhtémoc</p>
            <p className="font-sans text-sm text-primary mt-1">Ciudad de México, C.P. 06030</p>
          </div>
        </motion.div>

        {/* Points of interest */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card p-10 md:p-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-8">Conectividad y entorno</p>
          <div className="space-y-px">
            {puntosInteres.map((punto, i) => (
              <motion.div
                key={punto.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                className="flex items-center gap-5 py-5 border-b border-primary/10 last:border-0 group hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors duration-300">
                  <punto.icon size={16} className="text-primary/60" strokeWidth={1} />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm text-foreground/80">{punto.label}</p>
                  <p className="font-sans text-xs text-primary/60 mt-0.5">{punto.dist}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 border-t border-primary/10 pt-8">
            <p className="font-sans text-xs text-foreground/40 leading-relaxed">
              La Colonia Tabacalera cuenta con acceso a múltiples líneas del Metro, Metrobús, y se ubica a minutos del Centro Histórico y Paseo de la Reforma — los dos ejes más importantes de la Ciudad de México.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
