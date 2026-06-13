import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "5214421128407";
const EMAIL = "ventas@edison58.com";

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.1 },
});

export default function ContactoPage() {
  return (
    <main>
      <PageHeader
        label="Contacto"
        title="Habla con"
        titleAccent="un asesor"
        subtitle="Agenda una cita para conocer disponibilidad, precios y detalles del proyecto."
      />

      <section className="py-14 md:py-28 px-5 md:px-12 max-w-6xl mx-auto">

        {/* Primary CTAs */}
        <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-8 md:mb-16">
          <motion.div {...fade()} className="bg-background p-7 md:p-14 flex flex-col justify-between gap-6 md:gap-8">
            <div>
              <div className="w-11 h-11 md:w-14 md:h-14 border border-primary/25 flex items-center justify-center mb-6 md:mb-8">
                <MessageCircle size={20} className="text-primary" strokeWidth={1} />
              </div>
              <p className="font-sans text-[10px] md:text-xs text-primary tracking-[0.3em] uppercase mb-2 md:mb-3">WhatsApp</p>
              <p className="font-serif text-xl md:text-3xl text-white mb-2 md:mb-3">Respuesta inmediata</p>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-1">+52 144 211 28407</p>
              <p className="font-sans text-xs text-white/55">Lunes a sábado · 9:00 am – 7:00 pm</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Edison%2058`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-cta"
              className="flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-sans text-xs tracking-[0.22em] uppercase hover:bg-primary/90 active:bg-primary/80 transition-colors duration-250"
              style={{ boxShadow: "0 0 30px hsl(39 46% 61% / 0.2)" }}
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Escribir por WhatsApp
            </a>
          </motion.div>

          <motion.div {...fade(0.1)} className="bg-card p-7 md:p-14 flex flex-col justify-between gap-6 md:gap-8">
            <div>
              <div className="w-11 h-11 md:w-14 md:h-14 border border-primary/25 flex items-center justify-center mb-6 md:mb-8">
                <Mail size={20} className="text-primary" strokeWidth={1} />
              </div>
              <p className="font-sans text-[10px] md:text-xs text-primary tracking-[0.3em] uppercase mb-2 md:mb-3">Correo electrónico</p>
              <p className="font-serif text-xl md:text-3xl text-white mb-2 md:mb-3">Escríbenos</p>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-1 break-all">{EMAIL}</p>
              <p className="font-sans text-xs text-white/55">Respondemos en menos de 24 horas</p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              data-testid="link-email-contacto"
              className="flex items-center justify-center gap-3 py-4 border border-primary/50 text-primary font-sans text-xs tracking-[0.22em] uppercase hover:bg-primary hover:text-primary-foreground active:bg-primary/90 transition-all duration-250"
            >
              <Mail size={16} strokeWidth={1.5} />
              Enviar correo
            </a>
          </motion.div>
        </div>

        {/* Secondary info: phone + location + hours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10 mb-8 md:mb-16">
          <motion.div {...fade(0.15)} className="bg-background p-5 md:p-8 flex items-start gap-4">
            <div className="w-9 h-9 md:w-11 md:h-11 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone size={14} className="text-primary/55" strokeWidth={1} />
            </div>
            <div>
              <p className="font-sans text-[9px] md:text-[10px] text-primary/60 tracking-[0.25em] uppercase mb-1.5">Teléfono</p>
              <p className="font-sans text-sm text-white/85">+52 144 211 28407</p>
            </div>
          </motion.div>

          <motion.div {...fade(0.2)} className="bg-background p-5 md:p-8 flex items-start gap-4">
            <div className="w-9 h-9 md:w-11 md:h-11 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin size={14} className="text-primary/55" strokeWidth={1} />
            </div>
            <div>
              <p className="font-sans text-[9px] md:text-[10px] text-primary/60 tracking-[0.25em] uppercase mb-1.5">Ubicación</p>
              <p className="font-sans text-sm text-white/85">Calle Edison 58, Col. Tabacalera</p>
              <p className="font-sans text-xs text-white/55 mt-0.5">Alcaldía Cuauhtémoc · CDMX · C.P. 06030</p>
            </div>
          </motion.div>

          <motion.div {...fade(0.25)} className="bg-background p-5 md:p-8 flex items-start gap-4">
            <div className="w-9 h-9 md:w-11 md:h-11 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock size={14} className="text-primary/55" strokeWidth={1} />
            </div>
            <div>
              <p className="font-sans text-[9px] md:text-[10px] text-primary/60 tracking-[0.25em] uppercase mb-1.5">Horario de atención</p>
              <p className="font-sans text-sm text-white/85">Lunes – Sábado</p>
              <p className="font-sans text-xs text-white/55 mt-0.5">9:00 am – 7:00 pm</p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div {...fade(0.3)} className="border border-primary/10 p-6 md:p-8 text-center">
          <p className="font-sans text-xs text-white/50 leading-relaxed max-w-lg mx-auto">
            El primer contacto es sin compromiso. Nuestro equipo de asesores está disponible para acompañarte desde la primera consulta hasta la firma.
          </p>
        </motion.div>
      </section>

      {/*
        FORMULARIO DE CONTACTO — temporalmente deshabilitado
        Descomentar cuando se configure el endpoint de envío.

      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="bg-card border border-primary/15 p-8 md:p-12 max-w-xl mx-auto">
          <p className="font-serif text-xl text-foreground mb-8">Envíanos tu información</p>
          <Form ...>
            ...campos del formulario...
          </Form>
        </div>
      </section>
      */}
    </main>
  );
}
