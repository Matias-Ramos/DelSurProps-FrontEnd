# Project Name
DelSurProps

## About the Project

### Purpose
The client has requested a solution that centralizes the properties they manage: For sale, Rentals, and Entrepreneurships.

### Solution
This is a solution built in React.js, which centralizes the properties on a single website and redirects the client to the link on MercadoLibre/Zonaprop/Argenprop, where they can find more information related to the property of their interest.

### Link
delsurprops.com.ar

### Full stack architecture
This is a full-stack project, designed to work in conjunction with this backend: [https://github.com/Matias-Ramos/Inmobiliaria-backend-go] and with an SQL database:

![Diagrama full stack de la aplicación](architecture-1.png)

## Code

### Pages
- Welcome.jsx
- Main.jsx
- RouteError.jsx
- AdminPanel.jsx

### Components in Main.jsx
1. Navbar - Category filters.
2. FiltersContainer - Content filters.
3. GalleryContainer - Cards.
4. Footer - Attributions.

### Frameworks & Libraries
- react-bootstrap
- MaterialUi
- Framermotion

### Stock Update Method
https://localhost/admin

### Running the Project
Run "npm run dev" in the IDE terminal. Next, go to the url [http://127.0.0.1:5173/] in the browser.

### Project Initialization
The project was initialized with Vite.
