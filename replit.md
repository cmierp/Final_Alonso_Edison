# Edison 58 — Landing Page Inmobiliaria Premium

Landing page de alta conversión para Edison 58, desarrollo inmobiliario histórico en la Colonia Tabacalera, CDMX. Diseño editorial Art Déco, mobile-first, orientado a conversión vía WhatsApp y formulario de contacto.

## Run & Operate

- `pnpm --filter @workspace/edison58 run dev` — correr el frontend (puerto asignado por Replit)
- `pnpm --filter @workspace/api-server run dev` — correr el API server (puerto 5000)
- `pnpm run typecheck` — verificación de tipos en todos los paquetes
- `pnpm run build` — typecheck + build completo

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4
- Animaciones: Framer Motion
- Formularios: React Hook Form + Zod
- UI: shadcn/ui (Radix UI)
- Tipografía: Cormorant Garamond (serif) + Inter (sans)
- API: Express 5 (scaffold disponible, no usado en primera versión)

## Where things live

- `artifacts/edison58/src/pages/Home.tsx` — página principal (ensambla todas las secciones)
- `artifacts/edison58/src/components/sections/` — una sección por archivo
- `artifacts/edison58/src/components/Navbar.tsx` — barra de navegación sticky
- `artifacts/edison58/src/components/WhatsAppButton.tsx` — botón flotante WhatsApp
- `artifacts/edison58/src/index.css` — paleta de colores, tipografía, utilidades Art Déco

## Architecture decisions

- Landing page estático sin backend: formulario muestra toast de confirmación (listo para integrar con API/email)
- Número de WhatsApp hardcodeado como constante en cada sección — cambiar `WHATSAPP_NUMBER` en CTAIntermedia.tsx, Contacto.tsx y WhatsAppButton.tsx
- Before/After slider construido con estado React y eventos de mouse/touch (sin librería externa)
- Galería con lightbox propio en React
- Sección de proyectos en `AntesDepues.tsx` usa array tipado — fácil de extender con más proyectos

## Product

Sitio web comercial premium para el proyecto inmobiliario Edison 58:
- 13 secciones completas (Hero, Valor, Historia, Quiénes Somos, Objetivos, Resultados, Proyecto, Antes/Después, Galería, Ubicación, CTA, Contacto, Footer)
- Diseño Art Déco con paleta oscura + acentos dorados
- Mobile-first, orientado a usuarios que llegan por QR
- Botón WhatsApp flotante + formulario de contacto con validación
- Slider antes/después interactivo

## User preferences

- Tono: elegante, arquitectónico, histórico, comercial
- Sin emojis en la UI
- Colonia Tabacalera, CDMX — proyecto inmobiliario histórico
- WhatsApp como canal principal de conversión

## Gotchas

- Cambiar `WHATSAPP_NUMBER` en 3 archivos: `CTAIntermedia.tsx`, `Contacto.tsx`, `WhatsAppButton.tsx`
- Cambiar `EMAIL` en `Contacto.tsx`, `ContactoPage.tsx` y `Footer.tsx`
- Los renders y placeholders de imágenes deben ser reemplazados por activos reales cuando estén disponibles
- El mapa de Google Maps puede requerir una API key para producción

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
