import SliderContainer from "../Slider/SliderContainer.jsx";
import LocationFilter from "../location/LocationFilter.jsx";
import PriceFilter from "../price/PriceFilter.jsx";
import SurfaceFilter from "../surface/SurfaceFilter.jsx";
import BuildStatusFilter from "../BuildStatus/BuildStatusFilter.jsx"

const EntrepreneurshipFilters = () => {
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
    <div
      style={{
        border: "1px solid violet",
        padding: "2rem",
        display: "inline-block",
      }}
    >
      <BuildStatusFilter />
    </div>
      <SliderContainer />
    <div
      style={{
        border: "1px solid orange",
        padding: "2rem",
        display: "inline-block",
      }}
    >
      <SurfaceFilter />
    </div>
  </div>
  )
}

export default EntrepreneurshipFilters