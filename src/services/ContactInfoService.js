import http from "../http-common"

const getAll = () =>{
    return http.get("/clients");
};

const get = id =>{
    return http.get(`/client/${id}`);
};

const create = data => {
    return http.post("/client",data);
};

const update = (id, data) =>{
    return http.put(`/client/${id}`, data)
}

const remove = id => {
    return http.delete(`/client/${id}`)
}

const findByFirstNameOrLastNameOrderByLastNameDesc = ContactInfo =>{
    return http.get(`/clients?clientName=${clientInformation}`)
}
export default{
    getAll,
    get,
    create,
    update,
    remove,
    findByFirstNameOrLastNameOrderByLastNameDesc
};