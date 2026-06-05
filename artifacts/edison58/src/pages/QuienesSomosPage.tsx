import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";

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

export default function QuienesSomosPage() {
  return (
    <main>
      <PageHeader
        label="La Empresa"
        title="Quiénes Somos"
        titleAccent="Más de 30 años transformando la ciudad"
        subtitle="Un grupo inmobiliario con trayectoria, visión y compromiso con la calidad arquitectónica y el valor urbano."
      />

      {/* Grupo Inmobiliario */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background p-10 md:p-14"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">Grupo Inmobiliario</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Tres décadas transformando la ciudad
            </h2>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-5">
              Somos un grupo inmobiliario con más de 30 años de trayectoria en el sector. Nuestra especialidad es identificar y transformar edificios en las zonas más céntricas y singulares de la Ciudad de México, desarrollando proyectos que generan valor real para sus habitantes e inversionistas.
            </p>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-5">
              Somos conscientes de la urgente necesidad de vivienda en el país. Por eso cada proyecto que emprendemos está orientado a transformar espacios existentes, mejorar el entorno urbano y crear patrimonio duradero que trascienda generaciones.
            </p>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed">
              No construimos solo metros cuadrados. Construimos identidad urbana, valor patrimonial y oportunidades de vida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-card p-10 md:p-14"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-sans">BFC Arquitectos</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Ingeniería de obra con visión estratégica
            </h2>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-5">
              BFC Arquitectos es un equipo de profesionales de la construcción con experiencia nacional e internacional. Nos especializamos en coordinar, supervisar y administrar obras de edificación medianas y grandes dentro del territorio nacional.
            </p>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-5">
              Ofrecemos a clientes públicos y privados nuestro conocimiento, herramientas propias y experiencia en gerencia de obras para ejecutar proyectos con objetivos claros de tiempo, costo y calidad.
            </p>
            <div className="border border-primary/20 p-6 mt-6">
              <p className="font-sans text-xs text-foreground/35 tracking-[0.2em] uppercase mb-4">Servicios</p>
              <div className="space-y-2">
                {["Coordinación y supervisión de obra", "Gerencia de proyectos de edificación", "Plataformas informáticas propias", "Control de tiempo, costo y calidad"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary flex-shrink-0" />
                    <p className="font-sans text-xs text-foreground/55">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Objectives */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Nuestra Misión</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Transformar edificios.<br />
              <span className="text-primary">Mejorar ciudades.</span><br />
              Crear valor.
            </h2>
            <p className="font-sans text-sm text-foreground/50 leading-relaxed">
              Cada proyecto que emprendemos es una oportunidad de devolver a la ciudad un espacio con dignidad, función y belleza. Nuestros objetivos no son solo empresariales — son urbanos y sociales.
            </p>
          </div>
          <div className="space-y-px">
            {objetivos.map((obj, i) => (
              <motion.div
                key={obj}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-6 p-5 bg-card border-b border-primary/10 group hover:bg-background transition-colors duration-300"
              >
                <span className="font-serif text-xl text-primary/25 group-hover:text-primary/60 transition-colors w-7 text-right flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-px h-4 bg-primary/15 flex-shrink-0" />
                <p className="font-sans text-sm text-foreground/65 group-hover:text-foreground/90 transition-colors">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 md:py-24 px-6 md:px-12" style={{ background: "hsl(30 15% 4%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-5">Trayectoria</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Experiencia que se mide<br />
              <span className="text-primary">en resultados</span>
            </h2>
            <p className="font-sans text-sm text-foreground/45 max-w-md mx-auto leading-relaxed">
              Resultados respaldados por una metodología propia de planeación, control y supervisión de obra.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-background p-8 md:p-12 text-center"
              >
                <p className="font-serif text-5xl md:text-6xl text-primary mb-4"
                  style={{ textShadow: "0 0 40px hsl(39 46% 61% / 0.2)" }}>
                  {m.value}
                </p>
                <div className="w-6 h-px bg-primary/40 mx-auto mb-4" />
                <p className="font-sans text-xs text-foreground/70 font-medium tracking-wide mb-3 leading-snug">{m.label}</p>
                <p className="font-sans text-xs text-foreground/35 leading-relaxed">{m.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Trabaja con un equipo de 30 años de experiencia"
        subtitle="Nos avalan décadas de proyectos exitosos y un compromiso claro con la calidad, el presupuesto y la seguridad en cada obra."
      />
    </main>
  );
}
