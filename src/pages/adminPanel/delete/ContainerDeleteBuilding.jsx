// BTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components
import CategDropdown from "../CategDropdown.jsx";
import Table from "./Table.jsx";
// Hooks
import { useState } from "react";
// Fetch
import { getData, deleteData } from "../../../api/fetches.js";
import { useEffect } from "react";

const ContainerDeleteBuilding = ({ jwtToken }) => {

  // Variables
  const [category, setCategory] = useState("Categoría");
  const [buildings, setBuildings] = useState({});
  const handleDelete = (buildingId) => {
    deleteData(jwtToken, category, buildingId).then((apiAnswer) =>
      console.log(apiAnswer)
    );
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const categoryAPImapping = {
      "Alquiler inmueble": "/alquiler_inmuebles",
      "Venta inmueble": "/venta_inmuebles",
      Emprendimiento: "/emprendimientos",
    };

    if (category !== "Categoría") {
      getData(categoryAPImapping[category], "", signal).then((buildings) =>
        setBuildings(buildings)
      );
    }

    return () => {
      abortController.abort();
    };
  }, [category]);

  return (
    <>
      <Container>
        <Row className="flex-column align-items-center">
          <Col className="text-center mb-4">
            <CategDropdown
              variant="danger"
              setCategory={setCategory}
              category={category}
            />
          </Col>
          <Col
            style={{ border: "1px solid #ced4da", padding: 0 }}
            sm={12}
            md={12}
            lg={8}
            xl={7}
            xxl={6}
          ></Col>

          {category !== "Categoría" && (
            <>
              {Object.keys(buildings).length === 0 ? (
                <span>No hay inmuebles registrados en esta categoría.</span>
              ) : (
                <Col>
                  <Table buildings={buildings} handleDelete={handleDelete} />
                </Col>
              )}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default ContainerDeleteBuilding;
