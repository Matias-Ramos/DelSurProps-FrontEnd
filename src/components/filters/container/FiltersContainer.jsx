import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
import SliderContainer from "../Slider/SliderContainer.jsx";
import SurfaceFilter from "../surface/SurfaceFilter.jsx";
import { useContext, useReducer } from "react";
import { queryCtxt } from "../../../context/QyParamsCtxt.jsx";
import { filterModifier, filterStructure } from "./reducerUtils.js";

const FiltersContainer = () => {
  const { searchParams, updateQyParams, deleteQyParams } = useContext(queryCtxt);
  const [filters, dispatch] = useReducer(filterModifier, filterStructure);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          border: "1px solid blue",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <LocationFilter
          updateQyParams={updateQyParams}
          deleteQyParams={deleteQyParams}
          dispatch={dispatch}
          filters={filters}
          locationQyParams={searchParams.get("location")}
        />
      </div>
      <div
        style={{
          border: "1px solid green",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <PriceFilter updateQyParams={updateQyParams} />
      </div>
      <SliderContainer updateQyParams={updateQyParams} />
      <div
        style={{
          border: "1px solid orange",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <SurfaceFilter updateQyParams={updateQyParams} />
      </div>
    </div>
  );
};

export default FiltersContainer;
