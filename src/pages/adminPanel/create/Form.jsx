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
} from "./imports.js";

const Form = ({ category, jwtToken }) => {
  const [validatedForm, setValidatedForm] = useState(false);

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
      }
    })
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(true);
  }
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

export default Form;
