const postData = async (formData, category) => {
  const categoryMap = {
    "Venta inmueble": "venta_inmueble",
    "Alquiler inmueble": "alquiler_inmueble",
    "Emprendimiento": "emprendimiento",
  };
  const apiCategory = categoryMap[category];
  try {
    const apiAnswer = await fetch(
      process.env.NODE_ENV === "development"
        ? `http://localhost:8080/admin/post/${apiCategory}`
        : `/admin/post/${apiCategory}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: JSON.stringify(formData),
      }
    );
    return apiAnswer;
  } catch (error) {
    console.error("Error fetching data (post method):", error);
  }
};

const getData = async (urlPath, urlQyParams) => {
  try {
    const response = await fetch(
      (process.env.NODE_ENV === "development"
        ? "http://localhost:8080/api"
        : "/api") +
        urlPath +
        urlQyParams
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data (get method):", error);
  }
};

export { getData, postData };
