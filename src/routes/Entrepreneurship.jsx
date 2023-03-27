import Slider from "../components/filters/Slider/Slider.jsx";
import LocationFilter from "../components/filters/location/LocationFilter.jsx";
import PriceFilter from "../components/filters/price/PriceFilter.jsx";
import SurfaceFilter from "../components/filters/surface/SurfaceFilter.jsx";
import EntrStatusFilter from "../components/filters/EntrStatus/EntrStatusFilter.jsx"

const Entrepreneurship = () => {
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
        border: "1px solid black",
        padding: "2rem",
        display: "inline-block",
      }}
    >
      <Slider room={"Ambientes"} />
      <Slider room={"Dormitorios"} />
      <Slider room={"Baños"} />
      <Slider room={"Garage"} />
    </div>
    <div
      style={{
        border: "1px solid orange",
        padding: "2rem",
        display: "inline-block",
      }}
    >
      <SurfaceFilter />
    </div>
    <div
      style={{
        border: "1px solid violet",
        padding: "2rem",
        display: "inline-block",
      }}
    >
    <EntrStatusFilter />
    </div>
  </div>
  )
}

export default Entrepreneurship