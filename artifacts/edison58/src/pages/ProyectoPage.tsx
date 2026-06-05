import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin } from "lucide-react";

const tipologias = [
  {
    tipo: "Departamento 1 Recámara",
    unidades: 6,
    recamaras: 1,
    banos: 1,
    area: "44 – 52 m²",
    extra: "—",
    estado: "Disponible",
  },
  {
    tipo: "Departamento 2 Recámaras",
    unidades: 3,
    recamaras: 2,
    banos: 2,
    area: "54 – 58 m²",
    extra: "—",
    estado: "Disponible",
  },
  {
    tipo: "1 Rec. + Roof Garden Privado",
    unidades: 2,
    recamaras: 1,
    banos: 1,
    area: "44 – 50 m²",
    extra: "Terraza exclusiva",
    estado: "Disponible",
  },
];

const mejoras = [
  "Remodelación de fachada conservando elementos Art Déco originales",
  "Renovación de áreas comunes preservando la esencia histórica del edificio",
  "Lobby con sistema de seguridad CCTV y control de acceso",
  "Cocinas equipadas con muebles y acabados nuevos",
  "Muebles de baño, pisos, canceles y ventanas nuevos",
  "Instalaciones eléctricas e hidrosanitarias nuevas",
  "Tinacos y calentadores de agua nuevos",
];

const potencial = [
  { label: "Alta demanda", desc: "Vivienda en zonas céntricas de CDMX con oferta limitada" },
  { label: "Plusvalía sostenida", desc: "Tabacalera: zona en revalorización con conectividad y patrimonio" },
  { label: "Renta de larga y corta estancia", desc: "Ubicación ideal para Airbnb o arrendamiento tradicional" },
];

const puntosCercanos = [
  "Monumento a la Revolución",
  "Paseo de la Reforma",
  "Frontón México",
  "Museo Universitario del Chopo",
  "WTC Ciudad de México",
  "Hoteles y corporativos",
  "Metro Revolución / Hidalgo",
  "Ciclovías y cicloestaciones",
];

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.1 },
});

export default function ProyectoPage() {
  return (
    <main>
      <PageHeader
        label="El Desarrollo"
        title="Edison 58"
        titleAccent="Una nueva etapa para un edificio con historia"
        subtitle="Renovación, preservación y comercialización de 11 espacios habitacionales de alto valor arquitectónico en la Colonia Tabacalera, CDMX."
      />

      {/* ── Descripción + Ficha + Mejoras — warm espresso body ── */}
      <section className="py-14 md:py-28 px-5 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24">
          <motion.div {...fade()}>
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">El Edificio</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Un edificio que habla<br />por sí mismo
            </h2>
            <p className="font-sans text-sm text-white/78 leading-relaxed mb-5">
              Edison 58 es un edificio con valor histórico y arquitectónico ubicado en la Colonia Tabacalera. Diseñado por los reconocidos arquitectos Teodoro Kunhardt y Joaquín Capilla, forma parte del patrimonio catalogado por el INBA e INAH.
            </p>
            <p className="font-sans text-sm text-white/78 leading-relaxed mb-5">
              La intervención conserva los elementos Art Déco originales mientras incorpora estándares contemporáneos de habitabilidad y confort.
            </p>
            <p className="font-sans text-sm text-white/78 leading-relaxed">
              El resultado: 11 unidades únicas para habitar o invertir en un inmueble con identidad en una zona que combina el valor del pasado con las oportunidades del presente.
            </p>
          </motion.div>

          <motion.div {...fade(0.1)} className="space-y-px">
            {[
              { label: "Dirección", value: "Calle Edison 58, Colonia Tabacalera" },
              { label: "Alcaldía", value: "Cuauhtémoc, Ciudad de México · C.P. 06030" },
              { label: "Tipo", value: "Edificio histórico — uso habitacional" },
              { label: "Clasificación", value: "Patrimonio INBA / INAH" },
              { label: "Arquitectos", value: "Teodoro Kunhardt & Joaquín Capilla" },
              { label: "Estilo", value: "Art Déco" },
              { label: "Unidades totales", value: "11 departamentos" },
              { label: "Superficie vendible", value: "590 m² vendibles" },
              { label: "Amenidades", value: "Lobby · Roof garden común" },
              { label: "Estado", value: "En proceso de intervención" },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-4 border-b border-primary/10">
                <span className="font-sans text-xs text-primary/60 tracking-wide uppercase w-36 flex-shrink-0 pt-0.5">{item.label}</span>
                <span className="font-sans text-sm text-white/85">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mejoras */}
        <div className="mb-0">
          <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-8">Alcance de la Intervención</p>
          <div className="grid md:grid-cols-2 gap-px bg-primary/10">
            {mejoras.map((m, i) => (
              <motion.div
                key={m}
                {...fade(i * 0.07)}
                className="bg-background p-6 flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 bg-primary flex-shrink-0 mt-1.5" />
                <p className="font-sans text-sm text-white/80 leading-relaxed">{m}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tipologías — ivory editorial ── */}
      <section style={{ background: "hsl(37 28% 92%)" }}>
        <div className="py-14 md:py-24 px-5 md:px-12 max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-4">Tipologías y Disponibilidad</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-3" style={{ color: "hsl(30 22% 14%)" }}>
              11 unidades · 3 tipologías
            </h2>
            <p className="font-sans text-sm mt-2 max-w-lg" style={{ color: "hsl(30 15% 34%)" }}>
              De 44 a 58 m² habitables, más terrazas y roof gardens privativos según tipología.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block mb-8">
            <div className="grid grid-cols-6 gap-px mb-px" style={{ backgroundColor: "hsl(37 18% 80%)" }}>
              {["Tipología", "Unidades", "Recámaras", "Baños", "Superficie", "Estado"].map((h) => (
                <div key={h} className="bg-card px-5 py-3">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary/60">{h}</span>
                </div>
              ))}
            </div>
            {tipologias.map((t, i) => (
              <motion.div
                key={t.tipo}
                {...fade(i * 0.1)}
                className="grid grid-cols-6 gap-px mb-px"
                style={{ backgroundColor: "hsl(37 18% 80%)" }}
              >
                <div className="bg-background px-5 py-5">
                  <p className="font-serif text-base text-foreground leading-snug">{t.tipo}</p>
                  {t.extra !== "—" && (
                    <p className="font-sans text-xs text-primary mt-1">{t.extra}</p>
                  )}
                </div>
                <div className="bg-background px-5 py-5 flex items-center">
                  <span className="font-serif text-2xl text-primary">{t.unidades}</span>
                </div>
                <div className="bg-background px-5 py-5 flex items-center">
                  <span className="font-sans text-sm text-white/82">{t.recamaras}</span>
                </div>
                <div className="bg-background px-5 py-5 flex items-center">
                  <span className="font-sans text-sm text-white/82">{t.banos}</span>
                </div>
                <div className="bg-background px-5 py-5 flex items-center">
                  <span className="font-sans text-sm text-white/82">{t.area}</span>
                </div>
                <div className="bg-background px-5 py-5 flex items-center">
                  <span className="font-sans text-xs text-primary tracking-[0.15em] uppercase">{t.estado}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-px mb-8" style={{ backgroundColor: "hsl(37 18% 80%)" }}>
            {tipologias.map((t, i) => (
              <motion.div key={t.tipo} {...fade(i * 0.1)} className="bg-background p-6">
                <p className="font-serif text-lg text-foreground mb-1">{t.tipo}</p>
                {t.extra !== "—" && <p className="font-sans text-xs text-primary mb-3">{t.extra}</p>}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[
                    { k: "Unidades", v: String(t.unidades) },
                    { k: "Recámaras", v: String(t.recamaras) },
                    { k: "Baños", v: String(t.banos) },
                    { k: "Superficie", v: t.area },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <p className="font-sans text-[10px] text-primary/50 tracking-[0.2em] uppercase mb-0.5">{k}</p>
                      <p className="font-sans text-sm text-white/85">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <span className="font-sans text-xs text-primary tracking-[0.15em] uppercase">{t.estado}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="font-sans text-xs text-center mb-8" style={{ color: "hsl(30 15% 42%)" }}>
            Precios y condiciones de adquisición disponibles a solicitud. Contacta a nuestros asesores.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contacto"
              className="px-10 py-4 bg-primary text-primary-foreground font-sans text-xs tracking-[0.22em] uppercase hover:bg-primary/90 transition-colors duration-250"
              style={{ boxShadow: "0 4px 20px hsl(39 42% 58% / 0.25)" }}
            >
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      {/* ── Ubicación — warm espresso body ── */}
      <section className="py-14 md:py-28 px-5 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div {...fade()}>
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Ubicación</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Tabacalera,<br />
              <span className="text-primary">el corazón de la CDMX</span>
            </h2>
            <p className="font-sans text-sm text-white/78 leading-relaxed mb-6">
              La Colonia Tabacalera concentra lo mejor de la vida urbana en Ciudad de México: patrimonio histórico, conectividad excepcional, museos, corporativos, gastronomía y servicios.
            </p>
            <p className="font-sans text-sm text-white/78 leading-relaxed">
              Edison 58 se encuentra en el centro de todo esto, a pasos de Reforma, el Monumento a la Revolución y el Frontón México.
            </p>
          </motion.div>

          <motion.div {...fade(0.1)}>
            <p className="font-sans text-xs text-primary/60 tracking-[0.25em] uppercase mb-5">Puntos de interés cercanos</p>
            <div className="grid grid-cols-2 gap-px bg-primary/10">
              {puntosCercanos.map((punto) => (
                <div key={punto} className="bg-background px-5 py-4 flex items-center gap-3">
                  <MapPin size={12} className="text-primary/50 flex-shrink-0" strokeWidth={1.5} />
                  <p className="font-sans text-xs text-white/80">{punto}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Potencial Patrimonial — warm dark ── */}
      <section style={{ background: "hsl(30 20% 7%)" }}>
        <div className="py-14 md:py-24 px-5 md:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-5">Inversión</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Potencial patrimonial
            </h2>
            <p className="font-sans text-sm text-white/65 max-w-md mx-auto leading-relaxed">
              Invertir en Edison 58 es posicionarse en una zona de alta demanda y oferta limitada, con un activo que combina historia, diseño y ubicación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-primary/10">
            {potencial.map((p, i) => (
              <motion.div
                key={p.label}
                {...fade(i * 0.12)}
                className="bg-background p-8 md:p-12"
              >
                <div className="w-10 h-px bg-primary/40 mb-8" />
                <h3 className="font-serif text-xl text-foreground mb-4">{p.label}</h3>
                <p className="font-sans text-sm text-white/72 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:mt-14 border border-primary/15 p-7 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "11", label: "Unidades disponibles" },
                { value: "590 m²", label: "Superficie vendible" },
                { value: "Tabacalera", label: "Zona estratégica, CDMX" },
                { value: "INBA/INAH", label: "Patrimonio certificado" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl md:text-3xl text-primary mb-2">{stat.value}</p>
                  <p className="font-sans text-xs text-white/58 uppercase tracking-wide leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Agenda una visita a Edison 58"
        subtitle="Conoce los espacios, condiciones de adquisición y el proyecto completo de la mano de nuestros asesores."
      />
    </main>
  );
}
