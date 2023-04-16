import doorIcon from "../../../assets/icons/door-icon.svg";
import bathIcon from "../../../assets/icons/bath-icon.svg";
import bedIcon from "../../../assets/icons/bed-icon.svg";
import garageIcon from "../../../assets/icons/garage-icon.svg";

const CardTxt = ({
  building: { ubicacion, precio, ambientes, baños, dormitorios, garage },
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
        <h2>{ubicacion}</h2>
        <span className="cardPrice">${improvePriceReadability(precio)}</span>
      </div>
      <hr />
      <ul>
        <li>
          <img
            src={doorIcon}
            alt="ícono puerta (representando ambientes)"
            className="characteristicsIcon"
          />
          {parseInt(ambientes) > 1 ? `${ambientes} Ambientes` : "Monoambiente"}
        </li>
        <li>
          <img src={bedIcon} alt="ícono cama" className="characteristicsIcon" />
          {dormitorios} 
          {parseInt(dormitorios)>1 ? " Dormitorios":" Dormitorio"}
        </li>
        <li>
          <img
            src={bathIcon}
            alt="ícono ducha"
            className="characteristicsIcon"
          />
          {baños}
          {parseInt(baños)>1 ? " Baños":" Baño"}
        </li>
        <li>
          <img
            src={garageIcon}
            alt="ícono garage"
            className="characteristicsIcon"
          />
          {garage} Garage
        </li>
      </ul>
    </>
  );
};

export default CardTxt;
