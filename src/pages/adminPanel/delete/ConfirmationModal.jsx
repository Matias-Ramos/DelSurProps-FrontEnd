import BtsModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const ConfirmationModal = ({
  show,
  handleClose,
  building,
  confirmDeletion,
}) => (
  <BtsModal show={show} onHide={handleClose} backdropClassName="newBackdrop">
    <BtsModal.Header closeButton>
      <BtsModal.Title>Confirmación</BtsModal.Title>
    </BtsModal.Header>
    <BtsModal.Body>
      Vas a eliminar <b>"{building.location}"</b>
    </BtsModal.Body>
    <BtsModal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="danger" onClick={() => confirmDeletion(building.id)}>
        Eliminar
      </Button>
    </BtsModal.Footer>
  </BtsModal>
);

/****************************** */
// TypeChecking
ConfirmationModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  building: PropTypes.object,
  confirmDeletion: PropTypes.func,
};
/****************************** */

export default ConfirmationModal;
