import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

const CardCarousel = ({ images }) => (
  <div className="carousels"
    style={{ maxHeight: "350px", overflow: "hidden", margin: "auto" }}
  >
    <Carousel slide={false} style={{position: "static"}}>
      {images.map((img, i) => (
        <Carousel.Item key={i}>
          <img
            src={img}
            alt={"Imagen de propiedad " + i}
            style={{ objectFit: "contain", width: "100%", height: "350px" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

/****************************** */
// TypeChecking
CardCarousel.propTypes = {
  images: PropTypes.array,
};
/****************************** */

export default CardCarousel;
