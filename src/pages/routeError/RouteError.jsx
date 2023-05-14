import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const RouteError = () => {
  const navigate = useNavigate();
  return (
    <div id="pageNotFoundContainer">
      <motion.main
        id="pageNotFoundOuter"
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div id="pageNotFoundInner">
          <h1>404</h1>
          <span>La página no existe o no se encuentra disponible.</span>
          <button onClick={() => navigate("/")}>Volver al Inicio</button>
        </div>
      </motion.main>
    </div>
  );
};

export default RouteError;
