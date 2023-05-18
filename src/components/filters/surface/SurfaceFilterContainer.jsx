// Components
import ConfirmBtn from "../../filters/buttons/ConfirmBtn.jsx";
import SurfaceFilter from "./SurfaceFilter.jsx";
// Typechecking
import PropTypes from "prop-types";

const SurfaceFilterContainer = ({
  filterModifiers: { updateQyParams, deleteQyParam, dispatch },
  surfacesFilter,
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
      chgReducerSurface(parseInt(newValue), surfaceType, edge);
    }
  };
  const handleSubmit = () => {
    // properties inside surfacesFilter can either be "covered" or "total"
    for (const surfaceType in surfacesFilter) {
      for (const edge in surfacesFilter[surfaceType]) {
        surfacesFilter[surfaceType][edge]
          ? updateQyParams(
              `${surfaceType}_surface_${edge}`,
              surfacesFilter[surfaceType][edge]
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
        surfaceTypeInSpanish={"cubierta"}
        surfaceType={"covered"}
        surfaceFilterValues={surfacesFilter.covered}
        handleChange={handleChange}
      />
      <SurfaceFilter
        surfaceTypeInSpanish={"total"}
        surfaceType={"total"}
        surfaceFilterValues={surfacesFilter.total}
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
/****************************** */
// TypeChecking
SurfaceFilterContainer.propTypes = {
  filterModifiers: PropTypes.shape({
    updateQyParams: PropTypes.func,
    deleteQyParams: PropTypes.func,
    dispatch: PropTypes.func,
  }),
  surfacesFilter: PropTypes.shape({
    total: PropTypes.shape({
      init: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]),
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]),
    }),
    covered: PropTypes.shape({
      init: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]),
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([""])]),
    }),
  }),
};
/****************************** */
export default SurfaceFilterContainer;
