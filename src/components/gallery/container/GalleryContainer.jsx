import Card from "../cards/Card.jsx";
import { data } from "../../../dummyData.js";
const GalleryContainer = () => (
  <div id="cardsContainer">
    {data.map((building) => (
      <div key={building.id} className="cardOuterBackground">
        <Card building={building} />
      </div>
    ))}
  </div>
);

export default GalleryContainer;
