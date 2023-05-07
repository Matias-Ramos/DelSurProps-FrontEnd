// Route
import { BrowserRouter } from "react-router-dom";
import Routing from "./pages/routing/Routing.jsx";
// Css
import "./App.scss";
// Bts
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);

export default App;
