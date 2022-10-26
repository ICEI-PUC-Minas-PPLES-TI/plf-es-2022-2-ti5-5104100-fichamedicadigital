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


const userService = {
userRegister,
userFindAll,
};

export default userService;