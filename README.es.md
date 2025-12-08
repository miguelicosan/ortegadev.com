# ortegadev.com - Portafolio Web Profesional

Sitio web de marca personal profesional basado en Astro para Miguel Ángel Ortega Ibáñez, con soporte bilingüe (ES/EN), diseño inspirado en Apple, SEO avanzado y cumplimiento total con GDPR.

**[🇬🇧 English Version](./README.md)**

## 📝 Actualizaciones Recientes (Diciembre 2024)

### Mejoras de Diseño y UX
- **Rediseño de Sección About**: Diseño de 2 columnas en escritorio (tarjetas a la izquierda, contenido a la derecha) con apilamiento vertical en móvil
- **Sección "Puedo ayudarte con..."**: Nueva sección basada en tarjetas que destaca 3 áreas de servicio clave con círculos numerados y efectos hover
- **Estilo de Botones**: Botones `.btn-lg` optimizados - 80% de ancho con alineación central en móvil, comportamiento responsivo en escritorio
- **Mejoras de Espaciado**: Aumento de separación a 5rem entre elementos en vista de escritorio para mejor jerarquía visual

### Animaciones y Efectos
- **Efecto de Luz Etérea**: Efecto de luz de fondo animado agregado en la sección About
  - Luz flotante tranquila (600x600px) que se mueve orgánicamente detrás de las tarjetas
  - Efecto de halo eléctrico en hover de tarjeta con movimiento caótico para un mayor engagement visual
- **Carrusel Móvil**: Dirección de animación de TechStack corregida (movimiento vertical de abajo a arriba)
- **Eliminado**: Animación de indicador de scroll de la sección Hero

### Contenido y Servicios
- **Nuevos Servicios**: DevOps & Infrastructure y Backend Scalable agregados a la página de servicios
- **Reescritura de Bio**: Secciones about/bio mejoradas con mejores palabras clave SEO y posicionamiento (ES & EN)
- **Integración Social**: Perfil de Instagram (ortegadevcom) integrado en página de contacto, pie de página y firma de correo
- **Firma de Correo**: Firma de correo HTML/CSS profesional creada con enlaces sociales y soporte de emoji para Mac Mail

### Optimización Móvil
- Visibilidad del carrusel de TechStack corregida y transformaciones de animación en móvil
- Tamaño de botones y espaciado mejorados en todos los puntos de quiebre
- Diseño responsivo mejorado para botones CTA del Hero

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación de producción
npm run preview
```

El servidor de desarrollo comenzará en `http://localhost:4321`

## 📁 Estructura del Proyecto

```
ortegadev.com/
├── public/
│   ├── images/           # Imágenes estáticas, favicon, etc.
│   └── manifest.webmanifest
├── src/
│   ├── components/       # Componentes reutilizables de Astro/React
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── TechStack.astro
│   │   ├── WhatsAppButton.astro
│   │   └── CookieBanner.tsx (React)
│   ├── content/          # Colecciones de contenido (blog, proyectos)
│   │   ├── blog/
│   │   │   ├── en/
│   │   │   └── *.md
│   │   └── projects/
│   │       ├── en/
│   │       └── *.md
│   ├── i18n/             # Internacionalización
│   │   ├── config.ts
│   │   └── locales/
│   │       ├── es.json
│   │       └── en.json
│   ├── layouts/          # Diseños de página
│   │   └── BaseLayout.astro
│   ├── pages/            # Enrutamiento basado en archivos
│   │   ├── index.astro (Español)
│   │   ├── en/
│   │   │   └── index.astro (Inglés)
│   │   └── ... (otras páginas)
│   └── styles/           # Estilos globales y sistema de diseño
│       ├── tokens.scss   # Tokens de diseño
│       ├── reset.scss
│       ├── utilities.scss
│       ├── animations.scss
│       └── global.scss
├── astro.config.mjs
├── package.json
└── README.md / README.es.md
```

## 🌍 Internacionalización (i18n)

Este sitio es compatible con español (ES) e inglés (EN).

### Estructura de URL

- **Español (predeterminado)**: `/`, `/about`, `/services`, etc.
- **Inglés**: `/en`, `/en/about`, `/en/services`, etc.

### Agregar/Editar Traducciones

Edita los archivos de traducción en `src/i18n/locales/`:

- `src/i18n/locales/es.json` - Español
- `src/i18n/locales/en.json` - Inglés

Todos los textos de UI, títulos meta, descripciones y cadenas de contenido se almacenan aquí.

## ✍️ Agregando Contenido

### Publicaciones de Blog

Crea un nuevo archivo Markdown en `src/content/blog/`:

```markdown
---
title: "Título de tu Publicación"
slug: "slug-tu-publicacion"
date: "2024-12-05"
lang: "es"
tags: ["Astro", "Desarrollo Web"]
excerpt: "Descripción corta..."
image: "/images/blog/post-image.jpg"
---

Tu contenido aquí...
```

Para versión en inglés, crea el mismo archivo en `src/content/blog/en/`.

### Proyectos

Crea un nuevo archivo Markdown en `src/content/projects/`:

```markdown
---
title: "Nombre del Proyecto"
slug: "slug-proyecto"
type: "personal" # o "professional"
description: "Descripción corta"
stack: ["React", "Supabase", "TypeScript"]
role: "Full Stack Developer"
liveUrl: "https://example.com"
repoUrl: "https://github.com/..."
image: "/images/projects/screenshot.jpg"
lang: "es"
---

Descripción detallada del proyecto...
```

## 🎨 Sistema de Diseño

El sitio utiliza una arquitectura CSS personalizada con SCSS:

- **Tokens de Diseño**: `src/styles/tokens.scss` - Colores, tipografía, espaciado, sombras, etc.
- **Utilidades**: `src/styles/utilities.scss` - Clases utilitarias reutilizables
- **Animaciones**: `src/styles/animations.scss` - Fotogramas clave y transiciones

### Actualizando Colores

Edita `src/styles/tokens.scss`:

```scss
$color-brand-primary: #0071e3;
$color-brand-secondary: #5e5ce6;
// ... más tokens
```

## 🔌 Integraciones POR HACER

Las siguientes integraciones están preparadas pero necesitan credenciales/URLs reales:

### 1. Servicio de Correo de Formulario de Contacto

Archivo: `src/components/ContactForm.tsx`

Opciones:
- **Resend**: Agregar clave API en variable de entorno
- **Formspree**: Agregar punto final del formulario
- **EmailJS**: Configurar servicio

### 2. Google Analytics (Opcional)

Agregar a `src/layouts/BaseLayout.astro`:
- Verificar consentimiento de cookies (preferencia de análisis)
- Cargar script de GA condicionalmente

### 3. Integración de Calendly

Archivo: `src/pages/contact.astro` (y `/en/contact.astro`)

Reemplaza el marcador de posición con tu URL de Calendly:
```html
<div data-url="https://calendly.com/TU-USUARIO/30min"></div>
```

## 🍪 GDPR y Cookies

El sitio incluye un sistema completo de gestión de cookies compatible con GDPR:

- **Banner de Cookies**: Aparece en la primera visita
- **Configuración de Cookies**: Los usuarios pueden aceptar/rechazar/configurar por categoría
- **LocalStorage**: Las preferencias se guardan localmente

### Categorías de Cookies

- **Necesarias**: Siempre habilitadas (idioma, seguridad)
- **Análisis**: Opcional (Google Analytics, etc.)
- **Marketing**: Opcional (cookies publicitarias)

Cuando agregues herramientas de seguimiento, verifica las preferencias del usuario en `localStorage`:

```javascript
const consent = JSON.parse(localStorage.getItem('cookie-consent'));
if (consent && consent.analytics) {
  // Cargar análisis
}
```

## 📝 Páginas Legales

Las páginas legales están en: `src/pages/legal/` (ES) y `src/pages/en/legal/` (EN)

- **Aviso Legal**: Identificación de empresa/individual, términos de uso
- **Política de Privacidad**: Información compatible con GDPR sobre procesamiento de datos
- **Política de Cookies**: Explicación de las cookies utilizadas

**⚠️ IMPORTANTE**: Haz revisar estas páginas por un profesional legal antes de ponerlas en vivo, especialmente si agregas servicios de terceros.

## 🚀 Despliegue

### Compilar

```bash
npm run build
```

La salida estará en el directorio `dist/` - listo para alojamiento estático.

### Opciones de Alojamiento

- **Netlify**: Conectar a Git, desplegar automáticamente en push
- **Vercel**: Igual que Netlify
- **Cloudflare Pages**: CDN global rápido
- **GitHub Pages**: Alojamiento gratuito para sitios estáticos

Todos soportan dominios personalizados e HTTPS automático.

## ⚡ Rendimiento y SEO

### Optimizaciones Integradas

- ✅ Estructura HTML semántica
- ✅ Etiquetas meta (título, descripción, Open Graph, Twitter Card)
- ✅ Datos estructurados schema.org (Persona, ProfessionalService)
- ✅ Etiquetas hreflang para SEO bilingüe
- ✅ Imágenes responsivas
- ✅ Carga perezosa
- ✅ JavaScript mínimo (solo donde es necesario vía Astro Islands)
- ✅ CSS con SCSS para mantenibilidad

### Objetivos de Lighthouse

Puntuaciones objetivo >= 90 para:
- Performance
- Accesibilidad
- Mejores Prácticas
- SEO

## 📧 Información de Contacto

Actualiza los detalles de contacto en:

- Archivos de traducción: `src/i18n/locales/*.json`
- Componente Footer: `src/components/Footer.astro`
- Botón WhatsApp: `src/components/WhatsAppButton.astro`
- Páginas legales: `src/pages/legal/*`

**Contacto Actual:**
- 🌐 **Sitio Web**: [ortegadev.com](https://ortegadev.com) ([Inglés](https://ortegadev.com/en))
- 📧 **Email**: hola@ortegadev.com
- 📍 **Ubicación**: Almería, España

**Idiomas / Languages:**
- 🇪🇸 Español: [ortegadev.com](https://ortegadev.com)
- 🇬🇧 Inglés: [ortegadev.com/en](https://ortegadev.com/en)

## 🛠 Stack Tecnológico

- **Framework**: Astro 5.x
- **Estilos**: CSS personalizado con SCSS/Sass
- **Interactividad**: React (vía Astro Islands)
- **i18n**: Implementación personalizada con JSON
- **Build**: Vite (integrado con Astro)

## 📄 Licencia

© 2024 Miguel Ángel Ortega Ibáñez. Todos los derechos reservados.

---

¿Necesitas ayuda? Contacta a miguel@ortegadev.com
