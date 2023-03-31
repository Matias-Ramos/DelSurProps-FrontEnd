import CoveredSurfaceFilter from "./CoveredSurfaceFilter.jsx";
import TotalSurfaceFilter from "./TotalSurfaceFilter.jsx";

const SurfaceFilterContainer = ({
  updateQyParams,
  deleteQyParam,
  dispatch,
  filters,
  coveredSurfaceInitQyParams,
  coveredSurfaceLimitQyParams,
  totalSurfaceInitQyParams,
  totalSurfaceLimitQyParams,
}) => {

  const handleSubmit = (surfaceTypeParam) => {
    // It analizes the properties inside filters.surface, which can eaither be "covered" or "total"
    for (const surfaceType in filters.surface) {
      // if param == propertyName
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
    const edge = ['init', 'limit'];
    for(let i=0; i<=1; i++){
      deleteQyParam(`${surfaceType}_surface_${edge[i]}`);
      chgReducerSurface("", `${surfaceType}SurfaceChgd`, `${edge[i]}`);
    }
  };
  const handleChange = (evt, surfaceType, edge) => {
    chgReducerSurface(evt.target.value, `${surfaceType}SurfaceChgd`, edge);
  };
  const chgReducerSurface = (newSurface, dispatchEvt, edge) => {
    dispatch({
      newSurface: newSurface,
      type: dispatchEvt,
      edge: edge,
    });
  };

  return (
    <>
      <CoveredSurfaceFilter
        surfaceFilterValues={filters.surface.covered}
        handleSubmit={handleSubmit}
        handleClean={handleClean}
        handleChange={handleChange}
        chgReducerSurface={chgReducerSurface}
        coveredSurfaceInitQyParams={coveredSurfaceInitQyParams}
        coveredSurfaceLimitQyParams={coveredSurfaceLimitQyParams}
      />
      <TotalSurfaceFilter
        surfaceFilterValues={filters.surface.total}
        handleSubmit={handleSubmit}
        handleClean={handleClean}
        handleChange={handleChange}
        chgReducerSurface={chgReducerSurface}
        totalSurfaceInitQyParams={totalSurfaceInitQyParams}
        totalSurfaceLimitQyParams={totalSurfaceLimitQyParams}
      />
    </>
  );
};

export default SurfaceFilterContainer;
