import CardImg from "./CardImg.jsx";
import CardTxt from "./CardTxt.jsx";
import CardLinksContainer from "./CardLinksContainer.jsx";
import { Container, Row, Col } from "react-bootstrap";

const Card = ({building}) => {

  return (
    <Container className="Card">
      <Row>
        <Col xs={12} sm={12} md={8} lg={7} xl={7} xxl={7} className="cardPicture p-0">
          <CardImg imgUrl={building.img} />
        </Col>
        <Col xs={12} sm={12} md={4} lg={5} xl={5} xxl={5} className="cardTxt">
          <CardTxt building={building} />
        </Col>
      </Row>
      <Row>
        <Col className="cardColLink p-0">
          <CardLinksContainer linkZP={building.zonaprop} linkAP={building.argenprop} linkML={building.meli} />
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
