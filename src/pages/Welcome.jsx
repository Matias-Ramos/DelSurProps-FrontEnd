import NavBtns from "../components/navbar/btns-desktop/NavBtns.jsx";
const Welcome = () => {
  return (
    <div id="welcome">
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
