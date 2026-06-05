import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { id: 1, label: "Fachada Art Déco", aspect: "tall", desc: "Vista exterior del edificio" },
  { id: 2, label: "Detalle Ornamental", aspect: "wide", desc: "Elementos decorativos originales" },
  { id: 3, label: "Interior Suite", aspect: "square", desc: "Render habitacional" },
  { id: 4, label: "Lobby Principal", aspect: "wide", desc: "Área de acceso restaurada" },
  { id: 5, label: "Terraza", aspect: "tall", desc: "Vista panorámica CDMX" },
  { id: 6, label: "Detalle Arquitectónico", aspect: "square", desc: "Molduras originales" },
];

export default function Galeria() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="galeria"
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
          <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Galería</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Renders & Documentación<br />
            <span className="text-primary">Arquitectónica</span>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-primary/10">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-background relative group cursor-pointer overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 ${item.aspect === "tall" ? "row-span-2" : item.aspect === "wide" ? "col-span-1" : ""}`}
              style={{ minHeight: item.aspect === "tall" ? "400px" : "200px" }}
              onClick={() => setLightbox(item.id)}
              data-testid={`gallery-item-${item.id}`}
            >
              {/* Placeholder visual */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  background: `linear-gradient(${135 + i * 20}deg, hsl(30 15% ${5 + i * 2}%), hsl(39 20% ${8 + i}%))`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-base text-foreground">{item.label}</p>
                    <p className="font-sans text-xs text-foreground/50 mt-1">{item.desc}</p>
                  </div>
                  <ZoomIn size={18} className="text-primary" />
                </div>
              </div>

              {/* Always-visible label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                <p className="font-sans text-xs text-foreground/40 tracking-widest uppercase">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-sans text-xs text-foreground/25 text-center mt-6 tracking-wide"
        >
          Renders e imágenes de carácter ilustrativo. Material sujeto a actualización.
        </motion.p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            data-testid="button-lightbox-close"
            className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <div className="max-w-3xl w-full">
            <div
              className="w-full aspect-video border border-primary/20 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(30 15% 8%), hsl(39 20% 12%))" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <p className="font-serif text-2xl text-foreground/20 mb-2">
                  {galleryItems.find(g => g.id === lightbox)?.label}
                </p>
                <p className="font-sans text-xs text-foreground/15 tracking-widest uppercase">
                  {galleryItems.find(g => g.id === lightbox)?.desc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
