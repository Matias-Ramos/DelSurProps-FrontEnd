import Card from "../cards/Card.jsx"
import { cards } from "../../../dummyData.js"
import { Container } from "react-bootstrap"
const GalleryContainer = () => {

  return (
    <Container id="cardsContainer">
      {cards.map( building => <Card key={building.id} building={...building} /> )}
    </Container>
  )
}

export default GalleryContainer