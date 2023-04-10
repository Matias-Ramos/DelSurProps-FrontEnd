//Components
import FiltersContainer from "../components/filters/container/FiltersContainer.jsx";
import GalleryContainer from "../components/gallery/container/GalleryContainer.jsx";
import { QyParamsCtxtProvider } from "../context/QyParamsCtxt.jsx";


const Content = () => {
  return (
    <QyParamsCtxtProvider>
      <FiltersContainer  />
      <GalleryContainer />
    </QyParamsCtxtProvider>
  );
};

export default Content;
