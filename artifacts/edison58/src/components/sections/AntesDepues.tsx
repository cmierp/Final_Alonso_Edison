import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  id: number;
  name: string;
  location: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Edificio Garibaldi",
    location: "Centro Histórico, CDMX",
    description: "Transformación integral de edificio porfiriano: restauración de fachada, rehabilitación estructural y reconversión a uso habitacional mixto.",
  },
  {
    id: 2,
    name: "Casa Reforma",
    location: "Juárez, CDMX",
    description: "Recuperación de inmueble Art Nouveau con mantenimiento de elementos originales. Conversión a departamentos de lujo con amenidades modernas.",
  },
  {
    id: 3,
    name: "Palacio Santa María",
    location: "Santa María la Ribera, CDMX",
    description: "Rehabilitación de edificio catalogado del siglo XIX. Preservación de ornamentación original con intervención contemporánea en interiores.",
  },
];

function BeforeAfterCard({ project }: { project: Project }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pos);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePosition(e.clientX); };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX); };

  return (
    <div className="bg-card border border-primary/15 overflow-hidden group hover:border-primary/30 transition-colors duration-500">
      {/* Before/After slider */}
      <div
        ref={containerRef}
        className="relative aspect-[16/9] cursor-col-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        data-testid={`before-after-slider-${project.id}`}
      >
        {/* ANTES */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "hsl(30 10% 8%)" }}>
          <div className="text-center">
            <p className="font-sans text-xs tracking-[0.4em] text-foreground/20 uppercase mb-2">Estado Original</p>
            <p className="font-serif text-2xl text-foreground/10">ANTES</p>
          </div>
        </div>

        {/* DESPUÉS overlay */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, hsl(30 20% 12%), hsl(39 30% 10%))" }}
          >
            <div className="text-center">
              <p className="font-sans text-xs tracking-[0.4em] text-primary/40 uppercase mb-2">Transformado</p>
              <p className="font-serif text-2xl text-primary/30">DESPUÉS</p>
            </div>
          </div>
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-primary z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 6 L1 6 M1 6 L3 4 M1 6 L3 8" stroke="hsl(30 15% 5%)" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M8 6 L11 6 M11 6 L9 4 M11 6 L9 8" stroke="hsl(30 15% 5%)" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="font-sans text-xs tracking-[0.2em] text-foreground/50 uppercase bg-background/50 px-2 py-1">Antes</span>
        </div>
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="font-sans text-xs tracking-[0.2em] text-primary/70 uppercase bg-background/50 px-2 py-1">Después</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl text-foreground mb-1">{project.name}</h3>
        <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-4">{project.location}</p>
        <p className="font-sans text-sm text-foreground/50 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}

export default function AntesDepues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="transformaciones" className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Portfolio</p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
          Antes y después:<br />
          <span className="text-primary">transformamos espacios con historia</span>
        </h2>
        <p className="font-sans text-sm text-foreground/50 max-w-lg mx-auto leading-relaxed">
          Cada proyecto es una conversación entre el pasado y el futuro. Arrastrá el control para descubrir la transformación.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-px bg-primary/10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <BeforeAfterCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
