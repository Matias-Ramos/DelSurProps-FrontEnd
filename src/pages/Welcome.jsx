import NavBtns from '../components/navbar/btns-desktop/NavBtns.jsx';
import Select from '../components/navbar/select-mobile/Select.jsx'
import {useRef} from 'react';
const Welcome = () => {
  const windowWidth = useRef(window.innerWidth);
  return (
    <>
      <span>Bienvenid@</span>
      <span>¿Qué estás buscando?</span>
      {windowWidth.current>=768?<NavBtns />:<Select />}
    </>
  );
};

export default Welcome;
