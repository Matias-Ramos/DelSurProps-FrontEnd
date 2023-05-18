// Utils
import { improvePriceReadability } from "./utils.js";
// Typechecking
import PropTypes from 'prop-types';
// Icons
import doorIcon from "../../../assets/icons/door-icon.svg";
import bathIcon from "../../../assets/icons/bath-icon.svg";
import bedIcon from "../../../assets/icons/bed-icon.svg";
import garageIcon from "../../../assets/icons/garage-icon.svg";

const CardTxt = ({
  building: {
    ubicacion: location,
    precio: price,
    ambientes: env,
    baños: bathrooms,
    dormitorios: bedrooms,
    garage,
  },
}) => (
  <>
    <div className="locationAndCardPrice">
      <span className="location" tabIndex={0}>
        {location}
      </span>
      <span className="cardPrice" tabIndex={0}>
        ${improvePriceReadability(price)}
      </span>
    </div>
    <hr />
    <ul>
      <li tabIndex={0}>
        <img
          src={doorIcon}
          alt="ícono puerta (representando ambientes)"
          className="characteristicsIcon"
        />
        {parseInt(env) > 1 ? `${env} Ambientes` : "Monoambiente"}
      </li>
      <li tabIndex={0}>
        <img src={bedIcon} alt="ícono cama" className="characteristicsIcon" />
        {bedrooms}
        {parseInt(bedrooms) > 1 ? " Dormitorios" : " Dormitorio"}
      </li>
      <li tabIndex={0}>
        <img src={bathIcon} alt="ícono ducha" className="characteristicsIcon" />
        {bathrooms}
        {parseInt(bathrooms) > 1 ? " Baños" : " Baño"}
      </li>
      <li tabIndex={0}>
        <img
          src={garageIcon}
          alt="ícono garage"
          className="characteristicsIcon"
        />
        {garage}
        {parseInt(garage) > 1 || parseInt(garage) === 0
          ? " Garages"
          : " Garage"}
      </li>
    </ul>
  </>
);

/****************************** */
// TypeChecking
CardTxt.propTypes = {
  building: PropTypes.shape( {
    ubicacion: PropTypes.string,
    precio: PropTypes.number,
    ambientes: PropTypes.number,
    baños: PropTypes.number,
    dormitorios: PropTypes.number,
    garage: PropTypes.number,
  } ),
}
/****************************** */

export default CardTxt;
