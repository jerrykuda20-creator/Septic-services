# ClearFlow Tech — High-Performance Edge Waste Logistics Platform

An ultra-fast, edge-optimized static site and digital booking terminal built for modern septic, liquid waste, and environmental engineering enterprises. Ready for immediate deployment on **Vercel** and **Netlify**.

---

## ⚡ Architecture & Performance Specs

- **Core Framework:** React 19 + Vite 8
- **Styling Architecture:** Tailwind CSS v4 with custom utility-first glassmorphism, subtle electric blue glow effects (`#0EA5E9`), cyber red critical alerts (`#EF4444`), and frosted ice backgrounds (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`).
- **Zero-CLS Asset Containers:** Every workflow step, hero telemetry card, and video reel features explicit aspect-ratio layout boxes (`aspect-[16/9]`, `aspect-[4/3]`) to eliminate Cumulative Layout Shift (CLS) and achieve top-tier Lighthouse / Core Web Vitals scores.
- **Edge Deployment Ready:** Includes optimized [`vercel.json`](file:///home/godland/Desktop/Projects/Septic%20Folder/vercel.json) and [`netlify.toml`](file:///home/godland/Desktop/Projects/Septic%20Folder/netlify.toml) with 1-year immutable asset caching rules (`Cache-Control: public, max-age=31536000, immutable`).

---

## 📁 Component Hierarchy & File Structure

```text
src/
├── App.jsx                               # Root application orchestrator
├── main.jsx                              # Edge-ready DOM bootstrap
├── index.css                             # Futuristic grid backdrop & glassmorphism system
├── data/
│   └── websiteConfig.js                  # Centralized client configuration (WhatsApp, phone, services, Google Form)
└── components/
    ├── layout/
    │   ├── Navbar.jsx                    # Sticky frosted-glass header with smooth navigation & CTAs
    │   ├── WhatsAppWidget.jsx            # Persistent floating action bubble with smooth-pulsing ripple
    │   └── Footer.jsx                    # Minimalist high-tech split footer (hours matrix, service areas, EPA stamps)
    └── modules/
        ├── Hero.jsx                      # Headline box, slogan placeholder slot, & telemetry card
        ├── AboutUs.jsx                   # Two-column layout with origin story & video overlay card
        ├── Workflow.jsx                  # 4-step progress gallery with explicit picture layout boxes
        ├── ServicesGrid.jsx              # Glassmorphism cards with individualized WhatsApp inquiry buttons
        ├── BookingForm.jsx               # Direct high-tech booking engine & Google Forms responsive iframe wrapper
        └── ContactSection.jsx            # Direct dispatch communications hub
```

---

## 🛠️ Client Customization

All copy, contact channels, and Google Form URLs are cleanly isolated in [`src/data/websiteConfig.js`](file:///home/godland/Desktop/Projects/Septic%20Folder/src/data/websiteConfig.js):

- **WhatsApp Number:** Update `CONFIG.brand.whatsAppNumber` (e.g., `18005553569`) to redirect all instant chat inquiries.
- **Google Forms URL:** Paste your published form link into `CONFIG.googleForms.embedUrl`.
- **Services & Copy:** Add, remove, or modify services, descriptions, and pre-filled WhatsApp inquiry messages directly.

---

## 🚀 Commands

```bash
# Start local dev server (http://localhost:3000)
npm run dev

# Compile edge-ready production build (/dist)
npm run build

# Preview production build locally
npm run preview
```
