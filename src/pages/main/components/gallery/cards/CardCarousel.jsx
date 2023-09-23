import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

const CardCarousel = ({ image_links }) => (
  <div className="carouselContainer">
    <Carousel slide={false} className="btsCarousel" style={{position: "static"}}>
      {image_links.map((link, i) => (
        <Carousel.Item key={i}>
          <img
            src={link}
            alt={"Imagen de propiedad " + i}
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
