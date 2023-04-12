import Card from "../cards/Card"
import { cards } from "./dummyData.js"
const GalleryContainer = () => {

  return (
    <div>
      {cards.map( building => <Card key={building.id} building={...building} /> )}
    </div>
  )
}

export default GalleryContainer