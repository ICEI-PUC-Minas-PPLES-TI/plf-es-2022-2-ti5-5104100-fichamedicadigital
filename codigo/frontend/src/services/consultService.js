import { api, requestConfig } from "../utils/config";

const consultRegister = async (data) => {
  const config = requestConfig("POST", data);
console.log(config.body)
  try {
    const res = await fetch(api + "/consultas", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (error) {
    console.log(error);
  }
};

const consultFindById = async (id) => {
  const config = requestConfig("GET")
  try {
      const res = await fetch(api + "/consultas/usuario/"+id,config)
          .then((res) =>res.json())
          .catch((err) => err)
    return res
  } catch(error) {
      console.log(error)
  }
}

const consultDelete = async (id) => {
    const config = requestConfig("DELETE")

    try {
        const res = await fetch(api + "/consultas/"+id,config)
            .then((res) =>res.json())
            .catch((err) => err)
      return res
    } catch(error) {
        console.log(error)
    }
  }


const consultService = {
consultRegister,
consultFindById,
consultDelete
};

export default consultService;