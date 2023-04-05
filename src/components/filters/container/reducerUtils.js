/*******************/
// env = "ambientes"

const filterStructure = {
  location: null,
  price: {
    init: null,
    limit: null,
  },
  env: {
    init: 1,
    limit: 7,
  },
  garage: {
    init: 1,
    limit: 7,
  },
  bathroom: {
    init: 1,
    limit: 7,
  },
  bedroom: {
    init: 1,
    limit: 7,
  },
  buildStatus: null,
  surface: {
    total: {
      init: null,
      limit: null,
    },
    covered: {
      init: null,
      limit: null,
    }
  }
}
function filterModifier(currentFilters, actionObj) {
  switch (actionObj.type) {
    case "locationChgd": {
      return {
        ...currentFilters,
        location: actionObj.location,
      };
    }
    case "initPriceChgd": {
      return {
        ...currentFilters,
        price: { ...currentFilters.price, init: actionObj.newPrice },
      };
    }
    case "limitPriceChgd": {
      return {
        ...currentFilters,
        price: { ...currentFilters.price, limit: actionObj.newPrice },
      };
    }
    case "coveredSurfaceChgd": {
        return {
          ...currentFilters,
          surface: {
            ...currentFilters.surface,
            covered: {
              ...currentFilters.surface.covered,
              ...(actionObj.edge === "init" ? {init: actionObj.newSurface}:{limit: actionObj.newSurface} )
            },
          },
        };
    }
    case "totalSurfaceChgd": {
      return {
        ...currentFilters,
        surface: {
          ...currentFilters.surface,
          total: {
            ...currentFilters.surface.total,
            ...(actionObj.edge === "init" ? {init: actionObj.newSurface}:{limit: actionObj.newSurface} )
          },
        },
      };
    }

    case "envChgd": {
      // from useEffect on initial render
      if(actionObj.edge){
        return {
          ...currentFilters,
          env: {
            ...currentFilters.env,
            ...(actionObj.edge === "init" ? {init: actionObj.newRoomValue}:{limit: actionObj.newRoomValue} ),
          },
        };
      } 
      // from components
      else { 
        return {
          ...currentFilters,
          env: {
            init: parseInt(actionObj.newRoomValue[0]),
            limit: parseInt(actionObj.newRoomValue[1]),
          },
        };
      }
    }
    case "garageChgd": {
      return {
        ...currentFilters,
        garage: actionObj.garage,
      };
    }
    case "bathrChgd": {
      return {
        ...currentFilters,
        bathr: actionObj.bathr,
      };
    }
    case "bedrChgd": {
      return {
        ...currentFilters,
        bedr: actionObj.bedr,
      };
    }
    case "buildStatusChgd": {
      return {
        ...currentFilters,
        buildStatus: actionObj.buildStatus,
      };
    }
  }
}
export {filterModifier, filterStructure}