import NavBtnsContainer from "../btns/NavBtnsContainer.jsx";

const MainNavbarContainer = () => {
  return (
    <>
      <NavBtnsContainer />
      <span style={{zIndex:2, backgroundColor:"white"}}>DelSurProps</span>
      <div id="hr"></div>
    </>
  );
};

export default MainNavbarContainer;
