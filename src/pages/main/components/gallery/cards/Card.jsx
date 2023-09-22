// Components
import CardCarousel from "./CardCarousel.jsx";
import CardTxt from "./CardTxt.jsx";
import CardLinksContainer from "./CardLinksContainer.jsx";
// Grid sys
import { Container, Row, Col } from "react-bootstrap";
// Typechecking
import PropTypes from 'prop-types';

const Card = ({ building, urlPath }) => {
  return(
  <Container fluid className="Card" tabIndex={0}>
    <Row>
      <Col
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={8}
        xxl={7}
        className="cardPicture"
      >
        <CardCarousel image_links={building.image_links} />
      </Col>
      <Col xs={12} sm={12} md={5} lg={5} xl={4} xxl={5} className="cardTxt">
        <CardTxt building={building} urlPath={urlPath} />
        <hr />
        <CardLinksContainer
          linkZP={building.link_zonaprop}
          linkAP={building.link_argenprop}
          linkML={building.link_ml}
        />
      </Col>
    </Row>
  </Container>
  )
}
;

/****************************** */
// TypeChecking
Card.propTypes = {
  building: PropTypes.shape( {
    id: PropTypes.number.isRequired,
    location: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.array,
    currency: PropTypes.string,
    env: PropTypes.shape({
      Int16 : PropTypes.number,
      Valid : PropTypes.bool,
    }),
    bathrooms: PropTypes.shape({
      Int16 : PropTypes.number,
      Valid : PropTypes.bool,
    }),
    bedrooms: PropTypes.shape({
      Int16 : PropTypes.number,
      Valid : PropTypes.bool,
    }),
    garages: PropTypes.shape({
      Int16 : PropTypes.number,
      Valid : PropTypes.bool,
    }),
    total_surface: PropTypes.shape({
      Int16 : PropTypes.number,
      Valid : PropTypes.bool,
    }),
    covered_surface: PropTypes.shape({
      Int16 : PropTypes.number,
      Valid : PropTypes.bool,
    }),
    linkML: PropTypes.shape({
      String : PropTypes.string,
      Valid : PropTypes.bool,
    }),
    linkZonaprop: PropTypes.shape({
      String : PropTypes.string,
      Valid : PropTypes.bool,
    }),
    linkArgenprop: PropTypes.shape({
      String : PropTypes.string,
      Valid : PropTypes.bool,
    }),
  } ),
}
/****************************** */

export default Card;
