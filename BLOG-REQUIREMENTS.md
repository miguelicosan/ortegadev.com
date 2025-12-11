# 📝 Blog System Requirements - ortegadev.com

**Status**: 🚧 Pending Implementation  
**Priority**: High  
**Tech Stack**: Astro + Supabase + Cloudflare Turnstile  
**Last Updated**: December 11, 2025

---

## 🎯 Objetivos del Blog

Crear un blog profesional dentro de ortegadev.com con los siguientes objetivos:

1. **SEO Local**: Captar clientes orgánicos en Almería / Andalucía / España
2. **Portfolio Showcase**: Mostrar proyectos reales (ReviCar, Amigo Invisible, etc.) como casos de estudio
3. **Personal Branding**: Construir marca personal (historia, valores, forma de trabajar)
4. **Reading Experience**: Experiencia de lectura cuidada, limpia, rápida y agradable

---

## 🧱 Estructura del Blog

### 1. Página de Listado (`/blog`)

**Características principales:**

**Cards de posts:**
- Título
- Extracto corto
- Tags
- Tiempo de lectura (ej: "6 min de lectura")
- Fecha de publicación
- Imagen destacada (opcional)

**Filtros interactivos:**
- Por tags: "SEO local", "Proyectos reales", "Guías", "Historia personal"
- Buscador de texto (busca en título + excerpt)

**Diseño:**
- Minimalista y tech, coherente con el resto de la web
- Responsive, muy cómodo en móvil
- Grid adaptativo de cards

---

### 2. Estructura de cada Post

**Formato:** Markdown/MDX con frontmatter

**Frontmatter obligatorio:**

```yaml
---
title: "Desarrollador web en Almería: guía para negocios locales"
slug: "desarrollador-web-almeria"
date: "2025-01-20"
excerpt: "Qué debe tener una buena web en Almería, cuánto puede costar y cómo elegir desarrollador."
tags: ["seo-local", "desarrollo-web", "almería"]
category: "seo-local"
readingTime: "7 min"
featuredImage: "/blog/almeria-dev-cover.jpg"
lang: "es"
---
```

**Layout del post:**

1. **Header:**
   - Título grande (H1)
   - Fecha + tiempo de lectura
   - Imagen destacada (opcional)

2. **Body:**
   - Contenido con tipografía optimizada para lectura
   - Tabla de contenidos (opcional, para posts largos)
   - Sintaxis highlighting para código
   - Imágenes optimizadas

3. **Footer:**
   - Bloque de cierre/cliffhanger:
     - Agradecimiento por leer
     - Pregunta o llamada a la acción
     - Enlace a contacto o servicios

---

### 3. Botones para Compartir

Al final de cada post, incluir botones/enlaces para compartir en:

- **LinkedIn** (profesional, target principal)
- **Facebook** (alcance general)
- **X/Twitter** (tech community)
- **WhatsApp** (especialmente móvil, muy usado en España)

**Implementación:** Enlaces simples con la URL del post (sin SDKs pesados)

---

## 💬 Sistema de Comentarios (Supabase)

### Requisitos Funcionales

**Público:**
- ✅ Cualquier usuario puede enviar comentarios sin registrarse
- ✅ Formulario simple: Nombre (obligatorio), Email (opcional), Comentario (obligatorio)

**Moderación:**
- ❌ Los comentarios NO se publican automáticamente
- ✅ Se guardan con `is_approved = false`
- ✅ Miguel revisa y aprueba/rechaza manualmente
- ✅ Solo se muestran comentarios con `is_approved = true` y `is_deleted = false`

---

### Base de Datos (Supabase)

**Tabla: `comments`**

```sql
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  content TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  is_deleted BOOLEAN DEFAULT false,
  moderation_token UUID DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index para buscar por post
CREATE INDEX idx_comments_post_slug ON comments(post_slug);

-- Index para moderation_token
CREATE INDEX idx_comments_moderation_token ON comments(moderation_token);
```

**Row Level Security (RLS):**

```sql
-- Habilitar RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Policy: Solo lectura pública de comentarios aprobados
CREATE POLICY "Public can read approved comments"
  ON comments FOR SELECT
  USING (is_approved = true AND is_deleted = false);

-- NO permitir INSERT/UPDATE/DELETE público
-- Todo se hace vía Edge Functions con service_role
```

---

### Flujo de Envío de Comentarios

**1. Formulario en el post:**

```html
<form id="comment-form">
  <input type="text" name="name" placeholder="Nombre" required />
  <input type="email" name="email" placeholder="Email (opcional)" />
  <textarea name="comment" placeholder="Tu comentario" required maxlength="1500"></textarea>
  
  <!-- Honeypot (hidden) -->
  <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off" />
  
  <!-- Cloudflare Turnstile -->
  <div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
  
  <button type="submit">Enviar comentario</button>
</form>
```

**2. Edge Function: `submit-comment`**

**Endpoint:** `POST /functions/v1/submit-comment`

**Body JSON:**
```json
{
  "post_slug": "mi-post",
  "author_name": "Nombre",
  "author_email": "correo@ejemplo.com",
  "content": "Comentario...",
  "captchaToken": "TOKEN_TURNSTILE",
  "website": ""
}
```

**Lógica:**

1. **Validar Honeypot:**
   - Si `website` viene relleno → return 400 (bot detectado)

2. **Validar CAPTCHA:**
   ```typescript
   const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
   const response = await fetch(verifyUrl, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       secret: TURNSTILE_SECRET_KEY,
       response: captchaToken
     })
   });
   const { success } = await response.json();
   if (!success) return 400;
   ```

3. **Validar campos:**
   - `post_slug`, `author_name`, `content` obligatorios
   - `content`: longitud máxima 1500 caracteres
   - Opcional: limitar URLs (max 2-3 enlaces)

4. **Insertar en `comments`:**
   ```typescript
   const { data, error } = await supabaseAdmin
     .from('comments')
     .insert({
       post_slug,
       author_name,
       author_email,
       content,
       is_approved: false,
       moderation_token: crypto.randomUUID()
     })
     .select()
     .single();
   ```

5. **Enviar email de moderación:**
   ```typescript
   await sendEmail({
     to: 'hola@ortegadev.com',
     subject: `Nuevo comentario en "${post_slug}"`,
     html: `
       <h2>Nuevo comentario pendiente de aprobación</h2>
       <p><strong>Post:</strong> ${post_slug}</p>
       <p><strong>Autor:</strong> ${author_name} (${author_email || 'sin email'})</p>
       <p><strong>Comentario:</strong></p>
       <blockquote>${content}</blockquote>
       
       <a href="https://ortegadev.com/api/moderate-comment?action=approve&token=${moderation_token}">
         ✅ Aprobar
       </a>
       
       <a href="https://ortegadev.com/api/moderate-comment?action=delete&token=${moderation_token}">
         🗑️ Eliminar
       </a>
     `
   });
   ```

6. **Respuesta al usuario:**
   ```json
   {
     "success": true,
     "message": "Comentario enviado. Se publicará cuando sea revisado."
   }
   ```

---

### Moderación por Email

**Edge Function: `moderate-comment`**

**Endpoint:** `GET /functions/v1/moderate-comment?action={approve|delete}&token={UUID}`

**Lógica:**

```typescript
const { action, token } = queryParams;

// Buscar comentario
const { data: comment } = await supabaseAdmin
  .from('comments')
  .select('*')
  .eq('moderation_token', token)
  .eq('is_deleted', false)
  .single();

if (!comment) {
  return new Response('Comentario no encontrado', { status: 404 });
}

// Acción
if (action === 'approve') {
  await supabaseAdmin
    .from('comments')
    .update({ is_approved: true })
    .eq('id', comment.id);
  
  return new Response(`
    <!DOCTYPE html>
    <html>
      <body style="font-family: system-ui; text-align: center; padding: 2rem;">
        <h1>✅ Comentario aprobado</h1>
        <p>El comentario ha sido publicado correctamente.</p>
      </body>
    </html>
  `, { headers: { 'Content-Type': 'text/html' } });
}

if (action === 'delete') {
  await supabaseAdmin
    .from('comments')
    .update({ is_deleted: true })
    .eq('id', comment.id);
  
  return new Response(`
    <!DOCTYPE html>
    <html>
      <body style="font-family: system-ui; text-align: center; padding: 2rem;">
        <h1>🗑️ Comentario eliminado</h1>
        <p>El comentario ha sido rechazado.</p>
      </body>
    </html>
  `, { headers: { 'Content-Type': 'text/html' } });
}
```

**Ventaja:** Moderación desde cualquier dispositivo con un solo click desde el email.

---

### Mostrar Comentarios en el Blog

**En la página del post (Astro SSG/SSR):**

```astro
---
// Server-side fetch
const { data: comments } = await supabase
  .from('comments')
  .select('*')
  .eq('post_slug', postSlug)
  .eq('is_approved', true)
  .eq('is_deleted', false)
  .order('created_at', { ascending: true });
---

<section class="comments-section">
  <h2>Comentarios ({comments.length})</h2>
  
  {comments.map(comment => (
    <div class="comment">
      <strong>{escapeHtml(comment.author_name)}</strong>
      <time>{new Date(comment.created_at).toLocaleDateString('es-ES')}</time>
      <p>{escapeHtml(comment.content)}</p>
    </div>
  ))}
</section>
```

**Importante:**
- ✅ Renderizar server-side (SSG/SSR) para SEO
- ✅ Escapar HTML para prevenir XSS
- ✅ Solo mostrar comentarios aprobados

---

## 🔐 Seguridad y Anti-Spam

**Medidas implementadas:**

1. **Honeypot field** (`website`):
   - Campo oculto que los bots suelen rellenar
   - Si viene relleno → rechazar silenciosamente

2. **Cloudflare Turnstile**:
   - CAPTCHA obligatorio para enviar
   - Validación server-side del token

3. **Límites de contenido**:
   - Máximo 1500 caracteres por comentario
   - Opcional: limitar número de URLs (2-3 máximo)

4. **Moderación manual**:
   - TODOS los comentarios pasan por aprobación
   - No hay publicación automática

5. **RLS estricta**:
   - Público solo puede leer comentarios aprobados
   - INSERT/UPDATE/DELETE solo vía Edge Functions con service_role

---

## 📈 SEO y UX

**Optimizaciones SEO:**

- ✅ Comentarios renderizados server-side (Google los indexa)
- ✅ Solo comentarios aprobados visibles públicamente
- ✅ Schema.org `Comment` markup:

```json
{
  "@type": "Comment",
  "author": { "@type": "Person", "name": "Nombre" },
  "datePublished": "2025-01-20",
  "text": "Contenido del comentario"
}
```

**UX integrada:**

- ✅ Diseño limpio coherente con la web
- ✅ Formulario simple y accesible
- ✅ Feedback claro al usuario
- ✅ Política de comentarios visible:

---

## 📋 Política de Comentarios

**Bloque a incluir al final de cada post:**

```markdown
### 💬 Política de Comentarios

Todos los comentarios son bienvenidos y se moderan manualmente para mantener la calidad del contenido.

**Se aprueban comentarios que:**
- Aporten valor a la conversación
- Sean respetuosos y constructivos
- Estén relacionados con el tema del post

**Se rechazan comentarios que:**
- Contengan spam o enlaces promocionales
- Sean ofensivos o irrespetuosos
- Estén completamente fuera de tema

El objetivo es crear un espacio de conversación útil y profesional. ¡Gracias por participar!
```

---

## 🚀 Implementación Sugerida

### Fase 1: Blog Base (Sin comentarios)
1. Configurar Content Collections en Astro
2. Crear página de listado (`/blog`)
3. Crear template de post
4. Implementar filtros y búsqueda
5. Añadir botones de compartir
6. SEO: Schema.org BlogPosting

### Fase 2: Sistema de Comentarios
1. Crear tabla `comments` en Supabase
2. Implementar RLS policies
3. Desarrollar Edge Function `submit-comment`
4. Desarrollar Edge Function `moderate-comment`
5. Integrar formulario en posts
6. Configurar Cloudflare Turnstile
7. Testing completo del flujo

### Fase 3: Contenido
1. Escribir primeros 3-5 posts SEO-optimizados
2. Publicar y monitorear engagement
3. Iterar basándose en feedback

---

## 📚 Referencias Técnicas

**Astro Content Collections:**
- https://docs.astro.build/en/guides/content-collections/

**Supabase Edge Functions:**
- https://supabase.com/docs/guides/functions

**Cloudflare Turnstile:**
- https://developers.cloudflare.com/turnstile/

**Schema.org Blog Markup:**
- https://schema.org/Blog
- https://schema.org/BlogPosting
- https://schema.org/Comment

---

**Autor:** Miguel Ángel Ortega Ibáñez  
**Contacto:** hola@ortegadev.com  
**Web:** https://ortegadev.com
