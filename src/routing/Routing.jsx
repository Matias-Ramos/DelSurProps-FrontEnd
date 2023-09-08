import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "../pages/welcome/Welcome.jsx";
import AdminPanel from "../pages/adminPanel/baseComponents/AdminPanel.jsx"
import Main from "../pages/main/Main.jsx";
import RouteError from "../pages/routeError/RouteError.jsx";
const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="/alquiler_inmuebles" element={<Main />} />
        <Route path="/venta_inmuebles" element={<Main />} />
        <Route path="/emprendimientos" element={<Main />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path='*' element={<RouteError />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
