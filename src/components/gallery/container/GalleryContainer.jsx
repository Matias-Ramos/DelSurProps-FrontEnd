import Card from "../cards/Card.jsx";

//import { data } from "../../../dummyData.js";
import { useState, useEffect } from "react";

const GalleryContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/Emprendimientos");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("test");
    console.log(data);
  }, [data]);

  <div id="cardsContainer">
    {data.map((building) => (
      <div key={building.id} className="cardOuterBackground">
        <Card building={building} />
      </div>
    ))}
  </div>;
};

export default GalleryContainer;
