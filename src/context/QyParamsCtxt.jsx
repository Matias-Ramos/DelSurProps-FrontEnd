import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

const queryCtxt = createContext();

function QyParamsCtxtProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function updateQyParams(name, value) {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  }
  
  const deleteQyParams = () => {
    // async else only 1 param is removed at a time due to re-rendering.
    async function returnEmptySearchParams() {
      searchParams.forEach((_value, key) => {
        searchParams.delete(key);
      });
      return searchParams;
    }
    setSearchParams(returnEmptySearchParams());
  };
  

  const deleteQyParam = (qyParamName) => {
    searchParams.delete(qyParamName);
    setSearchParams(searchParams);
  };

  return (
    <queryCtxt.Provider
      value={{
        updateQyParams: updateQyParams,
        deleteQyParams: deleteQyParams,
        deleteQyParam: deleteQyParam,
        searchParams: searchParams,
      }}
    >
      {children}
    </queryCtxt.Provider>
  );
}
export { queryCtxt, QyParamsCtxtProvider };