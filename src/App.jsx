// Route
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Css
import './App.scss'
// Components
import Gallery from "./pages/Gallery.jsx"
import Welcome from "./pages/Welcome.jsx"
import RouteError from "./pages/RouteError.jsx"


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <RouteError />
  },
  {
    path: "/alquiler-inmuebles",
    element: <Gallery />
  },
  {
    path: "/venta-inmuebles",
    element: <Gallery />
  },
  {
    path: "/emprendimientos",
    element: <Gallery />
  },
])

return(
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
