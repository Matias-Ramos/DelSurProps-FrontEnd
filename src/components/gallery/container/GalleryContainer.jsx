import Card from "../cards/Card.jsx"
import { cards } from "../../../dummyData.js"
const GalleryContainer = () => {

  return (
    <div id="cardsContainer">
      {cards.map( building => <Card key={building.id} building={...building} /> )}
    </div>
  )
}

export default GalleryContainer