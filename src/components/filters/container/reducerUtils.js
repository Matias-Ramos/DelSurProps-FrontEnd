/*******************/
// env = "ambientes"

const defaultFilterValues = {
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
  buildingStatus: {
    in_progress: true,
    pre_sale: true,
    pozo: true,
  },
  surface: {
    total: {
      init: null,
      limit: null,
    },
    covered: {
      init: null,
      limit: null,
    },
  },
};

function filterModifier(currentFilters, actionObj) {
  const updatedEdgeValues = (actionObj, currentFilters) => {
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
  const updatedBuildingStatus = (actionObj) => {
    let updatedStatus = {};
    switch (actionObj.status) {
      case "pozo": {
        updatedStatus = { pozo: actionObj.isChecked };
        break;
      }
      case "pre_sale": {
        updatedStatus = { pre_sale: actionObj.isChecked };
        break;
      }
      case "in_progress": {
        updatedStatus = { in_progress: actionObj.isChecked };
        break;
      }
      default: {
        console.error(
          "error at reducerUtils.js when updating the buildStatus useReducer."
        );
        break;
      }
    }
    return updatedStatus;
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
        },
      };
    }
    case "surfaceChgd": {
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
          ...updatedEdgeValues(actionObj, currentFilters),
        },
      };
    }
    case "garageChgd": {
      return {
        ...currentFilters,
        garage: {
          ...updatedEdgeValues(actionObj, currentFilters),
        },
      };
    }
    case "bathroomChgd": {
      return {
        ...currentFilters,
        bathroom: {
          ...updatedEdgeValues(actionObj, currentFilters),
        },
      };
    }
    case "bedroomChgd": {
      return {
        ...currentFilters,
        bedroom: {
          ...updatedEdgeValues(actionObj, currentFilters),
        },
      };
    }
    case "buildingStatusChgd": {
      return {
        ...currentFilters,
        buildingStatus: {
          ...currentFilters.buildingStatus,
          ...updatedBuildingStatus(actionObj),
        },
      };
    }
    case "filtersResetted": {
      return { ...defaultFilterValues };
    }
  }
}
export { filterModifier, defaultFilterValues };
