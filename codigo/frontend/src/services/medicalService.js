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

const medicalUpdate = async (data) => {
    const config = requestConfig("PUT", data)

    try {
        const res = await fetch(api + "/fichas", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const medicalDelete = async (id) => {
    const config = requestConfig("DELETE")

    try {
        const res = await fetch(api + "/fichas/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const medicalFindById = async (id) => {

    const config = requestConfig("GET")
    try {
        const res = await fetch(api + "/fichas/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

            return res
    } catch (error) {
        console.log(error)
    }
}

const medicalService = {
    medicalRegister,
    medicalUpdate,
    medicalDelete,
    medicalFindById
};

export default medicalService;