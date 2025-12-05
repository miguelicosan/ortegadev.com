# 🚀 Roadmap - ortegadev.com

## 📋 Descripción General

Portfolio web profesional construido con **Astro v5**, diseñado para atraer a recruiters con enfoque en visibilidad SEO y presentación profesional. Showcases de proyectos, información sobre experiencia de 10+ años en Full Stack Development, y contacto directo.

---

## ✅ FASE 1: Sistema Base & Tema (COMPLETADO)

- [x] Configuración de Astro v5 con React integration
- [x] Sistema de tema oscuro (dark-only)
- [x] Toggle de tema con persistencia localStorage
- [x] Estructura de carpetas i18n (ES/EN)
- [x] Configuración de TypeScript/SCSS
- [x] Tokens de diseño (colors, spacing, typography)

---

## ✅ FASE 2: Animaciones Avanzadas (COMPLETADO)

- [x] Sistema de scroll-reveal con IntersectionObserver
- [x] Parallax effect en Hero section
- [x] Carousel 3D de tech stack con auto-rotación
- [x] Spring easing para animaciones (cubic-bezier)
- [x] Transiciones view de Astro integradas
- [x] Fade-out progressive en hero scroll

---

## ✅ FASE 3: Navegación Mobile (COMPLETADO)

- [x] Menú hamburguesa responsive
- [x] Click-outside detection para cerrar menú
- [x] Blur effect en fondo
- [x] Spring easing animation (0.34,1.56,0.64,1)
- [x] Adaptación mobile-first

---

## ✅ FASE 4: SEO Foundation (COMPLETADO)

- [x] Meta tags (title, description, og:tags, twitter:cards)
- [x] Canonical URLs
- [x] Hreflang para alternativas de idioma
- [x] robots.txt con Disallow /legal/
- [x] sitemap.xml con 12 páginas indexables
- [x] Schema.org JSON-LD (Person + ProfessionalService)
- [x] Noindex en páginas legales

---

## ✅ FASE 5: Sistema de Contacto (COMPLETADO)

- [x] Componente React ContactForm con validación
- [x] React Hook Form + Zod integration
- [x] API endpoint `/api/contact`
- [x] Botón WhatsApp flotante (WhatsAppButton.astro)
- [x] Validación de email y campos requeridos
- [x] Respuesta visual de envío

---

## ✅ FASE 6: Favicon & Iconografía (COMPLETADO)

- [x] Favicon SVG (gear icon) 🔧
- [x] Actualización en todas las páginas
- [x] Generación de variantes para diferentes dispositivos

---

## ✅ FASE 7: Showcase de Proyectos (COMPLETADO)

- [x] Componente React ProjectsGrid
- [x] Sistema de modal para detalles de proyectos
- [x] 3 proyectos featured (ReviCar, Sorteo Amigo Invisible, ortegadev)
- [x] Grid responsivo (auto-fit, minmax 350px)
- [x] Animación slideUp en modal
- [x] Hover transforms en cards
- [x] Overlay de imágenes

---

## ✅ FASE 8: Gestión de Cookies (COMPLETADO)

- [x] Componente CookieBanner con localStorage
- [x] Modal de configuración de cookies
- [x] Botón en páginas legales para abrir configurador
- [x] Custom events (openCookieSettings)
- [x] **FIX CRÍTICO**: Modal siempre en DOM, accesible desde legal pages
- [x] Evento astro:after-swap para mantenimiento entre transiciones

---

## ✅ FASE 9: Actualización de Contenido (COMPLETADO)

- [x] **SCSS**: Corregido $radius-2xl → $radius-xl en ProjectsGrid (línea 210)
- [x] **Imágenes**: Migración .jpg → .png (8 archivos actualizados)
  - revicar-screenshot.png
  - amigo-invisible-screenshot.png
  - ortegadev-screenshot.png
- [x] **Fechas**: Actualización a Diciembre 2025 en 6 páginas legales (ES/EN)

---

## ✅ FASE 10: About Section Profesional (COMPLETADO)

- [x] **Reescritura completa** del About en ES y EN (2000+ palabras)
- [x] Información profesional desde LinkedIn:
  - Nombre: Miguel Ángel Ortega Ibáñez
  - Rol: "Freelancer | IA/Big Data | Full Stack Developer | Python & Docker"
  - Últimas noticias: ReviCar, Apple/Google Developer, learning Flutter
  - **Tech Stack detallado** (5 categorías):
    - Frontend: React, Svelte, Astro, React Native
    - Backend: Python, Node.js, PostgreSQL, MongoDB, Supabase
    - DevOps: Docker, AWS, Kafka, Spark
    - IoT: InfluxDB, Grafana, Node-RED
    - AI/DS: Deep Learning, Scikit-Learn, TensorFlow
  - **Experiencia**: Minsait como Ingeniero de Automatización (7+ años, Oct 2018-presente)
  - **Educación**: Master en IA/BigData (600hrs), Ciclo Superior (2001-2003)
  - **Objetivo profesional** y disponibilidad

---

## ✅ FASE 11: Análisis SEO para Recruiters (COMPLETADO)

- [x] Auditoría completa de SEO técnico
- [x] Análisis de meta tags y Open Graph
- [x] Revisión de Schema.org JSON-LD
- [x] Evaluación de contenido desde perspectiva recruiter
- [x] Análisis de keywords (alto volumen vs. nicho)
- [x] Identificación de 5 áreas de mejora principales
- [x] Generación de 11 recomendaciones específicas

**Fortalezas identificadas:**
- ✅ Meta tags completos en todas las páginas
- ✅ Sitemap con hreflang correctamente configurado
- ✅ Schema.org JSON-LD (Person + ProfessionalService)
- ✅ Diseño profesional y limpio
- ✅ About section detallada con 10+ años de experiencia

**Áreas de mejora:**
- ⚠️ No integración con Google Search Console
- ⚠️ Sin CV/Resume descargable
- ⚠️ Sin indicador "Disponible para nuevas oportunidades"
- ⚠️ LinkedIn/GitHub no prominentes en header
- ⚠️ Sin Schema.org JobSeeker type

---

## 🎯 FASE 12: Optimización SEO para Recruiters (EN PROGRESO)

### Recomendaciones a Implementar:

#### 1. **Meta Descriptions Optimizadas** (🔴 PENDIENTE)
```
Implementar descripciones ricas en keywords para cada página:
- Home: "Full Stack Developer (Python, React, Docker) | IA/Big Data | 10+ años | Disponible Remoto"
- About: "Miguel Ortega - Ingeniero Full Stack con 7+ años en Minsait | Master IA/BigData | Python, Docker, React"
- Projects: "Portfolio de proyectos: ReviCar (Flutter App), Sorteo Amigo Invisible, ortegadev.com | Casos de uso reales"
```

#### 2. **CV/Resume Descargable** (🔴 PENDIENTE)
```
Crear resume.pdf con:
- Información profesional completa
- Tech stack organizado por categorías
- Experiencia laboral (Minsait 7+ años)
- Educación (Master IA/BigData)
- Proyectos destacados
- Enlaces a LinkedIn/GitHub
```

#### 3. **Badge "Disponible para Nuevas Oportunidades"** (🔴 PENDIENTE)
```
Implementar en Header/About:
- Indicador visual 🟢 "Disponible para nuevas oportunidades"
- Información de disponibilidad (Remoto, España, 40-50% dedicación)
- Link a formulario de contacto rápido
```

#### 4. **Prominencia de Links Sociales** (🔴 PENDIENTE)
```
Optimizar accesibilidad:
- LinkedIn: Mover a header (junto a GitHub)
- GitHub: Destacar con icono
- Links en About, Footer, y Hero section
- Añadir rel="me" en tags de header
```

#### 5. **Schema.org JobSeeker Type** (🔴 PENDIENTE)
```
Extender JSON-LD en BaseLayout con:
{
  "@type": "JobSeeker",
  "name": "Miguel Ángel Ortega Ibáñez",
  "skills": ["Python", "React", "Docker", "AWS", ...],
  "jobTitle": "Full Stack Developer",
  "availability": "Available",
  "yearsOfExperience": 10,
  "mainEntity": { "@type": "Person", ... }
}
```

#### 6. **Keywords H1/H2 Optimizados** (🔴 PENDIENTE)
```
Reemplazar H1 genéricos con keywords high-volume:
- "Full Stack Developer: Python, React, Docker | 10+ años Experiencia"
- "Soluciones de IA y Automatización | Consultor Python"
- "Desarrollador Remoto España | React, FastAPI, AWS"
```

#### 7. **Google Search Console Integration** (🔴 PENDIENTE)
```
Añadir meta tag en BaseLayout:
<meta name="google-site-verification" content="[token]" />
- Verificar en GSC
- Monitorear impressions y clicks
- Optimizar CTR en snippets
```

#### 8. **Rich Snippets for Local SEO** (🔴 PENDIENTE)
```
Actualizar Schema.org:
- address completamente detallada (Almería, España)
- priceRange (servicios)
- areaServed: expandir a "ES", "EU", "Remoto"
```

#### 9. **Open Graph Optimization** (🔴 PENDIENTE)
```
Mejorar og:description en BaseLayout:
- Incluir keywords principales
- Mencionar tech stack
- Call-to-action (LinkedIn, GitHub)
```

#### 10. **Internal Linking Strategy** (🔴 PENDIENTE)
```
Implementar cross-links:
- About → Projects (mencionar ReviCar, etc.)
- Projects → Services
- Services → Contact form
- Blog → Tech stack details
```

#### 11. **Performance & Core Web Vitals** (🔴 PENDIENTE)
```
Optimizar métricas:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- Monitorar en Google PageSpeed
```

---

## 📊 Estado Actual

### Componentes Funcionales:
- ✅ Header con navegación responsive
- ✅ Hero section con parallax
- ✅ About section profesional (2000+ palabras)
- ✅ Tech stack carousel 3D
- ✅ Projects showcase con modal
- ✅ Contact form con validación
- ✅ Cookie banner y configurador
- ✅ Footer con links sociales
- ✅ Bilingual support (ES/EN)
- ✅ Dark theme persistent

### SEO Infrastructure:
- ✅ Meta tags en todas las páginas
- ✅ Sitemap.xml (12 páginas)
- ✅ robots.txt
- ✅ Schema.org JSON-LD (Person + ProfessionalService)
- ✅ Canonical URLs
- ✅ Hreflang tags
- ✅ Open Graph tags
- ✅ Twitter cards

### Multimedia:
- ✅ Favicon SVG
- ✅ 3 proyecto screenshots (PNG)
- ✅ OG image default
- ✅ Responsive images

---

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── About.astro
│   ├── CookieBanner.tsx (React, localStorage, custom events)
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── LanguageSwitcher.astro
│   ├── ProjectsGrid.tsx (React, modal system)
│   ├── TechStack.astro
│   ├── ThemeToggle.astro
│   └── WhatsAppButton.astro
├── content/
│   ├── blog/
│   │   └── en/
│   └── projects/
│       └── en/
│           ├── revicar.md
│           ├── amigo-invisible.md
│           └── ortegadev.md
├── i18n/
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       └── es.json
├── layouts/
│   └── BaseLayout.astro (Master layout with SEO, theme, animations)
├── pages/
│   ├── about.astro (ES)
│   ├── blog.astro
│   ├── contact.astro
│   ├── index.astro
│   ├── projects.astro
│   ├── services.astro
│   ├── en/
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── services.astro
│   │   └── legal/
│   │       ├── cookies.astro
│   │       ├── legal-notice.astro
│   │       └── privacy.astro
│   └── legal/
│       ├── cookies.astro
│       ├── privacidad.astro
│       └── aviso-legal.astro
├── styles/
│   ├── animations.scss
│   ├── global.scss
│   ├── reset.scss
│   ├── tokens.scss (Custom properties)
│   └── utilities.scss
└── api/
    └── contact.ts (Express-like endpoint)

public/
├── images/
│   ├── projects/
│   │   ├── revicar-screenshot.png
│   │   ├── amigo-invisible-screenshot.png
│   │   └── ortegadev-screenshot.png
│   └── og-default.jpg
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

---

## 🔧 Tecnologías Utilizadas

### Framework & Build
- **Astro v5** - Static site generation con Server-side rendering
- **TypeScript** - Type safety
- **SCSS** - Styling con variables customizadas

### Frontend Components
- **React** - ProjectsGrid, ContactForm, CookieBanner
- **React Hook Form** - Formulario de contacto
- **Zod** - Validación de datos

### Styling & Animations
- **SCSS Custom Properties** - Theme system
- **CSS 3D Transforms** - Carousel 3D
- **IntersectionObserver API** - Scroll reveal
- **requestAnimationFrame** - Parallax smooth
- **Cubic-bezier spring easing** - Menu animation

### SEO & Metadata
- **Schema.org JSON-LD** - Structured data
- **Hreflang** - Alternate language versions
- **Canonical URLs** - Duplicate prevention
- **Open Graph / Twitter Cards** - Social sharing

### Internationalization
- **i18next** - Translation system
- **Dual page routes** - /pages/* (ES) y /pages/en/* (EN)

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev        # Iniciar servidor de desarrollo (puerto 3000)

# Build
npm run build      # Generar optimizado para producción

# Preview
npm run preview    # Previsualizar build localmente

# Lint
npm run lint       # Verificar código con ESLint (si configurado)
```

---

## 📈 Métricas SEO Objetivo

### Keywords High-Volume
- "Desarrollador Full Stack Python" - 480 búsquedas/mes
- "Senior Developer React" - 620 búsquedas/mes
- "Ingeniero IA España" - 290 búsquedas/mes

### Keywords Niche
- "Full Stack Developer Python React" - 180 búsquedas/mes
- "Consultor Automatización Procesos" - 95 búsquedas/mes

### Posicionamiento Recruiter
- Google Recruiting: Top 5 en "Full Stack Developer [Ciudad]"
- LinkedIn: Presence en búsquedas de skills relevantes
- Conversion Rate Objetivo: 5-10% de visitantes → contactos

---

## 📋 Checklist Pre-Deployment

- [ ] Implementar 11 recomendaciones SEO para recruiters
- [ ] Crear y subir resume.pdf descargable
- [ ] Añadir badge "Disponible para nuevas oportunidades"
- [ ] Optimizar meta descriptions con keywords
- [ ] Integrar Google Search Console
- [ ] Revisar Core Web Vitals en PageSpeed Insights
- [ ] Verificar todos los links (internos y externos)
- [ ] Revisar imágenes y media (tamaño, formato)
- [ ] Validar HTML/CSS en W3C
- [ ] Test mobile responsiveness
- [ ] Backup de contenido importante
- [ ] Configurar email de contacto
- [ ] Activar HTTPS en hosting
- [ ] Deploy a producción

---

## 🎓 Notas de Desarrollo

### Dark-Only Theme
El proyecto utiliza tema oscuro exclusivamente por diseño. El toggle persiste en localStorage pero siempre mantiene dark mode.

```javascript
// Aplicado en BaseLayout.astro
document.documentElement.setAttribute('data-theme', 'dark');
```

### Animation Pipeline
- Scroll-reveal: IntersectionObserver detects viewport entry
- Parallax: requestAnimationFrame para smooth 60fps
- Carousel: setInterval de 4 segundos con manual controls

### Event System
- `astro:after-swap` - Reinitializar scripts después de view transitions
- `openCookieSettings` - Custom event para abrir modal de cookies
- localStorage - Persistencia de preferencias

### i18n Pattern
Estructura dual de rutas:
```
/es/pages/about.astro       → /about/
/es/pages/en/about.astro    → /en/about/
```

---

## 🐛 Bugs Corregidos en Sesión

1. **SCSS $radius-2xl undefined** ✅
   - Cambio: `$radius-2xl` → `$radius-xl` en ProjectsGrid.scss:210
   - Root cause: Token no definido en tokens.scss

2. **Imagen mismatch format** ✅
   - Cambio: `.jpg` → `.png` en 8 referencias de archivos
   - Migración completa a PNG para mejor compresión

3. **Cookie modal inaccessible** ✅
   - Issue: CookieBanner retornaba null cuando banner=false
   - Fix: Restructurado para siempre renderizar modal, custom events

4. **Fecha desactualizada en legal pages** ✅
   - Cambio: "Diciembre 2024" → "Diciembre 2025" (6 archivos)

---

## 📞 Contacto & Links

- **Email**: hola@ortegadev.com
- **Teléfono**: +34 621 329 386
- **LinkedIn**: https://linkedin.com/in/ortegadev
- **GitHub**: https://github.com/ortegadev
- **Website**: https://ortegadev.com

---

**Última actualización**: 5 de Diciembre de 2025  
**Status**: En producción, optimizando para recruiters  
**Próxima fase**: Implementación de recomendaciones SEO (Fase 12)
