// Components
import Nav from "./Nav.jsx";
import Tabs from "./Tabs.jsx";
import Login from "../login/Login.jsx";
import Footer from "./Footer.jsx";
// Utilities
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";


const AdminPanel = () => {

  /****************************** */
  // Variables & Functions

  const [isAuthorized, setAuthorization] = useState(false);
  const [jwtToken, setJwtToken] = useState("");

  useEffect(() => {
    const cookies = new Cookies();
    const cookieToken = cookies.get("Token");
    if(cookieToken){
      setAuthorization(true);
      setJwtToken(cookieToken);
    }
  }, []);

  /****************************** */
  // Rendering 

  return (
    <>
      {isAuthorized === false ? (
        <Login setAuthorization={setAuthorization} setJwtToken={setJwtToken}/>
      ) : (
        <>
          <div id="adminPanel">
            <Nav />
            <Tabs jwtToken={jwtToken}/>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default AdminPanel;
