// Components
import Navbar from "../../components/navbar/container/Navbar.jsx";
import FiltersContainer from "../../components/filters/container/FiltersContainer.jsx";
import GalleryContainer from "../../components/gallery/container/GalleryContainer.jsx";
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";
import Attributions from "../../components/footer/Attributions.jsx";
// Hooks
import { useLocation } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
import { mainVariant } from "./utils.js";
// Utils
import { getBackground } from "./utils.js";

const Main = () => {
  const location = useLocation();
  const { pathname: URLpath } = location;

  return (
    <motion.div
      variants={mainVariant}
      initial={location.state?.prevPath === "/" ? "hidden" : false}
      animate={location.state?.prevPath === "/" ? "visible" : false}
    >
      <QyParamsCtxtProvider>
        <header>
          <Navbar />
        </header>
        <main style={{ backgroundImage: `url(${getBackground(URLpath)})` }}>
          <FiltersContainer previousURL={location.state?.prevPath} />
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
