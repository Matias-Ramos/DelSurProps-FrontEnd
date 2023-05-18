// Component
import Button from "@mui/material/Button";
// Typechecking
import PropTypes from 'prop-types';

const ConfirmBtn = ({ handleSubmit }) => (
  <Button variant="contained" onClick={handleSubmit}>
    Aplicar filtro
  </Button>
);

/****************************** */
// TypeChecking
ConfirmBtn.propTypes = {
  handleSubmit: PropTypes.func,
}
/****************************** */

export default ConfirmBtn;
