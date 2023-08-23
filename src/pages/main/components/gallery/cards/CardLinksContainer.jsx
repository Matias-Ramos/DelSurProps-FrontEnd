// Components
import CardLink from "./CardLink.jsx";
// Hooks
import { useState, useEffect } from "react";
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

const CardLinksContainer = ({ linkZP, linkAP, linkML }) => {

  const [links, setLinks] = useState([]);
  const eCommerceNames = ["Mercado Libre", "ArgenProp", "Zonaprop"];
  const logos = [MLlogo, APlogo, ZPlogo];
  const typographies = [MLtypo, APtypo, ZPtypo];
  useEffect(() => {
    setLinks([linkZP, linkAP, linkML]);
  }, [linkZP, linkAP, linkML]);

  const CardLinks = () => {
    const result = [];
    if(links.length>0){
      for (let i = 0; i <= 2; i++) {
        if (links[i].Valid) {
          result.push(
            <Col
              xs={4}
              sm={3}
              md={4}
              lg={3}
              xl={3}
              xxl={2}
              className={cardsPadding}
              key={i}
            >
              <CardLink
                link={links[i].String}
                eCommerceName={eCommerceNames[i]}
                logo={logos[i]}
                typography={typographies[i]}
              />
            </Col>
          );
        }
      }
    }
    return result;
  };

  return (
    <Container className="cardLinksContainer">
      <Row>
        {links && CardLinks()}
      </Row>
    </Container>
  );
};

/****************************** */
// TypeChecking
CardLinksContainer.propTypes = {
  linkZP: PropTypes.shape({
    String: PropTypes.string,
    Valid: PropTypes.bool,
  }),
  linkAP: PropTypes.shape({
    String: PropTypes.string,
    Valid: PropTypes.bool,
  }),
  linkML: PropTypes.shape({
    String: PropTypes.string,
    Valid: PropTypes.bool,
  }),
};
/****************************** */

export default CardLinksContainer;
