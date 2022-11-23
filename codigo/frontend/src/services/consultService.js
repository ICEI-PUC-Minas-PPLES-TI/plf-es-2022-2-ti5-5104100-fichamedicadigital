import { api, requestConfig } from "../utils/config";

const consultRegister = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/consultas", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (error) {
    console.log(error);
  }
};

const consultUpdate = async (data) => {

    const config = requestConfig("PUT", data[1]);
  
    try {
        const res = await fetch(api + "/consultas/"+data[0], config)
          .then((res) => res.json())
          .catch((err) => err);
    
          return res;
    } catch (error) {
        console.log(error);
    }
};

const consultUpdateStatus = async (data) => {

    const config = requestConfig("PUT", data[1]);
  
    try {
        const res = await fetch(api + "/consultas/status/"+data[0], config)
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

const mensageria = async (id) => {
  const config = requestConfig("GET")
  try {
      const res = await fetch(api + "/notificacoes/"+id,config)
          .then((res) =>res.json())
          .catch((err) => err)
    return res
  } catch(error) {
      console.log(error)
  }
}

const mensageriaDelete = async (id) => {

  const config = requestConfig("PUT");

  try {
      const res = await fetch(api + "/notificacoes/"+id, config)
        .then((res) => res.json())
        .catch((err) => err);
  
        return res;
  } catch (error) {
      console.log(error);
  }
};

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
consultDelete,
consultUpdate,
consultUpdateStatus,
mensageria,
mensageriaDelete
};

export default consultService;