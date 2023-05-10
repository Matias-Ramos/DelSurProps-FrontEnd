# Nombre del proyecto

Inmobiliaria

## Sobre el proyecto

### Motivo

El cliente ha solicitado la solución a un problema que se le presenta con regularidad:
Cuando un cliente le consulta por los autos que posee en stock, el cliente debe responder con múltiples links individuales de MercadoL y/o imgs.

### Solución

Esta es una solución de React sencilla, de pocos elementos, que centraliza la totalidad del stock de vehículos en una única página web y redirige al cliente al link de MercadoLibre donde podrá encontrar mas información referida al auto que sea de su interés.

### Link

orautomotores.com.ar

### Hosting

app.netlify.com (from ghPages)

## Código

### Componentes principales del sitio

1. Header - Banner
2. Galería - Filtros
3. Galería - Cards
4. Footer - Contacto

### Frameworks

- react-bootstrap
- MaterialUi

### Método de actualización de stock

El stock de vehículos se actualiza a traves del Firestore (servicio de Firebase, Google) propio de la cuenta gmail de or-automotores.

### Ejecución del proyecto

Ejecutar "npm start" en la terminal del IDE. Acto siguiente la app debería abrirse automáticamente en modo desarrollo. De lo contrario, puede abrirse la app manualmente accediendo al host [http://localhost:3000] en el navegador.

### Inicializacion del proyecto

El proyecto fue inicializado con "npx create-react-app".
