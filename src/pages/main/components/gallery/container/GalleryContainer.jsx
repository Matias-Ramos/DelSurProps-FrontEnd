import Card from "../cards/Card.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NoBuildings from "../noBuildings/NoBuildings.jsx";
import { getData } from "../../../../../api/fetches.js";

const GalleryContainer = () => {
  const [data, setData] = useState([]);
  const urlPath = useLocation().pathname;
  const urlQyParams = useLocation().search;

  useEffect(() => {
    getData(urlPath, urlQyParams)
    .then(buildings => setData(buildings))
  }, [urlPath, urlQyParams]);

  return (
    <div id="cardsContainer">
      {data ? (
        data.map((building) => (
          <div key={building.id} className="cardOuterBackground">
            <Card building={building} urlPath={urlPath} />
          </div>
        ))
      ) : (
        <NoBuildings />
      )}
    </div>
  );
};

export default GalleryContainer;
