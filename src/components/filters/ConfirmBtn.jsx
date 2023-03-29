import Button from '@mui/material/Button';
const ConfirmBtn = ({handleSubmit}) => {
  return (
    <div>
        <Button style={{"marginTop":"1rem"}} variant="contained" onClick={handleSubmit}>Aplicar filtro</Button>
    </div>
  )
}

export default ConfirmBtn