# Project Name
DelSurProps

## About the Project

### Purpose
The client has requested a solution that centralizes the properties they manage: For sale, Rentals, and Entrepreneurships.

### Solution
This is a solution built in React.js, which centralizes the properties on a single website and redirects the client to the link on MercadoLibre/Zonaprop/Argenprop, where they can find more information related to the property of their interest.

### Link
delsurprops.com.ar (site shut down as per client request)
DEMO: https://youtu.be/kzu_LFJki7s

### Full stack architecture
This is a full-stack project, designed to work in conjunction with this backend: [https://github.com/Matias-Ramos/Inmobiliaria-backend-go] and with an SQL database:

![Full stack application diagram](architecture-1.png)

### Challenges on this project:
- Implemented advanced filtering with synchronized URL updates.
- Developed distinct UIs for user and admin roles.
- Integrated an organic (moving) background for the first time.
- Prioritized user-friendly interface design.
- Backend API integration.

## Code

### Pages & Core components
- Welcome.jsx (/)
- Main.jsx (/emprendimientos, /alquiler_inmuebles, /venta_inmuebles)
  - header > Navbar.jsx
  - main > FiltersContainer.jsx
  - main > GalleryContainer.jsx
  - footer > Attributions.jsx
- AdminPanel.jsx (/admin)
  - create > ContainerCreateBuilding.jsx
  - delete > ContainerDeleteBuilding.jsx
- RouteError.jsx

### Frameworks & Libraries
- react-bootstrap (grid and box modeling)
- MaterialUi (components)
- Framermotion (animation)

### Stock Update Method

https://localhost/admin


### **Important** note for developers
If the viewport is modified from a browser (desktop view to mobile view or vice versa), it will be necessary to refresh the page, since there are some components that are not dynamically adaptable. Basically, due to the cost benefit it represented to do that, I decided not to.

### Running the Project
Run "npm run dev" in the IDE terminal. Next, go to the url [http://127.0.0.1:5173/] in the browser.

### Project Initialization
The project was initialized with Vite.
