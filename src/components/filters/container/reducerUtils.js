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
  buildingStatus: null,
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
  const updatedEdgeValues = (actionObj,currentFilters) => {
    let newEnv = {};
    // triggered by useEffect
    if (actionObj.edge) {
      newEnv = {
        ...currentFilters[actionObj.roomName],
        ...(actionObj.edge === "init"
          ? { init: actionObj.newRoomValue }
          : { limit: actionObj.newRoomValue }),
      };
    }
    // triggered by slider/inputs
    else {
      newEnv = {
        init: parseInt(actionObj.newRoomValue[0]),
        limit: parseInt(actionObj.newRoomValue[1]),
      };
    }
    return newEnv;
  };
  switch (actionObj.type) {
    case "locationChgd": {
      return {
        ...currentFilters,
        location: actionObj.location,
      };
    }
    case "priceChgd": {
      return {
        ...currentFilters,
        price: {
          ...currentFilters.price,
          ...(actionObj.edge === "init"
            ? { init: actionObj.newPrice }
            : { limit: actionObj.newPrice }),
        }
      };
    }
    case "surfaceChgd":{
      return {
        ...currentFilters,
        surface: {
          ...currentFilters.surface,
          [actionObj.surfaceType]: {
            ...currentFilters.surface[actionObj.surfaceType],
            ...(actionObj.edge === "init"
              ? { init: actionObj.newSurface }
              : { limit: actionObj.newSurface }),
          },
        },
      };
    }
    case "envChgd": {
      return {
        ...currentFilters,
        env: {
          ...updatedEdgeValues(actionObj,currentFilters),
        },
      };
    }
    case "garageChgd": {
      return {
        ...currentFilters,
        garage: {
          ...updatedEdgeValues(actionObj,currentFilters),
        },
      };
    }
    case "bathroomChgd": {
      return {
        ...currentFilters,
        bathroom: {
          ...updatedEdgeValues(actionObj,currentFilters),
        },
      };
    }
    case "bedroomChgd": {
      return {
        ...currentFilters,
        bedroom: {
          ...updatedEdgeValues(actionObj,currentFilters),
        },
      };
    }
    case "buildingStatusChgd": {
      return {
        ...currentFilters,
        buildingStatus: actionObj.newStatus,
      };
    }
  }
}
export {filterModifier, filterStructure}