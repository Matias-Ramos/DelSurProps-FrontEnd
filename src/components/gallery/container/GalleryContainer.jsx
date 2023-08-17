import Card from "../cards/Card.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NoBuildings from "../noBuildings/NoBuildings.jsx";

const GalleryContainer = () => {
  const [data, setData] = useState([]);
  const urlPath = useLocation().pathname;
  const urlQyParams = useLocation().search;
  
  useEffect(() => {
    fetchData();
  }, [urlPath, urlQyParams]);
  
  //API fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(
        ((process.env.NODE_ENV === 'development' && "http://localhost:8080/api") + urlPath + urlQyParams)
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
