import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import imgTerraza from "@assets/WhatsApp_Image_2026-05-18_at_3.11.09_PM_(1)_1781379344688.jpeg";

const obras = [
  {
    name: "Palacio Frontón México",
    subtitle: "Cesta Punta Jai Alai · Tabacalera, CDMX",
    year: "1929",
    desc: "Una de las obras más representativas del Art Déco en la Ciudad de México. Declarada patrimonio arquitectónico de la nación, el Frontón México es un testimonio del esplendor visual de la época y de la maestría de Kunhardt & Capilla para articular escala, geometría y ornamento en un solo edificio monumental.",
    highlight: false,
  },
  {
    name: "Casa O'Hea",
    subtitle: "Av. Paseo de la Reforma 346 · CDMX",
    year: "c. 1930",
    desc: "Residencia neogótica civil que ejemplifica la versatilidad y profundidad del lenguaje arquitectónico de Kunhardt & Capilla. La Casa O'Hea fusiona estilos con una sofisticación que refleja el gusto y las aspiraciones de la burguesía mexicana del siglo XX.",
    highlight: false,
  },
  {
    name: "Edificio Edison 58",
    subtitle: "Colonia Tabacalera · CDMX",
    year: "Catalogado",
    desc: "Joya arquitectónica en el corazón de la Tabacalera. Hoy en proceso de transformación con visión contemporánea, Edison 58 preserva la esencia histórica que lo define mientras se prepara para una nueva etapa como espacio habitacional de alto valor patrimonial.",
    highlight: true,
  },
];

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: i * 0.1 },
});

export default function HistoriaPage() {
  return (
    <main>
      <PageHeader
        label="Arquitectura e Historia"
        title="El legado detrás"
        titleAccent="de Edison 58"
        subtitle="Un edificio es mucho más que sus muros. Es la suma de las decisiones de quienes lo concibieron, el tiempo que lo ha habitado y el espíritu que lo define."
      />

      {/* ── ARQUITECTOS + OBRAS — warm espresso body ── */}
      <section className="py-14 md:py-28 px-5 md:px-12 max-w-6xl mx-auto">
        <div className="border border-primary/20 p-7 md:p-16 mb-12 md:mb-20 relative">
          <div className="absolute top-0 left-6 md:left-10 -translate-y-1/2">
            <span className="bg-background px-3 md:px-4 text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans">
              Los Arquitectos
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div>
              <p className="font-sans text-xs text-primary tracking-[0.3em] uppercase mb-4 md:mb-6">
                Siglos XIX – XX · México
              </p>
              <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-4 md:mb-6 leading-tight">
                Teodoro Kunhardt<br />
                <span className="text-primary">&amp; Joaquín Capilla</span>
              </h2>
              <p className="font-sans text-sm text-white/78 leading-relaxed mb-4">
                Maestros de la arquitectura mexicana, Teodoro Kunhardt y Joaquín Capilla son los autores de algunas de las obras más significativas del Art Déco y el Neogótico Civil en México durante los siglos XIX y XX.
              </p>
              <p className="font-sans text-sm text-white/78 leading-relaxed hidden md:block">
                Su trabajo define el carácter visual e histórico del México urbano moderno. Cada uno de sus edificios es un documento arquitectónico vivo que comunica la cultura, los valores estéticos y las aspiraciones de su época.
              </p>

              <div className="border border-primary/30 px-4 py-3 flex items-center gap-3 mt-6 md:hidden">
                <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                <p className="font-sans text-xs text-primary tracking-[0.12em] leading-relaxed">
                  Catalogados por el INBA e INAH como Patrimonio Histórico Arquitectónico de México
                </p>
              </div>
            </div>

            <div className="space-y-6 hidden md:block">
              <div
                className="h-64 border border-primary/15 flex items-center justify-center"
                style={{ background: "hsl(30 20% 12%)" }}
              >
                <div className="text-center p-6">
                  <p className="font-sans text-xs text-white/40 tracking-widest uppercase mb-2">Retrato / Archivo</p>
                  <p className="font-serif text-sm text-white/30">Imagen histórica</p>
                </div>
              </div>
              <div className="border border-primary/30 px-6 py-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-primary flex-shrink-0" />
                <p className="font-sans text-xs text-primary tracking-[0.15em] leading-relaxed">
                  Catalogados por el INBA e INAH como Patrimonio Histórico Arquitectónico de México
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── OBRAS DESTACADAS ── */}
        <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-7 md:mb-10">Obras Destacadas</p>
        <div className="space-y-px">
          {obras.map((obra, i) => (
            <motion.div
              key={obra.name}
              {...fade(i)}
              className={`p-6 md:p-12 border-l-2 ${
                obra.highlight
                  ? "border-primary bg-primary/5"
                  : "border-primary/20 bg-card"
              } transition-colors duration-400`}
            >
              {/* Mobile layout */}
              <div className="flex items-baseline gap-4 mb-3 md:hidden">
                <span
                  className={`font-serif text-2xl font-light flex-shrink-0 ${
                    obra.highlight ? "text-primary" : "text-primary/40"
                  }`}
                >
                  {obra.year}
                </span>
                <div className="h-px flex-1 bg-primary/10" />
              </div>
              <h3 className="font-serif text-xl md:hidden text-foreground mb-1">{obra.name}</h3>
              <p className="font-sans text-[10px] text-primary tracking-[0.2em] uppercase mb-3 md:hidden">{obra.subtitle}</p>
              <p className="font-sans text-sm text-white/75 leading-relaxed md:hidden">{obra.desc}</p>

              {/* Desktop layout */}
              <div className="hidden md:flex gap-12 items-start">
                <div className="w-36 flex-shrink-0">
                  <span
                    className={`font-serif text-5xl font-light ${
                      obra.highlight ? "text-primary" : "text-primary/40"
                    }`}
                  >
                    {obra.year}
                  </span>
                </div>
                <div className="w-56 flex-shrink-0">
                  <div
                    className={`h-full min-h-[140px] border flex items-center justify-center ${
                      obra.highlight
                        ? "border-primary/30 bg-primary/5"
                        : "border-primary/10 bg-background/50"
                    }`}
                  >
                    <div className="text-center p-4">
                      <p className="font-sans text-xs text-white/40 tracking-widest uppercase mb-1">Imagen</p>
                      <p className="font-sans text-xs text-white/30">Archivo Histórico</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl text-foreground mb-1">{obra.name}</h3>
                  <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-5">{obra.subtitle}</p>
                  <p className="font-sans text-sm text-white/75 leading-relaxed">{obra.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ART DÉCO CONTEXTO — ivory editorial ── */}
      <section style={{ background: "hsl(37 28% 92%)" }}>
        <div className="py-14 md:py-24 px-5 md:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.div {...fade()}>
              <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-4 md:mb-6">Contexto</p>
              <h2
                className="font-serif text-2xl md:text-4xl mb-4 md:mb-6 leading-tight"
                style={{ color: "hsl(30 22% 14%)" }}
              >
                El Art Déco en<br />
                <span className="text-primary">la Ciudad de México</span>
              </h2>
              <p className="font-sans text-sm leading-relaxed mb-4 md:mb-5" style={{ color: "hsl(30 15% 32%)" }}>
                El Art Déco llegó a México en los años veinte del siglo pasado, de la mano de una generación de arquitectos que habían estudiado en Europa y traían consigo una visión nueva de la modernidad. La Ciudad de México se convirtió en el escenario privilegiado para esta expresión de elegancia geométrica y lujo sobrio.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-4 md:mb-5" style={{ color: "hsl(30 15% 32%)" }}>
                La Colonia Tabacalera fue uno de los barrios favoritos de esta arquitectura. Sus calles conservan hasta hoy una concentración notable de edificios Art Déco que hacen de este barrio un referente del patrimonio urbano de la CDMX.
              </p>
              <p className="font-sans text-sm leading-relaxed font-medium" style={{ color: "hsl(30 22% 20%)" }}>
                Edison 58 no es un edificio del pasado que se conserva. Es un edificio del pasado que se activa para el futuro.
              </p>
            </motion.div>

            <motion.div {...fade(0.1)} className="overflow-hidden border border-primary/20">
              <img
                src={imgTerraza}
                alt="Terraza Edison 58 — Colonia Tabacalera, CDMX"
                className="w-full h-48 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Habita historia. Invierte en legado."
        subtitle="Conoce Edison 58 y descubre cómo un edificio con décadas de historia puede ser la inversión más inteligente de tu vida."
      />
    </main>
  );
}
