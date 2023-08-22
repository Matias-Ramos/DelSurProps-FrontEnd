// BTS
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// Components
import ContainerCreateBuilding from "./create/ContainerCreateBuilding.jsx";
import DeleteForm from "./delete/DeleteForm.jsx";
import Attribution from "../../components/footer/Attribution.jsx";

function AdminPanel() {
  return (
    <>
      <div id="adminPanel">
        <Nav className="pt-1">
          <Nav.Item>
            <Nav.Link href="/">{"< "}Volver al inicio</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tabs
          className="justify-content-center mb-3"
          defaultActiveKey="createTab"
        >
          <Tab eventKey="createTab" title="Alta inmueble">
            <ContainerCreateBuilding />
          </Tab>
          <Tab eventKey="deleteTab" title="Baja inmueble">
            <DeleteForm />
          </Tab>
        </Tabs>
      </div>
      <footer>
        <Attribution
          role="Developer"
          link="https://www.linkedin.com/in/matias-ramos-computacion/"
          name="Matias Ramos"
        />
      </footer>
    </>
  );
}

export default AdminPanel;
