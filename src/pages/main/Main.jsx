// Components
import Navbar from "../../components/navbar/container/Navbar.jsx";
import FiltersContainer from "../../components/filters/container/FiltersContainer.jsx";
import GalleryContainer from "../../components/gallery/container/GalleryContainer.jsx";
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";
import Attributions from "../../components/footer/Attributions.jsx";
// Hooks
import { useLocation } from "react-router-dom";
// Utils
import { getBackground } from "./utils.js";

const Main = () => {
  const URLpath = useLocation().pathname;

  return (
    <>
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
    </>
  );
};

export default Main;
