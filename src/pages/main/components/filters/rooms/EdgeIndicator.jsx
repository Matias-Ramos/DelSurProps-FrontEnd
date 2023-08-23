// Icon
import arrow from "../../../assets/icons/arrow.svg";
// Typechecking
import PropTypes from 'prop-types';

const EdgeIndicator = ({ edge }) => (
  <div className="edgeIndicator d-md-none d-lg-none d-xl-none d-xxl-none" >
    <img src={arrow} alt="ícono flecha" className="arrow" />
    <div id={edge}>{edge}</div>
  </div>
);

/****************************** */
// TypeChecking
EdgeIndicator.propTypes = {
  edge: PropTypes.string,
}
/****************************** */

export default EdgeIndicator;
