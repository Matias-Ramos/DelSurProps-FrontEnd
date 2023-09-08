import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const ActnBtns = ({ links, addLink, removeInput }) => (
  <div id="linksActnBtns">
    <Button variant="primary" onClick={addLink}>
      +
    </Button>
    <Button
      variant="primary"
      onClick={removeInput}
      disabled={links.length <= 1}
    >
      -
    </Button>
  </div>
);
/****************************** */
// TypeChecking
ActnBtns.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  addLink: PropTypes.func,
  removeInput: PropTypes.func,
};
/****************************** */
export default ActnBtns;
