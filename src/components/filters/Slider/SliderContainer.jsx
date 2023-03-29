import ConfirmBtn from "../ConfirmBtn.jsx";
import Slider from "./Slider.jsx";
const SliderContainer = ({updateQyParams}) => {
  return (
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
      <ConfirmBtn />
    </div>
  );
};

export default SliderContainer;
