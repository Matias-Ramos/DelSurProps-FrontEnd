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
}) => {
  function improvePriceReadability(value) {
    value = value
      .toLocaleString()
      .replace(",", ".")
      .replace(",", ".")
      .replace(",", ".");
    return value;
  }
  return (
    <>
      <div>
        <h2>{location}</h2>
        <span className="cardPrice">${improvePriceReadability(price)}</span>
      </div>
      <hr />
      <ul>
        <li>
          <img
            src={doorIcon}
            alt="ícono puerta (representando ambientes)"
            className="characteristicsIcon"
          />
          {parseInt(env) > 1 ? `${env} Ambientes` : "Monoambiente"}
        </li>
        <li>
          <img src={bedIcon} alt="ícono cama" className="characteristicsIcon" />
          {bedrooms}
          {parseInt(bedrooms) > 1 ? " Dormitorios" : " Dormitorio"}
        </li>
        <li>
          <img
            src={bathIcon}
            alt="ícono ducha"
            className="characteristicsIcon"
          />
          {bathrooms}
          {parseInt(bathrooms) > 1 ? " Baños" : " Baño"}
        </li>
        <li>
          <img
            src={garageIcon}
            alt="ícono garage"
            className="characteristicsIcon"
          />
          {garage} 
          {parseInt(garage) > 1 || parseInt(garage) === 0 ? " Garages" : " Garage"}
        </li>
      </ul>
    </>
  );
};

export default CardTxt;
