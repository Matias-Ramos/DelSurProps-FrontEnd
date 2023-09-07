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
// Utils
import { formatCategForAPI } from "../create/utils.js";
const ContainerDeleteBuilding = ({ jwtToken }) => {
  // Variables
  const [category, setCategory] = useState("Categoría");
  const [buildings, setBuildings] = useState({});

  const handleDelete = (buildingId) => {
    const apiCategory = formatCategForAPI(category, "delete");

    deleteData(jwtToken, apiCategory, buildingId.toString()).then(
      (apiAnswer) => {
        if (apiAnswer.status === 200) {
          window.location.reload(true);
        }
      }
    );
  };

  useEffect(() => {
    if (category !== "Categoría") {
      const apiCategory = "/" + formatCategForAPI(category, "delete");
      getData(apiCategory, "").then((buildings) => {
        setBuildings(buildings);
      });
    }
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


          {category !== "Categoría" && (
            <>
              {Object.keys(buildings).length === 0 ? (
                <span>No hay inmuebles registrados en esta categoría.</span>
              ) : (
                <Col
                sm={12}
                md={12}
                lg={9}
                xl={7}
                xxl={6}
                >
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
