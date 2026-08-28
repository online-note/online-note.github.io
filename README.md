# 📝 Online Note (online-note.github.io)

> **Free Online Notepad | 100% Private, Real-Time Auto-Save & PDF Export**  
> An ultra-minimal, client-side, distraction-free notepad built with Astro, React, Tailwind CSS, and jsPDF.

[![Live Demo](https://img.shields.io/badge/Live-Demo-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://online-note.github.io/)
[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/kisharadilz)

---

## ✨ Features

- 🔒 **100% Private & Client-Side**: No user accounts, no tracking cookies, and zero server uploads. Your notes never leave your device.
- ⚡ **Instant Keystroke Auto-Save**: Real-time auto-saving to browser `localStorage`. Refresh or close your tab without losing any progress.
- 📄 **Smart A4 PDF Export**: Generates cleanly formatted, paginated A4 PDF documents with automatic page breaks, margins, timestamps, and `Page X of Y` footers powered by `jspdf`.
- 💾 **Raw TXT Download & Clipboard Copy**: One-click `.txt` file downloading and instant clipboard copy with visual checkmark feedback.
- 🖥️ **Full Screen Focus Mode**: Dedicated distraction-free fullscreen writing mode with native browser Fullscreen API integration and `Escape` key exit.
- 🔤 **Typography & Font Controls**: Toggle between clean Sans-Serif and developer-friendly Monospace (`font-mono`) fonts, plus cycle through font sizes (`sm`, `base`, `lg`).
- 📊 **Live Word & Reading Counters**: Real-time word count, character count, line count, and estimated reading time.
- 🌓 **Zero-Flicker Dark / Light Mode**: Instant theme switching persisted in `localStorage` with an anti-FOUC inline `<head>` script.
- 🌐 **6-Language i18n Routing**: Full internationalization for **English (`/`)**, **Spanish (`/es/`)**, **Portuguese (`/pt/`)**, **German (`/de/`)**, **French (`/fr/`)**, and **Japanese (`/ja/`)**.
- 📱 **Mobile & Touch Optimized**: 100% responsive layout across mobile viewports, tablets, laptops, and ultra-wide displays with safe-area bottom padding.
- 🚀 **100% Technical SEO Architecture**: Multi-entity Schema.org JSON-LD graph (`WebApplication`, `WebSite`, `BreadcrumbList`, `FAQPage`), XML sitemap with hreflang alternates, Open Graph social images, and search engine directives.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (Static Site Generation / SSG) |
| **UI Island** | [React 18](https://react.dev/) (`client:load` Astro Islands) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Class-based Dark Mode) |
| **Icons** | [Lucide React](https://lucide.dev/) (Vector SVG Icons) |
| **PDF Engine** | [jsPDF](https://github.com/parallax/jsPDF) (Client-Side Vector PDF Engine) |
| **Storage** | Browser `localStorage` (Zero external databases) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) via GitHub Actions CI/CD |

---

## 📁 Project Structure

```text
online-note.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
├── public/
│   ├── robots.txt              # Search crawler instructions & sitemap link
│   └── sitemap.xml             # Complete 6-language XML sitemap with hreflang
├── src/
│   ├── components/
│   │   ├── LanguagePicker.astro # Crawlable multi-language dropdown
│   │   ├── Notepad.jsx          # Core React editor island (Auto-save, PDF, Stats)
│   │   └── ThemeToggle.jsx      # Dark/Light mode switcher with localStorage
│   ├── i18n/
│   │   ├── ui.ts               # Translation dictionaries (EN, ES, PT, DE, FR, JA)
│   │   └── utils.ts            # URL parsing & localized route helpers
│   ├── layouts/
│   │   └── Layout.astro        # Anti-FOUC script, Open Graph, hreflang, JSON-LD Schema
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro     # Dynamic localized routes (/es/, /pt/, /de/, /fr/, /ja/)
│   │   └── index.astro         # English root landing page (/)
│   ├── styles/
│   │   └── global.css          # Tailwind base directives, custom scrollbars, safe-area
│   └── utils/
│       └── pdfExport.js        # jsPDF smart A4 pagination & line formatting
├── astro.config.mjs            # Astro configuration with React & Tailwind
├── tailwind.config.mjs         # Tailwind theme configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/online-note/online-note.github.io.git
   cd online-note.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:4321`.

---

## 🧪 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server at `http://localhost:4321` |
| `npm run build` | Builds production-ready static assets to `./dist/` |
| `npm run preview` | Previews the build output locally |
| `npx astro check` | Runs diagnostic checks on Astro and TypeScript files |

---

## 🌐 Supported Languages & Routes

| Language | Route | Hreflang Tag |
| :--- | :--- | :--- |
| **English** (Default) | `https://online-note.github.io/` | `en`, `x-default` |
| **Spanish** | `https://online-note.github.io/es/` | `es` |
| **Portuguese** | `https://online-note.github.io/pt/` | `pt` |
| **German** | `https://online-note.github.io/de/` | `de` |
| **French** | `https://online-note.github.io/fr/` | `fr` |
| **Japanese** | `https://online-note.github.io/ja/` | `ja` |

---

## ☕ Support the Developer

If you find this free tool helpful, consider supporting the developer:

[![Buy Me A Coffee](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=☕&slug=kisharadilz&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff)](https://buymeacoffee.com/kisharadilz)

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
