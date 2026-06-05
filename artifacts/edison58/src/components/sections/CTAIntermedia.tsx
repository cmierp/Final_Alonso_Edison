import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5215512345678";

export default function CTAIntermedia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="py-24 md:py-36 relative overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, hsl(30 15% 6%) 0%, hsl(39 20% 8%) 50%, hsl(30 15% 5%) 100%)"
      }}
    >
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Art Déco geometric background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="deco-cta" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="35" y="35" width="10" height="10" transform="rotate(45 40 40)" stroke="hsl(39 46% 61%)" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#deco-cta)"/>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-primary/30" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="5" y="5" width="10" height="10" transform="rotate(45 10 10)" stroke="hsl(39 46% 61%)" strokeWidth="0.8" fill="none"/>
            </svg>
            <div className="h-px w-16 bg-primary/30" />
          </div>

          <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-8">Agenda tu Visita</p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
            Conoce Edison 58 y agenda una visita para descubrir el valor de un proyecto que une historia, diseño e inversión.
          </h2>

          <p className="font-sans text-sm text-foreground/50 max-w-lg mx-auto leading-relaxed mb-12">
            Nuestro equipo de asesores está disponible para acompañarte en cada paso del proceso, desde la primera visita hasta la firma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-testid="button-cta-agendar"
              onClick={() => scrollTo("contacto")}
              className="px-12 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 font-medium"
              style={{ boxShadow: "0 0 40px hsl(39 46% 61% / 0.25)" }}
            >
              Agendar Cita
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Edison%2058`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-cta-whatsapp"
              className="px-12 py-4 border border-primary/50 text-primary font-sans text-sm tracking-[0.2em] uppercase hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Enviar WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
