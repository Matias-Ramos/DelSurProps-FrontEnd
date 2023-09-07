// BTS
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// Components
import ContainerCreateBuilding from "./create/ContainerCreateBuilding.jsx";
import ContainerDeleteBuilding from "./delete/ContainerDeleteBuilding.jsx";
import Attribution from "../../components/footer/Attribution.jsx";
import Login from "./login/Login.jsx";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";

const AdminPanel = () => {
  const [isAuthorized, setAuthorization] = useState(false);
  const [jwtToken, setJwtToken] = useState("");
  // currentSection, setCurrentSection


  useEffect(() => {
    const cookies = new Cookies();
    const cookieToken = cookies.get("Token");
    if(cookieToken){
      setAuthorization(true);
      setJwtToken(cookieToken);
    }
  }, []);


  return (
    <>
      {isAuthorized === false ? (
        <Login setAuthorization={setAuthorization} setJwtToken={setJwtToken}/>
      ) : (
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
                <ContainerCreateBuilding jwtToken={jwtToken}/> 
              </Tab>
              <Tab eventKey="deleteTab" title="Baja inmueble">
                <ContainerDeleteBuilding jwtToken={jwtToken}/>
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
      )}
    </>
  );
};

export default AdminPanel;
