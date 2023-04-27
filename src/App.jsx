// Route
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Css
import "./App.scss";
// Components
import Main from "./pages/main/Main.jsx";
import Welcome from "./pages/welcome/Welcome.jsx";
import RouteError from "./pages/RouteError.jsx";
// Bts
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <RouteError />,
    },
    {
      path: "/alquiler-inmuebles",
      element: <Main />,
    },
    {
      path: "/venta-inmuebles",
      element: <Main />,
    },
    {
      path: "/emprendimientos",
      element: <Main />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
