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
        setValidatedForm(true);
        setShowModal(true);
      } else if (apiAnswer.status === 401){
        // credentials expired
        alert("Refrescar la página para continuar")
      }
    })
  }; 
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(true);
  }

  // ********************
  // Rendering

  return (
    <>
      {category != "Categoría" && (
        <FormBTS noValidate validated={validatedForm} onSubmit={handleSubmit}>
          <LocationInput />
          <PriceInput />
          {category == "Alquiler inmueble" && <CurrencyInput />}
          <EnvInput />
          <BedroomsInput />
          <BathroomsInput />
          <GaragesInput />
          {(category === "Emprendimiento" || category === "Venta inmueble") && (
            <>
              <TotalSurfaceInput />
              <CoveredSurfaceInput />
            </>
          )}
          {category === "Emprendimiento" && <StatusInput />}
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
