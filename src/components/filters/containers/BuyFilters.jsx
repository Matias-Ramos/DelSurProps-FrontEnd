import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
import SliderContainer from "../Slider/SliderContainer.jsx";
import SurfaceFilter from "../surface/SurfaceFilter.jsx";
import { useContext } from "react";
import { queryCtxt } from "../../../context/QyParamsCtxt.jsx";

const BuyFilters = () => {
  const { updateQyParams } = useContext(queryCtxt);
  
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          border: "1px solid blue",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <LocationFilter updateQyParams={updateQyParams} />
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
      <SliderContainer updateQyParams={updateQyParams}/>
      <div
        style={{
          border: "1px solid orange",
          padding: "2rem",
          display: "inline-block",
        }}
      >
        <SurfaceFilter updateQyParams={updateQyParams}/>
      </div>
    </div>
  );
};

export default BuyFilters;
