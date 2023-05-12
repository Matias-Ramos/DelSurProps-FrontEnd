import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Attributions from "../../components/footer/Attributions.jsx";
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
      <footer>
        <Attributions
          bckgName={"IRA Design"}
          bckgLink={"https://iradesign.io"}
        />
      </footer>
    </div>
  );
};

export default RouteError;
