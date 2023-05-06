import NavBtns from "../../components/navbar/btns-desktop/NavBtns.jsx";
import BlobContainer from "./blobs/BlobContainer.jsx";
import { motion } from "framer-motion";
import welcomeVariant from "./variant.js";


const Welcome = () => {
  return (
    <div id="welcome">
      <BlobContainer />
      <span id="brand">DelSurProps</span>
      <motion.div id="welcomeTxtOuter">
        <motion.div
          variants={welcomeVariant}
          initial="hidden"
          animate="visible"
          id="welcomeTxtInner"
        >
          <motion.span variants={welcomeVariant}>
            Bienvenid@
          </motion.span>
          <motion.span id="preg" variants={welcomeVariant}>
            ¿Qué estás buscando?
          </motion.span>
          <motion.div variants={welcomeVariant}>
            <NavBtns />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;
