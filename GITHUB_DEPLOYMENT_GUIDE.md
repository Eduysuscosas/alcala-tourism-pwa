# Guía Rápida para Despliegue en GitHub Pages

## 1. Crea un Repositorio en GitHub
1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el icono '+' en la esquina superior derecha y selecciona 'Nuevo repositorio'
3. Nombra tu repositorio (ej. `alcala-tourism-pwa`)
4. Elige visibilidad pública
5. Haz clic en 'Crear repositorio'

## 2. Inicializa y Envía Tu Código
```bash
# En tu directorio del proyecto
git init
git add .
git commit -m "Commit inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/alcala-tourism-pwa.git
git push -u origin main
```

## 3. Despliegue en GitHub Pages

### Opción 1: Despliegue Manual
1. Instala el paquete gh-pages:
   ```bash
   npm install
   ```
2. Ejecuta el comando de despliegue:
   ```bash
   npm run deploy
   ```

### Opción 2: Despliegue Automático (GitHub Actions)
1. El flujo de trabajo ya está configurado en `.github/workflows/deploy.yml`
2. Solo necesitas hacer push a la rama main y GitHub Actions desplegará automáticamente tu sitio

## 4. Configura GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en 'Settings' > 'Pages'
3. En 'Source', selecciona 'Deploy from a branch'
4. Selecciona la rama 'gh-pages' y carpeta '/ (root)'
5. Haz clic en 'Save'

Tu sitio estará disponible en: `https://TU-USUARIO.github.io/alcala-tourism-pwa/`