# Guía de Administración - PWA de Turismo de Alcalá de Guadaíra

## Introducción

Esta guía está diseñada para administradores y desarrolladores responsables del mantenimiento y actualización de la PWA de Turismo de Alcalá de Guadaíra después de su despliegue inicial.

## Actualización de Contenidos

### Puntos de Interés y Atracciones

Los datos de puntos de interés, eventos y rutas se encuentran en archivos JSON en la carpeta `src/data/`. Para actualizar la información:

1. Localice el archivo JSON correspondiente (por ejemplo, `attractions.json`, `events.json`, etc.)
2. Modifique los datos siguiendo la estructura existente
3. Guarde los cambios y vuelva a desplegar la aplicación

**Ejemplo de estructura para punto de interés:**

```json
{
  "id": "castillo",
  "name": "Castillo de Alcalá",
  "description": "Fortaleza medieval con vistas panorámicas...",
  "image": "/assets/images/attractions/castillo.jpg",
  "location": {
    "lat": 37.3372,
    "lng": -5.8444
  },
  "details": [...]
}
```

### Imágenes y Medios

Para actualizar o agregar nuevas imágenes:

1. Coloque los archivos en la carpeta `public/assets/images/` manteniendo la organización por categorías
2. Asegúrese de que las imágenes están optimizadas para web (tamaño recomendado: máximo 1MB por imagen)
3. Actualice las referencias en los archivos JSON correspondientes

## Mantenimiento Técnico

### Actualizaciones de Dependencias

Se recomienda actualizar periódicamente las dependencias para mantener la seguridad y rendimiento:

```bash
pnpm update
```

Después de actualizar, pruebe la aplicación localmente antes de desplegar:

```bash
pnpm run dev
```

### Monitorización de Rendimiento

1. Utilice Google Lighthouse para evaluar periódicamente el rendimiento de la PWA
2. Verifique la funcionalidad offline con las herramientas de desarrollo del navegador
3. Compruebe que el Service Worker se está actualizando correctamente

## Estrategia de Backup

1. Mantenga una copia de seguridad de los datos JSON en una ubicación separada
2. Utilice ramas Git para experimentar con cambios importantes antes de fusionarlos con la rama principal
3. Documente todos los cambios significativos

## Personalización del Tema

Para cambiar los colores y estilos principales:

1. Edite el archivo `tailwind.config.js` para modificar la paleta de colores
2. Actualice las clases CSS correspondientes en los componentes

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Actualice estos colores según sea necesario
          50: '#e6f2f0',
          100: '#ccdfdb',
          // ...
          900: '#004d40',
        },
        // ...
      }
    }
  }
}
```

## Añadir Nuevas Funcionalidades

1. Desarrolle nuevas características en un entorno local
2. Pruebe exhaustivamente antes de implementar en producción
3. Actualice la documentación para reflejar los cambios

## Contacto y Soporte

Para asistencia técnica, contacte con el equipo de desarrollo:

- Email: soporte@alcalaturismo.es
- GitHub: [repositorio de la aplicación](https://github.com/YOUR_USERNAME/alcala-tourism-pwa)