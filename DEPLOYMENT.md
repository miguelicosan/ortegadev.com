# 🚀 Guía de Deployment - Hostinger (FTP)

## Archivos Generados

- **Carpeta `dist/`**: Contiene todos los archivos compilados listos para producción
- **.htaccess**: Configuración para Apache (rewrite rules, cache, compression)
- **robots.txt**: Ya está incluido en dist/
- **sitemap.xml**: Ya está incluido en dist/
- **favicon.svg**: Ya está incluido en dist/

## Pasos para Subir a Hostinger

### 1. Conectar FTP

```bash
# Credentials que necesitas de Hostinger:
# - Host FTP
# - Usuario FTP
# - Contraseña FTP
# - Puerto (usualmente 21)

# Puedes usar cualquier cliente FTP:
# - FileZilla (GUI)
# - Cyberduck (GUI)
# - Terminal: lftp, ftp

# Ejemplo con lftp:
lftp -u usuario,contraseña ftp.tudominio.com
```

### 2. Subir Archivos

```bash
# Estructura esperada en Hostinger:
# /public_html/
#   ├── index.html
#   ├── robots.txt
#   ├── sitemap.xml
#   ├── favicon.svg
#   ├── .htaccess
#   ├── en/
#   ├── about/
#   ├── blog/
#   ├── contact/
#   ├── projects/
#   ├── services/
#   ├── legal/
#   ├── images/
#   └── _astro/

# Desde terminal:
cd /Users/miguel/Proyectos/ortegadev.com/dist

# Con lftp:
lftp -u usuario,contraseña ftp.tudominio.com
cd /public_html
mirror --reverse --verbose

# O con FileZilla:
# 1. Abre FileZilla
# 2. File > Site Manager
# 3. New Site
# 4. Ingresa credenciales FTP
# 5. Connect
# 6. Arrastra carpeta dist/* a public_html/
```

### 3. Verificar .htaccess

⚠️ **Importante**: El archivo `.htaccess` está en `dist/.htaccess`

Asegúrate de que:
1. Se subió correctamente
2. Está en la raíz de `/public_html/`
3. Si no aparece (archivos ocultos), habilita "View hidden files" en FTP

### 4. Configurar Dominio

En Hostinger:
1. Ir a Domains
2. Apuntar la zona DNS a tu hosting
3. Esperar propagación (24-48 horas)

### 5. Test en Producción

```bash
# Verificar que está online:
curl https://ortegadev.com
curl https://ortegadev.com/en/
curl https://ortegadev.com/about/
curl https://ortegadev.com/contact/

# Verificar rewrite rules:
curl -i https://ortegadev.com/api/submit-contact
# Debe devolver 405 Method Not Allowed (POST esperado)
```

### 6. SSL/HTTPS

En Hostinger:
1. SSL Certificate > Let's Encrypt (gratis)
2. Instalar automáticamente
3. Auto-renewal habilitado

### 7. Monitorear en Producción

```bash
# Google Search Console:
1. Ir a https://search.google.com/search-console
2. Agregar propiedad: https://ortegadev.com
3. Verificar propiedad (meta tag en BaseLayout)
4. Monitorear clicks, impressions, CTR

# PageSpeed Insights:
1. https://pagespeed.web.dev/
2. Ingresar https://ortegadev.com
3. Revisar Core Web Vitals
4. Implementar mejoras sugeridas
```

## Estructura Deployada

```
public_html/
├── .htaccess                    # Apache rewrite rules
├── index.html                   # Homepage ES
├── robots.txt                   # SEO
├── sitemap.xml                  # SEO
├── favicon.svg                  # 
├── en/
│   ├── index.html
│   ├── about/index.html
│   ├── blog/index.html
│   ├── contact/index.html
│   ├── projects/index.html
│   ├── services/index.html
│   └── legal/
│       ├── cookies/index.html
│       ├── privacy/index.html
│       └── legal-notice/index.html
├── about/index.html
├── blog/index.html
├── contact/index.html
├── projects/index.html
├── services/index.html
├── legal/
│   ├── cookies/index.html
│   ├── privacidad/index.html
│   └── aviso-legal/index.html
├── images/                      # Assets
│   └── projects/
│       ├── revicar-screenshot.png
│       ├── amigo-invisible-screenshot.png
│       └── ortegadev-screenshot.png
└── _astro/                       # CSS/JS optimizados
    ├── *.css
    └── *.js
```

## Notas Importantes

⚠️ **API de Contacto**:
- En modo estático (FTP), NO funcionan las rutas `/api/*`
- Solución: Integrar servicio de email (Resend, SendGrid, Mailgun)
- Ver comentarios TODO en `src/pages/api/submit-contact.ts`

✅ **Caché**:
- El `.htaccess` configura caché de 1 año para imágenes
- CSS/JS caché de 1 mes
- Reduce bandwidth y mejora velocidad

✅ **Compression**:
- Gzip automático habilitado
- Reduce tamaño de archivos ~70%

## Troubleshooting

### 404 en rutas sin .html

Si tienes errores 404 en `/about/`, `/projects/`, etc:

1. Verificar que `.htaccess` está en `public_html/`
2. Verificar que mod_rewrite está habilitado en Hostinger
3. En panel Hostinger: Settings > Apache Modules > Activar mod_rewrite

### Imágenes no cargan

1. Verificar que carpeta `images/` está subida
2. Verificar permisos (755 para carpetas, 644 para archivos)
3. Revisar rutas en HTML: deben ser `/images/...`

### Formulario no envía

El endpoint POST `/api/submit-contact` NO funciona en hosting estático.

Alternativas:
1. **Formspree** (recomendado): https://formspree.io/
2. **EmailJS**: https://www.emailjs.com/
3. **SendGrid API**
4. **Resend**: https://resend.com/

Cambio rápido para Formspree:
```tsx
// En ContactForm.tsx
const response = await fetch('https://formspree.io/f/[TU_FORM_ID]', {
  method: 'POST',
  body: new FormData(formRef.current),
  headers: { 'Accept': 'application/json' }
});
```

## Próximos Pasos

1. [ ] Subir a Hostinger via FTP
2. [ ] Verificar sitio en https://ortegadev.com
3. [ ] Configurar servicio de email para formulario
4. [ ] Integrar Google Search Console
5. [ ] Monitorear Core Web Vitals
6. [ ] Implementar recomendaciones SEO (Fase 12)

---

**Build fecha**: 5 de Diciembre de 2025  
**Astro versión**: v5  
**Tamaño aprox**: 2.5 MB (gzipped: ~500 KB)
