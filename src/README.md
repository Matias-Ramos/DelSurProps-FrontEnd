# Nombre del proyecto

Inmobiliaria DelSurProps

## Sobre el proyecto

### Motivo

El cliente ha solicitado una solución informática que le permita centralizar su catálogo de propiedades en un mismo sitio. 

### Solución

Esta página web no muestra detalles de las propiedades, solo las características mas relevantes y tiene por objetivo redireccionar al usuario a una publicación detallada de la propiedad en MercadoLibre/ZonaProps/ArgenProp.

### Link

delsurprops.com.ar

### Hosting

donweb.com

## Estructura

### Nota **importante** para desarrolladores
Si el viewport es modificado desde un navegador (vista desktop a vista mobile o viceversa), será necesario refrescar el página ya que hay algunos componentes que decidí no hacerlos dinámicamente adaptables por el costo beneficio que representaban.

### Páginas y estructura del sitio

- Welcome.jsx (/)
- Main.jsx (/emprendimientos, /alquiler_inmuebles, /venta_inmuebles)
  - header > #topNavbar
  - main > .navbar (filtros)
  - main > #cardsContainer
  - footer > Attributions.jsx
- RouteError.jsx
- AdminPanel.jsx (/admin)
  - create 
  - delete 

### Frameworks & Librerías principales

- react-bootstrap (grid y box modeling)
- MaterialUi (componentes)
- framer-motion (animación)


### Método de actualización de catálogo

Esta aplicación fue desarrollada para trabajar en conjunto con este backend (https://github.com/Matias-Ramos/Inmobiliaria-backend-go)

### Ejecución del proyecto

Ejecutar "npm install" y luego "npm run dev" en la terminal del IDE. Acto siguiente, abrir la app manualmente accediendo al host [http://127.0.0.1:5173/] en el navegador.

### Inicializacion del proyecto

El proyecto fue inicializado con Vite.
