import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@assets/edison58_banner_(1)_1779293997260.jpeg";

const DecoOrnament = () => (
  <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="mx-auto">
    <line x1="0" y1="10" x2="50" y2="10" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
    <rect x="54" y="6" width="8" height="8" transform="rotate(45 58 10)" stroke="hsl(39 46% 61%)" strokeWidth="0.8" fill="none"/>
    <line x1="66" y1="10" x2="120" y2="10" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
  </svg>
);

const DecoCorner = ({ className }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M2 38 L2 2 L38 2" stroke="hsl(39 46% 61%)" strokeWidth="1" fill="none"/>
    <path d="M8 32 L8 8 L32 8" stroke="hsl(39 46% 61%)" strokeWidth="0.4" fill="none"/>
  </svg>
);

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay — preserves text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, hsl(30 20% 6% / 0.72) 0%, hsl(30 15% 5% / 0.55) 40%, hsl(30 10% 4% / 0.80) 100%)" }}
      />

      {/* Vertical gold lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

      {/* Corner ornaments */}
      <DecoCorner className="absolute top-12 left-12 hidden md:block" />
      <DecoCorner className="absolute top-12 right-12 rotate-90 hidden md:block" />
      <DecoCorner className="absolute bottom-12 left-12 -rotate-90 hidden md:block" />
      <DecoCorner className="absolute bottom-12 right-12 rotate-180 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-sans font-light">
            Colonia Tabacalera · Ciudad de México
          </p>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="font-serif text-7xl md:text-[10rem] lg:text-[13rem] tracking-[0.15em] text-foreground leading-none"
            style={{ textShadow: "0 0 80px hsl(39 46% 61% / 0.15)" }}
          >
            EDISON
          </h1>
          <div className="flex items-center justify-center gap-4 -mt-2 md:-mt-4">
            <div className="h-px flex-1 max-w-[80px] md:max-w-[200px] bg-primary/40" />
            <span className="font-serif text-5xl md:text-8xl lg:text-[9rem] tracking-[0.2em] text-primary leading-none">58</span>
            <div className="h-px flex-1 max-w-[80px] md:max-w-[200px] bg-primary/40" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-8 md:my-10"
        >
          <DecoOrnament />
        </motion.div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90 max-w-2xl mx-auto leading-relaxed italic tracking-wide"
        >
          "Más que un desarrollo inmobiliario, es una declaración de diseño e historia."
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="font-sans text-sm md:text-base text-foreground/60 max-w-xl mx-auto mt-6 leading-relaxed font-light tracking-wide"
        >
          Un edificio con legado arquitectónico en la colonia Tabacalera, transformado para una nueva forma de habitar e invertir en la CDMX.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-12"
        >
          <button
            data-testid="button-hero-agendar"
            onClick={() => scrollTo("contacto")}
            className="px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 font-medium"
            style={{ boxShadow: "0 0 30px hsl(39 46% 61% / 0.2)" }}
          >
            Agendar Cita
          </button>
          <button
            data-testid="button-hero-conocer"
            onClick={() => scrollTo("proyecto")}
            className="px-10 py-4 border border-primary/50 text-primary font-sans text-sm tracking-[0.2em] uppercase hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            Conocer el Proyecto
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo("valor")}
        >
          <span className="text-primary/40 text-xs tracking-[0.3em] uppercase font-sans">Descubrir</span>
          <ChevronDown size={16} className="text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
