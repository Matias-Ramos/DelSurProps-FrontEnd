import{
  // Components
  Navbar,
  FiltersContainer,
  GalleryContainer,
  QyParamsCtxtProvider,
  Attributions,
  // Hooks
  useLocation,
  // Animation
  motion,
  mainVariant,
  // Utils
  getBackground,
} from "./imports.js"

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
        <Attributions
          bckgName={"SVG backgrounds"}
          bckgLink={"https://www.svgbackgrounds.com/"}
        />
      </footer>
    </motion.div>
  );
};

export default Main;
