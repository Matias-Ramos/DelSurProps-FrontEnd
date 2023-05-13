import CardImg from "./CardImg.jsx";
import CardTxt from "./CardTxt.jsx";
import CardLinksContainer from "./CardLinksContainer.jsx";
import { Container, Row, Col } from "react-bootstrap";

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

export default Card;
