import ConfirmBtn from "../ConfirmBtn.jsx";
import Slider from "./Slider.jsx";
const SliderContainer = ({updateQyParams}) => {
  return (
    <>
      <Slider room={"Ambientes"} />
      <Slider room={"Dormitorios"} />
      <Slider room={"Baños"} />
      <Slider room={"Garage"} />
      <ConfirmBtn />
    </>
  );
};

export default SliderContainer;
