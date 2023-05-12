import ConfirmBtn from "../../filters/buttons/ConfirmBtn.jsx";
import SurfaceFilter from "./SurfaceFilter.jsx";

const SurfaceFilterContainer = ({
  props: { updateQyParams, deleteQyParam, dispatch, filters },
}) => {
  /****************************** */
  // Functions

  const chgReducerSurface = (newSurface, surfaceType, edge) => {
    dispatch({
      type: "surfaceChgd",
      newSurface: newSurface,
      surfaceType: surfaceType,
      edge: edge,
    });
  };
  const handleChange = (newValue, surfaceType, edge) => {
    const regex = /^[0-9\b]+$/;
    if (newValue === "" || regex.test(newValue)) {
      chgReducerSurface(newValue, surfaceType, edge);
    }
  };
  const handleSubmit = () => {
    // properties inside filters.surface can either be "covered" or "total"
    for (const surfaceType in filters.surface) {
      for (const edge in filters.surface[surfaceType]) {
        filters.surface[surfaceType][edge]
          ? updateQyParams(
              `${surfaceType}_surface_${edge}`,
              filters.surface[surfaceType][edge]
            )
          : deleteQyParam(`${surfaceType}_surface_${edge}`);
      }
    }
  };
  const handleClean = () => {
    const types = ["total", "covered"];
    const edges = ["init", "limit"];
    for (const type of types) {
      for (const edge of edges) {
        deleteQyParam(`${type}_surface_${edge}`);
        chgReducerSurface("", type, `${edge}`);
      }
    }
  };

  /****************************** */
  // Rendering

  return (
    <div id="surfaceFilterContainer">
      <SurfaceFilter
        surfaceTypeEsp={"cubierta"}
        surfaceType={"covered"}
        surfaceFilterValues={filters.surface.covered}
        handleChange={handleChange}
      />
      <SurfaceFilter
        surfaceTypeEsp={"total"}
        surfaceType={"total"}
        surfaceFilterValues={filters.surface.total}
        handleChange={handleChange}
      />
      <div className="btnsSubmitClean-Container">
        <ConfirmBtn handleSubmit={handleSubmit} />
        <button className="cleanBtn" onClick={handleClean}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default SurfaceFilterContainer;
