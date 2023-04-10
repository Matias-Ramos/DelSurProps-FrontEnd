import Card from "../cards/Card"
import { cards } from "./dummyData.js"
const GalleryContainer = () => {

  return (
        cards.map( building => <Card key={building.id} building={...building} /> )
  )
}

export default GalleryContainer