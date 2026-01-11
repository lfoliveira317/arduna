# Arduna - Lifestyle Assistance & Concierge

![Arduna Banner](client/public/images/hero-banner.jpg)

**Arduna** is a premium, high-performance static website designed for a luxury lifestyle assistance and concierge company. Built with modern web technologies, it delivers a seamless, responsive, and visually stunning experience tailored for high-net-worth individuals.

## 📖 Table of Contents

*   [Project Overview](#-project-overview)
*   [Key Features](#-key-features)
*   [Technology Stack](#-technology-stack)
*   [Project Structure](#-project-structure)
*   [Getting Started](#-getting-started)
*   [Customization Guide](#-customization-guide)
*   [Deployment](#-deployment)
*   [License](#-license)

---

## 🌟 Project Overview

The design philosophy behind Arduna is **"Modern Minimalist Luxury"**. It employs a "Champagne & Slate" color palette to convey exclusivity, authority, and warmth. The layout breaks away from standard grids to offer an editorial, magazine-like feel, emphasizing high-quality imagery and elegant typography.

### Design Pillars
1.  **Essentialism**: Every element serves a purpose; clutter is eliminated to respect the user's time.
2.  **Sophistication**: Reliance on *Playfair Display* (Serif) for headings and *Lato* (Sans-serif) for body text creates a trustworthy, classic hierarchy.
3.  **Atmosphere**: Dark, rich tones mixed with warm gold accents create a digital environment that feels like a private lounge.

---

## ✨ Key Features

*   **Cinematic Hero Section**: Features a parallax scrolling effect with a high-resolution luxury interior background.
*   **Responsive Navigation**: A custom-built navbar that transitions from transparent to solid on scroll, with a full-screen mobile menu.
*   **Interactive Service Cards**: Glassmorphism-styled cards for "Travel", "Events", and "Lifestyle" that reveal details on hover.
*   **Tiered Membership Display**: A clear, comparative layout for "Essential", "Elite", and "Bespoke" membership levels.
*   **Direct Contact Integration**: Optimized for conversion with direct WhatsApp, phone, and email links, replacing generic forms.
*   **Performance Optimized**: Built on Vite for lightning-fast loading speeds and optimal SEO performance.

---

## 🛠 Technology Stack

This project is a **static web application**, meaning it requires no backend server to run. It can be hosted anywhere that serves HTML/CSS/JS.

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Core** | [React 18](https://react.dev/) | Component-based UI library. |
| **Build Tool** | [Vite](https://vitejs.dev/) | Next-generation frontend tooling. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework. |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Production-ready animation library for React. |
| **Routing** | [Wouter](https://github.com/molefrog/wouter) | Minimalist router for modern React apps. |
| **Icons** | [Lucide React](https://lucide.dev/) | Beautiful, consistent icon set. |

---

## 📂 Project Structure

```text
arduna/
├── client/
│   ├── public/             # Static assets (images, favicon)
│   │   └── images/         # Project-specific images
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Base UI elements (buttons, inputs)
│   │   │   ├── Hero.tsx    # Main landing section
│   │   │   ├── Navbar.tsx  # Top navigation
│   │   │   └── ...
│   │   ├── pages/          # Page views (Home, NotFound)
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main application entry
│   │   └── index.css       # Global styles & Tailwind config
│   └── index.html          # HTML entry point
├── dist/                   # Production build output (created after build)
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Ensure you have **Node.js** (version 16 or higher) installed on your machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/lfoliveira317/arduna.git
    cd arduna
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Build for Production
To create an optimized build for deployment:
```bash
npm run build
```
The output will be in the `dist/` folder.

---

## 🎨 Customization Guide

### Changing Colors
The color palette is defined as CSS variables in `client/src/index.css`.
*   **Primary (Dark Slate)**: Edit `--primary` and `--foreground`.
*   **Secondary (Gold/Champagne)**: Edit `--secondary`.
*   **Background**: Edit `--background`.

### Updating Content
*   **Text**: All text content is directly within the component files in `client/src/components/`. For example, to change the hero text, edit `client/src/components/Hero.tsx`.
*   **Images**: Place new images in `client/public/images/` and update the `src` paths in the components.

### Modifying Fonts
The project uses Google Fonts (*Lato* and *Playfair Display*). To change them:
1.  Update the `<link>` tag in `client/index.html`.
2.  Update the `font-sans` and `font-serif` definitions in `client/src/index.css`.

---

## ☁️ Deployment

### Option 1: Netlify (Recommended)
Netlify offers the easiest zero-config deployment.
1.  Log in to [Netlify](https://www.netlify.com/).
2.  Select **"Import from Git"**.
3.  Choose this repository.
4.  **Build Command**: `npm run build`
5.  **Publish Directory**: `dist`
6.  Click **Deploy**.

### Option 2: GitHub Pages
1.  In `vite.config.ts`, set the base path:
    ```typescript
    export default defineConfig({
      base: '/arduna/', // Your repo name
    })
    ```
2.  Push changes to GitHub.
3.  Go to **Settings > Pages** in your repo.
4.  Source: **GitHub Actions**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
