# ortegadev.com - Professional Web Portfolio

Professional Astro-based personal brand website for Miguel Ángel Ortega Ibáñez, featuring bilingual support (ES/EN), Apple-inspired design, advanced SEO, and full GDPR compliance.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:4321`

## � Project Structure

```
ortegadev.com/
├── public/
│   ├── images/           # Static images, favicon, etc.
│   └── manifest.webmanifest
├── src/
│   ├── components/       # Reusable Astro/React components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── TechStack.astro
│   │   ├── WhatsAppButton.astro
│   │   └── CookieBanner.tsx (React)
│   ├── content/          # Content collections (blog, projects)
│   │   ├── blog/
│   │   │   ├── en/
│   │   │   └── *.md
│   │   └── projects/
│   │       ├── en/
│   │       └── *.md
│   ├── i18n/             # Internationalization
│   │   ├── config.ts
│   │   └── locales/
│   │       ├── es.json
│   │       └── en.json
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/            # File-based routing
│   │   ├── index.astro (Spanish)
│   │   ├── en/
│   │   │   └── index.astro (English)
│   │   └── ... (other pages)
│   └── styles/           # Global styles & design system
│       ├── tokens.scss   # Design tokens
│       ├── reset.scss
│       ├── utilities.scss
│       ├── animations.scss
│       └── global.scss
├── astro.config.mjs
├── package.json
└── README.md
```

## 🌍 Internationalization (i18n)

This site supports Spanish (ES) and English (EN).

### URL Structure

- **Spanish (default)**: `/`, `/about`, `/services`, etc.
- **English**: `/en`, `/en/about`, `/en/services`, etc.

### Adding/Editing Translations

Edit the translation files in `src/i18n/locales/`:

- `src/i18n/locales/es.json` - Spanish
- `src/i18n/locales/en.json` - English

All UI text, meta titles, descriptions, and content strings are stored here.

## ✍️ Adding Content

### Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2024-12-05"
lang: "es"
tags: ["Astro", "Web Development"]
excerpt: "Short description..."
image: "/images/blog/post-image.jpg"
---

Your content here...
```

For English version, create the same file in `src/content/blog/en/`.

### Projects

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
slug: "project-slug"
type: "personal" # or "professional"
description: "Short description"
stack: ["React", "Supabase", "TypeScript"]
role: "Full Stack Developer"
liveUrl: "https://example.com"
repoUrl: "https://github.com/..."
image: "/images/projects/screenshot.jpg"
lang: "es"
---

Detailed project description...
```

## 🎨 Design System

The site uses a custom CSS architecture with SCSS:

- **Design Tokens**: `src/styles/tokens.scss` - Colors, typography, spacing, shadows, etc.
- **Utilities**: `src/styles/utilities.scss` - Reusable utility classes
- **Animations**: `src/styles/animations.scss` - Keyframes and transitions

### Updating Colors

Edit `src/styles/tokens.scss`:

```scss
$color-brand-primary: #0071e3;
$color-brand-secondary: #5e5ce6;
// ... more tokens
```

## 🔌 Integrations TODO

The following integrations are prepared but need real credentials/URLs:

### 1. Contact Form Email Service

File: `src/components/ContactForm.tsx`

Options:
- **Resend**: Add API key in environment variable
- **Formspree**: Add form endpoint
- **EmailJS**: Configure service

### 2. Google Analytics (Optional)

Add to `src/layouts/BaseLayout.astro`:
- Check cookie consent (analytics preference)
- Load GA script conditionally

### 3. Calendly Integration

File: `src/pages/contact.astro` (and `/en/contact.astro`)

Replace placeholder with your Calendly URL:
```html
<div data-url="https://calendly.com/YOUR-USERNAME/30min"></div>
```

## 🍪 GDPR & Cookies

The site includes a complete GDPR-compliant cookie management system:

- **Cookie Banner**: Appears on first visit
- **Cookie Settings**: Users can accept/reject/configure by category
- **LocalStorage**: Preferences are saved locally

### Cookie Categories

- **Necessary**: Always enabled (language, security)
- **Analytics**: Optional (Google Analytics, etc.)
- **Marketing**: Optional (advertising cookies)

When adding tracking tools, check user preferences in `localStorage`:

```javascript
const consent = JSON.parse(localStorage.getItem('cookie-consent'));
if (consent && consent.analytics) {
  // Load analytics
}
```

## 📝 Legal Pages

Legal pages are in: `src/pages/legal/` (ES) and `src/pages/en/legal/` (EN)

- **Legal Notice**: Company/individual identification, terms of use
- **Privacy Policy**: GDPR-compliant data processing information
- **Cookie Policy**: Explanation of cookies used

**⚠️ IMPORTANT**: Have these pages reviewed by a legal professional before going live, especially if you add third-party services.

## 🚀 Deployment

### Build

```bash
npm run build
```

Output will be in `dist/` directory - ready for static hosting.

### Hosting Options

- **Netlify**: Connect to Git, auto-deploy on push
- **Vercel**: Same as Netlify
- **Cloudflare Pages**: Fast global CDN
- **GitHub Pages**: Free hosting for static sites

All support custom domains and automatic HTTPS.

## ⚡ Performance & SEO

### Built-in Optimizations

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, Open Graph, Twitter Card)
- ✅ Schema.org structured data (Person, ProfessionalService)
- ✅ hreflang tags for bilingual SEO
- ✅ Responsive images
- ✅ Lazy loading
- ✅ Minimal JavaScript (only where needed via Astro Islands)
- ✅ CSS with SCSS for maintainability

### Lighthouse Goals

Target scores >= 90 for:
- Performance
- Accessibility
- Best Practices
- SEO

## � Contact Information

Update contact details in:

- Translation files: `src/i18n/locales/*.json`
- Footer component: `src/components/Footer.astro`
- WhatsApp button: `src/components/WhatsAppButton.astro`
- Legal pages: `src/pages/legal/*`

Current:
- Email: hola@ortegadev.com
- Phone: +34 621 329 386
- Location: Almería, España

## 🛠 Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Custom CSS with SCSS/Sass
- **Interactivity**: React (via Astro Islands)
- **i18n**: Custom implementation with JSON
- **Build**: Vite (built-in with Astro)

## 📄 License

© 2024 Miguel Ángel Ortega Ibáñez. All rights reserved.

---

Need help? Contact miguel@ortegadev.com
