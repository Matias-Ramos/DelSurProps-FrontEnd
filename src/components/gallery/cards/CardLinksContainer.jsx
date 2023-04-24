import MLimg from "../../../assets/shop-logos/mercado-libre.svg";
import argenPropimg from "../../../assets/shop-logos/argen-prop.png";
import zonaPropimg from "../../../assets/shop-logos/zona-prop.svg";
import CardLink from "./CardLink.jsx";

const CardLinksContainer = ({ linkZP, linkAP, linkML }) => (
  <div className="cardLinksContainer">
    <CardLink link={linkML} eCommerceName={"Mercado Libre"} img={MLimg} />
    <CardLink link={linkAP} eCommerceName={"ArgenProp"} img={argenPropimg} />
    <CardLink link={linkZP} eCommerceName={"ZonaProp"} img={zonaPropimg} />
  </div>
);

export default CardLinksContainer;
