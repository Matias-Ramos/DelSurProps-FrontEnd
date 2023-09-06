// Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PwdAlert from "./PwdAlert.jsx"
import CredentialsInput from "./CredentialsInput.jsx";
// Fetch
import { cssLoginContainer, cssLoginRow, cssLoginColInput, cssLoginColAlert } from "./loginUtils.js";
// Hooks
import { useState } from "react";
// Fetch
import { loginCredentials } from "../../../api/fetches";
// Cookie mgmt.
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const Login = ({ setAuthorization, setJwtToken }) => {
  const [pwd, setPwd] = useState("");
  const [showAlert, setShowAlert] = useState(false)
  const submitPwd = async () => {
    try {
      const apiAnswer = await loginCredentials(pwd);

      if (apiAnswer.status === 401){
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 1750);
      }
      else if (apiAnswer.status === 200){
        const jwtToken = await apiAnswer.text();
        const decodedToken = jwtDecode(jwtToken);
        const tokenExpiration = new Date(decodedToken.exp * 1000);
        const cookies = new Cookies();
        cookies.set("Token", jwtToken, {
          expires: new Date(tokenExpiration), // the cookie expires at the same moment as the jwt token.
        });
        setJwtToken(jwtToken)
        setAuthorization(true);
      } else {
        console.error("submitPwd() - apiAnswer.status is not 200 or 401, it is: ", apiAnswer.status)
      }
    } catch (error) {
      console.error("Error on submitPwd(): ", error);
    }
  };

  return (
    <Container style={cssLoginContainer}>
      <Row style={cssLoginRow}>
        <Col style={cssLoginColInput}>
          <CredentialsInput setPwd={setPwd} submitPwd={submitPwd} />
        </Col>
      <Col style={cssLoginColAlert}>
        {showAlert && <PwdAlert />}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
