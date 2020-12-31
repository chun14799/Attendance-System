import axios from './index';
export const createNewUser = (fullname,job,department,email,phone)=>{
    return axios.post('/users',{
        fullname,
        job,
        department,
        email,
        phone
    })
}
export const getListUser=()=>{
    return axios.get("/users");
}
export const deleteUser=(id)=>{
    return axios.delete(`/users/${id}`)
}
export const getDetailUser=(id)=>{
    return axios.get(`/users/${id}`)
}
export const updateUserDetail=(id,fullname,department,job,phone,email)=>{
    return axios.put(`/users/${id}`,{
        fullname,
        job,
        department,
        email,
        phone
    })
}
export const loginUser=(email,password)=>{
    return axios.post("/users/login",{
        email:email,
        password:password
    })
}