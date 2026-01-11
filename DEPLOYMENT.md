# Deployment Guide for Arduna

This website is built with React, Vite, and Tailwind CSS. It is a static site that can be easily deployed to GitHub Pages, Netlify, or Vercel.

## Option 1: Netlify (Recommended)

Netlify is the easiest way to deploy this site and offers excellent performance and free SSL.

1.  **Create a Netlify Account**: Go to [netlify.com](https://www.netlify.com/) and sign up.
2.  **Drag and Drop**:
    *   Run `npm run build` in your local terminal to create a `dist` folder.
    *   Drag the `dist` folder onto the Netlify dashboard.
3.  **Connect to GitHub (for continuous deployment)**:
    *   Push this code to a GitHub repository.
    *   In Netlify, click "New site from Git".
    *   Select your repository.
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `dist`
4.  **Custom Domain**:
    *   Go to "Domain Settings" in your Netlify dashboard.
    *   Click "Add custom domain" and enter your domain (e.g., `arduna.com`).
    *   Follow the DNS instructions provided by Netlify.

## Option 2: GitHub Pages

1.  **Push to GitHub**: Upload your code to a GitHub repository.
2.  **Configure Vite**:
    *   Open `vite.config.ts`.
    *   Set the `base` property to your repository name: `base: '/your-repo-name/'` (if deploying to `username.github.io/repo-name`).
    *   If deploying to `username.github.io`, leave `base` as `'/'`.
3.  **Deploy**:
    *   Go to your repository settings on GitHub.
    *   Navigate to "Pages".
    *   Select "GitHub Actions" as the source.
    *   GitHub will automatically detect the Vite project and build it.

## Option 3: Vercel

1.  **Install Vercel CLI** or go to [vercel.com](https://vercel.com/).
2.  **Import Project**:
    *   Select your GitHub repository.
    *   Vercel will automatically detect the Vite framework settings.
    *   Click "Deploy".
3.  **Custom Domain**:
    *   Go to "Settings" > "Domains".
    *   Add your custom domain.

## Local Development

To run the project locally:

1.  Install dependencies: `npm install`
2.  Start the dev server: `npm run dev`
3.  Build for production: `npm run build`
