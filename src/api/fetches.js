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

const postData = async (formData, category, jwtToken) => {
  try {
    const apiAnswer = await fetch(
      process.env.NODE_ENV === "development"
        ? `http://localhost:8080/admin/post/${category}`
        : `/admin/post/${category}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Authentication": jwtToken
        },
        body: JSON.stringify(formData),
      }
    );
    return apiAnswer;
  } catch (error) {
    console.error("Error fetching data (post method):", error);
  }
};

const deleteData = async (jwtToken, category, buildingId) => {
  try {
    const apiAnswer = await fetch(
      process.env.NODE_ENV === "development"
      ? `http://localhost:8080/admin/delete/${category}`
      : `/admin/delete/${category}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Authentication": jwtToken
        },
        body: JSON.stringify({"buildingId": buildingId})
      }
    )
    return apiAnswer;
  } catch (error) {
    console.error("Error fetching data in loginCredentials: ", error);
  }
};

const loginCredentials = async (pwd) => {
  try {
    const apiAnswer = await fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080/admin/jwt"
        : "/admin/jwt",
      {
        method: "POST",
        body: JSON.stringify({"Access": pwd})
      }
    )
    return apiAnswer;
  } catch (error) {
    console.error("Error fetching data in loginCredentials: ", error);
  }
};

export { getData, postData, loginCredentials, deleteData};
