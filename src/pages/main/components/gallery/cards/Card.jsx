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
          link_zonaprop={building.link_zonaprop}
          link_argenprop={building.link_argenprop}
          link_ml={building.link_ml}
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
    image_links: PropTypes.array,
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
    link_ml: PropTypes.shape({
      String : PropTypes.string,
      Valid : PropTypes.bool,
    }),
    link_zonaprop: PropTypes.shape({
      String : PropTypes.string,
      Valid : PropTypes.bool,
    }),
    link_argenprop: PropTypes.shape({
      String : PropTypes.string,
      Valid : PropTypes.bool,
    }),
  } ),
}
/****************************** */

export default Card;
