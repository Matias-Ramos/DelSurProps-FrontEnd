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
    total: null,
    covered: null
  },
  //env="ambientes"
  env: null,
}
function filterModifier(currentFilters, actionObj) {
  switch (actionObj.type) {
    case 'locationChgd': {
      return {
          ...currentFilters,
          location: actionObj.location
      }
    }
    case 'initPriceChgd': {
      return {
          ...currentFilters,
          price: { ...currentFilters.price,init:actionObj.newPrice }
      }
    }
    case 'limitPriceChgd': {
      return {
          ...currentFilters,
          price: { ...currentFilters.price,limit:actionObj.newPrice }
      }
    }
    // case 'totalSurfaceChgd': {
    //   return {
    //       ...currentFilters,
    //       surface.total: actionObj.surface.total
    //   }
    // }
    // case 'coveredSurfaceChgd': {
    //   return {
    //       ...currentFilters,
    //       surface.covered: actionObj.surface.covered
    //   }
    // }
    case 'envChgd': {
      return {
          ...currentFilters,
          env: actionObj.env
      }
    }
    case 'garageChgd': {
      return {
          ...currentFilters,
          garage: actionObj.garage
      }
    }
    case 'bathrChgd': {
      return {
          ...currentFilters,
          bathr: actionObj.bathr
      }
    }
    case 'bedrChgd': {
      return {
          ...currentFilters,
          bedr: actionObj.bedr
      }
    }
    case 'buildStatusChgd': {
      return {
          ...currentFilters,
          buildStatus: actionObj.buildStatus
      }
    }
  }
}
export {filterModifier, filterStructure}