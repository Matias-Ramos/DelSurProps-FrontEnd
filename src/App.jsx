// Route
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Css
import './App.css'
// Components
import Buy from "./routes/Buy.jsx"
import Entrepreneurship from "./routes/Entrepreneurship.jsx"
import Rent from "./routes/Rent.jsx"
import Welcome from "./routes/Welcome.jsx"
import RouteError from "./routes/RouteError.jsx"


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
  <div>
    <RouterProvider router={router} />
  </div>
  )
}

export default App
