import PropTypes from "prop-types";

const CardImg = ({ imgUrl }) => <img src={imgUrl} alt="Imagen vivienda" />;

/****************************** */
// TypeChecking
CardImg.propTypes = {
  imgUrl: PropTypes.string,
};
/****************************** */

export default CardImg;
