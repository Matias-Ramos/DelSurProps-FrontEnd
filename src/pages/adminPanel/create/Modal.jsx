import Button from "react-bootstrap/Button";
import BtsModal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const Modal = ({ showModal, handleCloseModal }) => (
  <BtsModal show={showModal} onHide={handleCloseModal}>
    <BtsModal.Header closeButton>
      <BtsModal.Title>Inmueble creado exitosamente.</BtsModal.Title>
    </BtsModal.Header>
    <BtsModal.Footer>
      <Button variant="primary" onClick={handleCloseModal}>
        Close
      </Button>
    </BtsModal.Footer>
  </BtsModal>
);

/****************************** */
// TypeChecking
Modal.propTypes = {
  showModal: PropTypes.bool,
  handleCloseModal: PropTypes.func,
};
/****************************** */

export default Modal;
