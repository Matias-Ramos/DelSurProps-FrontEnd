// Component
import Button from "@mui/material/Button";
// Typechecking
import PropTypes from "prop-types";

const ConfirmBtn = ({
  handleSubmit,
  buildingStatusFilter: { in_progress, pre_sale, pozo },
}) => (
  <Button
    variant="contained"
    onClick={handleSubmit}
    disabled={!in_progress && !pre_sale && !pozo ? true : false}
  >
    Aplicar filtro
  </Button>
);

/****************************** */
// TypeChecking
ConfirmBtn.propTypes = {
  handleSubmit: PropTypes.func,
  buildingStatusFilter: PropTypes.shape({
    in_progress: PropTypes.bool,
    pre_sale: PropTypes.bool,
    pozo: PropTypes.bool,
  }),
};
/****************************** */
export default ConfirmBtn;
