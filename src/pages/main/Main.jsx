//Components
import Navbar from "../../components/navbar/container/Navbar.jsx";
import FiltersContainer from "../../components/filters/container/FiltersContainer.jsx";
import GalleryContainer from "../../components/gallery/container/GalleryContainer.jsx";
import { QyParamsCtxtProvider } from "../../context/QyParamsCtxt.jsx";

const Main = () => {
  return (
    <QyParamsCtxtProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <FiltersContainer />
        <GalleryContainer />
      </main>
    </QyParamsCtxtProvider>
  );
};

export default Main;
