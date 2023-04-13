import Button from "@mui/material/Button";

const ConfirmBtn = ({
  handleSubmit,
  filters: { in_progress, pre_sale, pozo },
}) => {
  return (
    <Button
      variant="contained"
      onClick={handleSubmit}
      disabled={!in_progress && !pre_sale && !pozo ? true : false}
    >
      Aplicar filtro
    </Button>
  );
};

export default ConfirmBtn;
