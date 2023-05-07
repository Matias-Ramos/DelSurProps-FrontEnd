// Components
import Navbar from "../../components/navbar/container/Navbar.jsx";
import FiltersContainer from "../../components/filters/container/FiltersContainer.jsx";
import GalleryContainer from "../../components/gallery/container/GalleryContainer.jsx";
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";
import Attributions from "../../components/footer/Attributions.jsx";
// Hooks
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// Utils
import { getBackground, mainVariant } from "./utils.js";
// Animation
import { motion, useCycle } from "framer-motion";

const Main = () => {
  const URLpath = useLocation().pathname;
  const [animation, cycleAnimation] = useCycle("visible", {});
  const navigate = useNavigate();


  // useEffect(() => cycleAnimation(), []);
  useEffect(() => `navigate ${navigate.location.state?.previousPath}`, [navigate]);
  
  return (
    <motion.div variants={mainVariant} initial="hidden" animate={animation}>
      <QyParamsCtxtProvider>
        <header>
          <Navbar />
        </header>
        <main style={{ backgroundImage: `url(${getBackground(URLpath)})` }}>
          <FiltersContainer />
          <GalleryContainer />
        </main>
      </QyParamsCtxtProvider>
      <footer>
        <Attributions />
      </footer>
    </motion.div>
  );
};

export default Main;
