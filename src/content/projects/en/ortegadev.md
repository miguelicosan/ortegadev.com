---
title: "Sorteo Amigo Invisible"
description: "Organiza sorteos gratuitos y seguros con emparejamiento inteligente"
image: "/images/projects/amigo-invisible-screenshot.webp"
tags: ["Astro", "Supabase", "TypeScript", "Edge Functions", "SEO"]
url: "https://amigoinvisible.online"
github: "https://github.com/miguelicosan/sorteoamigoinvisible.online"
year: 2024
status: "Producción"
---

# Sorteo Amigo Invisible Online

**Crea y organiza sorteos de Amigo Invisible en minutos, sin registros ni complicaciones.**

## Resumen Ejecutivo

Aplicación web moderna para gestionar sorteos de Amigo Invisible de forma segura, rápida y completamente gratuita. Con modelo freemium, personalización de emails y algoritmo inteligente de emparejamiento que evita auto-asignaciones.

## Características Técnicas Destacadas

- **Wizard Multi-Paso**: Configuración intuitiva en 3 pasos (Configuración → Personalización → Revisión)
- **Algoritmo de Derangement**: Emparejamiento circular inteligente sin auto-asignaciones
- **Emails Personalizables**: Variables dinámicas ($NOMBRE, $REGALO_PARA) con templates responsivos
- **Sistema de Restricciones**: Evita pares específicos (parejas, hermanos, etc.)
- **RLS Avanzado**: Row Level Security en PostgreSQL para privacidad garantizada
- **SEO Optimizado**: Blog con 10+ artículos, meta tags dinámicos, sitemap
- **RGPD Compliant**: Política de privacidad, cookies, auto-borrado a 90 días

## Stack Tecnológico

**Frontend**: Astro 5.16.3 + TypeScript + Vanilla CSS + Islands Architecture  
**Backend**: Supabase (PostgreSQL) + Edge Functions (Deno)  
**Autenticación**: Sin registro (sorteos anónimos)  
**Email**: SMTP integrado  
**DevOps**: Vercel/Netlify + GitHub

## Funcionalidades Clave

✅ Sorteos ilimitados y gratuitos  
✅ Base de datos con 5 tablas relacionales  
✅ Validación doble (frontend/backend)  
✅ Notificaciones por email automáticas  
✅ Panel responsivo mobile-first  
✅ Internacionalización (ES/EN planificado)  
✅ Modelo freemium con BuyMeACoffee  

## Resultados

- 5 componentes Astro reutilizables
- 10+ páginas (home, blog, legal, premium)
- 3 Edge Functions en producción
- ~2,500 líneas de código
- Performance: <1s First Contentful Paint
- 100% seguridad RLS

---

**Estado**: ✅ En Producción  
**Demo**: [Crea tu sorteo gratis](https://amigoinvisible.online)  
**Blog**: Contenido SEO optimizado con estrategia long-tail
