import CoveredSurfaceFilter from "./CoveredSurfaceFilter.jsx";
import TotalSurfaceFilter from "./TotalSurfaceFilter.jsx";
import { useEffect } from "react";
const SurfaceFilterContainer = ({
  props:{
    updateQyParams,
    deleteQyParam,
    dispatch,
    filters,
    searchQyParams,
  }
}) => {
  const chgReducerSurface = (newSurface, surfaceType, edge) => {
    dispatch({
      type: "surfaceChgd",
      newSurface: newSurface,
      surfaceType: surfaceType,
      edge: edge,
    });
  };

  // verifies qyParam on first render and updates the useReducer if there are such.
  useEffect(() => {
    const surfaceTypes = ["total", "covered"];
    for (let type of surfaceTypes) {
      const roomInitQyParams = searchQyParams.get(`${type}_surface_init`);
      const roomLimitQyParams = searchQyParams.get(`${type}_surface_limit`);

      roomInitQyParams !== null &&
        chgReducerSurface(parseInt(roomInitQyParams), type, "init");

      roomLimitQyParams !== null &&
      chgReducerSurface(parseInt(roomLimitQyParams), type, "limit");
    }
  }, []);

  const handleChange = (newValue, surfaceType, edge) => {
    const regex = /^[0-9\b]+$/;
    if (newValue === "" || regex.test(newValue)) {
      chgReducerSurface(newValue, surfaceType, edge);
    }
  };
  const handleSubmit = (surfaceTypeParam) => {
    // properties inside filters.surface can eaither be "covered" or "total"
    for (const surfaceType in filters.surface) {
      // if param === propertyName
      if (surfaceTypeParam === surfaceType) {
        // it will loop over init and limit (edge)
        // and it will apply the value of the reducer on the queryParam
        for (const edge in filters.surface[surfaceType]) {
          filters.surface[surfaceType][edge]
            ? updateQyParams(
                `${surfaceType}_surface_${edge}`,
                filters.surface[surfaceType][edge]
              )
            : deleteQyParam(`${surfaceType}_surface_${edge}`);
        }
      }
    }
  };
  const handleClean = (surfaceType) => {
    const edge = ["init", "limit"];
    for (let i = 0; i <= 1; i++) {
      deleteQyParam(`${surfaceType}_surface_${edge[i]}`);
      chgReducerSurface("", surfaceType, `${edge[i]}`);
    }
  };

  return (
    <>
      <CoveredSurfaceFilter
        surfaceFilterValues={filters.surface.covered}
        handleSubmit={handleSubmit}
        handleClean={handleClean}
        handleChange={handleChange}
      />
      <TotalSurfaceFilter
        surfaceFilterValues={filters.surface.total}
        handleSubmit={handleSubmit}
        handleClean={handleClean}
        handleChange={handleChange}
      />
    </>
  );
};

export default SurfaceFilterContainer;
