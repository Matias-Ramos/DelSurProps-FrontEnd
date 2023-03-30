const filterStructure = {location: null}
function filterModifier(currentFilters, actionObj) {
  switch (actionObj.type) {
    case 'locationChgd': {
      return {
          ...currentFilters,
          location: actionObj.location
      }
    }
  }
}
export {filterModifier, filterStructure}