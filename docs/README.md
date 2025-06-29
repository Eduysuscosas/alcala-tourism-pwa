# Documentación para el Despliegue de la PWA de Turismo de Alcalá de Guadaíra

## Guías Disponibles

### Español

1. [Guía de Despliegue en GitHub Pages](../GITHUB_DEPLOYMENT_GUIDE.md) - Instrucciones básicas para desplegar la aplicación en GitHub Pages
2. [Guía Visual de Despliegue](./GUIA_VISUAL_DESPLIEGUE.md) - Tutorial paso a paso con imágenes para el despliegue
3. [Instrucciones de Descarga](../DOWNLOAD_INSTRUCTIONS.md) - Cómo descargar y preparar el proyecto desde el archivo comprimido

### English

1. [GitHub Pages Deployment Guide](../README.md#deployment) - Basic instructions for deploying the application on GitHub Pages
2. [Visual Deployment Guide](./DEPLOYMENT_VISUAL_GUIDE.md) - Step-by-step tutorial with images for deployment

## Estructura del Proyecto

El proyecto está completamente configurado para su despliegue en GitHub Pages:

```
react_template/
├── .github/workflows/    # Configuración de GitHub Actions para despliegue automático
│   └── deploy.yml
├── docs/                 # Documentación detallada
├── public/               # Archivos públicos (imágenes, manifest, service worker)
├── src/                  # Código fuente de la aplicación
├── GITHUB_DEPLOYMENT_GUIDE.md  # Guía rápida de despliegue
├── README.md            # Documentación principal del proyecto
└── package.json         # Configuración del proyecto y scripts
```

## Opciones de Despliegue

### 1. Despliegue Automático (Recomendado)

Al subir el código a GitHub, el flujo de trabajo configurado en `.github/workflows/deploy.yml` construirá y desplegará automáticamente el sitio.

### 2. Despliegue Manual

También puede desplegar manualmente usando:

```bash
pnpm run build
pnpm run deploy
```

## Personalización

Para personalizar la URL del sitio o el comportamiento del despliegue:

- Edite la propiedad `base` en `vite.config.js`
- Modifique el script `deploy` en `package.json`
- Actualice el archivo `deploy.yml` según sea necesario

## Soporte

Si encuentra algún problema durante el despliegue, consulte la [documentación oficial de GitHub Pages](https://docs.github.com/es/pages).