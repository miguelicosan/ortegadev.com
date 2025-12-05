# 📧 Configurar Email con Formspree

## ¿Por qué Formspree?

En hosting estático (FTP), no hay backend para procesar formularios. Formspree es:
- ✅ Gratuito
- ✅ Sin backend requerido
- ✅ Fácil configuración
- ✅ Recibe emails directamente

## Configuración (2 minutos)

### 1. Crear cuenta en Formspree

1. Ve a https://formspree.io/
2. **Sign Up** con tu email (hola@ortegadev.com)
3. Verifica el email

### 2. Crear Form

1. En dashboard, click **"Create"** → **"New Form"**
2. Dale nombre: `Contact Form - ortegadev.com`
3. Recibirá emails en: `hola@ortegadev.com`
4. Click **"Create Form"**

### 3. Obtener Form ID

Después de crear, Formspree te mostrará:
```
Your form endpoint:
https://formspree.io/f/xyzjpvkj
                      ^^^^^^^^
                      Este es tu Form ID
```

### 4. Actualizar el código

En `src/components/ContactForm.tsx`, reemplaza:

```typescript
const formspreeEndpoint = 'https://formspree.io/f/xyzjpvkj';
```

Con tu Form ID real:

```typescript
const formspreeEndpoint = 'https://formspree.io/f/[TU_FORM_ID_AQUI]';
```

### 5. Rebuild y deploy

```bash
npm run build
# Sube carpeta dist/ nuevamente a Hostinger
```

### 6. Prueba

1. Ve a https://ortegadev.com/contact/
2. Envía un mensaje
3. ¡Recibirás el email en hola@ortegadev.com!

## Configuración Avanzada (Opcional)

### Reconfirmar emails

Primera vez que alguien te contacta, Formspree pide confirmación:
- Abre el email de confirmación
- Click en "Confirm"
- ¡Listo! Ya recibirás sus mensajes

### Gestionar respuestas

En dashboard de Formspree:
1. Ver todos los mensajes recibidos
2. Descargar como CSV
3. Ver estadísticas

### Custom message de éxito

Formspree automáticamente devuelve JSON con `ok: true`:

```json
{
  "ok": true,
  "message": "Email sent"
}
```

El código ya lo maneja ✅

## Límites Gratuitos

- ✅ 50 formularios
- ✅ Emails ilimitados
- ✅ Storage ilimitado

**Plan Premium** (opcional):
- $25/mes: +features como webhooks, recolección de datos

## Troubleshooting

### "SyntaxError: Unexpected token '<'"

Significa que la respuesta no es JSON (probablemente 404 page).

Verificar:
1. Form ID correcto en el código
2. Hiciste rebuild (`npm run build`)
3. Subiste nuevo build a Hostinger

### No recibo emails

1. Verificar email en dashboard de Formspree
2. Revisar carpeta Spam/Junk
3. Confirmar email si es primera vez (link en email)

### CORS error

Formspree permite CORS, pero asegúrate que:
1. El endpoint es HTTPS
2. Content-Type es `application/json`

(El código ya está bien configurado)

## Pasos Resumidos

1. ✅ Ir a https://formspree.io/
2. ✅ Sign up → Crear Form → Copiar Form ID
3. ✅ Editar `ContactForm.tsx` con tu Form ID
4. ✅ `npm run build`
5. ✅ Subir `dist/` a Hostinger
6. ✅ Probar en https://ortegadev.com/contact/
7. ✅ ¡Recibir emails! 🎉

---

**Alternativas a Formspree:**
- EmailJS: https://www.emailjs.com/ (más control)
- SendGrid: https://sendgrid.com/ (más profesional)
- Resend: https://resend.com/ (enfocado en emails transaccionales)

Pero Formspree es lo más simple para empezar.
