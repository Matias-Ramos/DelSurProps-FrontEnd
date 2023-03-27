import Slider from "../components/filters/Slider/Slider.jsx";
import LocationFilter from "../components/filters/location/LocationFilter.jsx";
import PriceFilter from "../components/filters/price/PriceFilter.jsx";

const Rent = () => {
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
    </div>
  );
};

export default Rent;
