# Alcalá de Guadaíra Tourism PWA

A Progressive Web Application showcasing tourist attractions, history, and cultural sites in Alcalá de Guadaíra.

## Project Overview

This tourism application features:
- Image Gallery of local attractions
- Information about Alcalá de Guadaíra
- List of tourist attractions with details
- Historical information about the region
- Interactive map of tourist spots
- Mobile-responsive design with PWA capabilities

## Project Structure

```
├── src/
│   ├── App.jsx          # Main application component
│   ├── components/       # Reusable UI components
│   ├── pages/            # Different pages of the application
│   ├── data/             # Tourist data for the app
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles (Tailwind)
├── public/               # Static assets and PWA files
│   ├── assets/           # Images and other media
│   ├── data/             # Sample data
│   ├── manifest.json     # PWA manifest
│   └── sw.js             # Service worker
├── index.html           # HTML template
├── vite.config.js       # Vite configuration with GitHub Pages support
└── other config files...
```

## Development Scripts
- `npm install` or `pnpm install` - Install dependencies
- `npm run dev` or `pnpm run dev` - Start development server
- `npm run build` or `pnpm run build` - Build for production
- `npm run preview` or `pnpm run preview` - Preview production build
- `npm run lint` or `pnpm run lint` - Lint source files

## GitHub Pages Deployment Guide

### 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the '+' icon in the top-right corner and select 'New repository'
3. Name your repository (e.g., `alcala-tourism-pwa`)
4. Choose public visibility
5. Click 'Create repository'

### 2. Initialize and Push Your Code
```bash
# In your project directory
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/alcala-tourism-pwa.git
git push -u origin main
```

### 3. Deploy to GitHub Pages

#### Option 1: Manual Deployment
1. Add the following to your package.json scripts section:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
2. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
   or with pnpm:
   ```bash
   pnpm add -D gh-pages
   ```
3. Run the deploy command:
   ```bash
   npm run deploy
   ```
   or
   ```bash
   pnpm run deploy
   ```

#### Option 2: GitHub Actions (Automated Deployment)
1. Create a `.github/workflows` directory in your project
2. Create a file named `deploy.yml` inside that directory with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

3. Commit and push this workflow file to GitHub
4. GitHub Actions will automatically build and deploy your site

### 4. Configure GitHub Pages
1. Go to your repository on GitHub
2. Click on 'Settings' > 'Pages'
3. Under 'Source', select 'Deploy from a branch'
4. Select the 'gh-pages' branch and '/ (root)' folder
5. Click 'Save'

Your site will be available at: `https://YOUR-USERNAME.github.io/alcala-tourism-pwa/`

## Tech Stack
- React
- Vite
- TailwindCSS
- Material UI (MUI)
- React Router
- Leaflet (for maps)
- Service Worker (for PWA functionality)
