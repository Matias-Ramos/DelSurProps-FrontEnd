import {
  // Components
  Container,
  Row,
  Col,
  CredentialsInput,
  PwdAlert,
  // Fetch
  cssLoginContainer,
  cssLoginRow,
  cssLoginColInput,
  cssLoginColAlert,
  // Hooks
  useState,
  // Fetch
  loginCredentials,
  // Cookie mgmt.
  Cookies,
  jwtDecode,
  // Typechecking
  PropTypes,
} from "./imports.js"

const Login = ({ setAuthorization, setJwtToken }) => {

  // *************************
  // Variables & Functions

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

  // *************************
  // Rendering

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

/****************************** */
// TypeChecking
Login.propTypes = {
  setAuthorization: PropTypes.func,
  setJwtToken: PropTypes.func,
};
/****************************** */

export default Login;
