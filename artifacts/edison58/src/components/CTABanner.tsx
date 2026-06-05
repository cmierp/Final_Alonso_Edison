import { Link } from "wouter";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5214421128407";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "¿Listo para conocer Edison 58?",
  subtitle = "Agenda una visita y descubre el valor de un proyecto que une historia, diseño e inversión.",
}: CTABannerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(30 28% 14%) 0%, hsl(39 32% 17%) 50%, hsl(30 26% 12%) 100%)" }}
    >
      {/* Warm gold top/bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(39 42% 58% / 0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto px-5 md:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{title}</h2>
          <p className="font-sans text-sm text-white/70 max-w-md mx-auto leading-relaxed mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              data-testid="cta-banner-agendar"
              className="px-10 py-4 bg-primary text-primary-foreground font-sans text-xs tracking-[0.22em] uppercase hover:bg-primary/85 transition-colors duration-300 inline-block"
              style={{ boxShadow: "0 4px 24px hsl(39 42% 58% / 0.25)" }}
            >
              Agendar Cita
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Edison%2058`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-banner-whatsapp"
              className="px-10 py-4 border border-primary/45 text-primary font-sans text-xs tracking-[0.22em] uppercase hover:border-primary hover:bg-primary/8 transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
