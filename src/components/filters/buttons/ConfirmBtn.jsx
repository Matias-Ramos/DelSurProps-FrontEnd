import Button from "@mui/material/Button";
const ConfirmBtn = ({ handleSubmit }) => (
  <Button variant="contained" onClick={handleSubmit}>
    Aplicar filtro
  </Button>
);

export default ConfirmBtn;
