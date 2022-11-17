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

    const config = requestConfig("PUT", data[0]);

    try {
        const res = await fetch(api + "/usuarios/" + data[1], config)
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
        const res = await fetch(api + "/usuarios?sort=id,asc", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const pacientesFindAll = async () => {
    const config = requestConfig("GET")

    try {
        const res = await fetch(api + "/pacientes", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const medicosFindAll = async () => {
    const config = requestConfig("GET")

    try {
        const res = await fetch(api + "/medicos", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const medicosFindById = async (id) => {
    const config = requestConfig("GET")

    try {
        const res = await fetch(api + "/medicos/" + id, config)
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
        const res = await fetch(api + "/usuarios/" + id, config)
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
    userUpdate,
    pacientesFindAll,
    medicosFindAll,
    medicosFindById
};

export default userService;