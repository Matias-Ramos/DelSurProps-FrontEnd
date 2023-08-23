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
    // Hooks
    useState
} from "./imports.js";

const Form = ({ category }) => {
  const [validated, setValidated] = useState(false);

  const sendData = async (formData) => {
    const res = await fetch("http://localhost:8080/admin/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: formData,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(form),
      formDataObj = Object.fromEntries(formData.entries());

    // saves array instead of the last value
    const imageLinksArray = formData.getAll("imageLinks");
    formDataObj.imagesInputs = imageLinksArray;
    console.log(formDataObj);
    sendData(formDataObj);
    setValidated(true);
  };

  return (
    <>
      {category != "Categoría" && (
        <FormBTS noValidate validated={validated} onSubmit={handleSubmit}>
          <LocationInput />
          <PriceInput />
          {category == "Alquiler inmueble" && <CurrencyInput />}
          <EnvInput />
          <BedroomsInput />
          <BathroomsInput />
          <GaragesInput />
          {category === "Emprendimiento" || category === "Venta inmueble" && (
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
    </>
  );
};

export default Form;
