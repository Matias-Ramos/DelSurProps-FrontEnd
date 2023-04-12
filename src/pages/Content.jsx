//Components
import NavbarContainer from "../components/navbar/container/NavbarContainer.jsx";
import FiltersContainer from "../components/filters/container/FiltersContainer.jsx";
import GalleryContainer from "../components/gallery/container/GalleryContainer.jsx";
import { QyParamsCtxtProvider } from "../context/QyParamsCtxt.jsx";

const Content = () => {
  return (
    <QyParamsCtxtProvider>
      <header>
        <NavbarContainer />
      </header>
      <main>
        <FiltersContainer />
        <GalleryContainer />
      </main>
    </QyParamsCtxtProvider>
  );
};

export default Content;
