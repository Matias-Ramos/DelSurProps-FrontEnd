import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BtsModal from 'react-bootstrap/Modal';

function Modal({building, handleDelete}) {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const confirmDeletion = () => {
    handleDelete(building.id)
    setShow(false);
  }
  
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Eliminar
      </Button>

      <BtsModal show={show} onHide={handleClose}>
        <BtsModal.Header closeButton>
          <BtsModal.Title>Confirmación</BtsModal.Title>
        </BtsModal.Header>
        <BtsModal.Body>Vas a eliminar <b>"{building.location}"</b></BtsModal.Body>
        <BtsModal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDeletion}>
            Eliminar
          </Button>
        </BtsModal.Footer>
      </BtsModal>
    </>
  );
}

export default Modal;