import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import imgRender0 from "@assets/edison58_1779141685987.jpeg";
import imgRender1 from "@assets/Renders_edison_(1)_1779141685988.jpeg";
import imgRender2 from "@assets/Renders_edison_(2)_1779141685990.jpeg";
import imgRender3 from "@assets/Renders_edison_(3)_1779141685990.jpeg";
import imgRender4 from "@assets/Renders_edison_(4)_1779141685991.jpeg";
import imgRender5 from "@assets/Renders_edison_(5)_1779141685991.jpeg";
import imgRender6 from "@assets/Renders_edison_(6)_1779141685992.jpeg";
import imgRender7 from "@assets/Renders_edison_(7)_1779141685992.jpeg";

const galleryItems = [
  {
    id: 1,
    label: "Fachada — Edison 58",
    category: "Renders",
    desc: "Vista exterior del inmueble histórico intervenido en Colonia Tabacalera",
    src: imgRender0,
  },
  {
    id: 2,
    label: "Sala — Comedor",
    category: "Renders",
    desc: "Espacio integrado con materiales cálidos y acabados de diseño",
    src: imgRender1,
  },
  {
    id: 3,
    label: "Cocina",
    category: "Renders",
    desc: "Cocina abierta con cubiertas de mármol y herrajes dorados",
    src: imgRender2,
  },
  {
    id: 4,
    label: "Recámara Principal",
    category: "Renders",
    desc: "Suite con iluminación natural cenital y vestidor integrado",
    src: imgRender3,
  },
  {
    id: 5,
    label: "Baño — Suite",
    category: "Renders",
    desc: "Baño en mármol con luminaria Art Déco y herrajes dorados",
    src: imgRender4,
  },
  {
    id: 6,
    label: "Terraza Privada",
    category: "Renders",
    desc: "Terraza con vista a la colonia Tabacalera al atardecer",
    src: imgRender5,
  },
  {
    id: 7,
    label: "Área Común — Lobby",
    category: "Renders",
    desc: "Recepción con elementos arquitectónicos originales restaurados",
    src: imgRender6,
  },
  {
    id: 8,
    label: "Vista Nocturna",
    category: "Renders",
    desc: "Iluminación exterior e interior del inmueble al anochecer",
    src: imgRender7,
  },
];

export default function GaleriaPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryItems;

  const currentIndex =
    lightbox !== null ? filtered.findIndex((g) => g.id === lightbox) : -1;
  const currentItem = currentIndex >= 0 ? filtered[currentIndex] : null;

  const prev = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id);
  };
  const next = () => {
    if (currentIndex < filtered.length - 1)
      setLightbox(filtered[currentIndex + 1].id);
  };

  return (
    <main>
      <PageHeader
        label="Documentación Visual"
        title="Renders &"
        titleAccent="Archivo Arquitectónico"
        subtitle="Una selección curada de renders del proyecto Edison 58 — desde los interiores intervenidos hasta la lectura nocturna de su fachada histórica."
      />

      <section className="py-14 md:py-28 px-4 md:px-12 max-w-6xl mx-auto">
        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-primary/10"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => setLightbox(item.id)}
              data-testid={`gallery-item-${item.id}`}
              className="bg-background aspect-square relative group cursor-pointer overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/12 group-hover:bg-background/4 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-3 bg-gradient-to-t from-background/72 via-background/32 to-transparent">
                <p className="font-sans text-[7px] md:text-[10px] text-white/80 tracking-[0.1em] uppercase leading-tight line-clamp-1">
                  {item.label}
                </p>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
                <p className="font-sans text-[9px] text-primary uppercase tracking-[0.15em] mb-0.5">
                  {item.category}
                </p>
                <p className="font-serif text-sm text-white">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="font-sans text-xs text-white/40 text-center py-16 tracking-widest uppercase">
            Sin imágenes en esta categoría
          </p>
        )}

        <p className="font-sans text-xs text-white/40 text-center mt-5 md:mt-6">
          Imágenes y renders de carácter ilustrativo. Sujetos a actualización.
        </p>
      </section>

      {/* Lightbox */}
      {lightbox !== null && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/97 flex flex-col items-center justify-center p-4 md:p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            data-testid="button-lightbox-close"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/55 hover:text-white transition-colors p-2"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>

          <p className="absolute top-4 left-4 md:top-6 md:left-6 font-sans text-xs text-white/30">
            {currentIndex + 1} / {filtered.length}
          </p>

          {currentIndex > 0 && (
            <button
              data-testid="button-lightbox-prev"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-12 md:w-16 flex items-center justify-center text-white/45 hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {currentIndex < filtered.length - 1 && (
            <button
              data-testid="button-lightbox-next"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-24 w-12 md:w-16 flex items-center justify-center text-white/45 hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight size={28} />
            </button>
          )}

          <div
            className="w-full max-w-3xl mx-auto px-10 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full border border-primary/15 overflow-hidden mb-3 md:mb-4">
              <img
                src={currentItem.src}
                alt={currentItem.label}
                className="w-full max-h-[55vh] object-contain bg-background"
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-sans text-[10px] text-primary uppercase tracking-[0.2em] mb-1">
                  {currentItem.category}
                </p>
                <p className="font-serif text-sm md:text-base text-white/90">
                  {currentItem.label}
                </p>
                <p className="font-sans text-xs text-white/50 mt-0.5">
                  {currentItem.desc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <CTABanner
        title="¿Te gustaría ver el proyecto en persona?"
        subtitle="Agenda una visita y recorre Edison 58 con uno de nuestros asesores. La arquitectura cobra vida cuando la experimentas."
      />
    </main>
  );
}
