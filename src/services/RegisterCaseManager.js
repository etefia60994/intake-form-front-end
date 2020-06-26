import http from "../http-common"

const registerManager = data=>{
    return http.post("/registerManager",data);
}
export default{
    registerManager
};