import ConfirmBtn from "../buttons/ConfirmBtn.jsx";
import PriceFilter from "./PriceFilter.jsx";

const PriceContainer = ({
  props: { updateQyParams, deleteQyParam, dispatch, filters },
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
    for (const edge in filters.price) {
      filters.price[edge]
        ? updateQyParams(`price_${edge}`, filters.price[edge])
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
    <div id="priceFilterOuter">
      <div id="priceFilterInner">
        <PriceFilter
          sxObj={{ input: { color: "#cccccc" }, marginRight: "1rem" }}
          edgeLabel={"Desde"}
          edge={"init"}
          inputPosition={"start"}
          filters={filters}
          handleChange={handleChange}
          improvePriceReadability={improvePriceReadability}
        />
        <PriceFilter
          sxObj={{ input: { color: "#cccccc" } }}
          edgeLabel={"Hasta"}
          edge={"limit"}
          filters={filters}
          handleChange={handleChange}
          improvePriceReadability={improvePriceReadability}
        />
      </div>
      <div className="filterSubmClean">
        <ConfirmBtn handleSubmit={handleSubmit} />
        <button className="cleanBtn" onClick={handleClean}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default PriceContainer;
