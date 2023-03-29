import SliderContainer from "../Slider/SliderContainer.jsx";
import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";

const RentFilters = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
<div
  style={{
    border: "1px solid blue",
    padding: "2rem",
    display: "inline-block",
  }}
>
  <LocationFilter />
</div>
<div
  style={{
    border: "1px solid green",
    padding: "2rem",
    display: "inline-block",
  }}
>
  <PriceFilter />
</div>
<SliderContainer />
</div>
  )
}

export default RentFilters