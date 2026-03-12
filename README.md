# Halftone LLC — Portfolio & Company Website

Live site: [halftonellc.com](https://halftonellc.com)

Halftone LLC is a real architectural visualization studio offering photorealistic 3D rendering and animation services for residential and commercial clients worldwide. This website serves as both the company's primary web presence and as a portfolio piece demonstrating full-stack front-end development and business-driven engineering decisions.

---

## Business Impact

This site replaced a third-party hosted solution (Wix) that cost **$300/month ($3,600/year)** in platform fees. Building a custom solution eliminated that overhead entirely.

Following a full SEO overhaul — including per-page meta tags, structured data (JSON-LD), canonical URLs, Open Graph tags, image alt text, a sitemap, and performance improvements — the site has driven approximately **$4,000/year in new client revenue** over the previous year's baseline, attributable to improved organic search visibility.

**Combined first-year impact: ~$7,600** (cost savings + new revenue).

---

## Tech Stack

- **React 19** — component-based UI, React Router v6 for client-side routing
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — utility-first styling
- **GitHub Pages** — static hosting with custom domain (`halftonellc.com`)
- **Formspree** — contact form handling without a backend

---

## Key Technical Decisions

**No backend.** The portfolio content is static by design — fast, zero maintenance cost, and free to host. A database would add complexity and cost with no benefit at this scale.

**Custom domain on GitHub Pages.** Deploying to GitHub Pages with a `CNAME` file keeps hosting free indefinitely while still serving from a professional domain.

**React 19 head hoisting for SEO.** Instead of adding `react-helmet-async`, React 19's built-in support for rendering `<title>` and `<meta>` tags directly in components (which are automatically hoisted to `<head>`) was used. Zero extra dependencies.

**SPA routing on GitHub Pages.** GitHub Pages doesn't support client-side routing natively — a `404.html` redirect + `sessionStorage` pattern was implemented to allow direct URL access and page refreshes across all routes without a server.

**Performance.** Hero image gets `fetchpriority="high"` for faster LCP. Portfolio grid images use `loading="lazy"` + `decoding="async"` so only visible images load on initial paint.

---

## Project Structure

```
src/
├── App.jsx              # Routes + ScrollToTop
├── Layout.jsx           # Shared nav, footer, JSON-LD structured data
├── pages/
│   ├── Home.jsx         # Hero, services section, project grid
│   ├── About.jsx        # Team bios
│   ├── Contact.jsx      # Contact form (Formspree)
│   ├── HowItWorks.jsx   # 3-step process page
│   └── Project-*.jsx    # Individual portfolio project pages (11 total)
public/
├── CNAME                # Custom domain config for GitHub Pages
├── 404.html             # SPA routing fallback
├── robots.txt
├── sitemap.xml
└── assets/              # All project render images
```

---

## Running Locally

```bash
npm install
npm run dev
```

## Deploying

```bash
npm run deploy
```

Runs the Vite build and pushes the `dist/` folder to the `gh-pages` branch via the `gh-pages` package. GitHub Pages serves it automatically at `halftonellc.com`.
