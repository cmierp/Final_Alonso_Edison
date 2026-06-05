import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoSrc from "@assets/logoEdison58_(1)_1778621964748.png";

const navLinks = [
  { label: "Proyecto", path: "/proyecto" },
  { label: "Historia", path: "/historia" },
  { label: "Desarrollador", path: "/desarrollador" },
  { label: "Galería", path: "/galeria" },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  const solid = !isHome || scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: solid ? "hsl(30 26% 10% / 0.90)" : "transparent",
        backdropFilter: solid ? "blur(24px) saturate(1.2)" : "none",
        borderBottom: solid ? "1px solid hsl(39 34% 53% / 0.10)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link
          href="/"
          data-testid="nav-logo"
          className="flex items-center shrink-0"
        >
          <img
            src={logoSrc}
            alt="Edison 58 Tabacalera"
            className="h-8 md:h-9 w-auto object-contain"
            style={{ filter: "brightness(1)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              data-testid={`nav-link-${link.path.replace("/", "")}`}
              className={`font-sans text-white text-[10px] tracking-[0.22em] uppercase transition-all duration-250 whitespace-nowrap ${
                location === link.path
                  ? "text-primary"
                  : "text-foreground/42 hover:text-primary/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contacto"
            data-testid="nav-cta"
            className="hidden md:inline-flex items-center px-5 py-2 border border-primary/40 text-primary font-sans text-[10px] tracking-[0.22em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-250"
          >
            Agendar Cita
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="nav-menu-toggle"
            className="lg:hidden w-9 h-9 flex items-center justify-center text-white/65 hover:text-primary transition-colors duration-200"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "hsl(30 26% 9% / 0.97)",
              backdropFilter: "blur(20px) saturate(1.2)",
              borderTop: "1px solid hsl(39 34% 53% / 0.10)",
            }}
          >
            <div className="px-6 pt-4 pb-6 flex flex-col gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-sans text-sm tracking-[0.18em] uppercase py-4 border-b border-primary/8 transition-colors duration-200 ${
                    location === link.path ? "text-primary" : "text-white/68 hover:text-primary/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-5 py-3.5 bg-primary text-primary-foreground font-sans text-xs tracking-[0.22em] uppercase text-center hover:bg-primary/90 transition-colors duration-200"
              >
                Agendar Cita
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
