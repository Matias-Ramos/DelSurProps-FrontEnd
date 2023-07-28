import Card from "../cards/Card.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GalleryContainer = () => {

  const [data, setData] = useState([]);
  const urlPath = useLocation().pathname;
  useEffect(() => {
    fetchData();
  }, [urlPath]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080" + urlPath);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return(
  <div id="cardsContainer">
    {data.map((building) => (
      <div key={building.id} className="cardOuterBackground">
        <Card building={building} />
      </div>
    ))}
  </div>
  )
};

export default GalleryContainer;
