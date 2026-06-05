import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Train, Building2, Trees, ShoppingBag, Landmark, Map } from "lucide-react";

const puntosInteres = [
  { icon: Train, label: "Metro Revolución", dist: "5 min caminando", desc: "Línea 2 — conexión directa al centro y sur de la ciudad" },
  { icon: Building2, label: "Av. Paseo de la Reforma", dist: "8 min caminando", desc: "Eje financiero y cultural más importante de la CDMX" },
  { icon: Building2, label: "Centro Histórico CDMX", dist: "10 min en transporte", desc: "Patrimonio Mundial de la Humanidad — UNESCO" },
  { icon: Trees, label: "Parque Sullivan", dist: "4 min caminando", desc: "Espacio verde urbano con actividades culturales" },
  { icon: Landmark, label: "Palacio de Bellas Artes", dist: "12 min en transporte", desc: "Referente cultural y arquitectónico de México" },
  { icon: ShoppingBag, label: "Zona Rosa", dist: "10 min caminando", desc: "Comercio, gastronomía y vida urbana activa" },
  { icon: Map, label: "Metrobús Reforma", dist: "3 min caminando", desc: "Corredor rápido norte-sur sobre Reforma" },
  { icon: Building2, label: "Torre Mayor / WTC", dist: "15 min en transporte", desc: "Distrito corporativo y de negocios de primer nivel" },
];

const contextValues = [
  {
    title: "Historia y Patrimonio",
    desc: "La Colonia Tabacalera es uno de los barrios con mayor concentración de arquitectura Art Déco y Porfiriana en la Ciudad de México. Sus calles son un museo vivo de la historia urbana de la capital.",
  },
  {
    title: "Conectividad Total",
    desc: "Ubicada en el corazón de la ciudad, Tabacalera cuenta con acceso directo al Metro, Metrobús, ecobici y principales ejes viales — con tiempos de traslado mínimos a cualquier punto de la CDMX.",
  },
  {
    title: "Valor Urbano Creciente",
    desc: "La revalorización de Tabacalera como barrio cultural y residencial de primer nivel ha generado una demanda sostenida y una plusvalía documentada que supera a muchas zonas periféricas de mayor especulación.",
  },
];

export default function UbicacionPage() {
  return (
    <main>
      <PageHeader
        label="Localización"
        title="Tabacalera:"
        titleAccent="historia, conectividad y valor urbano"
        subtitle="Una de las colonias más céntricas, conectadas e históricamente ricas de la Ciudad de México. Una ubicación que combina el valor del pasado con las oportunidades del presente."
      />

      {/* Map + Address */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-20">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background overflow-hidden"
          >
            <iframe
              title="Ubicación Edison 58"
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1) brightness(0.6)", display: "block" }}
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8!2d-99.1598!3d19.4355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f85b60e0c6d5%3A0x12c34!2sEdison%2058%2C%20Tabacalera%2C%20Cuauht%C3%A9moc%2C%2006030%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1"
              data-testid="map-ubicacion"
            />
            <div className="p-8 border-t border-primary/10">
              <p className="font-serif text-lg text-foreground mb-1">Calle Edison 58</p>
              <p className="font-sans text-sm text-foreground/45">Colonia Tabacalera, Alcaldía Cuauhtémoc</p>
              <p className="font-sans text-sm text-primary mt-1">Ciudad de México, C.P. 06030</p>
            </div>
          </motion.div>

          {/* Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-card p-10 md:p-12"
          >
            <p className="font-sans text-xs tracking-[0.3em] text-primary uppercase mb-8">Conectividad y Entorno</p>
            <div className="space-y-px">
              {puntosInteres.map((punto, i) => (
                <motion.div
                  key={punto.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-5 py-5 border-b border-primary/10 last:border-0 group"
                >
                  <div className="w-10 h-10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-primary/50 transition-colors duration-300">
                    <punto.icon size={16} className="text-primary/55" strokeWidth={1} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-sans text-sm text-foreground/80">{punto.label}</p>
                      <span className="font-sans text-xs text-primary/60 ml-4 whitespace-nowrap">{punto.dist}</span>
                    </div>
                    <p className="font-sans text-xs text-foreground/35">{punto.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Context values */}
        <div className="grid md:grid-cols-3 gap-px bg-primary/10">
          {contextValues.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-10 md:p-12"
            >
              <div className="w-8 h-px bg-primary/40 mb-6" />
              <h3 className="font-serif text-xl text-foreground mb-4">{item.title}</h3>
              <p className="font-sans text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ background: "hsl(30 15% 4%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <svg width="60" height="14" viewBox="0 0 60 14" fill="none" className="mx-auto mb-8">
            <rect x="26" y="3" width="8" height="8" transform="rotate(45 30 7)" stroke="hsl(39 46% 61%)" strokeWidth="0.8" fill="none"/>
            <line x1="0" y1="7" x2="22" y2="7" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
            <line x1="38" y1="7" x2="60" y2="7" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
          </svg>
          <p className="font-serif text-2xl md:text-3xl text-foreground/80 italic leading-relaxed mb-6">
            "Vivir en Tabacalera no es solo vivir en una colonia. Es vivir en la memoria viva de una ciudad que se construyó con ambición y belleza."
          </p>
          <p className="font-sans text-xs text-foreground/30 tracking-[0.3em] uppercase">Edison 58 · Colonia Tabacalera, CDMX</p>
        </div>
      </section>

      <CTABanner
        title="Ven a conocer la ubicación"
        subtitle="Agenda una visita y recorre la Colonia Tabacalera. Descubrirás por qué Edison 58 es una de las oportunidades más singulares de la CDMX."
      />
    </main>
  );
}
