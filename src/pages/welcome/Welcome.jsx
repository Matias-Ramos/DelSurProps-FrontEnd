import NavBtns from "../../components/navbar/btns-desktop/NavBtns.jsx";
import BlobContainer from "./blobs/BlobContainer.jsx";
const Welcome = () => {
  return (
    <div id="welcome">
      <BlobContainer/>
      <span id="brand">DelSurProps</span>
      <div id="welcomeTxt">
        <span>Bienvenid@</span>
        <span id="preg">¿Qué estás buscando?</span>
        <NavBtns />
      </div>
    </div>
  );
};

export default Welcome;
