# ortegadev.com - Professional Web Portfolio

Professional Astro-based personal brand website for Miguel Ángel Ortega Ibáñez, featuring bilingual support (ES/EN), Apple-inspired design, advanced SEO, and full GDPR compliance.

**[🇪🇸 Versión en Español](./README.es.md)**

## 📝 Recent Updates (December 2024)

### Performance Optimization: Images to WebP (Dec 15, 2024)
- **Image Optimization**: Converted all PNG/JPEG images to WebP format
  - 19 images optimized with 90% average size reduction
  - Total size reduced from ~15MB to 1.5MB
  - Sharp processing with quality 80-85 for optimal balance
- **Astro Image Component**: Implemented native `<Image>` component with automatic optimization
  - Lazy loading for below-fold images
  - Eager loading for hero/LCP images
  - WebP format with fallback support
  - Explicit dimensions to prevent layout shift
- **Responsive Mockup Frames**: Fixed aspect ratios for realistic device mockups
  - Mobile frame: 9/19.5 aspect ratio (max 640px height)
  - Tablet frame: 3/2 aspect ratio (max 600px height)
  - Proper `object-fit: cover` to prevent stretching
- **OG Image Updated**: Social sharing now uses optimized WebP image
- **Automation**: Created `scripts/convert-images.js` for batch WebP conversion

### Tablet Optimization & Design System (Dec 11, 2024)
- **Tablet Breakpoint Extension**: Extended tablet range to 768px-1199px to optimize for iPad Air landscape (1180px)
- **Typography System**: Unified h1 sizing at 2.25rem across all pages (projects, blog, about, services) for tablet
- **Contact Page Compact Layout**: Reduced spacing for tablet (h1: margin-bottom 0, h2: 1rem, contact-item: 1rem margin/padding)
- **Form Optimization**: Reduced gap in contact form and form-group to 1rem/0 respectively for tablet
- **Custom Select Component**: Replaced native select with custom dropdown for better UX and positioning
- **Tech Stack Cards**: Converted about page tech stack from list to 2-column visual card grid (6 categories)
- **Project-Specific Features**: Each project now has customizable title, lead text, and feature highlights
- **Tablet Mockup Frame**: Updated border (14px), border-radius (12px), camera adjustments, and inner radius (6px)
- **Figcaption Hover**: Restored gallery image captions with smooth opacity transition on hover

### Project Content Updates
- **ortegadev.com**: New features - Portfolio-specific characteristics (Astro, i18n, animations & mockups, design system, SEO, reactive forms)
- **ReviCar**: Custom lead text highlighting AI predictive features and complete vehicle database
- **Amigo Invisible**: Comprehensive technical description with derangement algorithm, wizard multi-step, RLS, Edge Functions, and GDPR compliance

### Project Pages & Design System Consolidation
- **Project Detail Pages**: Created 6 dedicated project pages (3 ES + 3 EN) with ProjectLayout template
- **Design System**: Consolidated button styling to global CSS classes (.btn, .btn-primary, .btn-secondary)
- **Amigo Invisible Template**: Established as standard template for future project pages with:
  - Hero section with animated background
  - Tech stack visualization
  - Feature highlights with animated icons
  - Project gallery
  - Metrics and CTA section
  - Related projects carousel

### Layout & UX Improvements
- **About Section Redesign**: 2-column desktop layout (cards left, content right) with vertical mobile stacking
- **"Puedo ayudarte con..." Section**: New cards-based section highlighting 3 key service areas with numbered circles and hover effects
- **Button Styling**: Optimized `.btn-lg` buttons - 80% width with center alignment on mobile, responsive desktop behavior
- **Spacing Enhancements**: Increased gap to 5rem between elements in desktop view for better visual hierarchy

### Animations & Effects
- **Ethereal Light Effect**: Added animated background light effect in About section
  - Tranquil floating light (600x600px) that moves organically behind cards
  - Electric halo effect on card hover with chaotic motion for visual engagement
- **Mobile Carousel**: Fixed TechStack animation direction (vertical bottom-to-top movement)
- **Removed**: Scroll indicator animation from Hero section

### Content & Services
- **New Services**: Added DevOps & Infrastructure and Backend Scalable services to services page
- **Bio Rewrite**: Enhanced about/bio sections with better SEO keywords and positioning (ES & EN)
- **Social Integration**: Integrated Instagram profile (ortegadevcom) across contact page, footer, and email signature
- **Email Signature**: Created professional HTML/CSS email signature with social links and emoji support for Mac Mail

### Mobile Optimization
- Fixed TechStack carousel visibility and animation transforms on mobile
- Improved button sizing and spacing across breakpoints
- Enhanced responsive layout for hero CTA buttons

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

### 1. Blog System with Comments (Priority: High)

**Status:** 📋 Requirements documented, pending implementation

A complete blog system with Supabase-powered comment moderation is planned. Full specifications available in:

📄 **[BLOG-REQUIREMENTS.md](./BLOG-REQUIREMENTS.md)**

**Key Features:**
- SEO-optimized blog with MDX posts
- Tag filtering and search
- Supabase comments with manual moderation
- Cloudflare Turnstile anti-spam
- Email-based moderation workflow
- Server-side rendering for SEO

### 2. Contact Form Email Service

File: `src/components/ContactForm.tsx`

Options:
- **Resend**: Add API key in environment variable
- **Formspree**: Add form endpoint
- **EmailJS**: Configure service

### 3. Google Analytics (Optional)

Add to `src/layouts/BaseLayout.astro`:
- Check cookie consent (analytics preference)
- Load GA script conditionally

### 4. Calendly Integration

File: `src/pages/contact.astro` (and `/en/contact.astro`)

Replace placeholder with your Calendly URL:
```html
<div data-url="https://calendly.com/YOUR-USERNAME/30min"></div>
```

### 5. Client Reviews/Testimonials System

**Phase 1 (Simple - Recommended to start):**
- Add static testimonials array in project pages
- Display review cards with rating, text, author
- Generate schema.org Review markup automatically

**Phase 2 (Advanced - Future):**
- Create Supabase table `client_reviews` (id, project_id, client_name, rating, review_text, date, approved)
- Build admin panel to approve/moderate reviews
- Auto-generate schemas from database
- Add review submission form on project pages

**Benefits:**
- Improves SEO with real user reviews
- Social proof for potential clients
- Structured data for Google rich snippets

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

## 📧 Contact Information

Update contact details in:

- Translation files: `src/i18n/locales/*.json`
- Footer component: `src/components/Footer.astro`
- WhatsApp button: `src/components/WhatsAppButton.astro`
- Legal pages: `src/pages/legal/*`

**Current Contact:**
- 🌐 **Website**: [ortegadev.com](https://ortegadev.com) ([English](https://ortegadev.com/en))
- 📧 **Email**: hola@ortegadev.com
- 📍 **Location**: Almería, España

**Languages / Idiomas:**
- 🇪🇸 Español: [ortegadev.com](https://ortegadev.com)
- 🇬🇧 English: [ortegadev.com/en](https://ortegadev.com/en)

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
