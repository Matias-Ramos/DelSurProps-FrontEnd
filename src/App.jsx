// Route
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Css
import './App.scss'
// Components
import Content from "./pages/Content.jsx"
import Welcome from "./pages/Welcome.jsx"
import RouteError from "./pages/RouteError.jsx"
// Bts
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <RouteError />
  },
  {
    path: "/alquiler-inmuebles",
    element: <Content />
  },
  {
    path: "/venta-inmuebles",
    element: <Content />
  },
  {
    path: "/emprendimientos",
    element: <Content />
  },
])

return(
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
