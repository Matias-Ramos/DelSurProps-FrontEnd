//Components
import FiltersContainer from "../components/filters/container/FiltersContainer.jsx";
import { QyParamsCtxtProvider } from "../context/QyParamsCtxt";


const Gallery = () => {
  return (
    <QyParamsCtxtProvider>
      <FiltersContainer  />
    </QyParamsCtxtProvider>
  );
};

export default Gallery;
