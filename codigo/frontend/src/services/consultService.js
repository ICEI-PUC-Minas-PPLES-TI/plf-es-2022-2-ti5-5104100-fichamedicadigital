import { api, requestConfig } from "../utils/config";

const consultRegister = async (data) => {
  const config = requestConfig("POST", data);

  console.log(config.body)

//   try {
//     const res = await fetch(api + "/consultas", config)
//       .then((res) => res.json())
//       .catch((err) => err);

//       return res;
//   } catch (error) {
//     console.log(error);
//   }
};


const consultService = {
consultRegister,
};

export default consultService;