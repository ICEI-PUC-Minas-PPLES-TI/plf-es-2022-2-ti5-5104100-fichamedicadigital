export const api = "https://fichamedicadigital.herokuapp.com";

export const requestConfig = (method, data, token = null) => {

    let config;
    var credentials = btoa("fichamedicadigital:fichamedicadigital123");

    if (method === "DELETE" || data === null) {
        config = {
            method: method,
            headers: {},
        }
    } else if (method === 'PUT') {
        config = {
            method: method,
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors"
          };

    } else {
        config = {
          method: method,
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          }
        };
      }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};