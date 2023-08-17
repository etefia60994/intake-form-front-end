import http from "../http-common"

const getAll = () =>{
    return http.get("/resourceCategory");
};

const get = id =>{
    return http.get(`/resourceCategory/${id}`);
};

const create = data => {
    return http.post("/resourceCategory",data);
};

const update = (id, data) =>{
    return http.put(`/resourceCategory/${id}`, data)
}

const remove = id => {
    return http.delete(`/resourceCategory/${id}`)
}

const findByResourceName = resourceName =>{
    return http.get(`/resourceCategory?resourceName=${resourceName}`)
}
export default{
    getAll,
    get,
    create,
    update,
    remove,
    findByResourceName
};