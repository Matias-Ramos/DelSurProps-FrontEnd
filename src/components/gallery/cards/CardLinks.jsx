import ML from "../../../assets/mercado-libre.svg";
import argenProp from "../../../assets/argen-prop.png";
import zonaProp from "../../../assets/zona-prop.svg";

const CardLinks = ({ linkZP, linkAP, linkML }) => {
  return (
    <div className="cardLinksContainer">
      <img src={ML} alt="logo de MercadoLibre" />
      <div>
        <img src={argenProp} alt="logo de Argen Prop" />
        <span className="argenPropSpan">ArgenProp</span>
      </div>
      <div>
        <img src={zonaProp} alt="logo de Zona Prop" />
        <span>ZonaProp</span>
      </div>
    </div>
  );
};

export default CardLinks;
