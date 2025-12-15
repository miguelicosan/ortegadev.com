# 🖼️ Optimización de Imágenes

## Instrucciones para Convertir a WebP

### Opción 1: Herramienta Online (Rápida)
- **Squoosh** (by Google): https://squoosh.app/
  - Arrastra imágenes
  - Selecciona WebP
  - Calidad: 80-85
  - Descarga

### Opción 2: CLI con cwebp (Batch)
```bash
# Instalar (macOS)
brew install webp

# Convertir una imagen
cwebp -q 85 input.png -o output.webp

# Batch: Todas las PNG del proyecto
find public/images -name "*.png" -exec sh -c 'cwebp -q 85 "$1" -o "${1%.png}.webp"' _ {} \;

# Batch: Todas las JPG
find public/images -name "*.jpg" -exec sh -c 'cwebp -q 85 "$1" -o "${1%.jpg}.webp"' _ {} \;
find public/images -name "*.jpeg" -exec sh -c 'cwebp -q 85 "$1" -o "${1%.jpeg}.webp"' _ {} \;
```

### Opción 3: Sharp Node Script (Automático)
```bash
# Ya tienes sharp instalado, crear script:
node scripts/convert-images.js
```

## Tamaños Recomendados por Uso

### Hero / Featured (miguel-ortegadev-com-developer.jpeg)
- **Ancho**: 800-1000px
- **Calidad**: 85
- **Formato**: WebP
- **Tamaño objetivo**: < 150KB

### Project Screenshots (ortegadev, revicar, amigo-invisible)
- **Escritorio**: 1200-1400px ancho, Q80
- **Tablet**: 800-1000px ancho, Q80
- **Mobile**: 400-500px ancho, Q80
- **Objetivo**: < 200KB cada una

### Mockups / Gallery
- **Ancho**: 800-1200px
- **Calidad**: 80
- **Objetivo**: < 150KB

## Checklist de Optimización

- [ ] Convertir todas las PNG a WebP
- [ ] Convertir JPG/JPEG a WebP
- [ ] Redimensionar oversized images
- [ ] Verificar peso < objetivos
- [ ] Actualizar referencias en código (ya hecho con Image component)
- [ ] Eliminar originales pesados (opcional, mantener backup)

## Imágenes Actuales a Convertir

### Priority 1 (Hero/Above fold)
- ✅ `/images/miguel-ortegadev-com-developer.jpeg` → componente Image actualizado

### Priority 2 (Projects)
```
/images/projects/revicar/
  - revicar-vista-tablet.png
  - revicar-vista-mobile.png
  - revicar-vista-tablet-vertical.png
  - revicar-vista-escritorio.png
  - cabecera-mockup-revicar.png

/images/projects/ortegadev/
  - ortegadev-hero.png
  - ortegadev-vista-tablet.png
  - ortegadev-screenshot.png
  - ortegadev-home.png
  - ortegadev-projects.png
  - ortegadev-vista-escritorio.png
  - ortegadev-contact-form.png
  - ortegadev-mobile.png

/images/projects/amigo-invisible/
  - sorteo-amigo-invisible-vista-mobile.png
  - sorteo-amigo-invisible-vista-tablet.png
  - sorteo-amigo-invisible-vista-escritorio.png
  - cabecera-mockup-amigo-invisible.png
```

## Después de Convertir

1. **Mantener ambas versiones temporalmente** (PNG + WebP)
2. **Actualizar referencias** a `.webp` en:
   - `src/pages/projects.astro` 
   - `src/pages/en/projects.astro`
   - Project detail pages
3. **Probar carga** en localhost
4. **Eliminar PNGs** originales
5. **Commit & deploy**

## Resultados Esperados

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| **Total images** | ~20MB | ~5MB | **-75%** |
| **Largest image** | 3-4MB | <200KB | **-95%** |
| **LCP** | 3-4s | <2s | **-50%** |
| **PageSpeed** | 60-70 | 90+ | **+30pts** |

## Automatización Futura

Para nuevas imágenes, considera:
- **GitHub Actions** que auto-convierte al hacer push
- **CDN con transformaciones** (Cloudinary, imgix)
- **Astro Image Service** custom
