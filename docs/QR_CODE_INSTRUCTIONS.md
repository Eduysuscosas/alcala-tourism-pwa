# Instrucciones para el Componente de Código QR

## Descripción

Hemos incluido un componente `QRCodeGenerator.jsx` que genera automáticamente un código QR vinculado a la URL de tu aplicación desplegada en GitHub Pages. Este componente permite a los visitantes escanear el código para acceder a la aplicación desde sus dispositivos móviles o descargar el código QR para compartirlo.

## Configuración del Componente

### Paso 1: Actualizar el nombre de usuario de GitHub

Antes de utilizar el componente, debes actualizar el nombre de usuario de GitHub en el archivo:

```jsx
// src/components/QRCodeGenerator.jsx
// Buscar esta línea (aproximadamente línea 12)
const githubUsername = 'YOUR_GITHUB_USERNAME';
// Cambiar 'YOUR_GITHUB_USERNAME' por tu nombre de usuario de GitHub
```

### Paso 2: Integrar el componente en tu aplicación

Puedes añadir el componente QRCodeGenerator en cualquier parte de tu aplicación. Por ejemplo:

```jsx
import QRCodeGenerator from './components/QRCodeGenerator';

function MiPagina() {
  return (
    <div className="container mx-auto p-4">
      <h1>Turismo en Alcalá de Guadaíra</h1>
      {/* Otros componentes */}
      
      <div className="mt-8">
        <QRCodeGenerator />
      </div>
    </div>
  );
}
```

### Paso 3: Personalización (opcional)

Puedes personalizar la apariencia del código QR modificando las opciones en el archivo `QRCodeGenerator.jsx`:

```jsx
// Colores del código QR
QRCode.toCanvas(
  canvasRef.current,
  deployedUrl,
  {
    width: 200, // Tamaño del código QR
    margin: 1,
    color: {
      dark: '#004d40', // Color principal del QR (puedes cambiarlo)
      light: '#ffffff' // Color de fondo
    }
  },
  // ...
);
```

## Características

El componente QRCodeGenerator ofrece:

1. **Visualización del código QR** - Muestra un código QR funcional que enlaza a la aplicación
2. **Botón de descarga** - Permite a los usuarios descargar el código QR como imagen PNG
3. **Visualización de la URL** - Muestra la URL completa de la aplicación desplegada

## Requisitos

La dependencia `qrcode` ya ha sido añadida al archivo `package.json`. Asegúrate de ejecutar `pnpm install` después de actualizar el repositorio para instalar esta dependencia.

## Notas importantes

- El código QR solo funcionará correctamente después de que hayas desplegado la aplicación en GitHub Pages
- Debes actualizar el nombre de usuario de GitHub en el componente para que el código QR enlace a tu aplicación desplegada
- Si cambias el nombre del repositorio, también deberás actualizar la variable `repoName` en el componente