// Components
import CardLink from "./CardLink.jsx";
// Grid sys
import { Container, Row, Col } from "react-bootstrap";
// Typechecking
import PropTypes from "prop-types";
// Utils
import { cardsPadding } from "./utils.js";
// Icons
import MLlogo from "../../../assets/shop-logos/mercado-libre-logo.svg";
import MLtypo from "../../../assets/shop-logos/mercado-libre-typography.svg";
import ZPlogo from "../../../assets/shop-logos/zona-prop-logo.svg";
import ZPtypo from "../../../assets/shop-logos/zona-prop-typography.svg";
import APlogo from "../../../assets/shop-logos/argen-prop-logo.svg";
import APtypo from "../../../assets/shop-logos/argen-prop-typography.svg";

const CardLinksContainer = ({ linkZP, linkAP, linkML }) => (
  <Container className="cardLinksContainer">
    <Row>
      <Col xs={4} sm={3} md={4} lg={3} xl={3} xxl={2} className={cardsPadding}>
        <CardLink
          link={linkML}
          eCommerceName={"Mercado Libre"}
          logo={MLlogo}
          typography={MLtypo}
        />
      </Col>
      <Col xs={4} sm={3} md={4} lg={3} xl={3} xxl={2} className={cardsPadding}>
        <CardLink
          link={linkAP}
          eCommerceName={"ArgenProp"}
          logo={APlogo}
          typography={APtypo}
        />
      </Col>
      <Col xs={4} sm={3} md={4} lg={3} xl={3} xxl={2} className={cardsPadding}>
        <CardLink
          link={linkZP}
          eCommerceName={"ZonaProp"}
          logo={ZPlogo}
          typography={ZPtypo}
        />
      </Col>
    </Row>
  </Container>
);

/****************************** */
// TypeChecking
CardLinksContainer.propTypes = {
  linkZP: PropTypes.string,
  linkAP: PropTypes.string,
  linkML: PropTypes.string,
};
/****************************** */

export default CardLinksContainer;
