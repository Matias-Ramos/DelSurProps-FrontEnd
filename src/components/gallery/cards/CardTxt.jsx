// Utils
import { improvePriceReadability } from "./utils.js";
// Typechecking
import PropTypes from "prop-types";
// Icons
import doorIcon from "../../../assets/icons/door-icon.svg";
import bathIcon from "../../../assets/icons/bath-icon.svg";
import bedIcon from "../../../assets/icons/bed-icon.svg";
import garageIcon from "../../../assets/icons/garage-icon.svg";
import coveredSurfaceIcon from "../../../assets/icons/covered_surface.svg";
import totalSurfaceIcon from "../../../assets/icons/total_surface.svg";

const CardTxt = ({
  urlPath,
  building: {
    location = "",
    price,
    env: { Int16: env },
    bathrooms: { Int16: bathrooms },
    bedrooms: { Int16: bedrooms },
    garages: { Int16: garages },
    covered_surface: { Int16: coveredSurface } = { Int16: null }, // default value in case such prop is not provided
    total_surface: { Int16: totalSurface } = { Int16: null },
    pozo,
    in_progress: inProgress,
  },
}) => {
  const formatLocation = (location) => {
    const commaIndex = location.indexOf(",");
    if (commaIndex !== -1) {
      const firstPart = location.substring(0, commaIndex);
      const secondPart = location.substring(commaIndex + 1);
      return (
        <>
          {firstPart}
          <br />
          {secondPart}
        </>
      );
    } else {
      return location;
    }
  };
  const formattedLocation = formatLocation(location);

  return (
    <>
      <div className="locationAndCardPrice">
        <span className="location" tabIndex={0}>
          {formattedLocation}
        </span>
        <span className="cardPrice" tabIndex={0}>
          {urlPath == "/venta-inmuebles" || urlPath == "/emprendimientos"
            ? "US$"
            : "AR$"}
          {improvePriceReadability(price)}
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
          {bedrooms || "?"}
          {parseInt(bedrooms) > 1 ? " Dormitorios" : " Dormitorio"}
        </li>
        <li tabIndex={0}>
          <img
            src={bathIcon}
            alt="ícono ducha"
            className="characteristicsIcon"
          />
          {bathrooms || "?"}
          {parseInt(bathrooms) > 1 ? " Baños" : " Baño"}
        </li>
        <li tabIndex={0}>
          <img
            src={garageIcon}
            alt="ícono garage"
            className="characteristicsIcon"
          />
          {garages || "?"}
          {parseInt(garages) > 1 || parseInt(garages) === 0
            ? " Garages"
            : " Garage"}
        </li>
        {totalSurface && (
          <li tabIndex={0}>
            <img
              src={totalSurfaceIcon}
              alt="ícono de la superficie total"
              className="characteristicsIcon"
            />
            {totalSurface + "mts. " || "?"}
            totales
          </li>
        )}
        {coveredSurface && (
          <li tabIndex={0}>
            <img
              src={coveredSurfaceIcon}
              alt="ícono de la superficie cubierta"
              className="characteristicsIcon"
            />
            {coveredSurface + "mts. " || "?"}
            cubiertos
          </li>
        )}
        {pozo && <li className="buildingStatusLi">[En pozo]</li>}
        {inProgress && <li className="buildingStatusLi">[En construcción]</li>}
      </ul>
    </>
  );
};

/****************************** */
// TypeChecking
CardTxt.propTypes = {
  building: PropTypes.shape({
    price: PropTypes.number,
    location: PropTypes.string,
    env: PropTypes.shape({
      Int16: PropTypes.number,
      Valid: PropTypes.bool,
    }),
    bathrooms: PropTypes.shape({
      Int16: PropTypes.number,
      Valid: PropTypes.bool,
    }),
    bedrooms: PropTypes.shape({
      Int16: PropTypes.number,
      Valid: PropTypes.bool,
    }),
    garages: PropTypes.shape({
      Int16: PropTypes.number,
      Valid: PropTypes.bool,
    }),
  }),
};
/****************************** */

export default CardTxt;
