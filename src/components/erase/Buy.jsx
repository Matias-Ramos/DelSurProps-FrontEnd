//Components
import BuyFilters from "../components/filters/Containers/BuyFilters";
import { QyParamsCtxtProvider } from "../context/QyParamsCtxt";
import { useReducer } from 'react';

const Buy = () => {

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
  const [filters, dispatch] = useReducer(filterModifier, filterStructure);

  return (
    <QyParamsCtxtProvider>
      <BuyFilters dispatch={dispatch} filters={filters} />
    </QyParamsCtxtProvider>
  );
};

export default Buy;
