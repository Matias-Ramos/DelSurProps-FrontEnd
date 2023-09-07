const getData = async (urlPath, urlQyParams, signal) => {
  try {
    const response = await fetch(
      (process.env.NODE_ENV === "development"
        ? "http://localhost:8080/api"
        : "/api") +
        urlPath +
        urlQyParams,
        {signal}
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted due to component unmount');
    } else {
      console.error("Error fetching data (get method):", error);
    }
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


const loginCredentials = async (pwd) => {
  try {
    const apiAnswer = await fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080/admin/jwt"
        : "/admin/jwt/",
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

const deleteData = async (token, category, buildingId) => {
  try {
    const apiAnswer = await fetch(
      process.env.NODE_ENV === "development"
      ? `http://localhost:8080/admin/delete/${category}`
      : `/admin/delete/${category}`,
      {
        method: "DELETE",
        body: JSON.stringify({"buildingId": buildingId})
      }
    )
    return apiAnswer;
  } catch (error) {
    console.error("Error fetching data in loginCredentials: ", error);
  }
};


export { getData, postData, loginCredentials, deleteData};
