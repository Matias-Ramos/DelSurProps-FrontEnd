const formatDataForAPI = (formData, formDataObj) => {
    // saves image array instead of the last value
    const imageLinksArray = formData.getAll("imageLinks");
    formDataObj.image_links = imageLinksArray;
    delete formDataObj.imageLinks;

    // format status according to API
    switch(formDataObj.status){
      case"pozo":
        formDataObj.pozo=true;
        formDataObj.in_progress=false;
        break;
        case"in_progress":
        formDataObj.pozo=false;
        formDataObj.in_progress=true;
      break;
    }
    delete formDataObj.status;
    return formDataObj;
}

const formatCategForAPI = (category) => {
    const categoryMap = {
        "Venta inmueble": "venta_inmueble",
        "Alquiler inmueble": "alquiler_inmueble",
        "Emprendimiento": "emprendimiento",
      };
      const apiCategory = categoryMap[category];
      return apiCategory
}



export {formatCategForAPI, formatDataForAPI};