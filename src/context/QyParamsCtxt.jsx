import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

const queryCtxt = createContext();

function QyParamsCtxtProvider({ children }) {
  const [searchQyParams, setSearchParams] = useSearchParams();

  function updateQyParams(name, value) {
    searchQyParams.set(name, value);
    setSearchParams(searchQyParams);
  }
  
  const deleteQyParams = () => {
    // async else only 1 param is removed at a time due to re-rendering.
    async function returnEmptySearchParams() {
      searchQyParams.forEach((_value, key) => {
        searchQyParams.delete(key);
      });
      return searchQyParams;
    }
    setSearchParams(returnEmptySearchParams());
  };
  

  const deleteQyParam = (qyParamName) => {
    searchQyParams.delete(qyParamName);
    setSearchParams(searchQyParams);
  };

  return (
    <queryCtxt.Provider
      value={{
        updateQyParams: updateQyParams,
        deleteQyParams: deleteQyParams,
        deleteQyParam: deleteQyParam,
        searchQyParams: searchQyParams,
      }}
    >
      {children}
    </queryCtxt.Provider>
  );
}
export { queryCtxt, QyParamsCtxtProvider };