import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, titleAccent, subtitle }: PageHeaderProps) {
  return (
    <section
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(30 28% 14%) 0%, hsl(30 26% 10%) 100%)"
      }}
    >
      {/* Decorative side lines — warmer gold */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/22 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/22 to-transparent" />

      {/* Background pattern — slightly more visible */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-header-deco" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect x="26" y="26" width="8" height="8" transform="rotate(45 30 30)" stroke="hsl(39 34% 53%)" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-header-deco)"/>
        </svg>
      </div>

      {/* Warm gold glow from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(39 34% 53% / 0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary tracking-[0.35em] text-xs uppercase font-sans mb-6">{label}</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/28" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight max-w-3xl">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-primary">{titleAccent}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="font-sans text-sm md:text-base text-white/72 max-w-xl mt-6 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center">
        <div className="h-px flex-1 bg-primary/10" />
        <div className="px-4">
          <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
            <rect x="11" y="2" width="8" height="8" transform="rotate(45 15 6)" stroke="hsl(39 34% 53%)" strokeWidth="0.6" fill="none"/>
          </svg>
        </div>
        <div className="h-px flex-1 bg-primary/10" />
      </div>
    </section>
  );
}
