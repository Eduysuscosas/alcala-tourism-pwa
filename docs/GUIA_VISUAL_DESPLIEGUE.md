# Guía Visual para el Despliegue en GitHub Pages

## 1. Crear un Nuevo Repositorio en GitHub

![Crear Repositorio](https://raw.githubusercontent.com/github/docs/main/assets/images/help/repository/repo-create.png)

1. Visite [GitHub](https://github.com/) e inicie sesión en su cuenta
2. Haga clic en el ícono '+' en la esquina superior derecha y seleccione 'New repository'
3. Nombre su repositorio (ej., `alcala-tourism-pwa`)
4. Añada una descripción (opcional)
5. Elija visibilidad 'Public'
6. Haga clic en 'Create repository'

## 2. Subir Su Proyecto

### Opción A: Usando la Línea de Comandos Git

```bash
# Navegue a su directorio de proyecto
cd ruta/a/alcala-tourism-pwa

# Inicialice un repositorio git
git init

# Añada todos los archivos a git
git add .

# Haga commit de los archivos
git commit -m "Commit inicial"

# Añada su repositorio GitHub como remoto
git remote add origin https://github.com/SU-NOMBRE-USUARIO/alcala-tourism-pwa.git

# Envíe a GitHub
git push -u origin main
```

### Opción B: Subir Usando la Interfaz Web de GitHub

![Subir Archivos](https://raw.githubusercontent.com/github/docs/main/assets/images/help/repository/upload-files-button.png)

1. Navegue a su nuevo repositorio en GitHub
2. Haga clic en 'Add file' > 'Upload files'
3. Arrastre y suelte sus archivos de proyecto o selecciónelos usando el selector de archivos
4. Añada un mensaje de commit
5. Haga clic en 'Commit changes'

## 3. Configurar GitHub Pages

![Configuración de GitHub Pages](https://raw.githubusercontent.com/github/docs/main/assets/images/help/pages/source-button.png)

1. En su repositorio, vaya a 'Settings'
2. En la barra lateral izquierda, haga clic en 'Pages'
3. Bajo 'Build and deployment' > 'Source', seleccione 'GitHub Actions'
4. GitHub detectará automáticamente su archivo de flujo de trabajo (.github/workflows/deploy.yml)

## 4. Verificar el Despliegue

1. Vaya a la pestaña 'Actions' en su repositorio
2. Debería ver su flujo de trabajo ejecutándose o completado
3. Una vez completado, visite su sitio en: `https://SU-NOMBRE-USUARIO.github.io/alcala-tourism-pwa/`

## 5. Actualizar Su Sitio

Cada vez que envíe nuevos cambios a la rama principal, GitHub Actions reconstruirá y desplegará automáticamente su sitio.

```bash
# Haga cambios a sus archivos locales

# Añada y haga commit de sus cambios
git add .
git commit -m "Actualizar contenido del sitio"

# Envíe a GitHub
git push
```

Después de unos minutos, sus cambios estarán activos en su sitio de GitHub Pages.