import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, Landmark, MapPin, TrendingUp } from "lucide-react";
import heroBg from "@assets/edison58_banner_(1)_1779141975483.jpeg";

const DecoRule = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="h-px w-10 bg-primary/35" />
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <rect x="1" y="1" width="8" height="8" transform="rotate(45 5 5)" stroke="hsl(39 42% 58%)" strokeWidth="0.8" fill="none"/>
    </svg>
    <div className="h-px w-10 bg-primary/35" />
  </div>
);

const razonesEdison = [
  {
    icon: Landmark,
    title: "Legado arquitectónico",
    desc: "Edificio catalogado por el INBA e INAH. Obra de Kunhardt & Capilla, maestros del Art Déco mexicano.",
    path: "/historia",
  },
  {
    icon: MapPin,
    title: "Ubicación estratégica",
    desc: "En el corazón de la Tabacalera, a pasos de Reforma, el Monumento a la Revolución y el Frontón México.",
    path: "/proyecto",
  },
  {
    icon: TrendingUp,
    title: "Oportunidad patrimonial",
    desc: "Zona con alta demanda, oferta limitada y plusvalía sostenida. Habitar o invertir en Edison 58 es posicionarse en la historia.",
    path: "/proyecto",
  },
];

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.12 },
});

export default function Home() {
  const scrollDown = () => {
    document.getElementById("home-valor")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background image */}
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Luminous, breathing overlay — architecture visible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "linear-gradient(to bottom, hsl(30 22% 8% / 0.18) 0%, hsl(30 22% 8% / 0.40) 55%, hsl(30 22% 8% / 0.72) 100%)",
              "linear-gradient(to right, hsl(30 22% 8% / 0.12) 0%, transparent 60%)",
            ].join(", "),
          }}
        />
        {/* Warm bottom anchor */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 110% 80% at 50% 100%, hsl(30 18% 8% / 0.32) 0%, transparent 68%)" }}
        />
        {/* Warm gold breath at center — champagne warmth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 65% 45% at 50% 38%, hsl(39 34% 53% / 0.07) 0%, transparent 70%)" }}
        />

        <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent hidden xl:block pointer-events-none" />
        <div className="absolute right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent hidden xl:block pointer-events-none" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-5 sm:px-8 pt-20 pb-16 text-center">

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-sans  text-white font-bold text-[10px] sm:text-xs tracking-[0.38em] uppercase text-primary/90 mb-6 sm:mb-8"
          >
            Colonia Tabacalera &nbsp;·&nbsp; Ciudad de México
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="w-full max-w-5xl mx-auto"
          >
            <h1
              className="font-serif leading-none tracking-[0.12em] text-white/96"
              style={{
                fontSize: "clamp(2.8rem, 10vw, 8rem)",
                textShadow: "0 2px 40px hsl(30 18% 6% / 0.5), 0 0 80px hsl(39 42% 58% / 0.08)",
              }}
            >
              EDISON
            </h1>
            <div className="flex items-center justify-center gap-3 sm:gap-5 mt-[-0.04em]">
              <div className="h-px flex-1 max-w-[60px] sm:max-w-[130px] bg-gradient-to-r from-transparent to-primary/40" />
              <span
                className="font-serif leading-none tracking-[0.18em] text-primary"
                style={{ fontSize: "clamp(2.2rem, 7.5vw, 6rem)" }}
              >
                58
              </span>
              <div className="h-px flex-1 max-w-[60px] sm:max-w-[130px] bg-gradient-to-l from-transparent to-primary/40" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <DecoRule />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-serif italic text-white/85 max-w-lg mx-auto leading-snug"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)" }}
          >
            "Más que un desarrollo inmobiliario,<br className="hidden sm:block" /> es una declaración de diseño e historia."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <Link
              href="/contacto"
              data-testid="button-hero-agendar"
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground font-sans text-xs tracking-[0.22em] uppercase hover:bg-primary/85 transition-colors duration-250 text-center"
              style={{ boxShadow: "0 4px 24px hsl(39 42% 58% / 0.28)" }}
            >
              Agendar Cita
            </Link>
            <Link
              href="/proyecto"
              data-testid="button-hero-proyecto"
              className="px-8 sm:px-10 py-3.5 sm:py-4 border border-white/30 text-white/88 font-sans text-xs tracking-[0.22em] uppercase hover:border-primary/60 hover:text-primary hover:bg-white/5 transition-all duration-250 text-center"
            >
              Conocer el Proyecto
            </Link>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
          onClick={scrollDown}
          aria-label="Desplazar hacia abajo"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/40">Descubrir</span>
            <ChevronDown size={14} className="text-white/40" />
          </motion.div>
        </motion.button>
      </section>

      {/* ── POR QUÉ EDISON 58 — Ivory editorial section ── */}
      <section id="home-valor" style={{ background: "hsl(37 28% 92%)" }}>
        <div className="py-16 md:py-32 px-5 md:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2
              className="font-serif text-3xl md:text-5xl mb-5 md:mb-6 leading-tight"
              style={{ color: "hsl(30 22% 14%)" }}
            >
              Historia, diseño<br />
              <span className="text-primary">e inversión en un solo lugar.</span>
            </h2>
            <p
              className="font-sans text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "hsl(30 15% 34%)" }}
            >
              Edison 58 es la recuperación de un edificio Art Déco catalogado en una de las zonas más céntricas de la Ciudad de México — 11 unidades únicas para habitar o invertir.
            </p>
          </div>

          {/* Razones — dark espresso cards on cream = editorial contrast */}
          <div
            className="grid md:grid-cols-3 gap-px mb-10 md:mb-16"
            style={{ backgroundColor: "hsl(37 18% 80%)" }}
          >
            {razonesEdison.map((card, i) => (
              <motion.div key={card.title} {...fade(i)}>
                <Link
                  href={card.path}
                  className="bg-background p-7 md:p-12 group hover:bg-card transition-colors duration-500 block h-full cursor-pointer"
                >
                  <div className="flex md:block items-center gap-5 mb-5 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 border border-primary/30 flex items-center justify-center flex-shrink-0 md:mb-6 group-hover:border-primary transition-colors duration-300">
                      <card.icon size={18} className="text-primary" strokeWidth={1} />
                    </div>
                    <h3 className="font-serif text-lg md:text-2xl text-foreground md:hidden">{card.title}</h3>
                    <div className="hidden md:block h-px w-8 bg-primary/40" />
                  </div>
                  <h3 className="hidden md:block font-serif text-2xl text-foreground mb-4">{card.title}</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed mb-4 md:mb-6">{card.desc}</p>
                  <span className="font-sans text-xs text-primary tracking-[0.2em] uppercase group-hover:tracking-[0.3em] transition-all duration-300">
                    Conocer más →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Metrics — same dark-on-cream editorial treatment */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ backgroundColor: "hsl(37 18% 80%)" }}
          >
            {[
              { value: "11", label: "Unidades disponibles", detail: "3 tipologías · 44 – 58 m²", path: "/proyecto" },
              { value: "590 m²", label: "Superficie vendible", detail: "Lobby + roof garden común", path: "/proyecto" },
              { value: "30+", label: "Años de experiencia", detail: "BFC Arquitectos · Grupo Inmobiliario", path: "/desarrollador" },
              { value: "INBA/INAH", label: "Patrimonio certificado", detail: "Catalogado como patrimonio histórico", path: "/historia" },
            ].map((m, i) => (
              <motion.div key={m.label} {...fade(i)}>
                <Link
                  href={m.path}
                  className="bg-background p-6 md:p-10 text-center flex flex-col items-center group hover:bg-card transition-colors duration-400 h-full cursor-pointer block"
                >
                  <p
                    className="font-serif text-3xl md:text-5xl text-primary mb-2 md:mb-3 group-hover:text-primary transition-colors"
                  >
                    {m.value}
                  </p>
                  <div className="w-5 h-px bg-primary/30 mx-auto mb-2 md:mb-3 group-hover:w-8 transition-all duration-300" />
                  <p className="font-sans text-[10px] md:text-xs text-white/78 uppercase tracking-[0.15em] md:tracking-[0.18em] leading-snug mb-1 md:mb-2">{m.label}</p>
                  <p className="font-sans text-[9px] md:text-[10px] text-white/50 leading-snug hidden sm:block">{m.detail}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ENTREGADOS — warm dark ── */}
      <section className="py-16 md:py-28 px-5 md:px-12" style={{ background: "hsl(30 20% 7%)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade()} className="mb-8 md:mb-0 md:grid md:grid-cols-2 md:gap-20 md:items-center">
            <div className="mb-8 md:mb-0">
              <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-4 md:mb-5">Trayectoria</p>
              <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-4 md:mb-5 leading-tight">
                Proyectos entregados<br />
                <span className="text-primary">en zonas céntricas de CDMX</span>
              </h2>
              <p className="font-sans text-sm text-white/68 leading-relaxed mb-6 md:mb-8">
                El equipo detrás de Edison 58 tiene más de 30 años desarrollando proyectos en colonias estratégicas de la Ciudad de México, con resultados probados de comercialización y absorción de mercado.
              </p>
              <Link
                href="/desarrollador"
                className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.22em] uppercase text-primary border border-primary/40 px-7 py-3.5 hover:bg-primary hover:text-primary-foreground transition-all duration-250"
              >
                Ver experiencia completa
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-px mt-8 md:mt-0" style={{ backgroundColor: "hsl(30 20% 21%)" }}>
              {[
                { nombre: "Georgia", colonia: "Nápoles", deps: "12 dep.", tiempo: "4 meses" },
                { nombre: "Gabriel Mancera", colonia: "Del Valle", deps: "8 dep.", tiempo: "3 meses" },
                { nombre: "Orozco y Berra", colonia: "Buenavista", deps: "15 dep.", tiempo: "5 meses" },
                { nombre: "Mitla", colonia: "Narvarte", deps: "10 dep.", tiempo: "4 meses" },
              ].map((p, i) => (
                <motion.div key={p.nombre} {...fade(i * 0.1)}>
                  <Link
                    href="/desarrollador"
                    className="bg-background p-5 md:p-7 flex flex-col gap-3 group hover:bg-card transition-colors duration-300 h-full cursor-pointer block"
                  >
                    <div>
                      <p className="font-serif text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">{p.nombre}</p>
                      <p className="font-sans text-[9px] md:text-[10px] text-primary/50 tracking-[0.18em] uppercase mt-0.5">{p.colonia}</p>
                    </div>
                    <div className="flex items-end justify-between mt-auto pt-3 border-t border-primary/10">
                      <div>
                        <p className="font-sans text-[8px] md:text-[9px] text-white/50 tracking-[0.18em] uppercase mb-0.5">Unidades</p>
                        <p className="font-sans text-xs md:text-sm text-white/82">{p.deps}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-sans text-[8px] md:text-[9px] text-white/50 tracking-[0.18em] uppercase mb-0.5">Comerc.</p>
                        <p className="font-sans text-xs md:text-sm text-white/82">{p.tiempo}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPLORAR — warm charcoal ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 relative" style={{ background: "hsl(30 22% 11%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-5">Explorar</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Todo sobre Edison 58</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ backgroundColor: "hsl(30 20% 23%)" }}>
            {[
              { label: "El Proyecto", sub: "11 unidades · Tipologías · Ubicación", path: "/proyecto" },
              { label: "Historia", sub: "Kunhardt & Capilla · Art Déco", path: "/historia" },
              { label: "Desarrollador", sub: "Grupo inmobiliario · BFC Arquitectos", path: "/desarrollador" },
              { label: "Galería", sub: "Renders · Fachada · Interiores", path: "/galeria" },
              { label: "Contacto", sub: "Agendar cita · Solicitar información", path: "/contacto" },
              { label: "WhatsApp", sub: "Respuesta inmediata", path: "/contacto" },
            ].map((item) => (
              <Link
                key={item.path + item.label}
                href={item.path}
                className="bg-background p-8 group hover:bg-card transition-colors duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer"
              >
                <div className="w-6 h-px bg-primary/30 group-hover:w-10 transition-all duration-300 mb-4" />
                <div>
                  <p className="font-serif text-base text-foreground group-hover:text-primary transition-colors duration-300">{item.label}</p>
                  <p className="font-sans text-xs text-white/52 mt-1">{item.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
