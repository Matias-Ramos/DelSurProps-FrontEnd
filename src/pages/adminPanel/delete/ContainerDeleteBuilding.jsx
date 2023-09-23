import {
  // BTS
  Container,
  Row,
  Col,
  // Components
  CategDropdown,
  Table,
  // Hooks
  useState,
  // Fetch
  getData,
  deleteData,
  useEffect,
  // Utils
  formatCategForAPI,
  // Typechecking
  PropTypes,
} from "./imports.js";

const ContainerDeleteBuilding = ({ jwtToken }) => {

  // *************************
  // Variables & Functions

  const [category, setCategory] = useState("Categoría");
  const [buildings, setBuildings] = useState({});
  const dropdownDefaultValue = "Categoría"
  const handleDelete = (buildingId) => {
    const apiCategory = formatCategForAPI(category, "delete");
    deleteData(jwtToken, apiCategory, buildingId.toString()).then(
      (apiAnswer) => {
        if(apiAnswer.status === 200)
          window.location.reload(true)
        else
          alert("Error al borrar el inmueble - Código de error API: ",apiAnswer.status )
      }
    );
  };

  useEffect(() => {
    if (category !== dropdownDefaultValue) {
      const apiCategory = "/" + formatCategForAPI(category, "delete");
      getData(apiCategory, "").then((buildings) => {
        setBuildings(buildings||{});
      });
    }
  }, [category]);

  // *************************
  // Rendering

  return (
    <Container>
      <Row className="flex-column align-items-center">
        <Col className="text-center mb-4">
          <CategDropdown
            variant="danger"
            setCategory={setCategory}
            category={category}
          />
        </Col>

        {category !== dropdownDefaultValue && (
          <>
            {Object.keys(buildings).length === 0 ? (
              <span className="noResultsSpan">
                No hay inmuebles registrados en esta categoría.
              </span>
            ) : (
              <Col sm={12} md={12} lg={9} xl={7} xxl={6}>
                <Table buildings={buildings} handleDelete={handleDelete} />
              </Col>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

/****************************** */
// TypeChecking
ContainerDeleteBuilding.propTypes = {
  jwtToken: PropTypes.string
};
/****************************** */

export default ContainerDeleteBuilding;
