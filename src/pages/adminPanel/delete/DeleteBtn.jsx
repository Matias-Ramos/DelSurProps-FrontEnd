// Components
import Button from "react-bootstrap/Button";
import ConfirmationModal from "./ConfirmationModal.jsx";
// Hooks
import { useState } from "react";
// Typechecking
import PropTypes from "prop-types";

const DeleteBtn = ({ handleDelete, building }) => {

  // *********************
  // Variables & Functions

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const confirmDeletion = (buildingId) => {
    handleDelete(buildingId);
    setShow(false);
  };

  // *********************
  // Rendering

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={{ width: "75%" }}>
        Eliminar
      </Button>

      <ConfirmationModal
        show={show}
        handleClose={handleClose}
        building={building}
        confirmDeletion={confirmDeletion}
      />
    </>
  );
};

/****************************** */
// TypeChecking
DeleteBtn.propTypes = {
  handleDelete : PropTypes.func,
  building: PropTypes.object,
};
/****************************** */

export default DeleteBtn;
