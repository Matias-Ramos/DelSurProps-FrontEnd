// Components
import ConfirmBtn from "../buttons/ConfirmBtn.jsx";
import PriceFilter from "./PriceFilter.jsx";
// Typechecking
import PropTypes from 'prop-types';

const PriceContainer = ({
  filterModifiers: { updateQyParams, deleteQyParam, dispatch },
  priceFilter
}) => {

  /****************************** */
  // Functions

  const chgReducerPrice = (newPrice, edge) =>
    dispatch({
      type: `priceChgd`,
      newPrice: newPrice,
      edge: edge,
    });
  const handleChange = (newValue, edge) => {
    const regex = /^[0-9\.]+$/;
    if (newValue === "" || regex.test(newValue)) {
      const cleanNumber = parseInt(
        newValue.replace(".", "").replace(".", "").replace(".", "")
      );
      chgReducerPrice(cleanNumber, edge);
    }
  };
  const handleSubmit = () => {
    for (const edge in priceFilter) {
      priceFilter[edge]
        ? updateQyParams(`price_${edge}`, priceFilter[edge])
        : deleteQyParam(`price_${edge}`);
    }
  };
  const handleClean = () => {
    const edges = ["init", "limit"];
    for (let i = 0; i <= 1; i++) {
      deleteQyParam(`price_${edges[i]}`);
      chgReducerPrice("", edges[i]);
    }
  };
  function improvePriceReadability(value) {
    value = value
      .toLocaleString()
      .replace(",", ".")
      .replace(",", ".")
      .replace(",", ".");
    return value;
  }
  /****************************** */
  // Rendering

  return (
    <div id="priceFilterContainer">
      <div id="priceTextBoxes">
        <PriceFilter
          sxObj={{ input: { color: "#cccccc" }, marginRight: "1rem" }}
          edgeLabel={"Desde"}
          edge={"init"}
          inputPosition={"start"}
          priceFilter={priceFilter}
          handleChange={handleChange}
          improvePriceReadability={improvePriceReadability}
        />
        <PriceFilter
          sxObj={{ input: { color: "#cccccc" } }}
          edgeLabel={"Hasta"}
          edge={"limit"}
          priceFilter={priceFilter}
          handleChange={handleChange}
          improvePriceReadability={improvePriceReadability}
        />
      </div>
      <div className="btnsSubmitClean-Container">
        <ConfirmBtn handleSubmit={handleSubmit} />
        <button className="cleanBtn" onClick={handleClean}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

/****************************** */
// TypeChecking
PriceContainer.propTypes = {
  filterModifiers: PropTypes.shape({
    updateQyParams: PropTypes.func,
    deleteQyParams: PropTypes.func,
    dispatch: PropTypes.func,
  }),
  priceFilter: PropTypes.shape({
    init: PropTypes.oneOfType(
      [PropTypes.number, PropTypes.oneOf([""])]
    ),
    limit: PropTypes.oneOfType(
      [PropTypes.number, PropTypes.oneOf([""])]
    ),
  }),
}
/****************************** */
export default PriceContainer;
