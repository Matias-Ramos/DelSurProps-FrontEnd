import SliderContainer from "../filters/Slider/SliderContainer.jsx";
import LocationFilter from "../filters/location/LocationFilter.jsx";
import PriceFilter from "../filters/price/PriceFilter.jsx";
import SurfaceFilter from "../filters/surface/SurfaceFilter.jsx";
import BuildStatusFilter from "../filters/BuildStatus/BuildStatusFilter.jsx"

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