import MLlogo from "../../../assets/shop-logos/mercado-libre-logo.svg";
import MLtypo from "../../../assets/shop-logos/mercado-libre-typography.svg";
import ZPlogo from "../../../assets/shop-logos/zona-prop-logo.svg";
import ZPtypo from "../../../assets/shop-logos/zona-prop-typography.svg";
import APlogo from "../../../assets/shop-logos/argen-prop-logo.svg";
import APtypo from "../../../assets/shop-logos/argen-prop-typography.svg";
import CardLink from "./CardLink.jsx";
import { Container, Row, Col } from "react-bootstrap";

const CardLinksContainer = ({ linkZP, linkAP, linkML }) => {
  const cardsPadding =
    "px-4 px-sm-4 mx-sm-1 px-md-3 mx-md-0 px-lg-2 mx-lg-1 px-xl-3 mx-xl-0 p-xxl-2 mx-xxl-1";
  return (
    <Container className="cardLinksContainer">
      <Row>
        <Col
          xs={4}
          sm={3}
          md={4}
          lg={3}
          xl={3}
          xxl={2}
          className={cardsPadding}
        >
          <CardLink
            link={linkML}
            eCommerceName={"Mercado Libre"}
            logo={MLlogo}
            typography={MLtypo}
          />
        </Col>
        <Col
          xs={4}
          sm={3}
          md={4}
          lg={3}
          xl={3}
          xxl={2}
          className={cardsPadding}
        >
          <CardLink
            link={linkAP}
            eCommerceName={"ArgenProp"}
            logo={APlogo}
            typography={APtypo}
          />
        </Col>
        <Col
          xs={4}
          sm={3}
          md={4}
          lg={3}
          xl={3}
          xxl={2}
          className={cardsPadding}
        >
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
};
export default CardLinksContainer;
