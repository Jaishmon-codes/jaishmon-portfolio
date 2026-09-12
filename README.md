# Jaishmon M — Personal Website & Engineering Showcase

> **Live Production:** [jaishmon.dev](https://jaishmon.dev)  
> **Repository:** [Jaishmon-codes/jaishmon-portfolio](https://github.com/Jaishmon-codes/jaishmon-portfolio)

A high-performance, dark-mode-first personal engineering showcase built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed around first principles to present software engineering philosophy, core CS competencies, blockchain research, and full-stack projects through a responsive and interactive interface.

---

## ⚡ Highlights & Key Features

- **Dynamic Theme Engine**: Three high-contrast developer aesthetics (`Electric Blue`, `Crimson`, `Terminal`) powered by CSS variables and persisted in `localStorage`.
- **Interactive Developer Terminal**: In-browser CLI utility supporting interactive commands (`help`, `cat`, `skills`, `projects`, `philosophy`, `clear`, `theme`) with command history and keyboard shortcuts.
- **Command Palette (`Ctrl+K` / `Cmd+K`)**: Fast global modal navigation for jumping to sections, switching themes, and launching the terminal.
- **First-Principles Narrative**: Dedicated sections breaking down engineering philosophy, problem-solving methodologies, technical experience, and architectural approach.
- **Lightweight & Fast**: Sub-second client build times using Vite and Oxlint, with optimized bundle splitting and zero bloated dependencies.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linter & Code Quality** | [Oxlint](https://oxc.rs/) |

---

## 📂 Project Architecture

```
jaishmon/
├── public/                    # Static assets (favicons, icons, profile images)
├── src/
│   ├── components/
│   │   ├── hero/              # Hero banner, 3D/geometric canvas visuals
│   │   ├── interactive/       # Terminal simulator, Command Palette, Theme Switcher
│   │   ├── layout/            # Sticky header navigation and site footer
│   │   ├── sections/          # Content modules (About, Skills, Experience, Education, etc.)
│   │   └── ui/                # Atomic design elements (Badge, Button, Card, Transitions)
│   ├── context/               # React Context providers (ThemeContext)
│   ├── data/                  # Centralized, strongly-typed portfolio content dataset
│   ├── hooks/                 # Custom React hooks (useTheme, useScrollProgress, useKeyboardShortcut)
│   ├── pages/                 # Root views (Home)
│   ├── types/                 # TypeScript interfaces for portfolio schema and theme types
│   ├── App.tsx                # Top-level application component
│   ├── index.css              # Global styles, Tailwind base layers, and theme tokens
│   └── main.tsx               # DOM entry point
├── .env.example               # Template for environment configuration
├── .gitignore                 # Strict ignore rules for secrets, build outputs, and caches
├── index.html                 # HTML shell and metadata
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind design system configuration
├── tsconfig.json              # TypeScript project configuration
└── vite.config.ts             # Vite build and plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jaishmon-codes/jaishmon-portfolio.git
   cd jaishmon-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   *Adjust `VITE_PROJECTS_URL` in `.env` if targeting a custom showcase platform URL.*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and bundles for production with Vite |
| `npm run preview` | Locally serves the optimized production build from `dist/` |
| `npm run lint` | Runs [Oxlint](https://oxc.rs/) across the codebase for static code analysis |

---

---

## ☁️ Deployment Guide (Cloudflare Pages)

This project is optimized for zero-config static deployment on **Cloudflare Pages** via GitHub integration:

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select repository **`Jaishmon-codes/jaishmon-portfolio`**.
3. Configure the build parameters:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
   - **Environment Variables (Optional):**
     - `NODE_VERSION`: `20`
     - `VITE_PROJECTS_URL`: `https://projects.jaishmon.dev`
4. Click **Save and Deploy**.

### Custom `.page` Domain Configuration

1. In your Cloudflare Pages project, go to **Custom domains** > **Set up a custom domain**.
2. Enter your custom domain (e.g., `jaishmon.page`).
3. Add the DNS record provided by Cloudflare at your domain registrar:
   - **Type:** `CNAME`
   - **Name:** `@` (or `www`)
   - **Target:** `<project-name>.pages.dev`
4. Cloudflare will automatically provision an edge SSL certificate with full HTTPS.

---

## 🔄 Automated Developer Workflow

Once connected, your deployment workflow is fully automated:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

```
GitHub (main branch)
       ↓
Cloudflare Pages (auto build & test)
       ↓
Edge Production CDN (HTTPS & Custom Domain)
```

---

## 🔒 Security & Repository Hygiene

- **No Secret Leakage**: All `.env` and local environment files are explicitly ignored via `.gitignore`.
- **Sanitized Configurations**: Only `.env.example` is tracked, containing safe placeholder values.
- **Clean Builds**: Generated files (`dist/`, `node_modules/`, `*.tsbuildinfo`) are never committed to version control.

---

## 👤 Author

**Jaishmon M**
- Website: [jaishmon.dev](https://jaishmon.dev)
- GitHub: [@Jaishmon-codes](https://github.com/Jaishmon-codes)
- LinkedIn: [in/jaishmon-m](https://www.linkedin.com/in/jaishmon-m/)
- Email: [jaishmonofficial@gmail.com](mailto:jaishmonofficial@gmail.com)
