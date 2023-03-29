import { useReducer } from 'react';
import { createContext } from "react";
const reducerCtxt = createContext();

function ReducerCtxtProvider({ children }) {
    function handleChgLocation(newLocation) {
        dispatch({
          type: 'locationChgd',
          location: newLocation,
        });
      }

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
    const filterStructure = {
        location: null,
        // price: null,
        // garage:null,
        // bathr:null,
        // bedr:null,
        // buildStatus:null,
        // env:null, //environment="ambientes"
        // surface:{
        //     total:null,
        //     covered:null
        // }
    }
    const [filters, dispatch] = useReducer(filterModifier, filterStructure);
    return (
        <reducerCtxt.Provider
          value={{
            handleChgLocation: handleChgLocation,
            filters:filters
          }}
        >
          {children}
        </reducerCtxt.Provider>
      );
}



export default ReducerCtxtProvider