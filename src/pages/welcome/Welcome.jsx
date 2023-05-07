import NavBtns from "../../components/navbar/btns-desktop/NavBtns.jsx";
import BlobContainer from "./blobs/BlobContainer.jsx";
import { motion, useWillChange } from "framer-motion";
import welcomeVariant from "./variant.js";

const Welcome = () => {
  const willChange = useWillChange(); // smooths animation
  return (
    <>
      <div id="hiddenBackground"></div>
      <motion.div
        id="welcome"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BlobContainer />
        <span id="brand">DelSurProps</span>
        <motion.div id="welcomeTxtOuter">
          <motion.div
            variants={welcomeVariant}
            initial="hidden"
            animate="visible"
            id="welcomeTxtInner"
            style={{ willChange }}
          >
            <motion.span variants={welcomeVariant}>Bienvenid@</motion.span>
            <motion.span id="preg" variants={welcomeVariant}>
              ¿Qué estás buscando?
            </motion.span>
            <motion.div variants={welcomeVariant}>
              <NavBtns />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Welcome;
