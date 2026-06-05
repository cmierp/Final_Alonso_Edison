import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";

import antesGeorgia from "@assets/antesgeorgia_1778460743847.jpg";
import despuesGeorgia from "@assets/despuesgeorgia_1778460743848.jpg";
import antesMancera from "@assets/antesmancera_1778460743847.jpg";
import despuesMancera from "@assets/despuesmancera_1778460743848.jpg";
import antesBuenavista from "@assets/antesbuenvista_1778460743846.jpg";
import despuesBuenavista from "@assets/despuesbuenavista_1778460743848.jpg";
import antesMitla from "@assets/antesmitla_1778460743848.jpg";
import despuesMitla from "@assets/despuesmitla_1778460743849.jpg";

const objetivos = [
  "Mejorar el entorno urbano",
  "Generar plusvalía en las zonas de intervención",
  "Crear vivienda en zonas urbanas estratégicas",
  "Cubrir la demanda de vivienda en la república",
  "Generar fuentes de empleo formal",
  "Fomentar la inversión patrimonial inmobiliaria",
  "Eficientar y dignificar espacios existentes",
];

const metrics = [
  { value: "80%+", label: "Obras terminadas en tiempo o antes", detail: "Metodología propia de planeación y control" },
  { value: "80%+", label: "Proyectos finalizados bajo presupuesto", detail: "Supervisión rigurosa con herramientas propias" },
  { value: "0", label: "Accidentes graves en obra", detail: "Seguridad como principio irrenunciable" },
  { value: "30+", label: "Años en el sector inmobiliario", detail: "Trayectoria y experiencia comprobada" },
];

const proyectos = [
  { nombre: "Georgia", colonia: "Nápoles, CDMX", departamentos: 12, comercializacion: "4 meses", absorcion: "3 dep / mes", antes: antesGeorgia, despues: despuesGeorgia },
  { nombre: "Gabriel Mancera", colonia: "Del Valle, CDMX", departamentos: 8, comercializacion: "3 meses", absorcion: "2.6 dep / mes", antes: antesMancera, despues: despuesMancera },
  { nombre: "Orozco y Berra", colonia: "Buenavista, CDMX", departamentos: 15, comercializacion: "5 meses", absorcion: "3 dep / mes", antes: antesBuenavista, despues: despuesBuenavista },
  { nombre: "Mitla", colonia: "Narvarte, CDMX", departamentos: 10, comercializacion: "4 meses", absorcion: "2.5 dep / mes", antes: antesMitla, despues: despuesMitla },
];

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.1 },
});

export default function DesarrolladorPage() {
  return (
    <main>
      <PageHeader
        label="El Equipo"
        title="Quiénes desarrollan"
        titleAccent="Edison 58"
        subtitle="Un grupo inmobiliario con más de 30 años transformando edificios en zonas céntricas de la Ciudad de México."
      />

      {/* ── GRUPO + BFC — warm espresso body ── */}
      <section className="py-14 md:py-28 px-5 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-10 md:mb-24">

          <motion.div {...fade()} className="bg-background p-7 md:p-14">
            <div className="flex items-center gap-4 mb-5 md:mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">Grupo Inmobiliario</span>
            </div>
            <h2 className="font-serif text-xl md:text-3xl text-foreground mb-4 md:mb-6 leading-snug">
              Tres décadas transformando la ciudad
            </h2>
            <p className="font-sans text-sm text-white/78 leading-relaxed mb-4">
              Somos un grupo inmobiliario especializado en identificar y transformar edificios en las zonas más céntricas y singulares de la Ciudad de México. Cada proyecto que emprendemos genera valor real para habitantes e inversionistas.
            </p>
            <p className="font-sans text-sm text-white/78 leading-relaxed hidden md:block mb-4">
              Somos conscientes de la urgente necesidad de vivienda en el país. Por eso cada intervención está orientada a transformar espacios existentes, mejorar el entorno y crear patrimonio duradero.
            </p>
            <p className="font-sans text-sm text-white/78 leading-relaxed hidden md:block">
              No construimos solo metros cuadrados. Construimos identidad urbana, valor patrimonial y oportunidades de vida.
            </p>
          </motion.div>

          <motion.div {...fade(0.1)} className="bg-card p-7 md:p-14">
            <div className="flex items-center gap-4 mb-5 md:mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">BFC Arquitectos</span>
            </div>
            <h2 className="font-serif text-xl md:text-3xl text-foreground mb-4 md:mb-6 leading-snug">
              Ingeniería de obra con visión estratégica
            </h2>
            <p className="font-sans text-sm text-white/78 leading-relaxed mb-4">
              BFC Arquitectos es un equipo de profesionales con experiencia nacional e internacional en coordinación, supervisión y administración de obras medianas y grandes.
            </p>
            <p className="font-sans text-sm text-white/78 leading-relaxed mb-4 md:mb-6 hidden md:block">
              Aplicamos herramientas y metodologías propias para ejecutar proyectos con objetivos claros de tiempo, costo y calidad.
            </p>
            <div className="border border-primary/20 p-4 md:p-6">
              <p className="font-sans text-xs text-white/60 tracking-[0.2em] uppercase mb-3 md:mb-4">Sistema de Control</p>
              <div className="space-y-2">
                {[
                  "Coordinación y supervisión de obra",
                  "Gerencia de proyectos de edificación",
                  "Plataformas informáticas propias",
                  "Control Total de Obra — tiempo, costo y calidad",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-primary flex-shrink-0 mt-1.5" />
                    <p className="font-sans text-xs text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── MISIÓN + OBJETIVOS ── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
          <motion.div {...fade()}>
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-4 md:mb-6">Nuestra Misión</p>
            <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-4 md:mb-6 leading-tight">
              Transformar edificios.<br />
              <span className="text-primary">Mejorar ciudades.</span><br />
              Crear valor.
            </h2>
            <p className="font-sans text-sm text-white/75 leading-relaxed">
              Cada proyecto es una oportunidad de devolver a la ciudad un espacio con dignidad, función y belleza. Nuestros objetivos no son solo empresariales — son urbanos y sociales.
            </p>
          </motion.div>

          <div className="space-y-px">
            {objetivos.map((obj, i) => (
              <motion.div
                key={obj}
                {...fade(i * 0.07)}
                className="flex items-center gap-4 md:gap-6 p-4 md:p-5 bg-card border-b border-primary/10 group hover:bg-background transition-colors duration-300"
              >
                <span className="font-serif text-lg md:text-xl text-primary/20 group-hover:text-primary/50 transition-colors w-6 md:w-7 text-right flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-px h-3 md:h-4 bg-primary/15 flex-shrink-0" />
                <p className="font-sans text-sm text-white/80 group-hover:text-white/90 transition-colors leading-snug">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS — ivory editorial ── */}
      <section style={{ background: "hsl(37 28% 92%)" }}>
        <div className="py-14 md:py-24 px-5 md:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-14">
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-4 md:mb-5">Trayectoria</p>
            <h2
              className="font-serif text-2xl md:text-4xl mb-3 md:mb-4 leading-tight"
              style={{ color: "hsl(30 22% 14%)" }}
            >
              Experiencia que se mide<br />
              <span className="text-primary">en resultados</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ backgroundColor: "hsl(37 18% 80%)" }}
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                {...fade(i * 0.12)}
                className="bg-background p-6 md:p-12 text-center"
              >
                <p className="font-serif text-4xl md:text-6xl text-primary mb-3 md:mb-4">
                  {m.value}
                </p>
                <div className="w-5 h-px bg-primary/40 mx-auto mb-3 md:mb-4" />
                <p className="font-sans text-[10px] md:text-xs text-white/85 font-medium tracking-wide mb-1 md:mb-2 leading-snug">{m.label}</p>
                <p className="font-sans text-[9px] md:text-xs text-white/52 leading-relaxed hidden sm:block">{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ANTES/DESPUÉS — warm espresso body ── */}
      <section className="py-14 md:py-28 px-5 md:px-12 max-w-6xl mx-auto">
        <div className="mb-8 md:mb-14">
          <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-4 md:mb-5">Experiencia Previa</p>
          <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-3 md:mb-4">
            Proyectos entregados
          </h2>
          <p className="font-sans text-sm text-white/65 max-w-lg leading-relaxed">
            Arrastra la barra para comparar el estado original y el resultado final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-primary/10">
          {proyectos.map((p, i) => (
            <motion.div
              key={p.nombre}
              {...fade(i * 0.1)}
              className="bg-background"
            >
              <BeforeAfterSlider
                beforeSrc={p.antes}
                afterSrc={p.despues}
                aspectRatio="4/3"
                maxHeight="240px"
              />

              <div className="p-5 md:p-8">
                <div className="mb-4 md:mb-5">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">{p.nombre}</h3>
                  <p className="font-sans text-xs text-primary tracking-[0.18em] uppercase mt-0.5">{p.colonia}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  <div>
                    <p className="font-sans text-[9px] md:text-[10px] text-primary/40 tracking-[0.16em] uppercase mb-1">Deptos.</p>
                    <p className="font-sans text-sm text-white/85">{p.departamentos}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[9px] md:text-[10px] text-primary/40 tracking-[0.16em] uppercase mb-1">Comerc.</p>
                    <p className="font-sans text-sm text-white/85">{p.comercializacion}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1 border-t border-primary/10 pt-3 md:border-0 md:pt-0">
                    <p className="font-sans text-[9px] md:text-[10px] text-primary/40 tracking-[0.16em] uppercase mb-1">Absorción</p>
                    <p className="font-sans text-sm text-white/85">{p.absorcion}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Trabaja con un equipo de 30 años de experiencia"
        subtitle="Nos avalan décadas de proyectos exitosos y un compromiso claro con la calidad, el presupuesto y la seguridad en cada obra."
      />
    </main>
  );
}
