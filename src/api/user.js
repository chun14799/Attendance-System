import axios from './index';

let token = localStorage.getItem("auth-token")
            if(token==null) {
                localStorage.setItem("auth-token","")
                token=""
            }

export const createNewUser = (fullname,job,department,email,phone)=>{
    return axios.post('/users',{
        fullname,
        job,
        department,
        email,
        phone
    }, {headers:{"x-auth-token":token}})
}
export const getListUser=()=>{
    return axios.get("/users", {headers:{"x-auth-token":token}});
}
export const deleteUser=(id)=>{
    return axios.delete(`/users/${id}`, {headers:{"x-auth-token":token}})
}
export const getDetailUser=(id)=>{
    return axios.get(`/users/${id}`, {headers:{"x-auth-token":token}})
}
export const updateUserDetail=(id,fullname,department,job,phone,email)=>{
    return axios.put(`/users/${id}`,{
        fullname,
        job,
        department,
        email,
        phone
    }, {headers:{"x-auth-token":token}})
}
export const loginUser=(email,password)=>{
    return axios.post("/users/login",{
        email:email,
        password:password
    }, {headers:{"x-auth-token":token}})
}