import ML from "../../../assets/shop-logos/mercado-libre.svg";
import argenProp from "../../../assets/shop-logos/argen-prop.png";
import zonaProp from "../../../assets/shop-logos/zona-prop.svg";

const CardLinks = ({ linkZP, linkAP, linkML }) => {
  return (
    <div className="cardLinksContainer">
      <div className="linkDiv">
        <a
          href={linkML}
          className="centerContent"
          aria-label="Link que redirecciona a la publicacion de esta propiedad pero en MercadoLibre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ML} alt="logo de MercadoLibre" />
        </a>
      </div>
      <div className="linkDiv">
        <a
          href={linkAP}
          className="centerContent"
          aria-label="Link que redirecciona a la publicacion de esta propiedad pero en ArgenProp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={argenProp} alt="logo de Argen Prop" />
          <span className="argenPropSpan">ArgenProp</span>
        </a>
      </div>
      <div className="linkDiv">
        <a
          href={linkZP}
          className="centerContent"
          aria-label="Link que redirecciona a la publicacion de esta propiedad pero en ZonaProp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={zonaProp} alt="logo de Zona Prop" />
          <span>ZonaProp</span>
        </a>
      </div>
    </div>
  );
};

export default CardLinks;
