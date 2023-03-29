// Route
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Css
import './App.css'
// Components
import Buy from "./pages/Buy.jsx"
import Entrepreneurship from "./pages/Entrepreneurship.jsx"
import Rent from "./pages/Rent.jsx"
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
    element: <Rent />
  },
  {
    path: "/venta-inmuebles",
    element: <Buy />
  },
  {
    path: "/emprendimientos",
    element: <Entrepreneurship />
  },
])

return(
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
