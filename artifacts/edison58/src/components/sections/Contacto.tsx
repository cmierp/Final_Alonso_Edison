import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5215512345678";
const EMAIL = "contacto@edison58.mx";

const formSchema = z.object({
  nombre: z.string().min(2, "Por favor ingresa tu nombre completo"),
  telefono: z.string().min(10, "Ingresa un número de teléfono válido"),
  correo: z.string().email("Ingresa un correo electrónico válido"),
  mensaje: z.string().optional(),
  interes: z.string().min(1, "Selecciona tu área de interés"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contacto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      correo: "",
      mensaje: "",
      interes: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Mensaje enviado",
      description: "Un asesor se pondrá en contacto contigo a la brevedad. Gracias por tu interés en Edison 58.",
    });
    form.reset();
  };

  return (
    <section
      id="contacto"
      className="py-24 md:py-36 relative overflow-hidden"
      ref={ref}
      style={{ background: "hsl(30 15% 4%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary tracking-[0.3em] text-xs uppercase font-sans mb-6">Contáctanos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              Habla con<br />
              <span className="text-primary">un asesor</span>
            </h2>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-12">
              Déjanos tus datos y un asesor se pondrá en contacto contigo para compartir más información del proyecto, agenda de visitas y condiciones de adquisición.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp-contacto"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <MessageCircle size={18} className="text-primary/60 group-hover:text-primary transition-colors duration-300" strokeWidth={1} />
                </div>
                <div>
                  <p className="font-sans text-xs text-foreground/30 tracking-widest uppercase mb-1">WhatsApp</p>
                  <p className="font-sans text-sm text-foreground/70 group-hover:text-primary transition-colors duration-300">+52 55 1234 5678</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                data-testid="link-email-contacto"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <Mail size={18} className="text-primary/60 group-hover:text-primary transition-colors duration-300" strokeWidth={1} />
                </div>
                <div>
                  <p className="font-sans text-xs text-foreground/30 tracking-widest uppercase mb-1">Correo</p>
                  <p className="font-sans text-sm text-foreground/70 group-hover:text-primary transition-colors duration-300">{EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center">
                  <Phone size={18} className="text-primary/60" strokeWidth={1} />
                </div>
                <div>
                  <p className="font-sans text-xs text-foreground/30 tracking-widest uppercase mb-1">Teléfono</p>
                  <p className="font-sans text-sm text-foreground/70">+52 55 1234 5678</p>
                </div>
              </div>
            </div>

            {/* Divider Art Déco */}
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-primary/15" />
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <rect x="16" y="2" width="8" height="8" transform="rotate(45 20 6)" stroke="hsl(39 46% 61%)" strokeWidth="0.8" fill="none"/>
                <line x1="0" y1="6" x2="13" y2="6" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
                <line x1="27" y1="6" x2="40" y2="6" stroke="hsl(39 46% 61%)" strokeWidth="0.5"/>
              </svg>
              <div className="h-px flex-1 bg-primary/15" />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-primary/15 p-8 md:p-10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/50">Nombre completo</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          data-testid="input-nombre"
                          placeholder="Tu nombre"
                          className="bg-background border-primary/20 focus:border-primary text-foreground placeholder:text-foreground/25 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/50">Teléfono</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            data-testid="input-telefono"
                            placeholder="+52 55 ..."
                            className="bg-background border-primary/20 focus:border-primary text-foreground placeholder:text-foreground/25 rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/50">Correo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            data-testid="input-correo"
                            placeholder="tu@correo.com"
                            type="email"
                            className="bg-background border-primary/20 focus:border-primary text-foreground placeholder:text-foreground/25 rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="interes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/50">Me interesa</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            data-testid="select-interes"
                            className="bg-background border-primary/20 focus:border-primary text-foreground rounded-none"
                          >
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-primary/20 rounded-none">
                          <SelectItem value="comprar">Comprar</SelectItem>
                          <SelectItem value="invertir">Invertir</SelectItem>
                          <SelectItem value="informacion">Recibir información</SelectItem>
                          <SelectItem value="cita">Agendar una cita</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/50">Mensaje (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          data-testid="input-mensaje"
                          placeholder="Cuéntanos más sobre tu interés en el proyecto..."
                          rows={3}
                          className="bg-background border-primary/20 focus:border-primary text-foreground placeholder:text-foreground/25 rounded-none resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  data-testid="button-submit-contacto"
                  className="w-full py-4 bg-primary text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 font-medium"
                >
                  Enviar Solicitud
                </button>

                <div className="relative">
                  <div className="h-px bg-primary/10 my-6" />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-4 text-foreground/25 text-xs font-sans">o</span>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Edison%2058`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-form"
                  className="w-full py-4 border border-primary/30 text-primary font-sans text-sm tracking-[0.2em] uppercase hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                  Contactar por WhatsApp
                </a>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
