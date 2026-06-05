import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  id: number;
  name: string;
  location: string;
  year: string;
  description: string;
  tagsBefore: string[];
  tagsAfter: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Edificio Garibaldi",
    location: "Centro Histórico, CDMX",
    year: "2019 — 2021",
    description: "Transformación integral de edificio porfiriano de 1905. Restauración completa de fachada con conservación de elementos originales, rehabilitación estructural y reconversión a uso habitacional mixto con 24 departamentos.",
    tagsBefore: ["Fachada deteriorada", "Estructura comprometida", "Sin uso activo"],
    tagsAfter: ["Fachada restaurada", "14 pisos habitables", "24 departamentos"],
  },
  {
    id: 2,
    name: "Casa Reforma",
    location: "Colonia Juárez, CDMX",
    year: "2020 — 2022",
    description: "Recuperación de inmueble Art Nouveau con mantenimiento escrupuloso de elementos originales. Conversión a departamentos de alto valor con amenidades contemporáneas integradas sin alterar la identidad del edificio.",
    tagsBefore: ["Inmueble catalogado sin uso", "Deterioro por abandono", "Riesgo estructural"],
    tagsAfter: ["8 departamentos de lujo", "Elementos originales preservados", "Plusvalía documentada"],
  },
  {
    id: 3,
    name: "Palacio Santa María",
    location: "Santa María la Ribera, CDMX",
    year: "2021 — 2023",
    description: "Rehabilitación de edificio catalogado del siglo XIX. Preservación total de ornamentación original, reforzamiento estructural sin intervención visual y reinterpretación contemporánea de los espacios interiores.",
    tagsBefore: ["Construcción del S. XIX", "Sin rehabilitación reciente", "Clasificado INAH"],
    tagsAfter: ["Usos mixtos activos", "Ornamentación preservada", "Referente del barrio"],
  },
];

function BeforeAfterSlider({ project }: { project: Project }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pos);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-video cursor-col-resize select-none overflow-hidden"
      onMouseDown={() => { isDragging.current = true; }}
      onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX); }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      data-testid={`before-after-slider-${project.id}`}
    >
      {/* ANTES */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ background: "hsl(30 10% 8%)" }}>
        <div className="text-center p-6">
          <p className="font-sans text-xs tracking-[0.4em] text-foreground/15 uppercase mb-2">Estado Original</p>
          <p className="font-serif text-4xl text-foreground/8">ANTES</p>
        </div>
      </div>

      {/* DESPUÉS */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, hsl(30 20% 13%), hsl(39 30% 11%))" }}
        >
          <div className="text-center p-6">
            <p className="font-sans text-xs tracking-[0.4em] text-primary/30 uppercase mb-2">Transformado</p>
            <p className="font-serif text-4xl text-primary/15">DESPUÉS</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-px bg-primary z-10" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-primary flex items-center justify-center shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8 L1 8 M1 8 L4 5 M1 8 L4 11" stroke="hsl(30 15% 5%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 8 L15 8 M15 8 L12 5 M15 8 L12 11" stroke="hsl(30 15% 5%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="font-sans text-xs tracking-[0.2em] uppercase bg-background/60 text-foreground/50 px-2.5 py-1">Antes</span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="font-sans text-xs tracking-[0.2em] uppercase bg-background/60 text-primary/70 px-2.5 py-1">Después</span>
      </div>
    </div>
  );
}

export default function AntesDespuesPage() {
  return (
    <main>
      <PageHeader
        label="Portfolio"
        title="Antes y después:"
        titleAccent="transformamos espacios con historia"
        subtitle="Cada proyecto es una conversación entre el pasado y el futuro. Arrastra el control para descubrir la transformación."
      />

      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-px bg-primary/10"
            >
              {/* Slider */}
              <div className="bg-background overflow-hidden">
                <BeforeAfterSlider project={project} />
              </div>

              {/* Info */}
              <div className={`bg-card p-10 md:p-14 flex flex-col justify-center ${i % 2 === 0 ? "md:order-last" : "md:order-first"}`}>
                <p className="font-sans text-xs text-primary tracking-[0.3em] uppercase mb-4">{project.year}</p>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{project.name}</h2>
                <p className="font-sans text-xs text-foreground/40 tracking-wide uppercase mb-6">{project.location}</p>
                <div className="h-px w-12 bg-primary/30 mb-6" />
                <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-8">{project.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-sans text-xs text-foreground/30 tracking-[0.2em] uppercase mb-3">Estado inicial</p>
                    <div className="space-y-2">
                      {project.tagsBefore.map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-foreground/20 flex-shrink-0" />
                          <span className="font-sans text-xs text-foreground/40">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-primary/60 tracking-[0.2em] uppercase mb-3">Resultado</p>
                    <div className="space-y-2">
                      {project.tagsAfter.map((t) => (
                        <div key={t} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary flex-shrink-0" />
                          <span className="font-sans text-xs text-foreground/60">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Edison 58 será nuestra próxima transformación"
        subtitle="Sé parte de un proyecto que convierte patrimonio arquitectónico en valor real. Agenda una visita y conoce el potencial."
      />
    </main>
  );
}
