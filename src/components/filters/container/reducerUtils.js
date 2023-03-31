const filterStructure = {
  location: null,
  price: {
    init: null,
    limit: null,
  },
  garage: null,
  bathr: null,
  bedr: null,
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
  },
  //env="ambientes"
  env: null,
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
      if (actionObj.edge === "init") {
        return {
          ...currentFilters,
          surface: {
            ...currentFilters.surface,
            covered: {
              ...currentFilters.surface.covered,
              init: actionObj.newSurface,
            },
          },
        };
      } else if (actionObj.edge === "limit") {
        return {
          ...currentFilters,
          surface: {
            ...currentFilters.surface,
            covered: {
              ...currentFilters.surface.covered,
              limit: actionObj.newSurface,
            },
          },
        };
      }
    }
    case "totalSurfaceChgd": {
      if (actionObj.edge === "init") {
        return {
          ...currentFilters,
          surface: {
            ...currentFilters.surface,
            total: {
              ...currentFilters.surface.total,
              init: actionObj.newSurface,
            },
          },
        };
      } else if (actionObj.edge === "limit") {
        return {
          ...currentFilters,
          surface: {
            ...currentFilters.surface,
            total: {
              ...currentFilters.surface.total,
              limit: actionObj.newSurface,
            },
          },
        };
      }
    }
    case "envChgd": {
      return {
        ...currentFilters,
        env: actionObj.env,
      };
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