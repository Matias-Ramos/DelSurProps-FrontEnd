// BTS
import BtsTabs from "react-bootstrap/Tabs";
import BtsTab from "react-bootstrap/Tab";
// Components
import ContainerCreateBuilding from "../create/ContainerCreateBuilding.jsx";
import ContainerDeleteBuilding from "../delete/ContainerDeleteBuilding.jsx";
// Typechecking
import PropTypes from "prop-types"

const Tabs = ({ jwtToken }) => (
  <BtsTabs className="justify-content-center mb-3" defaultActiveKey="createTab">
    <BtsTab eventKey="createTab" title="Alta inmueble">
      <ContainerCreateBuilding jwtToken={jwtToken} />
    </BtsTab>
    <BtsTab eventKey="deleteTab" title="Baja inmueble">
      <ContainerDeleteBuilding jwtToken={jwtToken} />
    </BtsTab>
  </BtsTabs>
);

/****************************** */
// TypeChecking
Tabs.propTypes = {
    jwtToken: PropTypes.string
  };
/****************************** */
export default Tabs;
