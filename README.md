# Arduna - Lifestyle Assistance & Concierge

A premium, responsive static website for Arduna, a high-end lifestyle assistance and concierge company. Built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

*   **Premium Design**: "Modern Minimalist Luxury" aesthetic with a "Champagne & Slate" color palette.
*   **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices.
*   **Smooth Animations**: Subtle entrance animations and parallax effects using Framer Motion.
*   **Service Showcase**: Elegant presentation of Travel, Events, and Lifestyle services.
*   **Membership Tiers**: Clear pricing structure for Essential, Elite, and Bespoke memberships.
*   **Direct Contact**: Streamlined contact section with WhatsApp integration.

## 🛠️ Tech Stack

*   **Framework**: React 18 + Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Routing**: Wouter (Lightweight router for static sites)
*   **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/lfoliveira317/arduna.git
    cd arduna
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and visit `http://localhost:5173`

## 📦 Deployment

This project is optimized for deployment on static hosting platforms like Netlify, Vercel, or GitHub Pages.

### Deploy to Netlify (Recommended)

1.  Log in to [Netlify](https://www.netlify.com/).
2.  Click **"Add new site"** > **"Import from an existing project"**.
3.  Connect to GitHub and select the `arduna` repository.
4.  **Build Command**: `npm run build`
5.  **Publish Directory**: `dist`
6.  Click **"Deploy"**.

### Deploy to GitHub Pages

1.  Update `vite.config.ts` with your repository name if deploying to a subpath:
    ```typescript
    export default defineConfig({
      base: '/arduna/', // Replace with your repo name
      // ...
    })
    ```
2.  Push your code to GitHub.
3.  Go to Repository Settings > Pages.
4.  Select "GitHub Actions" as the source.

For more detailed instructions, please refer to `DEPLOYMENT.md`.

## 🎨 Customization

*   **Colors**: Edit `client/src/index.css` to modify the CSS variables for the color palette.
*   **Content**: Update the text in the components located in `client/src/components/`.
*   **Images**: Replace images in `client/public/images/` with your own assets.

## 📄 License

This project is licensed under the MIT License.
