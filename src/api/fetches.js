const postData = async (formData) => {
  try {
    const apiAnswer = await fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080/admin/post"
        : "/admin/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: formData,
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
