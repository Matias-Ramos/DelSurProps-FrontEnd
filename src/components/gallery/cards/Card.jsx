// Components
import CardImg from "./CardImg.jsx";
import CardTxt from "./CardTxt.jsx";
import CardLinksContainer from "./CardLinksContainer.jsx";
// Grid sys
import { Container, Row, Col } from "react-bootstrap";
// Typechecking
import PropTypes from 'prop-types';

const Card = ({ building }) => (
  <Container fluid className="Card" tabIndex={0}>
    <Row>
      <Col
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={8}
        xxl={7}
        className="cardPicture p-0"
      >
        <CardImg imgUrl={building.img} />
      </Col>
      <Col xs={12} sm={12} md={5} lg={5} xl={4} xxl={5} className="cardTxt">
        <CardTxt building={building} />
        <hr />
        <CardLinksContainer
          linkZP={building.zonaprop}
          linkAP={building.argenprop}
          linkML={building.meli}
        />
      </Col>
    </Row>
  </Container>
);

/****************************** */
// TypeChecking
Card.propTypes = {
  building: PropTypes.shape( {
    id: PropTypes.number.isRequired,
    ubicacion: PropTypes.string,
    precio: PropTypes.number,
    img: PropTypes.string,
    ambientes: PropTypes.number,
    baños: PropTypes.number,
    dormitorios: PropTypes.number,
    garage: PropTypes.number,
    superficieTotal: PropTypes.number,
    superficieCubierta: PropTypes.number,
    tipo: PropTypes.string.isRequired,
    linkML: PropTypes.string,
    linkZonaprop: PropTypes.string,
    linkArgenprop: PropTypes.string,
  } ),
}
/****************************** */

export default Card;
