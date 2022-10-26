import { api, requestConfig } from "../utils/config";

const medicalRegister = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/fichas", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
  } catch (error) {
    console.log(error);
  }
};


const medicalService = {
medicalRegister,
};

export default medicalService;