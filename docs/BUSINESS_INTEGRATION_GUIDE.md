# Guía de Integración de Negocios Locales

## Introducción

Esta guía explica cómo los negocios locales de Alcalá de Guadaíra pueden integrarse en la aplicación de turismo PWA, creando una experiencia enriquecida para los visitantes mientras promueven la economía local.

## Tipos de Integración Disponibles

### 1. Listado Básico

Inclusión del negocio en el directorio de establecimientos con información básica.

**Datos necesarios:**
- Nombre del negocio
- Dirección completa
- Horario de apertura
- Categoría (restaurante, tienda, alojamiento, etc.)
- Foto principal (optimizada para web)
- Breve descripción (máximo 150 caracteres)
- Datos de contacto (teléfono, email, web)

### 2. Integración Destacada

Perfiles mejorados con contenido ampliado y posición destacada.

**Datos adicionales:**
- Hasta 5 fotografías del establecimiento
- Descripción extendida
- Menús/Catálogos (en formato PDF)
- Ofertas especiales para turistas
- Idiomas hablados
- Métodos de pago aceptados

### 3. Integración con Reservas

Integración con sistema de reservas o pedidos online.

## Proceso de Integración

### Para Administradores de la PWA

1. **Recepción de datos**: Recopilar la información de los negocios usando el formulario estándar

2. **Procesamiento de datos**: Convertir la información al formato JSON requerido

```json
{
  "id": "nombre-del-negocio",
  "name": "Nombre del Negocio",
  "category": "restaurants",
  "description": "Descripción breve del negocio...",
  "address": "Calle Ejemplo, 123, Alcalá de Guadaíra",
  "phone": "+34 123 456 789",
  "email": "contacto@negocio.com",
  "website": "https://www.negocio.com",
  "hours": {
    "monday": "10:00 - 22:00",
    "tuesday": "10:00 - 22:00",
    "wednesday": "10:00 - 22:00",
    "thursday": "10:00 - 22:00",
    "friday": "10:00 - 23:00",
    "saturday": "11:00 - 23:00",
    "sunday": "11:00 - 20:00"
  },
  "location": {
    "lat": 37.3372,
    "lng": -5.8444
  },
  "images": [
    "/assets/images/businesses/nombre-negocio/principal.jpg",
    "/assets/images/businesses/nombre-negocio/interior.jpg"
  ],
  "features": ["wifi", "terraza", "accesible"],
  "languages": ["español", "inglés"],
  "paymentMethods": ["efectivo", "tarjeta", "móvil"],
  "touristOffer": "10% de descuento mostrando la tarjeta turística"
}
```

3. **Añadir imágenes**: Optimizar y guardar imágenes en `/public/assets/images/businesses/[id-negocio]/`

4. **Integración en datos**: Añadir el objeto JSON al archivo correspondiente en `src/data/businesses.json`

5. **Actualización de mapa**: Asegurar que el negocio aparece correctamente en la capa de mapa

### Para Negocios

1. Completar el [formulario de solicitud](https://forms.example.com/registro-negocio)

2. Enviar materiales gráficos según las especificaciones técnicas:
   - Imágenes: formato JPEG o PNG, mínimo 800px de ancho, máximo 2MB
   - Logotipos: formato PNG con transparencia, mínimo 400px
   - Documentos: formato PDF (menús, catálogos)

3. Verificar la información una vez publicada

## Actualización de Datos

Los negocios pueden solicitar actualizaciones de sus datos mediante el formulario de contacto disponible en la aplicación o enviando un correo a `actualizaciones@alcalaturismo.es`.

## Promociones Especiales y Eventos

Los negocios pueden participar en promociones especiales y eventos destacados en la aplicación:

1. Enviar la propuesta de promoción con al menos 2 semanas de antelación
2. Incluir toda la información relevante (fechas, descuentos, condiciones)
3. Proporcionar material gráfico específico para la promoción

## Estadísticas y Análisis

Los negocios integrados recibirán informes trimestrales con:

- Número de visualizaciones de su perfil
- Clics en información de contacto
- Interacciones con ofertas especiales
- Posición en búsquedas populares

## Contacto para Soporte

Para cualquier duda sobre el proceso de integración:

- Email: integracion@alcalaturismo.es
- Teléfono: +34 XXX XXX XXX
- Oficina de Turismo: Plaza del Duque, Alcalá de Guadaíra