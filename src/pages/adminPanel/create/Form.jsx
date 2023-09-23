import {
  // BTS
  Button,
  FormBTS,
  // Components
  ImgDinamicInputs,
  LocationInput,
  PriceInput,
  CurrencyInput,
  EnvInput,
  BedroomsInput,
  BathroomsInput,
  GaragesInput,
  CoveredSurfaceInput,
  TotalSurfaceInput,
  StatusInput,
  PublicationLinkInputs,
  Modal,
  // Hooks
  useState,
  // API
  postData,
  // Utils
  formatCategForAPI,
  formatDataForAPI,
  // Typechecking
  PropTypes
} from "./imports.js";

const Form = ({ category, jwtToken }) => {

  // ********************
  // Variables & functions

  const [validatedForm, setValidatedForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    let formData = new FormData(form),
      formDataObj = Object.fromEntries(formData.entries());

    formDataObj = formatDataForAPI(formData, formDataObj);
    const apiCategory = formatCategForAPI(category, "post");

    postData(formDataObj, apiCategory, jwtToken).then(apiAnswer => {
      if (apiAnswer.status === 200){
        console.log("apiAnswer")
        console.log(apiAnswer)
        setValidatedForm(true);
        setShowModal(true);
      } else if (apiAnswer.status === 401){
        // credentials expired
        alert("Refrescar la página para continuar")
      } else {
        alert("Error al cargar los datos - Código de error API: ",apiAnswer.status )
      }
    })
  }; 
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(true);
  }
  const droppdownValueEmprendimiento = "Emprendimiento"
  const droppdownValueAlquiler = "Alquiler inmueble"
  const droppdownValueVenta = "Venta inmueble"
  const dropdownDefaultValue = "Categoría"

  // ********************
  // Rendering

  return (
    <>
      {category != dropdownDefaultValue && (
        <FormBTS noValidate validated={validatedForm} onSubmit={handleSubmit}>
          <LocationInput />
          <PriceInput />
          {category == droppdownValueAlquiler && <CurrencyInput />}
          <EnvInput />
          <BedroomsInput />
          <BathroomsInput />
          <GaragesInput />
          {(category === droppdownValueEmprendimiento || category === droppdownValueVenta) && (
            <>
              <TotalSurfaceInput />
              <CoveredSurfaceInput />
            </>
          )}
          {category === droppdownValueEmprendimiento && <StatusInput />}
          <PublicationLinkInputs />
          {/* Image Links */}
          <ImgDinamicInputs />

          <Button variant="primary" type="submit" size="lg" id="submitForm">
            Confirmar
          </Button>
        </FormBTS>
      )}
      {showModal === true &&
      <Modal showModal={showModal} handleCloseModal={handleCloseModal}/>
      }
    </>
  );
};

/****************************** */
// TypeChecking
Form.propTypes = {
  category: PropTypes.string,
  jwtToken: PropTypes.string,
};
/****************************** */

export default Form;
