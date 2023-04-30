import Card from "../cards/Card.jsx"
import { cards } from "../../../dummyData.js"
const GalleryContainer = () => {

  return (
      <div id="cardsContainer">
        {cards.map( building => 
        <div key={building.id} className="cardOuterBackground">
          <Card  building={...building} />
          <div className="cardSeparator"></div>
          </div>  
        )}
      </div>
  )
}

export default GalleryContainer