import { api, requestConfig } from "../utils/config";

const userRegister = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/usuarios", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (error) {
    console.log(error);
  }
};

const userUpdate = async (data) => {
    const config = requestConfig("PUT", data);
    try {
      const res = await fetch(api + "/usuarios/5", config)
        .then((res) => res.json())
        .catch((err) => err);
  
        return res;
    } catch (error) {
      console.log(error);
    }
  };

const userFindAll = async () => {
    const config = requestConfig("GET")
    try {
        const res = await fetch(api + "/usuarios",config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}


const userDelete = async (id) => {
  const config = requestConfig("DELETE")

  try {
      const res = await fetch(api + "/usuarios/"+id,config)
          .then((res) => res.json())
          .catch((err) => err)

      return res
  } catch (error) {
      console.log(error)
  }
}

const userService = {
userRegister,
userFindAll,
userDelete,
userUpdate
};

export default userService;