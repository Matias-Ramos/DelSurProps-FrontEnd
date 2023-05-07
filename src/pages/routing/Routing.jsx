import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "../welcome/Welcome.jsx";
import Main from "../main/Main.jsx";
const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="/alquiler-inmuebles" element={<Main />} />
        <Route path="/venta-inmuebles" element={<Main />} />
        <Route path="/emprendimientos" element={<Main />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
