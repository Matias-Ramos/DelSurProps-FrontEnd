import arrow from "../../../assets/icons/arrow.svg";

const EdgeIndicator = ({ edge }) => (
  <div className="edgeIndicator d-md-none d-lg-none d-xl-none d-xxl-none">
    <img src={arrow} alt="ícono flecha" className="arrow" />
    <div id={edge}>{edge}</div>
  </div>
);

export default EdgeIndicator;
