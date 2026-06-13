import { Link } from "wouter";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import logoSrc from "@assets/logoEdison58_(1)_1778621964748.png";

const WHATSAPP_NUMBER = "+5214421128407";
const EMAIL = "ventas@edison58.com";

const navLinks = [
  { label: "El Proyecto",            path: "/proyecto" },
  { label: "Historia y Arquitectura", path: "/historia" },
  { label: "Desarrollador",          path: "/desarrollador" },
  { label: "Galería",                path: "/galeria" },
  { label: "Contacto",               path: "/contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "hsl(30 20% 7%)" }} className="border-t border-primary/12">
      <div className="max-w-6xl mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-10 md:pb-14">

        {/* ── Grid principal: 3 columnas independientes ── */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1.4fr] gap-8 md:gap-16 mb-10 md:mb-14">

          {/* ── Brand — full width en mobile ── */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link href="/" className="inline-block cursor-pointer">
              <img
                src={logoSrc}
                alt="Edison 58 Tabacalera"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="font-sans text-xs text-white/52 leading-relaxed max-w-xs">
              Edificio histórico Art Déco en la Colonia Tabacalera, transformado en 11 departamentos únicos para habitar e invertir en el corazón de la Ciudad de México.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-primary/30" />
              <span className="font-sans text-[10px] text-primary/50 tracking-[0.25em] uppercase">Patrimonio INBA · INAH</span>
            </div>
          </div>

          {/* ── Navegación ── */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-5">Páginas</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-sans text-xs text-white/48 hover:text-primary/75 transition-colors duration-200 cursor-pointer leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacto ── */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary mb-5">Contacto</p>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MessageCircle size={13} className="text-primary/45 group-hover:text-primary transition-colors duration-200 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs text-white/65 group-hover:text-white/88 transition-colors duration-200 leading-snug">+52 1 442 112 8407</p>
                  <p className="font-sans text-[9px] text-white/32 mt-0.5">WhatsApp · respuesta inmediata</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-3 group"
              >
                <Mail size={13} className="text-primary/45 group-hover:text-primary transition-colors duration-200 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs text-white/65 group-hover:text-white/88 transition-colors duration-200 leading-snug break-all">{EMAIL}</p>
                  <p className="font-sans text-[9px] text-white/32 mt-0.5">Correo electrónico</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-primary/32 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-xs text-white/50 leading-snug">Calle Edison 58</p>
                  <p className="font-sans text-[9px] text-white/32 mt-0.5">Col. Tabacalera · Cuauhtémoc, CDMX</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Divisor ornamental ── */}
        <div className="flex items-center gap-4 mb-7">
          <div className="h-px flex-1 bg-primary/8" />
          <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
            <rect x="9" y="0.5" width="7" height="7" transform="rotate(45 12 4)" stroke="hsl(39 34% 53% / 0.3)" strokeWidth="0.7" fill="none"/>
          </svg>
          <div className="h-px flex-1 bg-primary/8" />
        </div>

        {/* ── Copyright ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 font-sans text-[10px] text-white/28 leading-relaxed">
          <p>© {new Date().getFullYear()} Edison 58 · BFC Arquitectos. Todos los derechos reservados.</p>
          <p className="sm:text-right">Imágenes y renders de carácter ilustrativo.</p>
        </div>

      </div>
    </footer>
  );
}
