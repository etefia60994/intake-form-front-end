import http from "../http-common"

const getAll = () =>{
    return http.get("/resourceCategories");
};

const get = id =>{
    return http.get(`/resourceCategories/${id}`);
};

const create = data => {
    return http.post("/resourceCategories",data);
};

const update = (id, data) =>{
    return http.put(`/resourceCategories/${id}`, data)
}

const remove = id => {
    return http.delete(`/resourceCategories/${id}`)
}

const findByResourceName = resourceName =>{
    return http.get(`/resourceCategories?resourceName=${resourceName}`)
}
export default{
    getAll,
    get,
    create,
    update,
    remove,
    findByResourceName
};